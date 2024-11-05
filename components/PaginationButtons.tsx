import React from 'react';

interface PaginationButtonProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-4 mb-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 disabled:opacity-50 w-24 rounded-l-full cursor-pointer disabled:cursor-not-allowed"
        style={{ color: '#000061', backgroundColor: '#1DD2AF' }}
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 disabled:opacity-50 w-24 rounded-r-full cursor-pointer disabled:cursor-not-allowed"
        style={{ color: '#000061', backgroundColor: '#1DD2AF' }}
      >
        Next
      </button>
    </div>
  );
};

