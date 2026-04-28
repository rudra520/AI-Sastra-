import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getAIResponse } from "../services/geminiService";

export const JatayuBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot", text: string }[]>([
    { role: "bot", text: "Namaste! I am Jatayu, your celestial AI guide. I can help you find the best AI tools on the internet. What are you looking for today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (forcedQuery?: string) => {
    const query = forcedQuery || input;
    if (!query.trim()) return;
    
    const userMessage = { role: "user" as const, text: query };
    setMessages(prev => [...prev, userMessage]);
    if (!forcedQuery) setInput("");
    setIsTyping(true);

    try {
      // Get AI response using chat history
      const response = await getAIResponse(query, messages);
      setIsTyping(false);
      setMessages(prev => [...prev, { role: "bot", text: response }]);
    } catch (error) {
      console.error("AI Error:", error);
      setIsTyping(false);
      setMessages(prev => [...prev, { role: "bot", text: "My apologies, I had trouble navigating the digital clouds. Please try again." }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[90vw] max-w-[400px] h-[500px] bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 bg-gradient-to-r from-sastra-600 to-blue-600 flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-space font-bold leading-none">Jatayu AI</h3>
                  <p className="text-[10px] opacity-80 mt-1">Smart AI Chooser • Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === "bot" ? "bg-sastra-500" : "bg-zinc-800"}`}>
                    {msg.role === "bot" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-zinc-400" />}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 text-sm max-w-[85%] ${msg.role === "bot" ? "bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700/50" : "bg-sastra-600 text-white rounded-tr-none shadow-lg shadow-sastra-500/20"}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-sastra-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-zinc-800 rounded-2xl rounded-tl-none px-4 py-3 border border-zinc-700/50">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce delay-100" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 flex flex-wrap gap-2 mb-2">
              {[
                { label: "Math Help", query: "Can you help with math?" },
                { label: "Digital Art", query: "Show me art tools" },
                { label: "Health", query: "I need health track" }
              ].map((action) => (
                <button
                  key={action.label}
                  onClick={() => handleSend(action.query)}
                  className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-full text-[10px] text-zinc-400 hover:text-white transition-colors"
                >
                  {action.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask Jatayu..."
                  className="flex-1 bg-zinc-800 border-none rounded-full px-5 py-3 text-sm text-white focus:ring-2 focus:ring-sastra-500 transition-all outline-none"
                />
                <button 
                  onClick={handleSend}
                  className="p-3 bg-sastra-600 rounded-full text-white hover:bg-sastra-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-sastra-500 to-blue-600 text-white shadow-2xl flex items-center justify-center relative group"
      >
        <div className="absolute inset-0 rounded-full bg-sastra-500 animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
        {isOpen ? <X className="w-7 h-7 relative z-10" /> : <MessageCircle className="w-7 h-7 relative z-10" />}
      </motion.button>
    </div>
  );
};
