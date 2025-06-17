import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Welcome to Lost & Found Portal
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Help reunite lost items with their owners. Browse found items or report something you've lost or found.
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">24</div>
                        <div className="text-gray-600">Lost Items</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">18</div>
                        <div className="text-gray-600">Found Items</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                        <div className="text-gray-600">Reunited</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
                        <div className="text-gray-600">Total Users</div>
                    </div>
                </div>

                {/* Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <Link to="/lost-items" className="block">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
                            <div className="flex items-center mb-4">
                                <div className="bg-red-100 p-3 rounded-full mr-4">
                                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold text-red-600">Lost Items</h2>
                            </div>
                            <p className="text-gray-600 mb-4">Browse through items that people have lost and help them find their belongings.</p>
                            <div className="text-red-600 font-medium">View Lost Items →</div>
                        </div>
                    </Link>

                    <Link to="/found-items" className="block">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                            <div className="flex items-center mb-4">
                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold text-green-600">Found Items</h2>
                            </div>
                            <p className="text-gray-600 mb-4">Check if someone found your lost item or browse items waiting to be claimed.</p>
                            <div className="text-green-600 font-medium">View Found Items →</div>
                        </div>
                    </Link>

                    <Link to="/add-item" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-purple-600">Report Item</h2>
                        </div>
                        <p className="text-gray-600 mb-4">Report a lost or found item to help others in the community.</p>
                        <div className="text-purple-600 font-medium">Report Item →</div>
                    </Link>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h3>
                    <div className="space-y-4">
                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                            <div className="bg-red-100 p-2 rounded-full mr-4">
                                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">iPhone 13 Pro reported lost</p>
                                <p className="text-sm text-gray-600">University Library • 2 hours ago</p>
                            </div>
                        </div>

                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                            <div className="bg-green-100 p-2 rounded-full mr-4">
                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Blue backpack found</p>
                                <p className="text-sm text-gray-600">Campus Cafeteria • 5 hours ago</p>
                            </div>
                        </div>

                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                            <div className="bg-blue-100 p-2 rounded-full mr-4">
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Wallet reunited with owner</p>
                                <p className="text-sm text-gray-600">Student Center • 1 day ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;