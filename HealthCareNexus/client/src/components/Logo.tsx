import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <svg width="50" height="50" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
        <path d="M171.1 112C171.1 145 144.2 171.9 111.1 171.9C78.1 171.9 51.2 145 51.2 112C51.2 79 78.1 52.1 111.1 52.1C144.2 52.1 171.1 79 171.1 112Z" fill="#C02031"/>
        <path d="M111.1 134.3C123.6 134.3 133.7 124.3 133.7 111.8C133.7 99.3 123.6 89.3 111.1 89.3C98.6 89.3 88.6 99.3 88.6 111.8C88.6 124.3 98.6 134.3 111.1 134.3Z" fill="white"/>
        <path d="M223.1 112C223.1 173.9 173.1 224 111.1 224C49.2 224 -0.8 173.9 -0.8 112C-0.8 50.1 49.2 0 111.1 0C173.1 0 223.1 50.1 223.1 112ZM111.1 20.3C60.4 20.3 19.4 61.2 19.4 112C19.4 162.8 60.4 203.7 111.1 203.7C161.9 203.7 202.9 162.8 202.9 112C202.9 61.2 161.9 20.3 111.1 20.3Z" fill="#C02031"/>
      </svg>
      <div className="font-bold text-xl tracking-tighter leading-tight">
        <span className="text-primary">VRG</span> <span className="text-gray-800">Health</span>
        <span className="block text-sm font-medium text-primary/80">Consult</span>
      </div>
    </div>
  );
};

export default Logo;
