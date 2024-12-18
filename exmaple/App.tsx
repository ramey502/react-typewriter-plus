import React from "react";
import { useTypewriter } from "react-typewriter-plus";

const App = () => {
  const animatedText = useTypewriter(
    "Hello React Typewriter Plus: Enjoy the magic of typing!",
    {
      speed: 50,
      cursor: false,
      loop: false,
      cursorBlinkSpeed: 100,
      loadingNode: "Generating",
    }
  );

  return <div style={{ fontSize: "24px" }}>{animatedText}</div>;
};

export default App;
