import React, { useState } from 'react';
import ChatInterface from '../components/chat/ChatInterface';
import DistrictSelector from '../components/DistrictSelector';
import OrganizationResults from '../components/OrganizationResults';

const HomePage: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [supportCategory, setSupportCategory] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleDistrictChange = (district: string) => {
    setSelectedDistrict(district);
  };

  const handleCategoryDetermined = (category: string) => {
    setSupportCategory(category);
    setShowResults(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              お困りごとを教えてください
            </h2>
            <p className="text-gray-600 mb-4">
              Cocolifyは、大阪市にお住まいの方の生活上の困りごとに対して、適切な支援機関をご紹介します。
              あなたの状況を教えてください。
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                お住まいの区を選択してください
              </h3>
              <DistrictSelector 
                selectedDistrict={selectedDistrict} 
                onChange={handleDistrictChange} 
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <ChatInterface 
              selectedDistrict={selectedDistrict}
              onCategoryDetermined={handleCategoryDetermined}
            />
          </div>
        </section>
        
        {showResults && (
          <section className="mb-8 animate-fadeIn">
            <OrganizationResults 
              district={selectedDistrict} 
              category={supportCategory}
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default HomePage;