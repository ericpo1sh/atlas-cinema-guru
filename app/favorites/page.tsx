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

const page = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const moviesPerPage = 6;

  const fetchFavorites = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/favorites?page=${page}`);
      const data = await response.json();
      
      if (response.ok) {
        const totalFavorites = data.favorites.length
        console.log(totalFavorites);
        setFavorites(data.favorites);
        setTotalPages(Math.ceil(totalFavorites / moviesPerPage));
      } else {
        console.error('Failed to fetch favorites:', data.error);
        setFavorites([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error('Failed to fetch favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleToggleFavorite = (movieId: string) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  if (loading) return <p className="text-center mt-5">Loading favorites...</p>;

  return (
    <div className="flex h-full w-full text-white flex-col" style={{ backgroundColor: '#00003c' }}>
      <div className='flex justify-center items-center '>
        <h1 className='font-bold text-6xl text-center mt-10'>Favorites</h1>
      </div>
      <div className="flex-col w-full">
        <Movies movies={favorites} toggleFavorite={handleToggleFavorite} />
        {favorites.length > 0 && (
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

export default page;
