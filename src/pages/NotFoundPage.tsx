import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 p-6 rounded-full">
            <AlertTriangle size={64} className="text-yellow-500" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">ページが見つかりません</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg text-gray-600 mb-6">
            お探しのページは移動または削除された可能性があります。
            下記のリンクからサイト内の他のページをご利用ください。
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
            >
              <Home size={18} className="mr-2" />
              ホームに戻る
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <Search size={18} className="mr-2" />
              使い方を見る
            </Link>
          </div>
        </div>
        
        <p className="text-sm text-gray-500">
          お困りの場合は、<Link to="/contact" className="text-teal-600 hover:underline">お問い合わせフォーム</Link>からご連絡ください。
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;