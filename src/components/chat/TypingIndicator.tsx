
import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1 px-4 py-3 text-sm rounded-2xl bg-card border w-fit">
      <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse-dot delay-0"></div>
      <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse-dot delay-300"></div>
      <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse-dot delay-600"></div>
    </div>
  );
};

export default TypingIndicator;
