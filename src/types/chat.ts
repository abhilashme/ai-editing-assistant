
export type MessageRole = "user" | "bot";

export interface Message {
  id: string;
  content: string;
  role: MessageRole;
  timestamp: Date;
}
