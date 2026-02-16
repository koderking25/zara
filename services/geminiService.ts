
import { GoogleGenAI, Type } from "@google/genai";
import { ZARA_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateConversationSpark = async () => {
  const prompt = `
    I have a friend/crush named Zara. Here is what I know about her:
    - Age: ${ZARA_DATA.age}
    - Location: ${ZARA_DATA.location}
    - Interests: ${ZARA_DATA.interests.join(", ")}
    - Favorite Song: ${ZARA_DATA.favoriteSong}
    - Personality: ${ZARA_DATA.description}

    Generate 3 unique, thoughtful, and charming conversation starters I could text her today. 
    Make them feel natural and related to her specific interests (especially the Beatles, John Denver, or AI music).
    One should be a "deep" question for a formal discussion.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              topic: { type: Type.STRING },
              message: { type: Type.STRING },
              why: { type: Type.STRING }
            },
            required: ["topic", "message", "why"]
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating sparks:", error);
    return [];
  }
};
