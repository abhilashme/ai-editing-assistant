
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultView?: "login" | "signup";
}

const AuthModal = ({ isOpen, onClose, defaultView = "login" }: AuthModalProps) => {
  const [view, setView] = useState<"login" | "signup">(defaultView);

  const handleSuccess = () => {
    onClose();
  };

  const toggleView = () => {
    setView(view === "login" ? "signup" : "login");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        {view === "login" ? (
          <LoginForm onSuccess={handleSuccess} onToggleForm={toggleView} />
        ) : (
          <SignupForm onSuccess={handleSuccess} onToggleForm={toggleView} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
