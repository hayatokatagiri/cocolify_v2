import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { generateResponse } from '../../services/chatService';

interface ChatInterfaceProps {
  selectedDistrict: string;
  onCategoryDetermined: (category: string) => void;
}

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  selectedDistrict, 
  onCategoryDetermined 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: 'こんにちは。どのようなことでお困りですか？お力になれることがあれば教えてください。',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    try {
      // Wait a moment to simulate thinking
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate AI response
      const response = await generateResponse(inputMessage, selectedDistrict);
      
      // Add AI message
      const aiMessage: Message = {
        id: messages.length + 2,
        content: response.message,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      
      // If a category was determined, notify parent component
      if (response.category) {
        onCategoryDetermined(response.category);
      }
    } catch (error) {
      console.error('Error generating response:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: messages.length + 2,
        content: 'すみません、エラーが発生しました。もう一度お試しください。',
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        
        {isTyping && (
          <div className="flex items-center text-gray-500 animate-pulse">
            <div className="h-2 w-2 bg-gray-400 rounded-full mx-1 animate-bounce"></div>
            <div className="h-2 w-2 bg-gray-400 rounded-full mx-1 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="h-2 w-2 bg-gray-400 rounded-full mx-1 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form 
        onSubmit={handleSubmit}
        className="border-t border-gray-200 p-4 bg-gray-50"
      >
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={handleInputChange}
            placeholder="メッセージを入力してください..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            disabled={!selectedDistrict || isTyping}
          />
          <button
            type="submit"
            className={`p-2 rounded-full ${
              !inputMessage.trim() || !selectedDistrict || isTyping
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-teal-500 text-white hover:bg-teal-600 transition-colors'
            }`}
            disabled={!inputMessage.trim() || !selectedDistrict || isTyping}
          >
            <Send size={20} />
          </button>
        </div>
        
        {!selectedDistrict && (
          <p className="text-sm text-red-500 mt-2">
            ※チャットを始めるには、お住まいの区を選択してください。
          </p>
        )}
      </form>
    </div>
  );
};

export default ChatInterface;