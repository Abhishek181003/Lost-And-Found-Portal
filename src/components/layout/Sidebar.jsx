import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Filter, Calendar, Tag, MapPin } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    dateRange: false,
    itemType: false,
    location: false
  });
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'all',
    itemTypes: [],
    dateRange: 'all',
    location: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryChange = (category) => {
    setSelectedFilters(prev => ({
      ...prev,
      category: category
    }));
  };

  const handleItemTypeToggle = (itemType) => {
    setSelectedFilters(prev => ({
      ...prev,
      itemTypes: prev.itemTypes.includes(itemType)
        ? prev.itemTypes.filter(type => type !== itemType)
        : [...prev.itemTypes, itemType]
    }));
  };

  const itemTypes = [
    'Electronics', 'Clothing', 'Accessories', 'Documents', 
    'Keys', 'Books', 'Sports Equipment', 'Jewelry', 'Other'
  ];

  const dateRanges = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'all', label: 'All Time' }
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
      >
        <Filter size={20} />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static top-0 left-0 h-full lg:h-auto w-80 lg:w-80
        bg-white shadow-lg lg:shadow-none border-r border-gray-200
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Filter className="text-blue-600" size={20} />
              Filters
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
            />
          </div>
        </div>

        {/* Filter Sections */}
        <div className="p-6 space-y-6">
          {/* Category Filter */}
          <div className="space-y-3">
            <button
              onClick={() => toggleSection('category')}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              <span className="flex items-center gap-2">
                <Tag size={16} />
                Category
              </span>
              {expandedSections.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {expandedSections.category && (
              <div className="space-y-2 ml-6 animate-in slide-in-from-top-2 duration-200">
                {['all', 'lost', 'found'].map((category) => (
                  <label key={category} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedFilters.category === category}
                      onChange={() => handleCategoryChange(category)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 capitalize group-hover:text-blue-600 transition-colors duration-200">
                      {category === 'all' ? 'All Items' : `${category} Items`}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Date Range Filter */}
          <div className="space-y-3">
            <button
              onClick={() => toggleSection('dateRange')}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                Date Range
              </span>
              {expandedSections.dateRange ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {expandedSections.dateRange && (
              <div className="space-y-2 ml-6 animate-in slide-in-from-top-2 duration-200">
                {dateRanges.map((range) => (
                  <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="dateRange"
                      value={range.value}
                      checked={selectedFilters.dateRange === range.value}
                      onChange={() => setSelectedFilters(prev => ({ ...prev, dateRange: range.value }))}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Item Type Filter */}
          <div className="space-y-3">
            <button
              onClick={() => toggleSection('itemType')}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              <span className="flex items-center gap-2">
                <Tag size={16} />
                Item Type
              </span>
              {expandedSections.itemType ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {expandedSections.itemType && (
              <div className="space-y-2 ml-6 animate-in slide-in-from-top-2 duration-200 max-h-48 overflow-y-auto">
                {itemTypes.map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      value={type}
                      checked={selectedFilters.itemTypes.includes(type)}
                      onChange={() => handleItemTypeToggle(type)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Location Filter */}
          <div className="space-y-3">
            <button
              onClick={() => toggleSection('location')}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Location
              </span>
              {expandedSections.location ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {expandedSections.location && (
              <div className="ml-6 animate-in slide-in-from-top-2 duration-200">
                <input
                  type="text"
                  placeholder="Enter location..."
                  value={selectedFilters.location}
                  onChange={(e) => setSelectedFilters(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            )}
          </div>
        </div>

        {/* Clear Filters Button */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={() => {
              setSelectedFilters({
                category: 'all',
                itemTypes: [],
                dateRange: 'all',
                location: ''
              });
              setSearchQuery('');
            }}
            className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
          >
            Clear All Filters
          </button>
        </div>
      </aside>

      {/* Mobile Top Navigation Bar (Alternative layout for small screens) */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4">
        <div className="flex items-center gap-4 overflow-x-auto">
          <div className="flex-shrink-0">
            <select
              value={selectedFilters.category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Items</option>
              <option value="lost">Lost Items</option>
              <option value="found">Found Items</option>
            </select>
          </div>
          <div className="flex-shrink-0">
            <select
              value={selectedFilters.dateRange}
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, dateRange: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
            >
              {dateRanges.map((range) => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;