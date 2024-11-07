'use client';
import React, { useEffect, useState } from 'react'
import { Movies } from '../../components/Movies';

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

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('/api/favorites');
        const data = await response.json();
        setFavorites(data.favorites);
      } catch (error) {
        console.error('Failed to fetch favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

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
        <Movies movies={favorites || []} toggleFavorite={handleToggleFavorite} />
      </div>
    </div>
  )
}

export default page
