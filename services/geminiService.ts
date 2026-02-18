
import { GoogleGenAI } from "@google/genai";
import { DEVELOPER_BIO } from "../constants";

export const getGeminiResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemPrompt = `
    You are an AI career assistant for AK Sohag, a professional Mobile Developer from Sylhet, Bangladesh.
    Context about AK Sohag: ${DEVELOPER_BIO}
    Specialization: Kotlin Multiplatform (KMP) and Compose Multiplatform (CMP).
    Skills: KMP, CMP, Kotlin, Jetpack Compose, SwiftUI, Firebase, Ktor.
    
    Answer the user's questions about AK Sohag's professional background, his expertise in KMP/CMP, and his projects in a professional, warm, and helpful manner.
    Mention his location Sylhet, Bangladesh when relevant.
    Keep your answers concise and engaging. 
    If you don't know the answer based on the provided bio, politely suggest they contact him directly.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The career assistant is currently resting. Please check back later!";
  }
};
