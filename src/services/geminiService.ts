import { GoogleGenAI } from "@google/genai";

export const getAIResponse = async (userQuery: string, chatHistory: { role: "user" | "bot", text: string }[]) => {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return "I'm currently in offline mode because the Gemini API Key is missing. Please add your key (linked to Name: Gemini API Key) in the platform's Secret Settings to activate my celestial guidance!";
  }

  const ai = new GoogleGenAI({ apiKey });
  const model = "gemini-3-flash-preview";
  
  // Format history for Gemini
  const contents = chatHistory.map(msg => ({
    role: msg.role === "user" ? "user" : "model" as any,
    parts: [{ text: msg.text }]
  }));

  // Add current query
  contents.push({
    role: "user",
    parts: [{ text: userQuery }]
  });

  try {
    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: `You are Jatayu, the elite AI Guide for "AI-Sastra". 
        You possess a deep internal library of the absolute BEST AI tools available today.
        
        INTERNAL KNOWLEDGE BASE:
        - TEXT & WRITING: 
            * ChatGPT (Versatile, Creative)
            * Claude (Nuanced, Long-context)
            * Jasper (Marketing)
            * Copy.ai (Copywriting)
        - IMAGES & ART:
            * Midjourney (Photorealistic, Artistic)
            * DALL-E 3 (Intuitive, Integrated)
            * Stable Diffusion (Open-source, Customizable)
            * Canva Magic (Design-focused)
        - VIDEO & ANIMATION:
            * Sora (Hyper-realistic)
            * Runway Gen-2 (Creative control)
            * HeyGen (Avatars, Business)
            * Pika (Cinematic)
        - CODING:
            * GitHub Copilot (Industry standard)
            * Cursor (Modern IDE experience)
            * Replit Ghostwriter (Cloud development)
        - AUDIO & VOICE:
            * ElevenLabs (Realistic voice synth)
            * Suno (Music creation)
            * Udio (High-fidelity music)
            * Adobe Podcast (Audio cleaning)
        - PRODUCTIVITY & RESEARCH:
            * Perplexity (AI Search engine)
            * Notion AI (Note-taking)
            * Otter.ai (Meetings)
            * Grammarly (Writing assistant)

        RESPONSE LOGIC:
        1. Identify the user's intent or problem.
        2. Match the problem to 2-3 specific tools from the internal knowledge base.
        3. Explain WHY these tools are the perfect fit.
        4. Refer users to AI-Sastra categories (Education, Art, Vision, Voice, etc.) when relevant.
        5. Structure responses with clear headings, bold tool names, and celestial accents.
        
        Rules:
        - Be direct, helpful, and concise.
        - Use bullet points for lists.
        - Style: Professional yet celestial (e.g., "Scanning the digital horizons", "The guiding light of AI").
        - Do not use excessive filler language.`,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered an error while navigating the digital skies. Please ensure your Gemini API Key is valid in the platform settings.";
  }
};
