"use client";

import { FolderIcon, StarIcon, TimeIcon } from "./svg";

const Sidebar: React.FC = () => {
  return (
    <aside className="text-white w-64 hidden md:block hover:block transition-all duration-300 h-full" style={{ backgroundColor: '#30cca5' }}>
      <nav className="p-4" style={{ color: 'white', fontFamily: 'Inter', fontWeight: 700 }}>
        <ul className="flex flex-col items-center">
          <li>
            <a href="/" className="py-2 text-center flex gap-1">
              <FolderIcon style={{ width: 20 }}/>
              Home
            </a>
          </li>
          <li>
            <a href="/favorites" className="flex py-2 text-center gap-1">
              <StarIcon style={{ width: 20 }}/>
              Favorites
            </a>
          </li>
          <li>
            <a href="/watch-later" className="flex py-2 text-center gap-1">
              <TimeIcon style={{ width: 20 }}/>
              Watch Later
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <h3 className="text-lg text-center" style={{ color: '#00003c', fontFamily: 'Inter', fontWeight: 800, background: '#70e5ca', borderRadius: 5 }}>Latest Activities</h3>
        
      </div>
    </aside>
  );
};

export default Sidebar;
