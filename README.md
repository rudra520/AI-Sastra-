
---

# AI-Sastra 🌟

> One Platform. Every AI. Every Age.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com)

AI-Sastra is the world's first unified AI platform — bringing educational tools for kids, creative apps for adults, and practical utilities for seniors into a single, intuitive experience.

The platform currently integrates **108+ AI tools** across **12 categories**, serving **3 age groups** all under one roof.

![AI-Sastra Preview](https://github.com/rudra520/AI-Sastra-/blob/59c232ecb0521d7f2847b396abd0c867a7aa95a7/preview%20of%20ai%20Sastra.png) <!-- You can replace this with an actual screenshot or OG image -->

## ✨ Features

### 🎯 Core Capabilities

- **📚 Educational Tutors** — Math, science, and language tutors that adapt to each learner's pace — from a 7-year-old learning fractions to a high schooler tackling calculus.
- **🎨 Creative Studio** — Generate art, music, stories, and videos. From kids' illustrated storybooks to adults creating marketing visuals.
- **👴 Senior Utilities** — Voice-controlled reminders, simplified health trackers, medication schedulers, and news summaries — designed with accessibility-first principles.
- **🎮 Entertainment & Games** — AI-powered quizzes, trivia, interactive fiction, and adaptive games that entertain while they teach.
- **👁️ Vision & Voice Tools** — Image recognition, document scanning, real-time translation, and voice-command navigation.
- **🌿 Hobby & Lifestyle Aids** — Gardening planners, recipe generators, travel itinerary creators, knitting pattern designers.

### 👥 Age-Adaptive Interface

The UI morphs based on who's using it. Same powerful engine, completely different experience.

- **Kids Mode** — Extra-large tap targets, colorful icons, voice-first interaction, gamified learning with rewards, and COPPA-compliant parental controls.
- **Adult Mode** — Full creative and productivity suite
- **Senior Mode** — Simplified interface with voice navigation and accessibility features

### 🚀 What Makes AI-Sastra Different

- **Age-Adapting Engine** — Dynamically restructures navigation and interaction models based on user age — not just a bigger font.
- **Universal Context** — Shared context layer where a parent's AI assistant learns from a child's progress to recommend better tools.
- **Unified Onboarding** — Guided, age-appropriate onboarding that teaches users which AI can help them and how to use it safely.

### 📊 Platform Stats

| Metric | Value |
|--------|-------|
| AI Tools Integrated | 108+ |
| Age Groups Served | 3 |
| AI Categories | 12 |
| Platform Type | 1 Unified Platform |

### 🔧 AI Categories Covered

Math Tutors • Art Generation • Voice Assistants • Translators • AI Games • Creative Writing • Science Tutors • Music Generation • Video Creation • Health Utilities • Language Learning • Vision Tools

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Clerk
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **AI Integrations**: Vercel AI SDK, various LLM providers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm / bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-sastra.git
   cd ai-sastra
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # App Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   
   # Authentication (Clerk)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   
   # AI Providers (add as needed)
   OPENAI_API_KEY=your_openai_api_key
   # ... other API keys
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ai-sastra/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Main app interface
│   ├── age/               # Age-specific views (kids, adults, seniors)
│   ├── api/               # API routes for AI services
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── age-adaptive/     # Age-specific UI components
│   └── ai-tools/         # Individual AI tool components
├── lib/                   # Utility functions and configurations
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── public/                # Static assets
└── styles/                # Global styles
```

## 🚢 Deployment

This project is optimized for deployment on **Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-sastra)

Or deploy manually:

```bash
npm run build
npm run start
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Deployed on [Vercel](https://vercel.com)
- AI integrations powered by [Vercel AI SDK](https://sdk.vercel.ai/)

## 📞 Contact & Support

- **Live Website**: [https://ai-sastra.vercel.app](https://ai-sastra.vercel.app)
- **Status**: Now in Development — Alpha.v1 live

---

<div align="center">
  <sub>Built with ❤️ for learners, creators, and explorers of all ages.</sub>
</div>

---

