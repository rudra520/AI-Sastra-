import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Sparkles, 
  PlayCircle, 
  ChevronDown,
  GraduationCap,
  Palette,
  Mic,
  Languages,
  Gamepad2,
  PenTool,
  FlaskConical,
  Music,
  Video,
  HeartPulse,
  BookOpen,
  Camera,
  MessageCircle,
  UserCheck,
  GitBranch,
  Bot,
  Send,
  Baby,
  User,
  Heart,
  Zap,
  Image as ImageIcon,
  Code,
  BarChart3,
  HeartHandshake,
  Flower2,
  CheckCircle2,
  Flame,
  Rocket,
  Mail,
  Merge
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES, AGE_CATEGORIES } from "../data/categories";

const Hero = () => {
  const [statsValue, setStatsValue] = useState({ tools: 0, groups: 0, categories: 0, unified: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
        setStatsValue({ tools: 108, groups: 3, categories: 12, unified: 1 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: "AI Tools Integrated", value: statsValue.tools, suffix: "+" },
    { label: "Age Groups Served", value: statsValue.groups, suffix: "" },
    { label: "AI Categories", value: statsValue.categories, suffix: "" },
    { label: "Unified Platform", value: statsValue.unified, suffix: "" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sastra-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sastra-500/30 bg-sastra-500/10 text-sastra-300 text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sastra-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sastra-400"></span>
          </span>
          Now in Development - Alpha.v1 live
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-space font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-6 text-white"
        >
          <span className="block">One Platform.</span>
          <span className="block bg-gradient-to-r from-sastra-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">Every AI.</span>
          <span className="block text-zinc-400">Every Age.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI-Sastra is the world's first unified AI platform — bringing educational tools for kids, creative apps for adults, and practical utilities for seniors into a single, intuitive experience.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link 
            to="/signup"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-gradient-to-r from-sastra-600 to-blue-600 rounded-full text-white hover:shadow-lg hover:shadow-sastra-500/25 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Get Started
          </Link>
          <button className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-zinc-300 border border-zinc-700 rounded-full hover:border-zinc-500 hover:text-white transition-all flex items-center justify-center gap-2">
            <PlayCircle className="w-4 h-4" />
            Watch Demo
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="p-4 rounded-2xl glass-morphism border-zinc-800/50 glow-box">
              <div className="text-2xl sm:text-3xl font-space font-bold text-white text-glow">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs text-zinc-500 mt-1 uppercase tracking-tighter">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Marquee = () => {
    const items = [
      { icon: GraduationCap, text: "Math Tutors" },
      { icon: Palette, text: "Art Generation" },
      { icon: Mic, text: "Voice Assistants" },
      { icon: Languages, text: "Translators" },
      { icon: Gamepad2, text: "AI Games" },
      { icon: PenTool, text: "Creative Writing" },
      { icon: FlaskConical, text: "Science Tutors" },
      { icon: Music, text: "Music Generation" },
      { icon: Video, text: "Video Creation" },
      { icon: HeartPulse, text: "Health Utilities" },
      { icon: BookOpen, text: "Language Learning" },
      { icon: Camera, text: "Vision Tools" },
    ];
  
    return (
      <section className="py-8 border-y border-zinc-800/50 bg-zinc-950/50 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-zinc-600 text-sm font-medium shrink-0">
              <item.icon className="w-4 h-4" />
              <span>{item.text}</span>
              <span className="ml-8 text-zinc-800 whitespace-nowrap">•</span>
            </div>
          ))}
        </div>
      </section>
    );
  };

const Features = () => {
    const features = [
      {
        title: "Educational Tutors",
        desc: "Math, science, and language tutors that adapt to each learner's pace — from a 7-year-old learning fractions to a high schooler tackling calculus.",
        icon: GraduationCap,
        color: "from-sastra-500/20 to-sastra-600/20",
        iconColor: "text-sastra-400"
      },
      {
        title: "Creative Studio",
        desc: "Generate art, music, stories, and videos. From kids' illustrated storybooks to adults creating marketing visuals — all powered by AI.",
        icon: Palette,
        color: "from-blue-500/20 to-blue-600/20",
        iconColor: "text-blue-400"
      },
      {
        title: "Senior Utilities",
        desc: "Voice-controlled reminders, simplified health trackers, medication schedulers, and news summaries — designed with accessibility-first principles.",
        icon: HeartPulse,
        color: "from-pink-500/20 to-pink-600/20",
        iconColor: "text-pink-400"
      },
      {
        title: "Entertainment & Games",
        desc: "AI-powered quizzes, trivia, interactive fiction, and adaptive games that entertain while they teach — customized for every age group.",
        icon: Gamepad2,
        color: "from-amber-500/20 to-amber-600/20",
        iconColor: "text-amber-400"
      },
      {
        title: "Vision & Voice Tools",
        desc: "Image recognition, document scanning, real-time translation, and voice-command navigation — through a single interface.",
        icon: Camera,
        color: "from-emerald-500/20 to-emerald-600/20",
        iconColor: "text-emerald-400"
      },
      {
        title: "Hobby & Lifestyle Aids",
        desc: "Gardening planners, recipe generators, travel itinerary creators, knitting pattern designers — AI that enhances what you already love.",
        icon: Flower2,
        color: "from-cyan-500/20 to-cyan-600/20",
        iconColor: "text-cyan-400"
      }
    ];
  
    return (
      <section id="features" className="py-24 sm:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sastra-400 text-sm font-semibold uppercase tracking-wider">Core Capabilities</span>
            <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-4 text-white">Everything AI, Under One Roof</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">AI-Sastra unifies the fragmented AI landscape into one cohesive experience.</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 group transition-colors hover:border-sastra-500/20"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}>
                  <f.icon className={`w-6 h-6 ${f.iconColor}`} />
                </div>
                <h3 className="font-space font-semibold text-lg mb-2 text-white">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

const AgeAdaptive = () => {
    const [activeTab, setActiveTab] = useState("kids");

    const tabs = [
        { id: "kids", label: "Kids (6–12)", icon: Baby },
        { id: "adults", label: "Adults (18–59)", icon: User },
        { id: "seniors", label: "Seniors (60+)", icon: Heart }
    ];

    const content: any = {
        kids: {
            title: "Designed for Little Explorers",
            icon: Sparkles,
            color: "text-amber-400",
            bg: "bg-amber-500/20",
            gradient: "from-amber-900/20 via-zinc-900/80 to-emerald-900/20",
            items: ["Math Fun", "Science Lab", "Story Time", "Draw & Create"],
            points: [
                "Extra-large tap targets and colorful icons",
                "Voice-first interaction — no typing required",
                "Gamified learning with rewards",
                "COPPA-compliant parental controls",
                "No external links or ads"
            ]
        },
        adults: {
            title: "Power & Precision for Professionals",
            icon: Zap,
            color: "text-sastra-400",
            bg: "bg-sastra-500/20",
            gradient: "from-sastra-900/20 via-zinc-900/80 to-blue-900/20",
            items: ["AI Writer", "Image Gen", "Code Assist", "Analytics"],
            points: [
                "Full-featured creative suite: writing, image, video",
                "Custom workflows and tool chaining",
                "API access for developer integrations",
                "Productivity analytics and history",
                "Hobby & lifestyle AI aids"
            ]
        },
        seniors: {
            title: "Accessibility Is Not an Afterthought",
            icon: HeartHandshake,
            color: "text-emerald-400",
            bg: "bg-emerald-500/20",
            gradient: "from-emerald-900/20 via-zinc-900/80 to-blue-900/20",
            items: ["Voice Control", "Health Tracker", "News Summary", "Quick Call"],
            points: [
                "WCAG AAA compliant contrast ratios",
                "Voice-first navigation navigation",
                "Large text and simplified layouts",
                "Medication reminders and health tracking",
                "One-tap family connections"
            ]
        }
    };

    return (
        <section id="age-adaptive" className="py-24 sm:py-32 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Age-Adaptive Interface</span>
                    <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-4 text-white">One Platform, Three Worlds</h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">The UI morphs based on who's using it. Same powerful engine, completely different experience.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map((tab) => (
                        <button 
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-full border text-sm font-medium transition-all flex items-center gap-2 ${activeTab === tab.id ? "bg-gradient-to-r from-sastra-500 to-blue-500 border-transparent text-white shadow-lg shadow-sastra-500/20" : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700"}`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    >
                        <div className={`rounded-3xl overflow-hidden border border-zinc-800/50 bg-gradient-to-br ${content[activeTab].gradient} p-8 shadow-2xl relative group`}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className={`w-10 h-10 rounded-xl ${content[activeTab].bg} flex items-center justify-center`}>
                                    <Sparkles className={`w-5 h-5 ${content[activeTab].color}`} />
                                </div>
                                <span className={`font-space font-semibold uppercase tracking-wider text-sm ${content[activeTab].color}`}>
                                    {activeTab} Mode
                                </span>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                {content[activeTab].items.map((item: string, i: number) => (
                                    <div key={i} className="p-4 rounded-2xl bg-zinc-950/40 border border-zinc-800/50 text-center backdrop-blur-sm">
                                        <div className="text-sm font-medium text-zinc-200">{item}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-space font-bold text-3xl mb-6 text-white">{content[activeTab].title}</h3>
                            <div className="space-y-4 mb-8">
                                {content[activeTab].points.map((point: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className={`w-5 h-5 ${content[activeTab].color} flex-shrink-0 mt-0.5`} />
                                        <span className="text-zinc-400 leading-relaxed">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <Link 
                                to={`/age/${activeTab}`}
                                className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all ${content[activeTab].bg.replace('/20', '')} text-white hover:shadow-lg hover:shadow-zinc-500/20`}
                            >
                                <Sparkles className="w-4 h-4" />
                                Explore {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Universe
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

const DirectoryHub = () => {
    return (
        <section id="directory" className="py-24 sm:py-32 bg-zinc-950/20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">AI Marketplace</span>
                    <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-4 text-white">Every AI Tool You'll Ever Need</h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Categorized for the modern seeker. Journey through our celestial suites.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {CATEGORIES.map((cat, i) => (
                        <Link 
                            key={i} 
                            to={`/category/${cat.id}`}
                            className="group p-5 rounded-2xl glass-morphism border-zinc-800/50 glow-box transition-all text-center cursor-pointer hover:bg-zinc-900/60"
                        >
                            <div className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                <cat.icon className={`w-6 h-6 ${cat.color}`} />
                            </div>
                            <div className="text-sm font-semibold text-zinc-200">{cat.name}</div>
                            <div className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">{cat.toolsCount} tools</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AgeGroupsSection = () => {
    return (
        <section className="py-12 pb-24 px-4 bg-zinc-950/40">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="font-space font-bold text-2xl text-white uppercase tracking-widest flex items-center justify-center gap-3">
                        <Merge className="w-6 h-6 text-sastra-400" />
                        Explore by Age Universe
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {AGE_CATEGORIES.map((age) => (
                        <Link 
                            key={age.id}
                            to={age.path}
                            className="group relative p-8 rounded-3xl glass-morphism border-zinc-800/50 overflow-hidden glow-box transition-all hover:border-sastra-500/30"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 ${age.bg} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl ${age.bg} flex items-center justify-center mb-6`}>
                                    <age.icon className={`w-8 h-8 ${age.color}`} />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-sastra-400 transition-colors">{age.name}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-6 group-hover:text-zinc-400 transition-colors">{age.description}</p>
                                <span className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] flex items-center gap-2">
                                    Browse Universe <Sparkles className="w-3 h-3 text-sastra-400" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Breakthrough = () => {
    return (
        <section id="breakthrough" className="py-24 sm:py-32 relative overflow-hidden px-4">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6">
                        <Flame className="w-3 h-3 fill-amber-300" />
                        The Differentiator
                    </div>
                    <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-4 text-white">The <span className="text-amber-400">Not-Done-Yet</span> List</h2>
                    <p className="text-zinc-400 text-lg max-w-3xl mx-auto">Nobody has combined these elements into a single experience. Here's why AI-Sastra is different.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
                    {[
                        { title: "Age-Adapting Engine", desc: "A UI that dynamically restructures navigation and interaction models based on user age — not just a bigger font.", icon: Baby },
                        { title: "Universal Context", desc: "A shared context layer where a parent's AI assistant learns from a child's progress to recommend better tools.", icon: Merge },
                        { title: "Unified Onboarding", desc: "Guided, age-appropriate onboarding that teaches users which AI can help them and how to use it safely.", icon: Sparkles }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 transition-colors relative group">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-500">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h4 className="font-space font-bold text-xl mb-4 text-white">{item.title}</h4>
                            <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Home = () => {
    return (
        <>
            <Hero />
            <Marquee />
            <Features />
            <AgeAdaptive />
            <DirectoryHub />
            <AgeGroupsSection />
            <Breakthrough />
        </>
    );
};
