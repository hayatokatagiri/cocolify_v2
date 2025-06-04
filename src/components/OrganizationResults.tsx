import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Globe, Mail, Tag, ExternalLink, ChevronRight, ChevronDown } from 'lucide-react';
import { getOrganizationsByDistrictAndCategory } from '../services/organizationService';

interface OrganizationResultsProps {
  district: string;
  category: string;
}

interface Organization {
  id: number;
  name: string;
  category: string;
  subcategory?: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  hours?: string;
  description: string;
  conditions?: string;
}

const OrganizationResults: React.FC<OrganizationResultsProps> = ({ district, category }) => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchOrganizations = async () => {
      setLoading(true);
      try {
        const results = await getOrganizationsByDistrictAndCategory(district, category);
        setOrganizations(results);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, [district, category]);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCategoryLabel = (category: string): string => {
    const categoryMap: Record<string, string> = {
      'welfare': '生活保護・福祉制度',
      'employment': '就労支援・職業訓練',
      'housing': '住居問題',
      'legal': '債務・法律問題',
      'healthcare': '医療・健康',
      'childcare': '子育て・教育',
      'elderly': '高齢者支援',
      'mental': '精神的サポート',
      'general': '総合相談',
    };
    
    return categoryMap[category] || category;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          <p className="mt-4 text-gray-600">支援機関情報を取得中...</p>
        </div>
      </div>
    );
  }

  if (organizations.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          対応する支援機関
        </h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-yellow-700">
            該当する支援機関が見つかりませんでした。別のカテゴリーや地域で検索してみてください。
          </p>
        </div>
        <p className="text-gray-600">
          チャットボットに戻り、もう少し詳しく状況をお伝えいただくと、より適切な支援先をご紹介できる場合があります。
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        あなたにおすすめの支援機関
      </h2>
      <p className="text-gray-600 mb-6">
        {district}の{getCategoryLabel(category)}に関する支援機関です
      </p>

      <div className="space-y-4">
        {organizations.map((org) => (
          <div
            key={org.id}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            <div
              onClick={() => toggleExpand(org.id)}
              className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{org.name}</h3>
                <div className="flex items-center mt-1">
                  <Tag size={16} className="text-teal-600 mr-1" />
                  <span className="text-sm text-gray-600">{getCategoryLabel(org.category)}</span>
                </div>
              </div>
              {expandedId === org.id ? (
                <ChevronDown size={20} className="text-gray-500" />
              ) : (
                <ChevronRight size={20} className="text-gray-500" />
              )}
            </div>
            
            {expandedId === org.id && (
              <div className="p-4 bg-gray-50 border-t border-gray-200 animate-fadeIn">
                <p className="text-gray-700 mb-4">{org.description}</p>
                
                <div className="space-y-3">
                  {org.address && (
                    <div className="flex items-start">
                      <MapPin size={18} className="text-gray-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">{org.address}</span>
                    </div>
                  )}
                  
                  {org.phone && (
                    <div className="flex items-center">
                      <Phone size={18} className="text-gray-500 mr-2" />
                      <a
                        href={`tel:${org.phone.replace(/-/g, '')}`}
                        className="text-teal-600 hover:underline"
                      >
                        {org.phone}
                      </a>
                    </div>
                  )}
                  
                  {org.hours && (
                    <div className="flex items-start">
                      <Clock size={18} className="text-gray-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">{org.hours}</span>
                    </div>
                  )}
                  
                  {org.email && (
                    <div className="flex items-center">
                      <Mail size={18} className="text-gray-500 mr-2" />
                      <a
                        href={`mailto:${org.email}`}
                        className="text-teal-600 hover:underline"
                      >
                        {org.email}
                      </a>
                    </div>
                  )}
                  
                  {org.website && (
                    <div className="flex items-center">
                      <Globe size={18} className="text-gray-500 mr-2" />
                      <a
                        href={org.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:underline flex items-center"
                      >
                        ウェブサイト
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  )}
                </div>
                
                {org.conditions && (
                  <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-md">
                    <h4 className="font-medium text-yellow-800 mb-1">利用条件</h4>
                    <p className="text-sm text-yellow-700">{org.conditions}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          ※このリストは自動生成されたものです。最新の情報は各機関の公式サイトや電話でご確認ください。
        </p>
        <p className="text-sm text-gray-600 mt-1">
          緊急の場合は、各行政機関や相談窓口に直接お問い合わせください。
        </p>
      </div>
    </div>
  );
};

export default OrganizationResults;