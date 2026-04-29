import { 
  BookOpen, Image, Eye, Mic2, Languages, PenTool, 
  Gamepad2, Music, Video, HeartPulse, Code2, Sparkles,
  LucideIcon
} from "lucide-react";

export interface AITool {
  id: string;
  name: string;
  desc: string;
  link: string;
  category: string;
  ageGroups: ("kids" | "adults" | "seniors")[];
}

export const TOOLS_DB: AITool[] = [
  // EDUCATION
  { id: "e1", category: "education", name: "ChatGPT", desc: "OpenAI's versatile conversational AI for learning and writing.", link: "https://chat.openai.com", ageGroups: ["kids", "adults", "seniors"] },
  { id: "e2", category: "education", name: "Claude", desc: "Anthropic's helpful and harmless AI assistant with large context.", link: "https://claude.ai", ageGroups: ["adults", "seniors"] },
  { id: "e3", category: "education", name: "Gemini", desc: "Google's powerful multimodal AI integrated with Google apps.", link: "https://gemini.google.com", ageGroups: ["kids", "adults", "seniors"] },
  { id: "e4", category: "education", name: "Perplexity", desc: "AI-powered search engine that provides cited sources.", link: "https://perplexity.ai", ageGroups: ["adults", "seniors"] },
  { id: "e5", category: "education", name: "Khanmigo", desc: "Khan Academy's AI tutor for students and teachers.", link: "https://www.khanacademy.org/khanmigo", ageGroups: ["kids"] },
  { id: "e6", category: "education", name: "Symbolab", desc: "Advanced math solver for calculus, algebra, and more.", link: "https://www.symbolab.com", ageGroups: ["kids", "adults"] },
  { id: "e7", category: "education", name: "Grammar Scribe", desc: "Real-time writing and grammar improver for students.", link: "https://grammarly.com", ageGroups: ["kids", "adults"] },
  { id: "e8", category: "education", name: "ResearchRabbit", desc: "Maps relevant research papers based on your interests.", link: "https://researchrabbitapp.com", ageGroups: ["adults"] },
  { id: "e9", category: "education", name: "Consensus", desc: "AI search engine that finds evidence-based answers in research.", link: "https://consensus.app", ageGroups: ["adults"] },
  { id: "e10", category: "education", name: "Elicit", desc: "Automates research tasks like summarizing papers and data extraction.", link: "https://elicit.org", ageGroups: ["adults"] },
  { id: "e11", category: "education", name: "Socratic", desc: "Google's learning app that helps students understand homework.", link: "https://socratic.org", ageGroups: ["kids"] },
  { id: "e12", category: "education", name: "Coursera AI", desc: "AI-powered course search and learning summaries.", link: "https://coursera.org", ageGroups: ["adults", "seniors"] },
  { id: "e13", category: "education", name: "WolframAlpha", desc: "Computational intelligence engine for math and science.", link: "https://wolframalpha.com", ageGroups: ["kids", "adults"] },

  // GENERATIVE ART
  { id: "a1", category: "art", name: "Midjourney", desc: "High-quality artistic image generation via Discord.", link: "https://www.midjourney.com", ageGroups: ["adults"] },
  { id: "a2", category: "art", name: "DALL-E 3", desc: "OpenAI's latest image model with precise following.", link: "https://openai.com/dall-e-3", ageGroups: ["kids", "adults", "seniors"] },
  { id: "a3", category: "art", name: "Stable Diffusion", desc: "Open-source, powerful image generation on your hardware.", link: "https://stability.ai", ageGroups: ["adults"] },
  { id: "a4", category: "art", name: "Canva Magic Media", desc: "AI image and video generation inside Canva.", link: "https://canva.com", ageGroups: ["kids", "adults", "seniors"] },
  { id: "a5", category: "art", name: "Adobe Firefly", desc: "Commercial-safe generative AI inside Creative Cloud.", link: "https://firefly.adobe.com", ageGroups: ["adults"] },
  { id: "a6", category: "art", name: "Leonardo.ai", desc: "Production-quality assets for your creative projects.", link: "https://leonardo.ai", ageGroups: ["adults"] },
  { id: "a7", category: "art", name: "Playground AI", desc: "Easy-to-use image creator and editor.", link: "https://playgroundai.com", ageGroups: ["kids", "adults"] },
  { id: "a8", category: "art", name: "Artbreeder", desc: "Collaborative tool for creating unique characters and landscapes.", link: "https://artbreeder.com", ageGroups: ["adults"] },
  { id: "a9", category: "art", name: "NightCafe", desc: "Artistic AI art generator with multiple algorithms.", link: "https://nightcafe.studio", ageGroups: ["adults"] },
  { id: "a10", category: "art", name: "Recraft.ai", desc: "Vector and raster illustrations for designers.", link: "https://recraft.ai", ageGroups: ["adults"] },
  { id: "a11", category: "art", name: "BlueWillow", desc: "Free-to-start community image generation.", link: "https://bluewillow.ai", ageGroups: ["adults"] },
  { id: "a12", category: "art", name: "Civitai", desc: "The hub for open-source AI image models.", link: "https://civitai.com", ageGroups: ["adults"] },

  // VISION
  { id: "v1", category: "vision", name: "Google Lens", desc: "Search what you see and translate text in real-time.", link: "https://lens.google", ageGroups: ["kids", "adults", "seniors"] },
  { id: "v2", category: "vision", name: "Seeing AI", desc: "Microsoft's app for blind and low vision community.", link: "https://www.microsoft.com/en-us/ai/seeing-ai", ageGroups: ["seniors", "adults"] },
  { id: "v3", category: "vision", name: "Be My Eyes", desc: "Connecting people with vision loss to AI and volunteers.", link: "https://www.bemyeyes.com", ageGroups: ["seniors", "adults"] },
  { id: "v4", category: "vision", name: "Clarifai", desc: "Enterprise computer vision platform for data tagging.", link: "https://clarifai.com", ageGroups: ["adults"] },
  { id: "v5", category: "vision", name: "Remove.bg", desc: "Instant background removal from any image.", link: "https://remove.bg", ageGroups: ["kids", "adults", "seniors"] },
  { id: "v6", category: "vision", name: "VanceAI", desc: "Enhance, upscale, and restore photos.", link: "https://vanceai.com", ageGroups: ["adults", "seniors"] },
  { id: "v7", category: "vision", name: "Let's Enhance", desc: "AI-powered image upscaler and quality improver.", link: "https://letsenhance.io", ageGroups: ["adults", "seniors"] },
  { id: "v8", category: "vision", name: "Envision AI", desc: "Smart glasses and app for the visually impaired.", link: "https://letsenvision.com", ageGroups: ["seniors", "adults"] },
  { id: "v9", category: "vision", name: "Object Finder AI", desc: "Identify and track objects in real-time video feeds.", link: "https://google.com/search?q=object+finder+ai", ageGroups: ["kids", "adults"] },

  // VOICE
  { id: "vo1", category: "voice", name: "ElevenLabs", desc: "The most realistic AI voice synthesis platform.", link: "https://elevenlabs.io", ageGroups: ["adults", "seniors"] },
  { id: "vo2", category: "voice", name: "Otter.ai", desc: "Smart meeting notes and live transcription.", link: "https://otter.ai", ageGroups: ["adults"] },
  { id: "vo3", category: "voice", name: "Descript", desc: "Edit audio and video like a text document using AI.", link: "https://descript.com", ageGroups: ["adults"] },
  { id: "vo4", category: "voice", name: "Voicemod", desc: "Real-time AI voice changer and soundboard.", link: "https://voicemod.net", ageGroups: ["kids", "adults"] },
  { id: "vo5", category: "voice", name: "Murf AI", desc: "Professional studio-quality voiceovers from text.", link: "https://murf.ai", ageGroups: ["adults"] },
  { id: "vo6", category: "voice", name: "Lovo AI", desc: "Create human-like voiceovers for any content.", link: "https://lovo.ai", ageGroups: ["adults"] },
  { id: "vo7", category: "voice", name: "Speechelo", desc: "Text-to-speech with natural breathing and expressions.", link: "https://speechelo.com", ageGroups: ["adults"] },
  { id: "vo8", category: "voice", name: "Play.ht", desc: "Ultra-realistic text to speech voice generator.", link: "https://play.ht", ageGroups: ["adults"] },
  { id: "vo9", category: "voice", name: "AssemblyAI", desc: "AI models for speech-to-text and audio intelligence.", link: "https://assemblyai.com", ageGroups: ["adults"] },

  // TRANSLATION
  { id: "t1", category: "translation", name: "DeepL", desc: "The world's most accurate and nuanced translator.", link: "https://www.deepl.com", ageGroups: ["kids", "adults", "seniors"] },
  { id: "t2", category: "translation", name: "Google Translate", desc: "Instant translation across 100+ languages.", link: "https://translate.google.com", ageGroups: ["kids", "adults", "seniors"] },
  { id: "t3", category: "translation", name: "Duolingo", desc: "Learn languages with AI-powered personalized lessons.", link: "https://duolingo.com", ageGroups: ["kids", "adults", "seniors"] },
  { id: "t4", category: "translation", name: "Rask AI", desc: "Translate videos into 130+ languages automatically.", link: "https://rask.ai", ageGroups: ["adults"] },
  { id: "t5", category: "translation", name: "Rosetta Stone AI", desc: "Adaptive language learning for fluency.", link: "https://rosettastone.com", ageGroups: ["adults", "seniors"] },
  { id: "t6", category: "translation", name: "Linguee", desc: "Contextual dictionary and translation database.", link: "https://linguee.com", ageGroups: ["adults"] },
  { id: "t7", category: "translation", name: "Weglot", desc: "Translate and manage websites across languages.", link: "https://weglot.com", ageGroups: ["adults"] },

  // WRITING
  { id: "w1", category: "writing", name: "Grammarly", desc: "AI writing assistant for clear and effective communication.", link: "https://grammarly.com", ageGroups: ["kids", "adults", "seniors"] },
  { id: "w2", category: "writing", name: "Jasper", desc: "AI content platform for marketing and business teams.", link: "https://jasper.ai", ageGroups: ["adults"] },
  { id: "w3", category: "writing", name: "Copy.ai", desc: "Generate sales copy and marketing content quickly.", link: "https://copy.ai", ageGroups: ["adults"] },
  { id: "w4", category: "writing", name: "Writer", desc: "Enterprise generative AI for consistent brand voice.", link: "https://writer.com", ageGroups: ["adults"] },
  { id: "w5", category: "writing", name: "Writesonic", desc: "AI-powered long-form content generation.", link: "https://writesonic.com", ageGroups: ["adults"] },
  { id: "w6", category: "writing", name: "Wordtune", desc: "Your personal writing assistant and editor.", link: "https://wordtune.com", ageGroups: ["adults"] },
  { id: "w7", category: "writing", name: "Anyword", desc: "Data-driven copywriting for performance.", link: "https://anyword.com", ageGroups: ["adults"] },
  { id: "w8", category: "writing", name: "Rytr", desc: "A better, faster way to write anything.", link: "https://rytr.me", ageGroups: ["adults"] },
  { id: "w9", category: "writing", name: "Quillbot", desc: "Paraphrasing tool to improve your writing.", link: "https://quillbot.com", ageGroups: ["kids", "adults", "seniors"] },

  // GAMES
  { id: "g1", category: "games", name: "AI Dungeon", desc: "Infinite text-based roleplay adventures.", link: "https://aidungeon.com", ageGroups: ["kids", "adults"] },
  { id: "g2", category: "games", name: "Chess.com AI", desc: "Play against AI bots with different personalities.", link: "https://chess.com", ageGroups: ["kids", "adults", "seniors"] },
  { id: "g3", category: "games", name: "Character.AI", desc: "Chat with fictional characters and historical figures.", link: "https://character.ai", ageGroups: ["kids", "adults"] },
  { id: "g4", category: "games", name: "Latitude.io", desc: "The creator hub of AI-driven gaming experiences.", link: "https://latitude.io", ageGroups: ["adults"] },
  { id: "g5", category: "games", name: "Inworld AI", desc: "Platform for creating smart non-playable characters (NPCs).", link: "https://inworld.ai", ageGroups: ["adults"] },
  { id: "g6", category: "games", name: "Modl.ai", desc: "Automated QA and testing bots for game studios.", link: "https://modl.ai", ageGroups: ["adults"] },
  { id: "g7", category: "games", name: "Rosebud AI", desc: "AI-driven game design and character generation.", link: "https://rosebud.ai", ageGroups: ["adults"] },

  // MUSIC
  { id: "m1", category: "music", name: "Suno AI", desc: "Generate full songs with vocals and instruments.", link: "https://suno.com", ageGroups: ["kids", "adults", "seniors"] },
  { id: "m2", category: "music", name: "Udio", desc: "High-fidelity AI music generation and remixing.", link: "https://udio.com", ageGroups: ["adults"] },
  { id: "m3", category: "music", name: "AIVA", desc: "AI music composer for film and games.", link: "https://aiva.ai", ageGroups: ["adults"] },
  { id: "m4", category: "music", name: "Soundraw", desc: "AI music creator for content creators and editors.", link: "https://soundraw.io", ageGroups: ["adults"] },
  { id: "m5", category: "music", name: "Boomy", desc: "Create and share your own AI-generated music.", link: "https://boomy.com", ageGroups: ["kids", "adults"] },
  { id: "m6", category: "music", name: "Epidemic Sound AI", desc: "Smart search for high-quality background music.", link: "https://epidemicsound.com", ageGroups: ["adults"] },
  { id: "m7", category: "music", name: "Moises.ai", desc: "The musician's app for track isolation and editing.", link: "https://moises.ai", ageGroups: ["adults"] },
  { id: "m8", category: "music", name: "Landr AI", desc: "AI mastering and distribution for artists.", link: "https://landr.com", ageGroups: ["adults"] },

  // VIDEO
  { id: "vi1", category: "video", name: "Sora", desc: "OpenAI's photorealistic text-to-video model.", link: "https://openai.com/sora", ageGroups: ["adults"] },
  { id: "vi2", category: "video", name: "Runway Gen-3", desc: "Professional-grade AI video generation and editing.", link: "https://runwayml.com", ageGroups: ["adults"] },
  { id: "vi3", category: "video", name: "HeyGen", desc: "Create high-quality AI avatars for video content.", link: "https://heygen.com", ageGroups: ["adults"] },
  { id: "vi4", category: "video", name: "Luma Dream Machine", desc: "Fast, cinematic video generation from text or images.", link: "https://lumalabs.ai", ageGroups: ["adults"] },
  { id: "vi5", category: "video", name: "Synthesia", desc: "Create AI videos with human-like avatars instantly.", link: "https://synthesia.io", ageGroups: ["adults"] },
  { id: "vi6", category: "video", name: "Pika", desc: "An idea-to-video platform that sets your creativity in motion.", link: "https://pika.art", ageGroups: ["adults"] },
  { id: "vi7", category: "video", name: "InVideo AI", desc: "Turn any idea or script into a video with music.", link: "https://invideo.io", ageGroups: ["adults"] },
  { id: "vi8", category: "video", name: "Pictory", desc: "AI video generation from long-form content.", link: "https://pictory.ai", ageGroups: ["adults"] },
  { id: "vi9", category: "video", name: "Filmora AI", desc: "Intelligent video editing suite for creators.", link: "https://filmora.wondershare.com", ageGroups: ["adults"] },

  // HEALTH
  { id: "h1", category: "health", name: "Whoop", desc: "AI-powered wearable for performance and recovery.", link: "https://whoop.com", ageGroups: ["adults"] },
  { id: "h2", category: "health", name: "Sleep Cycle", desc: "AI sleep tracking and smart alarm system.", link: "https://sleepcycle.com", ageGroups: ["adults", "seniors"] },
  { id: "h3", category: "health", name: "Ada Health", desc: "Personalized health assessment using AI.", link: "https://ada.com", ageGroups: ["adults", "seniors"] },
  { id: "h4", category: "health", name: "Headspace AI", desc: "Personalized meditation and mindfulness coaching.", link: "https://headspace.com", ageGroups: ["kids", "adults", "seniors"] },
  { id: "h5", category: "health", name: "Oura AI", desc: "Smart ring data analysis for wellness insights.", link: "https://ouraring.com", ageGroups: ["adults", "seniors"] },
  { id: "h6", category: "health", name: "Fabulous", desc: "AI-driven behavioral science for better habits.", link: "https://thefabulous.co", ageGroups: ["adults", "seniors"] },
  { id: "h7", category: "health", name: "Noom", desc: "AI-powered weight loss and health psychology.", link: "https://noom.com", ageGroups: ["adults", "seniors"] },
  { id: "h8", category: "health", name: "Wysa", desc: "Conversational AI for emotional resilience.", link: "https://wysa.io", ageGroups: ["kids", "adults", "seniors"] },

  // DEVELOPER
  { id: "d1", category: "developer", name: "GitHub Copilot", desc: "AI pair programmer inside your editor.", link: "https://github.com/features/copilot", ageGroups: ["adults"] },
  { id: "d2", category: "developer", name: "Cursor", desc: "The first AI-native code editor (VS Code fork).", link: "https://cursor.com", ageGroups: ["adults"] },
  { id: "d3", category: "developer", name: "Replit Agent", desc: "AI that builds full apps with you on Replit.", link: "https://replit.com", ageGroups: ["kids", "adults"] },
  { id: "d4", category: "developer", name: "v0.dev", desc: "Next.js and Tailwind component generator by Vercel.", link: "https://v0.dev", ageGroups: ["adults"] },
  { id: "d5", category: "developer", name: "Tabnine", desc: "Privacy-focused AI code completions.", link: "https://tabnine.com", ageGroups: ["adults"] },
  { id: "d6", category: "developer", name: "Blackbox AI", desc: "Lightning fast code generation and search.", link: "https://useblackbox.io", ageGroups: ["adults"] },
  { id: "d7", category: "developer", name: "Warp AI", desc: "AI-powered terminal for better workflows.", link: "https://warp.dev", ageGroups: ["adults"] },
  { id: "d8", category: "developer", name: "MutableAI", desc: "AI-accelerated software development.", link: "https://mutable.ai", ageGroups: ["adults"] },
  { id: "d9", category: "developer", name: "Hugging Face", desc: "The platform for building, training and deploying ML models.", link: "https://huggingface.co", ageGroups: ["adults"] },
  { id: "d10", category: "developer", name: "LangChain", desc: "Framework for building LLM-powered applications.", link: "https://langchain.com", ageGroups: ["adults"] },

  // LIFESTYLE
  { id: "l1", category: "lifestyle", name: "Robinhood AI", desc: "Smart investing insights and analysis.", link: "https://robinhood.com", ageGroups: ["adults"] },
  { id: "l2", category: "lifestyle", name: "Tavus", desc: "Personalized AI video messages for outreach.", link: "https://tavus.io", ageGroups: ["adults"] },
  { id: "l3", category: "lifestyle", name: "Yoodli", desc: "AI speech coach for communication improvement.", link: "https://yoodli.ai", ageGroups: ["adults"] },
  { id: "l4", category: "lifestyle", name: "PlantCare AI", desc: "Diagnose and treat your houseplants.", link: "https://google.com/search?q=plant+care+ai", ageGroups: ["kids", "adults", "seniors"] },
  { id: "l5", category: "lifestyle", name: "Traveler AI", desc: "Dynamic travel itineraries based on your preferences.", link: "https://roamaround.io", ageGroups: ["adults", "seniors"] },
  { id: "l6", category: "lifestyle", name: "Meala AI", desc: "Personalized meal planning and grocery shopping.", link: "https://meala.ai", ageGroups: ["adults", "seniors"] },
  { id: "l7", category: "lifestyle", name: "Budget AI", desc: "Smart financial tracking and forecasting.", link: "https://mint.intuit.com", ageGroups: ["adults", "seniors"] },
];
