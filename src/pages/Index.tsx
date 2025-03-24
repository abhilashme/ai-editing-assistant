
import React from "react";
import Chatbot from "../components/chat/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 max-w-6xl mx-auto">
      <header className="mb-8 text-center animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Talk to n8n</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A simple interface to communicate with your n8n workflow through a webhook.
        </p>
      </header>
      
      <div className="flex-1 w-full max-w-3xl mx-auto">
        <div className="h-[600px] animate-fade-in">
          <Chatbot />
        </div>
      </div>
      
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>Built with premium UI design principles</p>
      </footer>
    </div>
  );
};

export default Index;
