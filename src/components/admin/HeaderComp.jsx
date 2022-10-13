import React, { useState } from 'react';
import Header from './Header';

function HeaderComp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
  );
}

export default HeaderComp;