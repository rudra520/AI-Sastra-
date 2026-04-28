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
  Flower2 
} from "lucide-react";

export const CATEGORIES = [
  { 
    id: "education",
    name: "Education", 
    icon: GraduationCap, 
    color: "text-sastra-400", 
    bg: "bg-sastra-500/10", 
    description: "AI-powered learning assistants for all subjects and ages.",
    tools: [
      { name: "ChatGPT", desc: "OpenAI's versatile conversational AI for learning and writing.", link: "https://chat.openai.com" },
      { name: "Claude", desc: "Anthropic's helpful and harmless AI assistant with large context.", link: "https://claude.ai" },
      { name: "Gemini", desc: "Google's powerful multimodal AI integrated with Google apps.", link: "https://gemini.google.com" },
      { name: "Perplexity", desc: "AI-powered search engine that provides cited sources.", link: "https://perplexity.ai" },
      { name: "Khanmigo", desc: "Khan Academy's AI tutor for students and teachers.", link: "https://www.khanacademy.org/khanmigo" },
      { name: "Symbolab", desc: "Advanced math solver for calculus, algebra, and more.", link: "https://www.symbolab.com" }
    ]
  },
  { 
    id: "generative",
    name: "Generative Art", 
    icon: Palette, 
    color: "text-blue-400", 
    bg: "bg-blue-500/10",
    description: "Transform your thoughts into stunning visuals and art.",
    tools: [
      { name: "Midjourney", desc: "High-quality artistic image generation via Discord.", link: "https://www.midjourney.com" },
      { name: "DALL-E 3", desc: "OpenAI's latest image model with precise following.", link: "https://openai.com/dall-e-3" },
      { name: "Stable Diffusion", desc: "Open-source, powerful image generation on your hardware.", link: "https://stability.ai" },
      { name: "Canva Magic Media", desc: "AI image and video generation inside Canva.", link: "https://canva.com" },
      { name: "Adobe Firefly", desc: "Commercial-safe generative AI inside Creative Cloud.", link: "https://firefly.adobe.com" }
    ]
  },
  { 
    id: "vision",
    name: "Vision Tools", 
    icon: Camera, 
    color: "text-pink-400", 
    bg: "bg-pink-500/10",
    description: "AI that sees and understands the world for you.",
    tools: [
      { name: "Google Lens", desc: "Search what you see and translate text in real-time.", link: "https://lens.google" },
      { name: "Seeing AI", desc: "Microsoft's app for blind and low vision community.", link: "https://www.microsoft.com/en-us/ai/seeing-ai" },
      { name: "Be My Eyes", desc: "Connecting people with vision loss to AI and volunteers.", link: "https://www.bemyeyes.com" }
    ]
  },
  { 
    id: "voice",
    name: "Voice & Speech", 
    icon: Mic, 
    color: "text-emerald-400", 
    bg: "bg-emerald-500/10",
    description: "Communicate better with speech-to-text and voice generation.",
    tools: [
      { name: "ElevenLabs", desc: "The most realistic AI voice synthesis platform.", link: "https://elevenlabs.io" },
      { name: "Otter.ai", desc: "Smart meeting notes and live transcription.", link: "https://otter.ai" },
      { name: "Descript", desc: "Edit audio and video like a text document using AI.", link: "https://descript.com" }
    ]
  },
  { 
    id: "translation",
    name: "Translation", 
    icon: Languages, 
    color: "text-amber-400", 
    bg: "bg-amber-500/10",
    description: "Breaking language barriers in real-time.",
    tools: [
      { name: "DeepL", desc: "The world's most accurate and nuanced translator.", link: "https://www.deepl.com" },
      { name: "Google Translate", desc: "Instant translation across 100+ languages.", link: "https://translate.google.com" },
      { name: "Duolingo", desc: "Learn languages with AI-powered personalized lessons.", link: "https://duolingo.com" }
    ]
  },
  { 
    id: "writing",
    name: "Writing", 
    icon: PenTool, 
    color: "text-cyan-400", 
    bg: "bg-cyan-500/10",
    description: "From emails to novels, write better with AI help.",
    tools: [
      { name: "Grammarly", desc: "AI writing assistant for clear and effective communication.", link: "https://grammarly.com" },
      { name: "Jasper", desc: "AI content platform for marketing and business teams.", link: "https://jasper.ai" },
      { name: "Copy.ai", desc: "Generate sales copy and marketing content quickly.", link: "https://copy.ai" },
      { name: "Writer", desc: "Enterprise generative AI for consistent brand voice.", link: "https://writer.com" }
    ]
  },
  { 
    id: "games",
    name: "AI Games", 
    icon: Gamepad2, 
    color: "text-red-400", 
    bg: "bg-red-500/10",
    description: "Experience the next generation of interactive entertainment.",
    tools: [
      { name: "AI Dungeon", desc: "Infinite text-based roleplay adventures.", link: "https://aidungeon.com" },
      { name: "Chess.com AI", desc: "Play against AI bots with different personalities.", link: "https://chess.com" },
      { name: "Character.AI", desc: "Chat with fictional characters and historical figures.", link: "https://character.ai" }
    ]
  },
  { 
    id: "music",
    name: "Music", 
    icon: Music, 
    color: "text-violet-400", 
    bg: "bg-violet-500/10",
    description: "Composing and editing audio with intelligence.",
    tools: [
      { name: "Suno AI", desc: "Generate full songs with vocals and instruments.", link: "https://suno.com" },
      { name: "Udio", desc: "High-fidelity AI music generation and remixing.", link: "https://udio.com" },
      { name: "AIVA", desc: "AI music composer for film and games.", link: "https://aiva.ai" }
    ]
  },
  { 
    id: "video",
    name: "Video", 
    icon: Video, 
    color: "text-teal-400", 
    bg: "bg-teal-500/10",
    description: "The future of cinema and video creation.",
    tools: [
      { name: "Sora", desc: "OpenAI's photorealistic text-to-video model.", link: "https://openai.com/sora" },
      { name: "Runway Gen-3", desc: "Professional-grade AI video generation and editing.", link: "https://runwayml.com" },
      { name: "HeyGen", desc: "Create high-quality AI avatars for video content.", link: "https://heygen.com" },
      { name: "Luma Dream Machine", desc: "Fast, cinematic video generation from text or images.", link: "https://lumalabs.ai" }
    ]
  },
  { 
    id: "health",
    name: "Health", 
    icon: HeartPulse, 
    color: "text-orange-400", 
    bg: "bg-orange-500/10",
    description: "Your digital assistant for a healthier life.",
    tools: [
      { name: "Whoop", desc: "AI-powered wearable for performance and recovery.", link: "https://whoop.com" },
      { name: "Sleep Cycle", desc: "AI sleep tracking and smart alarm system.", link: "https://sleepcycle.com" },
      { name: "Ada Health", desc: "Personalized health assessment using AI.", link: "https://ada.com" }
    ]
  },
  { 
    id: "code",
    name: "Developer", 
    icon: Code, 
    color: "text-indigo-400", 
    bg: "bg-indigo-500/10",
    description: "Ship better software, faster.",
    tools: [
      { name: "GitHub Copilot", desc: "AI pair programmer inside your editor.", link: "https://github.com/features/copilot" },
      { name: "Cursor", desc: "The first AI-native code editor (VS Code fork).", link: "https://cursor.com" },
      { name: "Replit Agent", desc: "AI that builds full apps with you on Replit.", link: "https://replit.com" },
      { name: "v0.dev", desc: "Next.js and Tailwind component generator by Vercel.", link: "https://v0.dev" }
    ]
  },
  { 
    id: "lifestyle",
    name: "Lifestyle", 
    icon: Flower2, 
    color: "text-lime-400", 
    bg: "bg-lime-500/10",
    description: "AI that makes daily life smoother.",
    tools: [
      { name: "Robinhood AI", desc: "Smart investing insights and analysis.", link: "https://robinhood.com" },
      { name: "Tavus", desc: "Personalized AI video messages for outreach.", link: "https://tavus.io" },
      { name: "Yoodli", desc: "AI speech coach for communication improvement.", link: "https://yoodli.ai" }
    ]
  }
];
