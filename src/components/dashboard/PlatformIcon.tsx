import React from 'react';
import { 
  BarChart2,
  BrainCircuit, 
  Facebook,
  Music 
} from 'lucide-react';

interface PlatformIconProps {
  platform: string;
}

const PlatformIcon: React.FC<PlatformIconProps> = ({ platform }) => {
  const getPlatformIcon = () => {
    // Base styles for all platform icons
    const baseClass = "p-2 rounded-md";
    
    switch (platform) {
      case 'Google Analytics 4':
        return (
          <div className={`${baseClass} bg-yellow-100`}>
            <BarChart2 size={20} className="text-yellow-600" />
          </div>
        );
      case 'Google Ads':
        return (
          <div className={`${baseClass} bg-blue-100`}>
            <BrainCircuit size={20} className="text-blue-600" />
          </div>
        );
      case 'Meta Ads':
        return (
          <div className={`${baseClass} bg-indigo-100`}>
            <Facebook size={20} className="text-indigo-600" />
          </div>
        );
      case 'TikTok Ads':
        return (
          <div className={`${baseClass} bg-gray-100`}>
            <Music size={20} className="text-gray-700" />
          </div>
        );
      default:
        return (
          <div className={`${baseClass} bg-gray-100`}>
            <BarChart2 size={20} className="text-gray-600" />
          </div>
        );
    }
  };

  return (
    <div className="flex-shrink-0">
      {getPlatformIcon()}
    </div>
  );
};

export default PlatformIcon;