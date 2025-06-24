import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, LogIn, UserCircle } from 'lucide-react';

const Navbar = ({ onLogout }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Search className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-800">
                                Lost<span className="text-blue-600">&</span>Found
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/about', label: 'About' },
                                { path: '/all-items', label: 'All Items' },
                                { path: '/lost-items', label: 'Lost Items', color: 'red' },
                                { path: '/found-items', label: 'Found Items', color: 'green' },
                                { path: '/contact', label: 'Contact' },
                            ].map(({ path, label, color }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium relative group transition-all duration-300 ease-in-out ${
                                        isActive(path)
                                            ? `bg-${color || 'blue'}-100 text-${color || 'blue'}-700`
                                            : `text-gray-700 hover:text-${color || 'blue'}-600 hover:bg-${color || 'blue'}-50`
                                    }`}
                                >
                                    {label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* User Dropdown (Desktop) */}
                    <div className="hidden md:block">
                        <div className="relative">
                            <button
                                onClick={toggleUserDropdown}
                                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 bg-gray-50 hover:bg-blue-50 px-4 py-2 rounded-lg"
                            >
                                <UserCircle className="w-5 h-5 mr-2" />
                                <span className="text-sm font-medium">Account</span>
                            </button>

                            {isUserDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <button
                                        onClick={onLogout}
                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        <LogIn className="w-4 h-4 mr-3" />
                                        Logout
                                    </button>
                                    <Link
                                        to="/profile"
                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        <User className="w-4 h-4 mr-3" />
                                        Profile
                                    </Link>
                                    <hr className="my-2 border-gray-200" />
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        Settings
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden animate-in slide-in-from-top duration-300">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/about', label: 'About' },
                                { path: '/lost-items', label: 'Lost Items', color: 'red' },
                                { path: '/found-items', label: 'Found Items', color: 'green' },
                                { path: '/contact', label: 'Contact' },
                            ].map(({ path, label, color }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                                        isActive(path)
                                            ? `bg-${color || 'blue'}-100 text-${color || 'blue'}-700`
                                            : `text-gray-700 hover:bg-${color || 'blue'}-50 hover:text-${color || 'blue'}-700`
                                    }`}
                                >
                                    {label}
                                </Link>
                            ))}

                            {/* Mobile User Actions */}
                            <div className="border-t border-gray-200 pt-3 mt-3">
                                <button
                                    onClick={onLogout}
                                    className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                                >
                                    <LogIn className="w-5 h-5 mr-3" />
                                    Logout
                                </button>
                                <Link
                                    to="/profile"
                                    className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                                >
                                    <User className="w-5 h-5 mr-3" />
                                    Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
