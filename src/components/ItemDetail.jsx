import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, User, Phone, Mail, Camera, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ItemDetail = () => {
    const { id } = useParams(); // Get item ID from URL
    const navigate = useNavigate(); // For navigation
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showReportModal, setShowReportModal] = useState(false);

    // Mock data - in a real app, this would come from an API
    const mockItems = {
        '1': {
            id: 1,
            name: "iPhone 13 Pro",
            category: "Lost",
            description: "Black iPhone 13 Pro lost near the university library. Has a cracked screen protector.",
            images: [
                'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
            ],
            location: 'University Library, Main Campus',
            contactName: 'John Doe',
            contactPhone: '+1 (555) 123-4567',
            contactEmail: 'john.doe@email.com',
            dateReported: '2024-06-10',
            dateLost: '2024-06-08',
            reward: '$50',
            status: 'Active'
        },
        '2': {
            id: '2',
            name: 'Blue Backpack',
            category: 'Found',
            description: 'Found a blue backpack with school supplies and notebooks. Found it at the bus station near bench 3. Contains some textbooks and personal items. Looking for the rightful owner.',
            images: [
                'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=400&h=300&fit=crop'
            ],
            location: 'Central Bus Station, Bench 3',
            contactName: 'Jane Smith',
            contactPhone: '+1 (555) 987-6543',
            contactEmail: 'jane.smith@email.com',
            dateReported: '2024-06-12',
            dateFound: '2024-06-11',
            reward: 'No reward expected',
            status: 'Active'
        },
        '3': {
            id: '3',
            name: 'Silver iPhone 14',
            category: 'Lost',
            description: 'Silver iPhone 14 with a clear case. Has a small crack on the bottom right corner. Lost somewhere between the coffee shop and parking lot. Contains important work data and personal photos.',
            images: [
                'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop'
            ],
            location: 'Downtown Coffee Shop Area',
            contactName: 'Mike Johnson',
            contactPhone: '+1 (555) 456-7890',
            contactEmail: 'mike.johnson@email.com',
            dateReported: '2024-06-13',
            dateLost: '2024-06-13',
            reward: '$100',
            status: 'Active'
        }
    };

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            const foundItem = mockItems[id];
            setItem(foundItem);
            setLoading(false);
        }, 1000);
    }, [id]);

    const nextImage = () => {
        if (item && item.images.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
        }
    };

    const prevImage = () => {
        if (item && item.images.length > 1) {
            setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
        }
    };

    const handleReport = () => {
        setShowReportModal(true);
    };

    const submitReport = () => {
        // In a real app, this would submit to an API
        alert(`Thank you! Your report for "${item.name}" has been submitted. The owner will be contacted.`);
        setShowReportModal(false);
    };

    const handleBack = () => {
        navigate(-1); // Go back to previous page
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-300 rounded w-32 mb-6"></div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="h-64 bg-gray-300 rounded-lg mb-6"></div>
                            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!item) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Item Not Found</h2>
                    <p className="text-gray-600 mb-6">The item you're looking for doesn't exist.</p>
                    <button
                        onClick={handleBack}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    const isLost = item.category === 'Lost';
    const colorTheme = isLost ? 'red' : 'green';
    const bgColor = isLost ? 'bg-red-50' : 'bg-green-50';
    const textColor = isLost ? 'text-red-600' : 'text-green-600';
    const buttonColor = isLost ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700';

    return (
        <div className={`min-h-screen ${bgColor} p-6`}>
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={handleBack}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Items</span>
                </button>

                {/* Main Content */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Image Gallery */}
                    <div className="relative h-64 md:h-96 bg-gray-200">
                        {item.images && item.images.length > 0 ? (
                            <>
                                <img
                                    src={item.images[currentImageIndex]}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                                {item.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                            {item.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </>
                        ) : (
                            <div className="flex items-center justify-center h-full">
                                <Camera size={48} className="text-gray-400" />
                            </div>
                        )}
                    </div>

                    <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.name}</h1>
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${textColor} ${bgColor}`}>
                                    {item.category}
                                </span>
                            </div>
                            {item.reward && item.reward !== 'No reward expected' && (
                                <div className="text-right">
                                    <p className="text-sm text-gray-600">Reward</p>
                                    <p className="text-xl font-bold text-green-600">{item.reward}</p>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                            <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Location & Date Info */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Item Details</h3>

                                <div className="flex items-start space-x-3">
                                    <MapPin size={20} className="text-gray-500 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">Location</p>
                                        <p className="text-gray-600">{item.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Calendar size={20} className="text-gray-500 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">Date {isLost ? 'Lost' : 'Found'}</p>
                                        <p className="text-gray-600">{isLost ? item.dateLost : item.dateFound}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Calendar size={20} className="text-gray-500 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">Date Reported</p>
                                        <p className="text-gray-600">{item.dateReported}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>

                                <div className="flex items-start space-x-3">
                                    <User size={20} className="text-gray-500 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">Contact Person</p>
                                        <p className="text-gray-600">{item.contactName}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Phone size={20} className="text-gray-500 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">Phone</p>
                                        <a href={`tel:${item.contactPhone}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                                            {item.contactPhone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Mail size={20} className="text-gray-500 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">Email</p>
                                        <a href={`mailto:${item.contactEmail}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                                            {item.contactEmail}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="border-t pt-6">
                            <button
                                onClick={handleReport}
                                className={`w-full md:w-auto px-8 py-3 ${buttonColor} text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2`}
                            >
                                <ExternalLink size={20} />
                                <span>
                                    {isLost ? 'I Found This Item' : 'This Is My Item'}
                                </span>
                            </button>
                            <p className="text-sm text-gray-600 mt-2">
                                Click to report that you {isLost ? 'found' : 'own'} this item
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Report Modal */}
            {showReportModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Report {isLost ? 'Found' : 'Ownership'}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {isLost
                                ? 'Are you sure you found this item? We will contact the owner with your information.'
                                : 'Are you sure this is your item? We will contact the finder with your information.'
                            }
                        </p>
                        <div className="flex space-x-3">
                            <button
                                onClick={submitReport}
                                className={`flex-1 px-4 py-2 ${buttonColor} text-white rounded-lg transition-colors`}
                            >
                                Yes, Report
                            </button>
                            <button
                                onClick={() => setShowReportModal(false)}
                                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemDetail;