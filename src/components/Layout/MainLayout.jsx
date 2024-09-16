import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'

export const MainLayout = () => {
  return (
      <div>
          <header>
              <Navbar />
          </header>
          <main>
              <Outlet />
          </main>
          <Footer />
      </div>
  );
}
