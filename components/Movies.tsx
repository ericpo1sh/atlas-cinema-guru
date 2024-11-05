import React from 'react';

import { StarOutlineIcon, TimeOutlineIcon, StarIcon, TimeIcon } from "./svg";

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

interface MoviesProps {
  movies: Movie[];
  toggleFavorite?: (movieId: string) => void;
  toggleWatchLater?: (movieId: string) => void;
}

export const Movies: React.FC<MoviesProps> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p className="text-center mt-5">No movies found matching the filters.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="rounded-lg relative group"
          style={{ border: 'solid #1DD2AF 3px' }}
        >
          <img
            src={movie.image}
            alt={movie.title}
            className="w-auto h-auto object-cover rounded-md"
          />          
          <div className="absolute top-3 right-3 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <StarOutlineIcon className="w-8 h-8 text-white cursor-pointer" />
            <TimeOutlineIcon className="w-8 h-8 text-white cursor-pointer" />
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-2/6 bg-opacity-90 flex flex-col justify-evenly p-3 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity z-10 text-left"
            style={{ backgroundColor: '#000061' }}
          >
            <h3 className="text-3xl font-semibold text-white">
              {movie.title} ({movie.released})
            </h3>
            <p className="text-md mt-2 text-white">{movie.synopsis}</p>
            <p
              className="text-lg text-white font-semibold w-20 rounded-full p-2 text-center mt-2"
              style={{ backgroundColor: '#1DD2AF' }}
            >
              {movie.genre}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
