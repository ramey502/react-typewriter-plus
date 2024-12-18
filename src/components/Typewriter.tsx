import React from "react";
import { useTypewriter, UseTypewriterOptions } from "../hooks/useTypewriter";

export interface TypewriterProps extends UseTypewriterOptions {
  text: string; // 输入的字符串
  className?: string; // 自定义样式
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  className,
  ...options
}) => {
  const animatedText = useTypewriter(text, options);

  return <span className={className}>{animatedText}</span>;
};
