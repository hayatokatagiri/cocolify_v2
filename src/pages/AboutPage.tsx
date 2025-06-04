import React from 'react';
import { FileQuestion, HelpCircle, MessageSquare, MapPin, Shield, ExternalLink } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Cocolifyについて</h1>
        
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <HelpCircle className="text-teal-500 mr-2" size={24} />
            Cocolifyとは
          </h2>
          <p className="text-gray-700 mb-4">
            Cocolifyは、生活にお困りの方々を支援するためのAIチャットボットサービスです。
            貧困や社会的孤立といった課題に直面している方々が適切な支援にアクセスできるよう、
            わかりやすい情報提供と支援機関の紹介を行います。
          </p>
          <p className="text-gray-700">
            生活保護の申請方法から就労支援、住居問題、法律相談など、様々な困りごとに対して、
            お住まいの地域に合わせた具体的な支援先をご案内します。
          </p>
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <FileQuestion className="text-teal-500 mr-2" size={24} />
            使い方
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-400">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                <MapPin className="text-teal-500 mr-2" size={18} />
                1. お住まいの区を選択
              </h3>
              <p className="text-gray-600">
                まずは画面上部の地域選択メニューからお住まいの区を選択してください。
                現在は大阪市内の区に対応しています。
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-400">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                <MessageSquare className="text-teal-500 mr-2" size={18} />
                2. チャットで困りごとを伝える
              </h3>
              <p className="text-gray-600">
                チャット画面に、あなたが直面している困りごとを入力してください。
                例：「家賃が払えなくて困っています」「仕事を探したいです」など、
                具体的な状況をお伝えいただくとより適切な案内ができます。
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-400">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                <ExternalLink className="text-teal-500 mr-2" size={18} />
                3. 支援機関の情報を確認
              </h3>
              <p className="text-gray-600">
                チャットでのやり取りを基に、あなたの状況に合った支援機関が表示されます。
                連絡先や受付時間、利用条件などをご確認の上、直接お問い合わせください。
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Shield className="text-teal-500 mr-2" size={24} />
            ご利用にあたって
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Cocolifyは情報提供のみを目的としています。実際のサービス利用や支援の申請については、
              各支援機関にお問い合わせください。
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-yellow-800 mb-1">重要なお知らせ</h3>
              <ul className="list-disc list-inside text-yellow-700 space-y-2">
                <li>緊急の状況（医療、暴力、災害など）の場合は、まず適切な緊急サービス（119、110など）にご連絡ください。</li>
                <li>このサービスはAIを使用していますが、全ての情報が最新または完全であることを保証するものではありません。</li>
                <li>プライバシー保護のため、個人を特定できる情報はできるだけ入力しないでください。</li>
              </ul>
            </div>
            
            <p className="text-gray-700 mt-4">
              当サービスに関するご意見・ご要望は、お問い合わせフォームからお寄せください。
              より良いサービスのために、皆様のフィードバックをお待ちしております。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;