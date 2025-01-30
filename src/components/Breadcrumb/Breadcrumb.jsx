import { Home } from 'lucide-react';
import React from 'react'

const Breadcrumb = ({ title }) => {
    return (
      <div className="flex items-center space-x-2 text-gray-600 text-sm border-b py-3 px-6">
        <Home className="w-5 h-5 text-gray-500" />
        <span className="text-gray-400">{">"}</span>
        <span className="font-semibold text-black">{title}</span>
      </div>
    );
  };
  

export default Breadcrumb
