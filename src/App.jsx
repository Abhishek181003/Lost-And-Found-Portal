import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
// import LostItems from './components/LostItems';
// import FoundItems from './components/FoundItems';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar - Fixed at top */}
        <Navbar />
        
        {/* Main Content Area */}
        <div className="flex">
          {/* Sidebar - Fixed on left */}
          <Sidebar />
          
          {/* Main Content */}
          <main className="flex-1 lg:ml-20 lg:mr-20 pt-20 min-h-screen transition-all duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-items" element={<ItemList />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;