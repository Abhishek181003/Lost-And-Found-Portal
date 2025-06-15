import React, { useState, useEffect } from 'react';

const FoundItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Mock data for found items only
    const mockFoundItems = [
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
            id: 4,
            name: "Silver Watch",
            category: "Found",
            description: "Found a silver watch near the gym entrance. Appears to be a Casio brand.",
            image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop",
            timestamp: "2 days ago",
            location: "Gym Entrance"
        },
        {
            id: 6,
            name: "Textbook Set",
            category: "Found",
            description: "Found a set of engineering textbooks left on a bench. Contact to claim.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
            timestamp: "4 days ago",
            location: "Engineering Building"
        },
        {
            id: 8,
            name: "Red Umbrella",
            category: "Found",
            description: "Found a red umbrella at the bus stop. Still in good condition.",
            image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&h=200&fit=crop",
            timestamp: "1 week ago",
            location: "Bus Stop"
        }
    ];

    // Simulate loading data
    useEffect(() => {
        const timer = setTimeout(() => {
            setItems(mockFoundItems);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const LoadingSkeleton = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(4)].map((_, index) => (
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
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
            <div className="relative">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
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
                    <button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-green-50 text-green-700 hover:bg-green-100">
                        This is Mine
                    </button>

                    <span className="text-xs text-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {item.timestamp}
                    </span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Found Items
                    </h1>
                    <p className="text-gray-600">
                        Browse through items that people have found. Is one of these yours? Click "This is Mine" to claim it.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                            {items.length}
                        </div>
                        <div className="text-gray-600 text-sm">Found Items</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                            {items.filter(item => item.timestamp.includes('hour')).length}
                        </div>
                        <div className="text-gray-600 text-sm">Recent (Today)</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">
                            {items.filter(item => item.location.includes('Campus')).length}
                        </div>
                        <div className="text-gray-600 text-sm">On Campus</div>
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
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No found items</h3>
                        <p className="mt-1 text-sm text-gray-500">Check back later or report a found item.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FoundItems;