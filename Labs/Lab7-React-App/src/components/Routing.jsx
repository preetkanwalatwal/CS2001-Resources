import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
        <h1>App Header</h1>
      </header>
      <nav>
        <p>Menu</p>
      </nav>
      <aside>
        <p>Sidebar</p>
      </aside>
      <main>
        <Outlet /> {/* This renders the current route's component */}
      </main>
    </div>
  );
}

export default Layout;
