
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated: (userId: string) => void;
}

const AuthModal = ({ isOpen, onClose, onAuthenticated }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthenticated = (userId: string) => {
    onAuthenticated(userId);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {isLogin ? "Login to continue" : "Create an account"}
          </DialogTitle>
        </DialogHeader>
        
        {isLogin ? (
          <LoginForm 
            onLogin={handleAuthenticated} 
            onSwitchToSignup={() => setIsLogin(false)} 
          />
        ) : (
          <SignupForm 
            onSignup={handleAuthenticated} 
            onSwitchToLogin={() => setIsLogin(true)} 
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
