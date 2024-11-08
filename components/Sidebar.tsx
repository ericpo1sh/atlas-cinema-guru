"use client";

import { FolderIcon, StarIcon, TimeIcon } from "./svg";
import { useEffect, useState } from "react";

interface Activity {
  id: string;
  timestamp: string;
  activity: "FAVORITED" | "WATCH_LATER";
  title: string;
}

const Sidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(`/api/activities`);
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        setActivities(data.activities);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

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
          <div className="text-lg text-center p-3" style={{ background: '#70e5ca', borderRadius: 5 }}>
            <h3 className="mb-4" style={{ color: '#00003c', fontFamily: 'Inter', fontWeight: 800 }} >Latest Activities</h3>
            {activities.length > 0 ? (
            <ul>
              {activities.map((activity) => (
                <li key={activity.id} className="mb-4" style={{ color: '#00003c', fontFamily: 'Inter'}}>
                {new Date(activity.timestamp).toLocaleDateString('en-US')} {new Date(activity.timestamp).toLocaleTimeString('en-US')} - {activity.activity === "FAVORITED" ? "Favorited" : "Added to Watch Later"} <span className='font-bold'>{activity.title}</span>
                </li>
              ))}
            </ul>
            ) : (
            <p className="text-blue">No recent activities</p>
            )}
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
