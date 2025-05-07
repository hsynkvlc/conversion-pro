import React from 'react';
import { Bell, ChevronDown, HelpCircle, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-gray-800">Conversion Tracker</h1>
        <div className="ml-10 hidden md:block">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 rounded-md text-sm transition-all duration-150"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-150">
          <HelpCircle size={20} className="text-gray-500" />
        </button>
        <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-150 relative">
          <Bell size={20} className="text-gray-500" />
          <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        <div className="flex items-center gap-2 ml-2">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
            JS
          </div>
          <span className="text-sm font-medium text-gray-700 hidden md:block">John Store</span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;