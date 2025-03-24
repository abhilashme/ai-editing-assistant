
import { Message } from "../types/chat";

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};

export const formatTimestamp = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const sendMessageToWebhook = async (message: string): Promise<string> => {
  try {
    const encodedMessage = encodeURIComponent(message);
    const response = await fetch(
      `https://goodclicks.app.n8n.cloud/webhook/2c101f0b-d1cc-4c25-80a6-29e1ee92e7ce?message=${encodedMessage}`
    );
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error sending message to webhook:", error);
    return "Sorry, I couldn't process your request at the moment. Please try again later.";
  }
};
