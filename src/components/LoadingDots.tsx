import React, { ReactNode, useEffect, useState } from "react";

interface LoadingDotsProps {
  text?: string | ReactNode;
}

const LoadingDots: React.FC<LoadingDotsProps> = ({ text }) => {
  const [dots, setDots] = useState<string>("");
  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <span>
      {text}
      {dots}
    </span>
  );
};

export default LoadingDots;
