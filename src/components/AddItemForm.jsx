import React, { useState } from 'react';
import { Upload, MapPin, Tag, FileText, User, Phone, Mail, Calendar, AlertCircle, Check } from 'lucide-react';

const AddItemForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: 'lost', // 'lost' or 'found'
        location: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        dateLostFound: '',
        itemType: '',
        images: []
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    const itemTypes = [
        'Electronics', 'Clothing', 'Accessories', 'Documents',
        'Keys', 'Books', 'Sports Equipment', 'Jewelry', 'Bags', 'Other'
    ];

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Item name is required';
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        } else if (formData.description.length < 10) {
            newErrors.description = 'Description must be at least 10 characters';
        }

        if (!formData.location.trim()) {
            newErrors.location = 'Location is required';
        }

        if (!formData.contactName.trim()) {
            newErrors.contactName = 'Contact name is required';
        }

        if (!formData.contactPhone.trim()) {
            newErrors.contactPhone = 'Phone number is required';
        } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.contactPhone)) {
            newErrors.contactPhone = 'Please enter a valid phone number';
        }

        if (!formData.contactEmail.trim()) {
            newErrors.contactEmail = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
            newErrors.contactEmail = 'Please enter a valid email address';
        }

        if (!formData.dateLostFound) {
            newErrors.dateLostFound = 'Date is required';
        }

        if (!formData.itemType) {
            newErrors.itemType = 'Item type is required';
        }

        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleImageUpload = (files) => {
        const fileArray = Array.from(files);
        const validFiles = fileArray.filter(file =>
            file.type.startsWith('image/') && file.size <= 5000000 // 5MB limit
        );

        if (validFiles.length + formData.images.length > 5) {
            setErrors(prev => ({
                ...prev,
                images: 'Maximum 5 images allowed'
            }));
            return;
        }

        const newImages = validFiles.map(file => ({
            file,
            url: URL.createObjectURL(file),
            id: Date.now() + Math.random()
        }));

        setFormData(prev => ({
            ...prev,
            images: [...prev.images, ...newImages]
        }));

        setErrors(prev => ({
            ...prev,
            images: ''
        }));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        handleImageUpload(e.dataTransfer.files);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const removeImage = (imageId) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter(img => img.id !== imageId)
        }));
    };

    const handleSubmit = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        const newErrors = validateForm();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);

            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);

                // Reset form after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        name: '',
                        description: '',
                        category: 'lost',
                        location: '',
                        contactName: '',
                        contactPhone: '',
                        contactEmail: '',
                        dateLostFound: '',
                        itemType: '',
                        images: []
                    });
                }, 3000);
            }, 2000);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Success!</h2>
                    <p className="text-gray-600 mb-4">
                        Your {formData.category} item has been submitted successfully.
                        We'll notify you if there are any updates.
                    </p>
                    <div className="w-full bg-green-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Redirecting...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Add Item</h1>
                    <p className="text-gray-600">Report a lost or found item to help reunite it with its owner</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Category Selection */}
                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Item Status *
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className={`
                relative cursor-pointer rounded-xl border-2 p-4 transition-all duration-200
                ${formData.category === 'lost'
                                    ? 'border-red-500 bg-red-50 text-red-700'
                                    : 'border-gray-200 hover:border-gray-300'}
            `}>
                                <input
                                    type="radio"
                                    name="category"
                                    value="lost"
                                    checked={formData.category === 'lost'}
                                    onChange={handleInputChange}
                                    className="sr-only"
                                />
                                <div className="text-center">
                                    <div className="text-2xl mb-2">😞</div>
                                    <div className="font-semibold">Lost Item</div>
                                    <div className="text-sm opacity-75">I lost something</div>
                                </div>
                            </label>

                            <label className={`
                relative cursor-pointer rounded-xl border-2 p-4 transition-all duration-200
                ${formData.category === 'found'
                                    ? 'border-green-500 bg-green-50 text-green-700'
                                    : 'border-gray-200 hover:border-gray-300'}
            `}>
                                <input
                                    type="radio"
                                    name="category"
                                    value="found"
                                    checked={formData.category === 'found'}
                                    onChange={handleInputChange}
                                    className="sr-only"
                                />
                                <div className="text-center">
                                    <div className="text-2xl mb-2">😊</div>
                                    <div className="font-semibold">Found Item</div>
                                    <div className="text-sm opacity-75">I found something</div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Item Details */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Item Details</h3>

                            {/* Item Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FileText className="inline w-4 h-4 mr-1" />
                                    Item Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="e.g., iPhone 14 Pro, Blue Backpack, Car Keys"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Item Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Tag className="inline w-4 h-4 mr-1" />
                                    Item Type *
                                </label>
                                <select
                                    name="itemType"
                                    value={formData.itemType}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.itemType ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                >
                                    <option value="">Select item type</option>
                                    {itemTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                {errors.itemType && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.itemType}
                                    </p>
                                )}
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description *
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.description ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Provide detailed description including color, size, brand, distinguishing features..."
                                />
                                <div className="flex justify-between items-center mt-1">
                                    {errors.description ? (
                                        <p className="text-sm text-red-600 flex items-center">
                                            <AlertCircle className="w-4 h-4 mr-1" />
                                            {errors.description}
                                        </p>
                                    ) : (
                                        <p className="text-sm text-gray-500">Minimum 10 characters</p>
                                    )}
                                    <span className="text-sm text-gray-400">{formData.description.length}/500</span>
                                </div>
                            </div>

                            {/* Location and Date */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <MapPin className="inline w-4 h-4 mr-1" />
                                        Location *
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.location ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Where was it lost/found?"
                                    />
                                    {errors.location && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="w-4 h-4 mr-1" />
                                            {errors.location}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <Calendar className="inline w-4 h-4 mr-1" />
                                        Date {formData.category === 'lost' ? 'Lost' : 'Found'} *
                                    </label>
                                    <input
                                        type="date"
                                        name="dateLostFound"
                                        value={formData.dateLostFound}
                                        onChange={handleInputChange}
                                        max={new Date().toISOString().split('T')[0]}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.dateLostFound ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.dateLostFound && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="w-4 h-4 mr-1" />
                                            {errors.dateLostFound}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact & Images */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Contact Information</h3>

                            {/* Contact Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <User className="inline w-4 h-4 mr-1" />
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    name="contactName"
                                    value={formData.contactName}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.contactName ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Your full name"
                                />
                                {errors.contactName && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.contactName}
                                    </p>
                                )}
                            </div>

                            {/* Contact Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <Phone className="inline w-4 h-4 mr-1" />
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        name="contactPhone"
                                        value={formData.contactPhone}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.contactPhone ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="+1 (555) 123-4567"
                                    />
                                    {errors.contactPhone && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="w-4 h-4 mr-1" />
                                            {errors.contactPhone}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <Mail className="inline w-4 h-4 mr-1" />
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="contactEmail"
                                        value={formData.contactEmail}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.contactEmail ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.contactEmail && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="w-4 h-4 mr-1" />
                                            {errors.contactEmail}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Upload className="inline w-4 h-4 mr-1" />
                                    Photos (Optional)
                                </label>
                                <div
                                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                                        }`}
                                    onDrop={handleDrop}
                                    onDragOver={handleDrag}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                >
                                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-600 mb-2">
                                        Drag and drop images here, or{' '}
                                        <label className="text-blue-600 cursor-pointer hover:underline">
                                            browse
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                onChange={(e) => handleImageUpload(e.target.files)}
                                                className="hidden"
                                            />
                                        </label>
                                    </p>
                                    <p className="text-sm text-gray-500">Maximum 5 images, 5MB each</p>
                                </div>
                                {errors.images && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.images}
                                    </p>
                                )}

                                {/* Image Preview */}
                                {formData.images.length > 0 && (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                                        {formData.images.map((image) => (
                                            <div key={image.id} className="relative group">
                                                <img
                                                    src={image.url}
                                                    alt="Upload preview"
                                                    className="w-full h-24 object-cover rounded-lg"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(image.id)}
                                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 pt-6 border-t">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : formData.category === 'lost'
                                    ? 'bg-red-600 hover:bg-red-700 active:scale-98'
                                    : 'bg-green-600 hover:bg-green-700 active:scale-98'
                                } shadow-lg hover:shadow-xl`}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                    Submitting...
                                </div>
                            ) : (
                                `Submit ${formData.category === 'lost' ? 'Lost' : 'Found'} Item`
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItemForm;