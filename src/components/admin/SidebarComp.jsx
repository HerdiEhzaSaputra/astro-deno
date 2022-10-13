import React, { useState } from 'react';
import Sidebar from './Sidebar';

function SidebarComp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
  );
}

export default SidebarComp;