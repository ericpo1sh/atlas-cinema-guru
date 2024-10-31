"use client";

import { useSession, signOut } from "next-auth/react";
import { FilmIcon, LogoutIcon } from "./svg";

const Header: React.FC = () => {
  const { data: session } = useSession();

  return (
    <header className="text-white p-4 flex justify-between items-center" style={{backgroundColor: '#70e5ca', fontFamily: 'Inter'}}>
      <div className='flex row'>
        <FilmIcon style={{ width: 26 }}></FilmIcon>
        <h1 className="text-xl ml-2" style={{color: '#00003c', fontWeight: 700}}>Cinema Guru</h1>
      </div>
      <div className="flex items-center">
        <h2 className="text-l mr-4" style={{color: '#00003c', fontWeight: 500}}>Welcome, {session?.user?.email || "Guest"}!</h2>        
        <button
          style={{color: '#00003c', fontWeight: 500}}
          onClick={() => signOut({ callbackUrl: '/' })}
          className="text-white px-1 flex gap-1"
        ><LogoutIcon style={{ width: 20 }}/>
        Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
