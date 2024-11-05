"use client";
import { useState, useEffect } from 'react';

interface FiltersProps {
  filterChange: (filters: {
    search: string;
    minDate: string;
    maxDate: string;
    genres: string[];
  }) => void;
}

const Filters: React.FC<FiltersProps> = ({ filterChange }) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [allGenres, setAllGenres] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch('/api/genres');
        const data = await response.json();
        setAllGenres(data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  // Call `filterChange` whenever the filter state changes
  useEffect(() => {
    filterChange({ search, minDate, maxDate, genres: selectedGenres });
  }, [search, minDate, maxDate, selectedGenres]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genre)
        ? prevSelected.filter((g) => g !== genre)
        : [...prevSelected, genre]
    );
  };

  return (
    <div className='flex justify-between m-9 flex-row'>
      {/* Input for searching movies */}
      <div className='flex-col flex gap-2'>
        <p>Search</p>
        <input
          className='w-full rounded-full mt-1 p-1 pl-3 placeholder-padding'
          type="text"
          placeholder='Search Movies...'
          style={{ backgroundColor: '#000061', outline: 'solid #1DD2AF 2px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className='flex-row flex gap-2 mt-1'>
          <div className='flex-col'>
            <p>Min Year</p>
            <input
              className='rounded-full mt-2 p-1 pl-3'
              type="text"
              placeholder='1990'
              style={{ backgroundColor: '#000061', outline: 'solid #1DD2AF 2px' }}
              value={minDate}
              onChange={(e) => setMinDate(e.target.value)}
            />
          </div>
          <div className='flex-col'>
            <p>Max Year</p>
            <input
              className='rounded-full mt-2 p-1 pl-3'
              type="text"
              placeholder='2024'
              style={{ backgroundColor: '#000061', outline: 'solid #1DD2AF 2px' }}
              value={maxDate}
              onChange={(e) => setMaxDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* Section for filtering Genres */}
      <div className='flex-col gap-2'>
        <p>Genres</p>
        <div className='grid grid-cols-5 gap-4 mt-3'>
          {allGenres.map((genre) => (
            <div
              key={genre}
              onClick={() => toggleGenre(genre)}
              style={{
                outline: 'solid #1DD2AF 2px',
                backgroundColor: selectedGenres.includes(genre) ? '#1DD2AF' : 'transparent',
                color: selectedGenres.includes(genre) ? '#000061' : 'white',
              }}
              className='cursor-pointer rounded-full px-3 py-2 text-center'>
              {genre}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
