import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Mock data for demonstration
    const mockItems = [
        {
            id: 1,
            name: "iPhone 13 Pro",
            category: "Lost",
            description: "Black iPhone 13 Pro lost near the university library. Has a cracked screen protector.",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
            timestamp: "2 hours ago",
            location: "University Library"
        },
        {
            id: 2,
            name: "Blue Backpack",
            category: "Found",
            description: "Found a blue Nike backpack with some textbooks inside. Contact to claim.",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
            timestamp: "5 hours ago",
            location: "Campus Cafeteria"
        },
        {
            id: 3,
            name: "Car Keys",
            category: "Lost",
            description: "Lost Honda car keys with a red keychain. Last seen in the parking lot.",
            image: "https://images.unsplash.com/photo-1576153645383-e03c25dafed5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            timestamp: "1 day ago",
            location: "Main Parking Lot"
        },
        {
            id: 4,
            name: "Silver Watch",
            category: "Found",
            description: "Found a silver watch near the gym entrance. Appears to be a Casio brand.",
            image: "https://images.unsplash.com/photo-1657235895095-e043ce2ebf41?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            timestamp: "2 days ago",
            location: "Gym Entrance"
        },
        {
            id: 5,
            name: "Black Wallet",
            category: "Lost",
            description: "Lost my black leather wallet containing ID and credit cards. Reward offered.",
            image: "https://plus.unsplash.com/premium_photo-1678823283114-0cff3d5028a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            timestamp: "3 days ago",
            location: "Student Center"
        },
        {
            id: 6,
            name: "Textbook Set",
            category: "Found",
            description: "Found a set of engineering textbooks left on a bench. Contact to claim.",
            image: "https://images.unsplash.com/photo-1585521551675-e6e4e4d441f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            timestamp: "4 days ago",
            location: "Engineering Building"
        }
    ];

    // Simulate loading data
    useEffect(() => {
        const timer = setTimeout(() => {
            setItems(mockItems);
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const LoadingSkeleton = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                    <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded mb-2 w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded mb-4 w-1/2"></div>
                    <div className="flex justify-between items-center">
                        <div className="h-6 bg-gray-300 rounded w-16"></div>
                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>
                </div>
            ))}
        </div>
    );

    const ItemCard = ({ item }) => (
        <Link to={`/item/${item.id}`}  className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
            <div className="relative">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                />
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${item.category === 'Lost'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-green-100 text-green-800'
                    }`}>
                    {item.category}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
                    {item.name}
                </h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                </p>

                <div className="flex items-center text-xs text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {item.location}
                </div>

                <div className="flex justify-between items-center">
                    <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${item.category === 'Lost'
                        ? 'bg-red-50 text-red-700 hover:bg-red-100'
                        : 'bg-green-50 text-green-700 hover:bg-green-100'
                        }`}>
                        {item.category === 'Lost' ? 'I Found This' : 'This is Mine'}
                    </button>

                    <span className="text-xs text-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {item.timestamp}
                    </span>
                </div>
            </div>
        </Link>

    );

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Lost & Found Items
                    </h1>
                    <p className="text-gray-600">
                        Browse through items that have been lost or found. Click on any item to view more details.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                        <div className="text-2xl font-bold text-red-600 mb-1">
                            {items.filter(item => item.category === 'Lost').length}
                        </div>
                        <div className="text-gray-600 text-sm">Lost Items</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                            {items.filter(item => item.category === 'Found').length}
                        </div>
                        <div className="text-gray-600 text-sm">Found Items</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                            {items.length}
                        </div>
                        <div className="text-gray-600 text-sm">Total Items</div>
                    </div>
                </div>

                {/* Content */}
                {loading ? (
                    <LoadingSkeleton />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item) => (
                            <ItemCard key={item.id} item={item} />
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && items.length === 0 && (
                    <div className="text-center py-12">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No items found</h3>
                        <p className="mt-1 text-sm text-gray-500">Get started by adding a lost or found item.</p>
                    </div>
                )}

                {/* Load More Button */}
                {!loading && items.length > 0 && (
                    <div className="text-center mt-12">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                            Load More Items
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemList;