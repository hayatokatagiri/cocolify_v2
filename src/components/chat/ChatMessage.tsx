import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, isUser, timestamp }) => {
  const formattedTime = timestamp.toLocaleTimeString('ja-JP', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}
      style={{ 
        animationFillMode: 'both',
        animationDuration: '0.3s' 
      }}
    >
      <div
        className={`flex max-w-[80%] ${
          isUser ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div
          className={`flex items-center justify-center h-8 w-8 rounded-full ${
            isUser ? 'bg-purple-100 ml-2' : 'bg-teal-100 mr-2'
          }`}
        >
          {isUser ? (
            <User size={16} className="text-purple-600" />
          ) : (
            <Bot size={16} className="text-teal-600" />
          )}
        </div>

        <div className="flex flex-col">
          <div
            className={`rounded-2xl px-4 py-2 ${
              isUser
                ? 'bg-purple-500 text-white'
                : 'bg-gray-100 text-gray-800 border border-gray-200'
            }`}
          >
            <p className="whitespace-pre-wrap break-words">{content}</p>
          </div>
          <span 
            className={`text-xs text-gray-500 mt-1 ${
              isUser ? 'text-right' : 'text-left'
            }`}
          >
            {formattedTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;