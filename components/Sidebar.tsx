"use client";

import { FolderIcon, StarIcon, TimeIcon } from "./svg";
import { useState } from "react";

const Sidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className={`text-white transition-all duration-300 h-full ${isHovered ? 'w-64' : 'w-20'} hidden md:block`}
      style={{ backgroundColor: '#30cca5' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <nav className="p-4" style={{ color: 'white', fontFamily: 'Inter', fontWeight: 700 }}>
        <ul className="flex flex-col items-center">
          <li>
            <a href="/" className="py-2 text-center flex gap-1">
              <FolderIcon style={{ width: 20 }} />
              {isHovered && <span>Home</span>}
            </a>
          </li>
          <li>
            <a href="/favorites" className="flex py-2 text-center gap-1">
              <StarIcon style={{ width: 20 }} />
              {isHovered && <span>Favorites</span>}
            </a>
          </li>
          <li>
            <a href="/watch-later" className="flex py-2 text-center gap-1">
              <TimeIcon style={{ width: 20 }} />
              {isHovered && <span>Watch Later</span>}
            </a>
          </li>
        </ul>
      </nav>
      {isHovered && (
        <div className="p-4">
          <h3 className="text-lg text-center" style={{ color: '#00003c', fontFamily: 'Inter', fontWeight: 800, background: '#70e5ca', borderRadius: 5 }}>
            Latest Activities
          </h3>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
