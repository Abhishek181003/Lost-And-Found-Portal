import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
import LostItems from './components/LostItems';
import FoundItems from './components/FoundItems';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import AddItemForm from './components/AddItemForm';
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Contact  from './components/Contact';

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
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/item/:id" element={<ItemDetail />} />
              <Route path="/add-item" element={<AddItemForm />} />
            </Routes>
          </main>
        </div>

        <Footer/>
      </div>
  );
}

export default App;