import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
// import LostItems from './components/LostItems';
// import FoundItems from './components/FoundItems';
import Home from './components/Home';
import FoundItems from './components/FoundItems';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Navbar - Fixed at top */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex">
        {/* Sidebar - Fixed on left */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 lg:ml-20 lg:mr-20 pt-5 min-h-screen transition-all duration-300">
          {/* ItemList Component - Day 3 */}
          <ItemList />
        </main>
      </div>
    </div>

    </>
  );
}

export default App;