// Mock responses and categories until API integration is complete

interface ChatResponse {
  message: string;
  category?: string;
}

// Mock support categories
const SUPPORT_CATEGORIES = {
  WELFARE: 'welfare',
  EMPLOYMENT: 'employment',
  HOUSING: 'housing',
  LEGAL: 'legal',
  HEALTHCARE: 'healthcare',
  CHILDCARE: 'childcare',
  ELDERLY: 'elderly',
  MENTAL: 'mental',
  GENERAL: 'general'
};

// Keywords for categorization
const categoryKeywords: Record<string, string[]> = {
  [SUPPORT_CATEGORIES.WELFARE]: [
    '生活保護', '福祉', '支援金', '給付金', '手当', '補助', '制度', '援助', '社会保障',
  ],
  [SUPPORT_CATEGORIES.EMPLOYMENT]: [
    '仕事', '就職', '失業', '転職', '求人', 'ハローワーク', '職業訓練', 'アルバイト', 'パート',
    '雇用', 'シフト', 'ブラック企業', '労働', '働く', '給料', '賃金', 'スキル',
  ],
  [SUPPORT_CATEGORIES.HOUSING]: [
    '家賃', '住宅', 'アパート', 'マンション', '不動産', '入居', '退去', '敷金', '礼金',
    '契約', '引っ越し', 'ホームレス', '住むところ', '寮', '部屋',
  ],
  [SUPPORT_CATEGORIES.LEGAL]: [
    '借金', '債務', '法律', '弁護士', '裁判', '訴訟', '契約', '違法', '相続', '税金',
    '消費者', '詐欺', 'トラブル', '多重債務', '税務', '破産', '免責',
  ],
  [SUPPORT_CATEGORIES.HEALTHCARE]: [
    '病院', '医療', '健康', '保険', '医者', '診療', '薬', '治療', '検査', '障害',
    '疾患', '傷病', '通院', '入院', 'メンタル', 'ヘルス',
  ],
  [SUPPORT_CATEGORIES.CHILDCARE]: [
    '子育て', '教育', '学校', '保育', '児童', '授業料', '就学', '奨学金', '学費',
    '支援', '子ども', '子供', '学生', '生徒', '幼稚園',
  ],
  [SUPPORT_CATEGORIES.ELDERLY]: [
    '高齢', '老人', '介護', '年金', '施設', 'シニア', '定年', '後期高齢者',
  ],
  [SUPPORT_CATEGORIES.MENTAL]: [
    '相談', 'カウンセリング', '悩み', 'ストレス', '鬱', 'うつ', '不安', '孤独',
    '自殺', '死にたい', '精神', '心理', '心の健康',
  ],
};

// Simple keyword-based categorization
function categorizeMessage(message: string): string {
  const normalizedMessage = message.toLowerCase();
  
  // Count keywords in each category
  const categoryCounts: Record<string, number> = {};
  
  Object.entries(categoryKeywords).forEach(([category, keywords]) => {
    categoryCounts[category] = 0;
    
    keywords.forEach(keyword => {
      if (normalizedMessage.includes(keyword)) {
        categoryCounts[category]++;
      }
    });
  });
  
  // Find the category with the most keyword matches
  let maxCount = 0;
  let bestCategory = SUPPORT_CATEGORIES.GENERAL;
  
  Object.entries(categoryCounts).forEach(([category, count]) => {
    if (count > maxCount) {
      maxCount = count;
      bestCategory = category;
    }
  });
  
  // If no keywords match, return general
  return maxCount > 0 ? bestCategory : SUPPORT_CATEGORIES.GENERAL;
}

// Mock response generation
export async function generateResponse(message: string, district: string): Promise<ChatResponse> {
  // In a real implementation, this would call an API
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
  
  const category = categorizeMessage(message);
  let response: string;
  
  switch(category) {
    case SUPPORT_CATEGORIES.WELFARE:
      response = `${district}にお住まいの方向けの生活保護や福祉制度についてご案内します。まずは区役所の生活支援課にご相談されることをおすすめします。支援を受けるための条件や必要書類についてもご案内できます。何か具体的にお知りになりたい点はありますか？`;
      break;
    case SUPPORT_CATEGORIES.EMPLOYMENT:
      response = `就労支援についてのご相談ですね。${district}には職業相談や求人情報を提供するハローワークがあります。また、職業訓練を無料で受けられるプログラムもございます。具体的な就職活動のサポートが必要でしょうか？`;
      break;
    case SUPPORT_CATEGORIES.HOUSING:
      response = `住居に関するお困りごとですね。${district}では住宅確保給付金や家賃補助などの制度があります。緊急的な住居支援も行っていますので、具体的な状況を教えていただけますか？`;
      break;
    case SUPPORT_CATEGORIES.LEGAL:
      response = `法的な問題や債務についてのご相談ですね。${district}の法律相談センターや消費生活センターでは無料相談を実施しています。どのような法的問題でお困りですか？`;
      break;
    case SUPPORT_CATEGORIES.HEALTHCARE:
      response = `健康や医療に関するご相談ですね。${district}の保健福祉センターでは健康相談や各種検診を行っています。また、医療費の助成制度もございますが、具体的にどのようなことでお困りですか？`;
      break;
    case SUPPORT_CATEGORIES.CHILDCARE:
      response = `子育てや教育に関するご相談ですね。${district}には子ども家庭支援センターがあり、様々な相談に対応しています。また、就学援助や子ども医療費助成などの制度もあります。お子さんの年齢や具体的な状況を教えていただけますか？`;
      break;
    case SUPPORT_CATEGORIES.ELDERLY:
      response = `高齢者支援についてのご相談ですね。${district}の地域包括支援センターでは介護や生活全般の相談を受け付けています。介護保険サービスや高齢者向けの生活支援サービスなどについても案内できますが、具体的にどのようなことでお困りですか？`;
      break;
    case SUPPORT_CATEGORIES.MENTAL:
      response = `お気持ちの辛さについてのご相談ですね。${district}にはこころの健康センターや精神保健福祉センターがあり、専門家による相談を受けることができます。よろしければ、もう少し詳しくお話を聞かせていただけますか？`;
      break;
    default:
      response = `${district}での生活でのお困りごとについて、もう少し詳しく教えていただけますか？適切な支援機関をご紹介するために、具体的な状況をお知らせいただければと思います。`;
  }
  
  return {
    message: response,
    category: category !== SUPPORT_CATEGORIES.GENERAL ? category : undefined
  };
}