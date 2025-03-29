
import React, { useState } from "react";
import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";
import { Message } from "../../types/chat";
import { generateId, sendMessageToWebhook } from "../../utils/chat-utils";
import { toast } from "sonner";

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: generateId(),
      content,
      role: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    
    try {
      // Call webhook
      const response = await sendMessageToWebhook(content);
      
      // Add bot response after a small delay for a more natural feel
      setTimeout(() => {
        const botMessage: Message = {
          id: generateId(),
          content: response,
          role: "bot",
          timestamp: new Date(),
        };
        
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 700);
    } catch (error) {
      setIsTyping(false);
      toast.error("Failed to get a response. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col h-full rounded-xl border bg-card shadow-sm overflow-hidden">
      <div className="bg-primary/5 px-4 py-3 border-b">
        <h2 className="text-lg font-medium">AI Editing Assistant</h2>
      </div>
      
      <ChatWindow messages={messages} isTyping={isTyping} />
      
      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </div>
  );
};

export default Chatbot;
