
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getGeminiResponse } from '../services/geminiService';

const AiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Sohag's career assistant. Want to know about his experience with Kotlin Multiplatform or his availability for new projects?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getGeminiResponse(input);
    const aiMsg: Message = { role: 'assistant', content: response };
    
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
        className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-accent text-white rounded-full shadow-xl flex items-center justify-center text-xl hover:scale-110 transition-all group"
      >
        {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-robot"></i>}
        <span className="absolute right-full mr-4 bg-gray-900 px-3 py-1.5 rounded-xl text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Ask me anything!
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-[60] w-[350px] h-[500px] glass-card rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-white/10 animate-in fade-in slide-in-from-bottom-8">
          <div className="p-5 border-b border-white/10 flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center text-lg">
                <i className="fa-solid fa-robot"></i>
             </div>
             <div>
                <div className="font-bold text-sm">Sohag AI</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                   Powered by Gemini 3
                </div>
             </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-accent text-white rounded-tr-none' 
                    : 'bg-white/5 text-gray-300 rounded-tl-none border border-white/5'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 text-gray-300 p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                  <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-75"></span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-2 bg-white/5 rounded-2xl px-4 py-2 border border-white/5 focus-within:border-accent/50 transition-colors">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a question..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-white py-1"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                aria-label="Send message"
                className="text-accent hover:scale-110 disabled:opacity-50 transition-transform"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiChat;
