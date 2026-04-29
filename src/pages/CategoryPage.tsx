import { useParams, Link } from "react-router-dom";
import { CATEGORIES } from "../data/categories";
import { TOOLS_DB } from "../data/toolsDB";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const CategoryPage = () => {
  const { id } = useParams();
  const category = CATEGORIES.find(c => c.id === id);
  const tools = TOOLS_DB.filter(t => t.category === id);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-400">
        Category not found. <Link to="/" className="text-sastra-400 ml-2">Go back home</Link>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Hub
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-32"
            >
              <div className={`w-16 h-16 rounded-2xl ${category.bg} flex items-center justify-center mb-6`}>
                <Icon className={`w-8 h-8 ${category.color}`} />
              </div>
              <h1 className="font-space font-bold text-4xl mb-4 text-white">{category.name}</h1>
              <p className="text-zinc-400 leading-relaxed mb-8">{category.description}</p>
              
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="flex items-center gap-2 text-amber-400 mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Platform Suggestion</span>
                </div>
                <p className="text-zinc-300 text-sm italic">"These tools have been curated for their accessibility and high-performance AI engines. Perfect for {id} workflows."</p>
                <p className="text-zinc-500 text-[10px] mt-4 uppercase tracking-[0.2em]">{tools.length} Tools Available</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % 10) * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl glass-morphism border-zinc-800/50 glow-box transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-space font-bold text-xl text-zinc-200 group-hover:text-white transition-colors">{tool.name}</h3>
                    <div className="p-2 rounded-full bg-zinc-800 group-hover:bg-sastra-500/20 transition-colors">
                      <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-sastra-400 transition-colors" />
                    </div>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 group-hover:text-zinc-400 transition-colors h-12 overflow-hidden line-clamp-2">{tool.desc}</p>
                  <a 
                    href={tool.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="block w-full py-3 rounded-xl bg-zinc-800 text-zinc-300 font-medium text-sm text-center group-hover:bg-white group-hover:text-zinc-950 transition-all shadow-lg group-hover:shadow-white/10"
                  >
                    Launch Tool
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Empty state or more info */}
            {tools.length === 0 && (
              <div className="mt-12 p-8 rounded-3xl border border-dashed border-zinc-800 text-center">
                  <p className="text-zinc-600 text-sm">More tools coming soon to the {category.name} suite...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
