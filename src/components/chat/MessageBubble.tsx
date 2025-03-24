
import React from "react";
import { Message } from "../../types/chat";
import { formatTimestamp } from "../../utils/chat-utils";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "group flex w-full items-start gap-2 animate-fade-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "flex max-w-[80%] flex-col",
          isUser ? "items-end" : "items-start"
        )}
      >
        <div
          className={cn(
            "rounded-2xl px-4 py-3 text-sm shadow-sm",
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-card text-card-foreground border"
          )}
        >
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        </div>
        <span className="mt-1 px-2 text-xs text-muted-foreground">
          {formatTimestamp(message.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
