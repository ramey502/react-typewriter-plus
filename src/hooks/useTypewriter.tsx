import DOMPurify from "dompurify";
import katex from "katex";
import "katex/dist/katex.min.css"; // 引入 KaTeX 样式
import { marked, Tokens } from "marked";
import React, { useEffect, useRef, useState } from "react";
import LoadingDots from "../components/LoadingDots";
import TextAnimator from "../libs/TextAnimator";

export interface UseTypewriterOptions {
  type?: "text" | "md" | "html"; // 文本类型
  speed?: number; // 打字速度
  loop?: boolean; // 是否循环播放
  cursor?: boolean; // 是否显示光标
  cursorBlinkSpeed?: number; // 光标闪烁速度
  loadingNode?: React.ReactNode; // 加载时的节点
}

const defaultOptions: UseTypewriterOptions = {
  type: "text",
  speed: 100,
  loop: false,
  cursor: true,
  cursorBlinkSpeed: 500,
  loadingNode: "Generating",
};

/**
 * 解析 Markdown 并支持数学公式
 */
const parseMarkdownWithMath = (content: string) => {
  const renderer: any = new marked.Renderer();

  // 自定义代码块渲染
  renderer.code = (code: string, language: string) => {
    if (language === "math") {
      try {
        // 使用 KaTeX 渲染公式并返回 HTML 字符串
        return katex.renderToString(code, {
          throwOnError: false,
          displayMode: true,
        });
      } catch (error) {
        console.error("Error rendering math with KaTeX:", error);
        return `<pre>${DOMPurify.sanitize(code)}</pre>`;
      }
    }
    // 非 math 的代码块按普通处理
    return `<pre><code>${DOMPurify.sanitize(code)}</code></pre>`;
  };

  // 自定义行内公式解析
  renderer.text = (token: Tokens.Text | Tokens.Escape) => {
    const content = typeof token === "string" ? token : token.text || "";
    return content.replace(/\$(.+?)\$/g, (match, mathContent) => {
      try {
        return katex.renderToString(mathContent, {
          throwOnError: false,
          displayMode: false,
        });
      } catch (error) {
        console.error("Error rendering inline math with KaTeX:", error);
        return DOMPurify.sanitize(match);
      }
    });
  };

  // 将 Markdown 转换为 HTML
  const rawHtml = marked(content, { renderer }) as string;
  return DOMPurify.sanitize(rawHtml);
};

/**
 * 渲染文本内容（支持 Markdown 和 HTML）
 */
const parseContent = (
  content: string,
  type: "html" | "md" | "text" = "text"
) => {
  if (type === "md") {
    return parseMarkdownWithMath(content);
  }
  if (type === "html") {
    return DOMPurify.sanitize(content);
  }
  return content; // 纯文本
};

/**
 * Typewriter Hook
 */

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
    type,
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

  const parsedContent = parseContent(displayText, type);

  return (
    <>
      <span
        style={{ whiteSpace: type === "md" ? "pre-wrap" : "collapse" }}
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      />
      {cursor && cursorVisible && "|"}
    </>
  );
};
