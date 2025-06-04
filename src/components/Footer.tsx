import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="h-5 w-5 text-teal-400 mr-2" />
            <span className="text-lg font-semibold">Cocolify</span>
            <span className="ml-2 text-sm text-gray-400"></span>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>© {year} Cocolify - 大阪市の反貧困支援チャットボット</p>
            <p className="mt-1">※このサービスは情報提供のみを目的としています。緊急時は各専門機関に直接ご連絡ください。</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;