import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
import LostItems from './components/LostItems';
import FoundItems from './components/FoundItems';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import './App.css';

function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <div className="flex">
          {/* Sidebar - Fixed on left */}
          <Sidebar />
          
          {/* Main Content */}
          <main className="flex-1 lg:ml-20 lg:mr-20 pt-20 min-h-screen transition-all duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lost-items" element={<LostItems />} />
              <Route path="/found-items" element={<FoundItems />} />
              <Route path="/all-items" element={<ItemList />} />
              <Route path="/about" element={<div className="p-8"><h1 className="text-3xl font-bold">About Page</h1><p className="mt-4 text-gray-600">About page content will go here.</p></div>} />
              <Route path="/contact" element={<div className="p-8"><h1 className="text-3xl font-bold">Contact Page</h1><p className="mt-4 text-gray-600">Contact page content will go here.</p></div>} />
              <Route path="/item/:id" element={<ItemDetail />} />
            </Routes>
          </main>
        </div>
      </div>
  );
}

export default App;