import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
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