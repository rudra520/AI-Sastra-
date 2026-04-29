import { useParams, Link } from "react-router-dom";
import { AGE_CATEGORIES } from "../data/categories";
import { TOOLS_DB } from "../data/toolsDB";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const AgeGroupPage = () => {
  const { group } = useParams();
  const category = AGE_CATEGORIES.find(c => c.id === group);
  const tools = TOOLS_DB.filter(t => t.ageGroups.includes(group as any));

  if (!category) {
    return (
      <div className="min-h-screen pt-32 px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Collection Not Found</h1>
        <Link to="/" className="text-sastra-400 hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-sastra-400 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium uppercase tracking-widest">Back to Universe</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-32"
            >
              <div className={`w-16 h-16 rounded-2xl ${category.bg} flex items-center justify-center mb-6`}>
                <category.icon className={`w-8 h-8 ${category.color}`} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                {category.name}
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                {category.description}
              </p>
              
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
                <div className="flex items-center gap-2 text-sastra-400 mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Demographic Insights</span>
                </div>
                <p className="text-zinc-300 text-sm italic">"These tools have been curated specifically for {group} to ensure maximum utility, safety, and ease of use."</p>
                <p className="text-zinc-500 text-[10px] mt-4 uppercase tracking-[0.2em]">{tools.length} Specialised Tools</p>
              </div>
            </motion.div>
          </div>

          {/* Tools Grid */}
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
                    <h3 className="text-xl font-bold text-white group-hover:text-sastra-400 transition-colors uppercase tracking-tight">{tool.name}</h3>
                    <div className="p-2 rounded-lg bg-zinc-800/50">
                      <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-sastra-400 transition-colors" />
                    </div>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 group-hover:text-zinc-400 transition-colors h-12 overflow-hidden line-clamp-2">{tool.desc}</p>
                  <a 
                    href={tool.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 group-hover:text-sastra-400 transition-colors uppercase tracking-[0.2em]"
                  >
                    Explore Tool
                  </a>
                </motion.div>
              ))}
            </div>

            {tools.length === 0 && (
              <div className="mt-12 p-8 rounded-3xl border border-dashed border-zinc-800 text-center">
                  <p className="text-zinc-600 text-sm">More tools coming soon to the {category.name} collection...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
