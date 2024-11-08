'use client';
import React, { useEffect, useState } from 'react';
import { Movies } from '../../components/Movies';
import { PaginationButton } from '../../components/PaginationButtons';

interface Movie {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string;
  image: string;
  favorited?: boolean;
  watchLater?: boolean;
}

const WatchLaterPage = () => {
  const [watchLater, setWatchLater] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const moviesPerPage = 6;

  const fetchWatchLater = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/watch-later?page=${page}`);
      const data = await response.json();

      if (response.ok) {
        const totalWatchLater = data.watchLater.length
        setWatchLater(data.watchLater);
        setTotalPages(Math.ceil(totalWatchLater / moviesPerPage));
      } else {
        console.error('Failed to fetch Watch Later:', data.error);
        setWatchLater([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error('Failed to fetch Watch Later:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleWatchLater = async (movieId: string) => {
    try {
      const movie = watchLater.find((movie) => movie.id === movieId);
      if (!movie) return;

      const response = await fetch(`/api/watch-later/${movieId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to toggle Watch Later: ${response.status}`);
      }

      setWatchLater((prev) => prev.filter((m) => m.id !== movieId));
    } catch (error) {
      console.error('Error while toggling Watch Later:', error);
    }
  };

  useEffect(() => {
    fetchWatchLater(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="flex h-full w-full text-white flex-col" style={{ backgroundColor: '#00003c' }}>
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-6xl text-center mt-10'>Watch Later</h1>
      </div>
      <div className="flex-col w-full">
        <Movies movies={watchLater} toggleWatchLater={handleToggleWatchLater} />
        {watchLater.length > 0 && (
          <PaginationButton
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default WatchLaterPage;
