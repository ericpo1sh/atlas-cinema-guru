import React from 'react';

export const FilmIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect x="48" y="96" width="416" height="320" rx="28" ry="28" fill="none" stroke="#00003c" strokeLinejoin="round" strokeWidth="32" />
    <rect x="384" y="336" width="80" height="80" rx="28" ry="28" fill="none" stroke="#00003c" strokeLinejoin="round" strokeWidth="32" />
    <rect x="384" y="256" width="80" height="80" rx="28" ry="28" fill="none" stroke="#00003c" strokeLinejoin="round" strokeWidth="32" />
    <rect x="384" y="176" width="80" height="80" rx="28" ry="28" fill="none" stroke="#00003c" strokeLinejoin="round" strokeWidth="32" />
    <rect x="384" y="96" width="80" height="80" rx="28" ry="28" fill="none" stroke="#00003c" strokeLinejoin="round" strokeWidth="32" />
    <rect x="48" y="336" width="80" height="80" rx="28" ry="28" fill="none" stroke="#00003c" strokeLinejoin="round" strokeWidth="32" />
    <rect x="48" y="256" width="80" height="80" rx="28" ry="28" fill="none" stroke="#00003c" strokeLinejoin="round" strokeWidth="32" />
    <rect x="48" y="176" width="80" height="80" rx="28" ry="28" fill="none" stroke="#00003c" strokeLinejoin="round" strokeWidth="32" />
    <rect x="48" y="96" width="80" height="80" rx="28" ry="28" fill="none" stroke="#00003c" strokeLinejoin="round" strokeWidth="32" />
    <rect x="128" y="96" width="256" height="160" rx="28" ry="28" fill="none" stroke="#00003c" strokeLinejoin="round" strokeWidth="32" />
    <rect x="128" y="256" width="256" height="160" rx="28" ry="28" fill="none" stroke="#00003c" strokeLinejoin="round" strokeWidth="32" />
  </svg>
);

export const LogoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
      fill="none"
      stroke="#00003c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);


export const FolderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  className="ionicon"
  viewBox="0 0 512 512"
  {...props}
>
  <path
    d="M496 152a56 56 0 00-56-56H220.11a23.89 23.89 0 01-13.31-4L179 73.41A55.77 55.77 0 00147.89 64H72a56 56 0 00-56 56v48a8 8 0 008 8h464a8 8 0 008-8zM16 392a56 56 0 0056 56h368a56 56 0 0056-56V216a8 8 0 00-8-8H24a8 8 0 00-8 8z"
    fill="white"
  />
</svg>
);

export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"
      fill="white"
    />
  </svg>
);

export const TimeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 01-16-16V128a16 16 0 0132 0v128h80a16 16 0 010 32z"
      fill="white"
    />
  </svg>
);
