import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  BarChart2, 
  Settings, 
  PieChart, 
  Users, 
  FileText, 
  HelpCircle
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, title: 'Dashboard', active: true },
    { icon: <BarChart2 size={20} />, title: 'Analytics' },
    { icon: <PieChart size={20} />, title: 'Conversions' },
    { icon: <ShoppingBag size={20} />, title: 'Campaigns' },
    { icon: <Users size={20} />, title: 'Audiences' },
    { icon: <FileText size={20} />, title: 'Reports' },
    { icon: <Settings size={20} />, title: 'Settings' },
  ];

  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-white border-r border-gray-200">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-blue-600 rounded">
            <BarChart2 size={20} className="text-white" />
          </div>
          <span className="text-lg font-semibold text-gray-900">ConversionPro</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${
                item.active
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors duration-150`}
            >
              <span className={item.active ? 'text-blue-600' : 'text-gray-500'}>
                {item.icon}
              </span>
              <span className="ml-3">{item.title}</span>
              {item.active && (
                <span className="ml-auto w-1.5 h-5 bg-blue-600 rounded-full"></span>
              )}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-150">
            <HelpCircle size={20} className="text-gray-500" />
            <span className="ml-3">Help & Support</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;