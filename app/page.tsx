'use client';
import Filters from "@/components/Filters";
import { Movies } from "@/components/Movies";
import { PaginationButton } from "@/components/PaginationButtons";
import { useEffect, useState, useCallback } from "react";

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

export default function Page() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const moviesPerPage = 6;

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/titles');
      if (!response.ok) {
        throw new Error(`Error while fetching all Movies: ${response.status}`);
      }
      const movieData = await response.json();

      if (movieData.title) {
        setMovies(movieData.title);
        setFilteredMovies(movieData.title);
        setTotalPages(Math.ceil(movieData.title.length / moviesPerPage));
      } else {
        console.log('No movies found');
        setMovies([]);
        setFilteredMovies([]);
      }
    } catch (error) {
      console.error('Error while fetching the Movies: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleFilterChange = useCallback((filters: { search: string, minDate: string, maxDate: string, genres: string[] }) => {
    const { search, minDate, maxDate, genres } = filters;

    const filtered = movies.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
      const matchesMinDate = minDate ? movie.released >= parseInt(minDate, 10) : true;
      const matchesMaxDate = maxDate ? movie.released <= parseInt(maxDate, 10) : true;
      const matchesGenres = genres.length > 0 ? genres.includes(movie.genre) : true;

      return matchesSearch && matchesMinDate && matchesMaxDate && matchesGenres;
    });

    setFilteredMovies(filtered);
    setTotalPages(Math.ceil(filtered.length / moviesPerPage));
    setCurrentPage(1);
  }, [movies, moviesPerPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const toggleFavorite = async (movieId: string) => {
    try {
      const movie = movies.find((movie) => movie.id === movieId);
      if (!movie) return;
  
      const response = await fetch(`/api/favorites/${movieId}`, {
        method: movie.favorited ? 'DELETE' : 'POST',
      });
  
      if (!response.ok) {
        throw new Error(`Failed to toggle favorite: ${response.status}`);
      }
  
      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === movieId ? { ...movie, favorited: !movie.favorited } : movie
        )
      );
  
      setFilteredMovies((prevFilteredMovies) =>
        prevFilteredMovies.map((movie) =>
          movie.id === movieId ? { ...movie, favorited: !movie.favorited } : movie
        )
      );
    } catch (error) {
      console.error('Error while toggling favorite:', error);
    }
  };

  const toggleWatchLater = async (movieId: string) => {
    try {
      const movie = movies.find((movie) => movie.id === movieId);
      if (!movie) return;
  
      const response = await fetch(`/api/watch-later/${movieId}`, {
        method: movie.watchLater ? 'DELETE' : 'POST',
      });
  
      if (!response.ok) {
        throw new Error(`Failed to toggle watch later: ${response.status}`);
      }
  
      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === movieId ? { ...movie, watchLater: !movie.watchLater } : movie
        )
      );
  
      setFilteredMovies((prevFilteredMovies) =>
        prevFilteredMovies.map((movie) =>
          movie.id === movieId ? { ...movie, watchLater: !movie.watchLater } : movie
        )
      );
    } catch (error) {
      console.error('Error while toggling watch later:', error);
    }
  };

  return (
    <div className="flex h-full w-full text-white" style={{ backgroundColor: '#00003c' }}>
      <div className="flex-col w-full">
        <Filters filterChange={handleFilterChange} />
        <Movies movies={filteredMovies.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage)} toggleFavorite={toggleFavorite} toggleWatchLater={toggleWatchLater}/>
        {!loading && filteredMovies.length > 0 && (
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
