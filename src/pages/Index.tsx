
import React, { useState } from "react";
import Chatbot from "../components/chat/Chatbot";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 max-w-6xl mx-auto">
      {!showChatbot ? (
        <div className="flex-1 flex flex-col items-center justify-center animate-fade-in-up">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Editing Assistant</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Transforming children's stories, one edit at a time—meet Eddy, your AI editing companion!
            </p>
            <Button 
              size="lg" 
              onClick={() => setShowChatbot(true)}
              className="px-8 py-6 text-lg"
            >
              Start Editing with Eddy
            </Button>
          </header>
          
          <div className="mt-8 max-w-md mx-auto text-center">
            <p className="text-muted-foreground mb-4">
              Let Eddy help you perfect your children's stories with professional editing assistance.
            </p>
          </div>
        </div>
      ) : (
        <>
          <button 
            onClick={() => setShowChatbot(false)}
            className="self-start mb-4 text-sm flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Home
          </button>
          
          <div className="flex-1 w-full max-w-3xl mx-auto">
            <div className="h-[600px] animate-fade-in">
              <Chatbot />
            </div>
          </div>
        </>
      )}
      
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>Built with a Whole Lot of Love</p>
      </footer>
    </div>
  );
};

export default Index;
