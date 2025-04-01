
import React, { useState, useEffect } from "react";
import Chatbot from "../components/chat/Chatbot";
import { Button } from "@/components/ui/button";
import AuthModal from "../components/auth/AuthModal";
import { toast } from "sonner";

const Index = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  
  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);
  
  const handleStartEditing = () => {
    if (currentUser) {
      setShowChatbot(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setShowChatbot(false);
    toast.success("Logged out successfully");
  };
  
  const handleAuthenticated = (userId: string) => {
    setCurrentUser(userId);
    setShowChatbot(true);
  };
  
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
              onClick={handleStartEditing}
              className="px-8 py-6 text-lg"
            >
              Start Editing with Eddy
            </Button>
          </header>
          
          <div className="mt-8 max-w-md mx-auto text-center">
            <p className="text-muted-foreground mb-4">
              Let Eddy help you perfect your children's stories with professional editing assistance.
            </p>
            
            {currentUser && (
              <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-sm">
                  Logged in as <span className="font-medium">{currentUser}</span>
                </p>
                <button 
                  onClick={handleLogout}
                  className="text-sm text-primary hover:underline mt-1"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={() => setShowChatbot(false)}
              className="text-sm flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Home
            </button>
            
            {currentUser && (
              <div className="flex items-center gap-3">
                <p className="text-sm text-muted-foreground">
                  Logged in as <span className="font-medium">{currentUser}</span>
                </p>
                <button 
                  onClick={handleLogout}
                  className="text-xs text-primary hover:underline"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          
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
      
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthenticated={handleAuthenticated}
      />
    </div>
  );
};

export default Index;
