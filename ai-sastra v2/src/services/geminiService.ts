import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const getAIResponse = async (userQuery: string, chatHistory: { role: "user" | "bot", text: string }[]) => {
  if (!process.env.GEMINI_API_KEY) {
    return "I'm currently in offline mode because the API key is missing. How can I help you with our local directory?";
  }

  const model = "gemini-3-flash-preview";
  
  // Format history for Gemini
  const contents = chatHistory.map(msg => ({
    role: msg.role === "user" ? "user" : "model",
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
        systemInstruction: `You are Jatayu, the AI Assistant for "AI-Sastra" - a platform that connects all generations with the best AI tools. 
        Your goal is to suggest the best AI tools for the user's needs. 
        You have search capabilities. If the user asks for a tool, explain what it does and why it's good. 
        Promote the categories available on AI-Sastra: Education, Generative Art, Vision, Voice, Translation, Writing, Games, Music, Video, Health, Developer, and Lifestyle.
        Be helpful, polite, and technical but accessible.`,
        tools: [{ googleSearch: {} }]
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered an error while searching for the best AI tools. Please try again or explore our directory!";
  }
};
