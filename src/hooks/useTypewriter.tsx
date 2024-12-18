import React, { useEffect, useRef, useState } from "react";
import LoadingDots from "../components/LoadingDots";
import TextAnimator from "../libs/TextAnimator";

export interface UseTypewriterOptions {
  speed?: number; // 打字速度
  loop?: boolean; // 是否循环播放
  cursor?: boolean; // 是否显示光标
  cursorBlinkSpeed?: number; // 光标闪烁速度
  loadingNode?: React.ReactNode; // 加载时的节点
}

const defaultOptions: UseTypewriterOptions = {
  speed: 100,
  loop: false,
  cursor: true,
  cursorBlinkSpeed: 500,
  loadingNode: "Generating",
};

/**
 * 逐字显示文本
 *
 * @param text 目标文本
 * @param options 配置选项
 * @returns 当前显示的文本（包含光标）
 */
export const useTypewriter = (
  text: string,
  options: Partial<UseTypewriterOptions> = {}
): string | React.ReactNode => {
  const {
    speed,
    loop,
    cursor,
    cursorBlinkSpeed,
    loadingNode = "Generating",
  } = {
    ...defaultOptions,
    ...options,
  };

  const [displayText, setDisplayText] = useState<string>(""); // 当前显示文本
  const [cursorVisible, setCursorVisible] = useState<boolean>(true); // 光标是否可见
  const typewriterRef = useRef<TextAnimator>(new TextAnimator()); // Typewriter 实例

  useEffect(() => {
    const typewriter = typewriterRef.current;
    typewriter.setText(text);

    const typingInterval = setInterval(() => {
      const nextText = typewriter.getNext();
      setDisplayText(nextText);

      if (typewriter.isComplete()) {
        if (!loop) {
          clearInterval(typingInterval);
          return;
        }
        typewriter.setText(text);
        setDisplayText("");
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, loop]);

  useEffect(() => {
    if (!cursor) return;

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [cursor, cursorBlinkSpeed]);

  if (!displayText && !loop) {
    return <LoadingDots text={loadingNode} />;
  }

  return (
    <span className="typewriter-container">
      {displayText}
      {cursor && cursorVisible && "|"}
    </span>
  );
};
