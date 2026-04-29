import { 
  GraduationCap, 
  Palette, 
  Camera, 
  Mic, 
  Languages, 
  PenTool, 
  Gamepad2, 
  Music, 
  Video, 
  HeartPulse, 
  Code, 
  Flower2,
  Baby,
  User,
  Users2
} from "lucide-react";

export const CATEGORIES = [
  { 
    id: "education",
    name: "Education", 
    icon: GraduationCap, 
    color: "text-sastra-400", 
    bg: "bg-sastra-500/10", 
    description: "AI-powered learning assistants for all subjects and ages.",
    toolsCount: 13
  },
  { 
    id: "generative",
    name: "Generative Art", 
    icon: Palette, 
    color: "text-blue-400", 
    bg: "bg-blue-500/10",
    description: "Transform your thoughts into stunning visuals and art.",
    toolsCount: 12
  },
  { 
    id: "vision",
    name: "Vision Tools", 
    icon: Camera, 
    color: "text-pink-400", 
    bg: "bg-pink-500/10",
    description: "AI that sees and understands the world for you.",
    toolsCount: 9
  },
  { 
    id: "voice",
    name: "Voice & Speech", 
    icon: Mic, 
    color: "text-emerald-400", 
    bg: "bg-emerald-500/10",
    description: "Communicate better with speech-to-text and voice generation.",
    toolsCount: 9
  },
  { 
    id: "translation",
    name: "Translation", 
    icon: Languages, 
    color: "text-amber-400", 
    bg: "bg-amber-500/10",
    description: "Breaking language barriers in real-time.",
    toolsCount: 7
  },
  { 
    id: "writing",
    name: "Writing", 
    icon: PenTool, 
    color: "text-cyan-400", 
    bg: "bg-cyan-500/10",
    description: "From emails to novels, write better with AI help.",
    toolsCount: 9
  },
  { 
    id: "games",
    name: "AI Games", 
    icon: Gamepad2, 
    color: "text-red-400", 
    bg: "bg-red-500/10",
    description: "Experience the next generation of interactive entertainment.",
    toolsCount: 7
  },
  { 
    id: "music",
    name: "Music", 
    icon: Music, 
    color: "text-violet-400", 
    bg: "bg-violet-500/10",
    description: "Composing and editing audio with intelligence.",
    toolsCount: 8
  },
  { 
    id: "video", 
    name: "Video", 
    icon: Video, 
    color: "text-teal-400", 
    bg: "bg-teal-500/10",
    description: "The future of cinema and video creation.",
    toolsCount: 9
  },
  { 
    id: "health",
    name: "Health", 
    icon: HeartPulse, 
    color: "text-orange-400", 
    bg: "bg-orange-500/10",
    description: "Your digital assistant for a healthier life.",
    toolsCount: 8
  },
  { 
    id: "code",
    name: "Developer", 
    icon: Code, 
    color: "text-indigo-400", 
    bg: "bg-indigo-500/10",
    description: "Ship better software, faster.",
    toolsCount: 10
  },
  { 
    id: "lifestyle",
    name: "Lifestyle", 
    icon: Flower2, 
    color: "text-lime-400", 
    bg: "bg-lime-500/10",
    description: "AI that makes daily life smoother.",
    toolsCount: 7
  }
];

export const AGE_CATEGORIES = [
  {
    id: "kids",
    name: "AI for Kids",
    icon: Baby,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    description: "Safe, educational, and fun AI tools designed for the younger generation.",
    path: "/age/kids"
  },
  {
    id: "adults",
    name: "AI for Adults",
    icon: User,
    color: "text-sastra-400",
    bg: "bg-sastra-500/10",
    description: "Professional productivity, creativity, and lifestyle tools for adults.",
    path: "/age/adults"
  },
  {
    id: "seniors",
    name: "AI for Seniors",
    icon: Users2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    description: "Accessible, health-focused, and simple AI tools to assist seniors.",
    path: "/age/seniors"
  }
];
