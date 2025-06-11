import React from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar - Fixed at top */}
      <Navbar />
      
      {/* Main Content Area */}
      <div className="flex">
        {/* Sidebar - Fixed on left */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-20 lg:mr-20 pt-20 min-h-screen transition-all duration-300">
          <div className="p-6">
            {/* This is where your page content will go */}
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Welcome to Lost & Found Portal
              </h1>
              
              {/* Placeholder content - replace with your actual components */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-3 text-blue-600">Lost Items</h2>
                  <p className="text-gray-600">Browse through items that people have lost</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-3 text-green-600">Found Items</h2>
                  <p className="text-gray-600">Check if someone found your lost item</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-3 text-purple-600">Report Item</h2>
                  <p className="text-gray-600">Report a lost or found item</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;