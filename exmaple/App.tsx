import React from "react";
import { useTypewriter } from "react-typewriter-plus";

const md = `
This is a markdown text with **bold** and _italic_ text.
**Also supports Math formulas**
$a^2 + b^2 = c^2$
$\\sqrt{3x-1}+(1 + x)^2=\\frac{100}{2}$
$\\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)$
`;

const html = `
<span>It is a small <span style="color:blue;font-style:italic">duck </span>.....<br />
<img src="https://cdn.pixabay.com/photo/2024/12/06/13/19/bird-9248805_1280.jpg" width="128px" height="85.3px" style="border-radius: 4px" />
`;

const App = () => {
  const text = useTypewriter("This is a plain text", {
    speed: 20,
    cursor: false,
    type: "text",
  });

  const mdText = useTypewriter(md, {
    speed: 20,
    cursor: false,
    type: "md",
  });

  const htmlText = useTypewriter(html, {
    speed: 20,
    cursor: false,
    type: "html",
  });
  return (
    <div
      style={{
        fontFamily: "monospace",
        fontSize: "20px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Welcome to React Typewriter Plus</h2>

      <section style={{ marginBottom: "10px" }}>
        <h3>Plain Text</h3>
        <div
          style={{
            padding: "5px",
            background: "#f9f9f9",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        >
          {text}
        </div>
      </section>

      <section style={{ marginBottom: "10px" }}>
        <h3>HTML Content</h3>
        <div
          style={{
            padding: "5px",
            background: "#f9f9f9",
            borderRadius: "5px",
            border: "1px solid #ddd",
            minHeight: "85px",
          }}
        >
          {htmlText}
        </div>
      </section>

      <section>
        <h3>Markdown Content</h3>
        <div
          style={{
            padding: "0 5px",
            background: "#f9f9f9",
            borderRadius: "5px",
            border: "1px solid #ddd",
            lineHeight: 2,
          }}
        >
          {mdText}
        </div>
      </section>
    </div>
  );
};

export default App;
