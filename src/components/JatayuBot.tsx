import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getAIResponse } from "../services/geminiService";
import ReactMarkdown from "react-markdown";

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
    
    // Capture history before adding current message to avoid duplication in API call
    const chatHistory = [...messages];
    
    const userMessage = { role: "user" as const, text: query };
    setMessages(prev => [...prev, userMessage]);
    if (!forcedQuery) setInput("");
    setIsTyping(true);

    try {
      // Get AI response using captured history
      const response = await getAIResponse(query, chatHistory);
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
            className="absolute bottom-20 right-0 w-[90vw] max-w-[400px] h-[600px] bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 bg-gradient-to-r from-sastra-600 to-blue-600 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-space font-bold leading-none tracking-tight">Jatayu AI</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-[10px] opacity-80">Smart AI Chooser • Online</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setMessages([{ role: "bot", text: "Chat cleared. How can I help you now?" }])}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                  title="Clear Chat"
                >
                  <Sparkles className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  key={i} 
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${msg.role === "bot" ? "bg-sastra-500" : "bg-zinc-800"}`}>
                    {msg.role === "bot" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-zinc-400" />}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 text-sm max-w-[85%] shadow-sm transition-all hover:shadow-md ${
                    msg.role === "bot" 
                      ? "bg-zinc-800/80 backdrop-blur-sm text-zinc-100 rounded-tl-none border border-zinc-700/50" 
                      : "bg-sastra-600 text-white rounded-tr-none shadow-lg shadow-sastra-500/20"
                  }`}>
                    <div className="markdown-body prose prose-invert prose-sm max-w-none">
                      <ReactMarkdown>
                        {msg.text}
                      </ReactMarkdown>
                    </div>
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
                      <div className="w-1.5 h-1.5 rounded-full bg-sastra-400 animate-bounce" />
                      <div className="w-1.5 h-1.5 rounded-full bg-sastra-400 animate-bounce delay-100" />
                      <div className="w-1.5 h-1.5 rounded-full bg-sastra-400 animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 flex flex-wrap gap-2 mb-2 bg-zinc-900/50">
              {[
                { label: "Math Help", query: "Can you help me find the best AI for advanced math?" },
                { label: "Image Generation", query: "What is the best AI for generating realistic images?" },
                { label: "AI Writing", query: "Suggest a good AI tool for blog writing." }
              ].map((action) => (
                <button
                  key={action.label}
                  onClick={() => handleSend(action.query)}
                  className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-sastra-500/50 rounded-full text-[10px] text-zinc-400 hover:text-white transition-all transform hover:scale-105 active:scale-95"
                >
                  {action.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-900/80 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask Jatayu anything..."
                    className="w-full bg-zinc-800 border-zinc-700 border rounded-2xl px-5 py-3 text-sm text-white focus:ring-2 focus:ring-sastra-500 focus:border-transparent transition-all outline-none"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-600" />
                  </div>
                </div>
                <button 
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="p-3 bg-gradient-to-r from-sastra-600 to-blue-600 rounded-2xl text-white hover:shadow-lg hover:shadow-sastra-500/20 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[10px] text-zinc-600 text-center mt-3">Jatayu may provide varied results. Always check the official tools.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-sastra-500 to-blue-600 text-white shadow-2xl flex items-center justify-center relative group overflow-hidden"
      >
        <div className="absolute inset-0 rounded-full bg-sastra-500 animate-pulse opacity-20 group-hover:opacity-40 transition-opacity" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Bot className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
