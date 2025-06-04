import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

interface DistrictSelectorProps {
  selectedDistrict: string;
  onChange: (district: string) => void;
}

const DistrictSelector: React.FC<DistrictSelectorProps> = ({
  selectedDistrict,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // 全国の都道府県リスト（初期はスケーラビリティのために含めておく）
  const prefectures = ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"];
  
  // 大阪市の区リスト
  const osakaDistricts = [
    "北区", "都島区", "福島区", "此花区", "中央区", "西区", "港区", "大正区",
    "天王寺区", "浪速区", "西淀川区", "淀川区", "東淀川区", "東成区", "生野区",
    "旭区", "城東区", "鶴見区", "阿倍野区", "住之江区", "住吉区", "東住吉区",
    "平野区", "西成区"
  ];

  // このMVPでは大阪市の区のみを表示
  const districts = osakaDistricts;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectDistrict = (district: string) => {
    onChange(district);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center">
          <MapPin size={18} className="mr-2 text-teal-500" />
          {selectedDistrict || '区を選択してください'}
        </span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          <ul
            className="py-1"
            role="listbox"
            aria-labelledby="district-selector"
          >
            {districts.map((district) => (
              <li
                key={district}
                onClick={() => selectDistrict(district)}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selectedDistrict === district
                    ? 'bg-teal-50 text-teal-700 font-medium'
                    : 'text-gray-700'
                }`}
                role="option"
                aria-selected={selectedDistrict === district}
              >
                {district}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DistrictSelector;