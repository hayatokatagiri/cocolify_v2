// Mock data for organizations
// In a production environment, this would be fetched from a database

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
  district: string;
}

// Mock organization data for Osaka
const organizations: Organization[] = [
  {
    id: 1,
    name: '大阪市生活自立相談支援センター',
    category: 'welfare',
    address: '大阪市北区中之島1-3-20 大阪市役所内',
    phone: '06-6208-7625',
    hours: '月曜～金曜 9:00～17:30（祝日・年末年始除く）',
    description: '生活にお困りの方の総合相談窓口です。生活保護の申請手続きや、就労支援、家計改善など、様々な支援を行っています。',
    district: '北区',
  },
  {
    id: 2,
    name: '北区役所 保健福祉課',
    category: 'welfare',
    address: '大阪市北区扇町2-1-27',
    phone: '06-6313-9857',
    hours: '月曜～金曜 9:00～17:30（祝日・年末年始除く）',
    description: '生活保護や各種福祉制度の窓口です。生活にお困りの方はまずはこちらにご相談ください。',
    district: '北区',
  },
  {
    id: 3,
    name: '大阪市立北区民センター 生活相談室',
    category: 'general',
    address: '大阪市北区扇町2-1-27',
    phone: '06-6315-1221',
    hours: '月曜～金曜 9:00～17:00（祝日・年末年始除く）',
    description: '日常生活でのお悩みやトラブルについて、専門の相談員が対応します。',
    district: '北区',
  },
  {
    id: 4,
    name: 'ハローワーク大阪東',
    category: 'employment',
    address: '大阪市中央区農人橋2-1-36 ピップビル1～3階',
    phone: '06-6942-4771',
    website: 'https://jsite.mhlw.go.jp/osaka-hellowork/',
    hours: '月曜～金曜 8:30～17:15（祝日・年末年始除く）',
    description: '職業相談、職業紹介、求人情報の提供などを行っています。失業給付の手続きもこちらで行えます。',
    district: '中央区',
  },
  {
    id: 5,
    name: '大阪市立住まい情報センター',
    category: 'housing',
    address: '大阪市北区天神橋6-4-20',
    phone: '06-6242-1177',
    website: 'https://www.osaka-anshin.com/',
    hours: '9:00～19:00（水曜・祝日・年末年始休館）',
    description: '住まいに関する様々な情報提供や相談を行っています。住宅確保給付金の相談も受け付けています。',
    conditions: '住宅確保給付金は一定の条件があります。事前にお問い合わせください。',
    district: '北区',
  },
  {
    id: 6,
    name: '大阪法律相談センター',
    category: 'legal',
    address: '大阪市北区西天満1-12-5 大阪弁護士会館1階',
    phone: '06-6364-1248',
    website: 'https://soudan.osakaben.or.jp/',
    hours: '月曜～金曜 9:00～17:00（祝日・年末年始除く）',
    description: '弁護士による法律相談を実施しています。多重債務、労働問題、家庭問題など様々な法的トラブルに対応しています。',
    conditions: '有料相談（初回30分5,500円）と無料相談（特定の条件を満たす方）があります。',
    district: '北区',
  },
  {
    id: 7,
    name: '大阪市こども相談センター',
    category: 'childcare',
    address: '大阪市中央区森ノ宮中央1-17-5',
    phone: '06-6797-6520',
    hours: '月曜～金曜 9:00～17:30（祝日・年末年始除く）',
    description: '18歳未満の子どもに関する様々な相談に対応しています。児童虐待の通報や相談も受け付けています。',
    district: '中央区',
  },
  {
    id: 8,
    name: '大阪府こころの健康総合センター',
    category: 'mental',
    address: '大阪市住吉区万代東3-1-46',
    phone: '06-6691-2811',
    website: 'https://kokoro-osaka.jp/',
    hours: '月曜～金曜 9:00～17:45（祝日・年末年始除く）',
    description: '心の健康に関する相談や、うつ病などの精神疾患についての相談に応じています。',
    district: '住吉区',
  },
  {
    id: 9,
    name: '大阪市立阿倍野区民センター 生活相談室',
    category: 'general',
    address: '大阪市阿倍野区阿倍野筋4-19-118',
    phone: '06-6622-9973',
    hours: '月曜～金曜 10:00～16:00（祝日・年末年始除く）',
    description: '生活上の様々な悩みごとについて相談に応じています。',
    district: '阿倍野区',
  },
  {
    id: 10,
    name: 'NPO法人大阪生活支援ネットワーク',
    category: 'welfare',
    address: '大阪市西区西本町1-7-7 CE西本町ビル3階',
    phone: '06-6585-0050',
    website: 'https://www.osakalifesupport.org/',
    hours: '月曜～金曜 10:00～18:00（祝日・年末年始除く）',
    description: '生活困窮者や社会的に孤立している方への支援を行っています。フードバンク、就労支援、法律相談なども実施。',
    district: '西区',
  },
  {
    id: 11,
    name: '大阪市立平野区民センター 生活相談室',
    category: 'general',
    address: '大阪市平野区平野南1-2-7',
    phone: '06-6790-4000',
    hours: '月曜～金曜 10:00～16:00（祝日・年末年始除く）',
    description: '生活上の様々な悩みごとについて相談に応じています。',
    district: '平野区',
  },
  {
    id: 12,
    name: '大阪市立東住吉区民センター 生活相談室',
    category: 'general',
    address: '大阪市東住吉区東田辺1-13-4',
    phone: '06-6699-1100',
    hours: '月曜～金曜 10:00～16:00（祝日・年末年始除く）',
    description: '生活上の様々な悩みごとについて相談に応じています。',
    district: '東住吉区',
  }
];

// Function to get organizations by district and category
export async function getOrganizationsByDistrictAndCategory(
  district: string,
  category: string
): Promise<Organization[]> {
  // Simulate API call with 1 second delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Filter organizations based on district and category
      // For demonstration, return all organizations if no district or category is provided
      let results = organizations;
      
      if (district) {
        results = results.filter(org => 
          org.district === district || 
          // Also include city-wide organizations
          org.district.includes('市')
        );
      }
      
      if (category) {
        // For better results, include general category organizations too
        results = results.filter(org => 
          org.category === category || 
          org.category === 'general'
        );
      }
      
      resolve(results);
    }, 1000);
  });
}