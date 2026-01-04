
import { GoogleGenAI } from "@google/genai";
import { PROFILE_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAIResponse = async (userPrompt: string) => {
  const context = `
    You are an AI assistant for Erin Dwi Aprilia's professional portfolio.
    Her details:
    - Name: ${PROFILE_DATA.name}
    - Birth Date: ${PROFILE_DATA.birthDate}
    - Education: ${PROFILE_DATA.education.degree} from ${PROFILE_DATA.education.institution} with GPA ${PROFILE_DATA.education.gpa}.
    - Experience:
      ${PROFILE_DATA.experiences.map(exp => `- ${exp.company} as ${exp.role} (${exp.period}): ${exp.description}`).join('\n')}
    
    Answer questions based on these details in a professional and friendly tone. 
    Use Indonesian as the primary language.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: context,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, saya sedang mengalami kendala teknis. Silakan coba lagi nanti.";
  }
};
