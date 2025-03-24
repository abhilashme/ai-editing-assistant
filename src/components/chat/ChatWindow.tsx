
import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { Message } from "../../types/chat";

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
}

const ChatWindow = ({ messages, isTyping }: ChatWindowProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <div className="max-w-sm text-center">
            <h3 className="text-lg font-semibold mb-2">AI Editor</h3>
            <p className="text-muted-foreground">
              Ask a question or send a message to get started.
            </p>
          </div>
        </div>
      ) : (
        messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))
      )}
      
      {isTyping && (
        <div className="animate-fade-in">
          <TypingIndicator />
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatWindow;
