'use client'

import {useState} from 'react';
import SideBarContainer from '@/src/components/sidebar-container';

export default function NavBarMenuLink() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="flex items-center gap-2 font-bold hover:opacity-80"
      >
        All
      </button>
      
      <SideBarContainer isSidebarOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}