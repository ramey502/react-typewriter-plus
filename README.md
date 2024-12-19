# React Typewriter Plus

`React Typewriter Plus` is a React package that creates a typewriter effect, simulating the process of typing a text string letter by letter. It offers customizable options like typing speed, cursor behavior, and looping, making it flexible for various use cases including plain text, Markdown, and HTML content.

## Demo

![screenshot](https://github.com/ramey502/react-typewriter-plus/blob/master/docs/screenshot.gif)

## Installation

To install `React Typewriter Plus`, simply use npm.

```bash
npm install react-typewriter-plus
```

#### Example Usage:

```tsx
import { Typewriter, useTypewriter } from "react-typewriter-plus";

// Component
<Typewriter
  text="welcome to React Typewriter Plus!"
  speed={10}
  loop={true}
  cursor={true}
  cursorBlinkSpeed={500}
/>;

// Hook
const md = `
This is a markdown text with **bold** and _italic_ text.
**Also supports Math formulas**
$a^2 + b^2 = c^2$
$\\sqrt{3x-1}+(1 + x)^2=\\frac{100}{2}$
$\\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)$
`;
const typedText = useTypewriter(md, {
  type: "md",
  speed: 10,
  loop: true,
  cursor: true,
  cursorBlinkSpeed: 500,
});

return typedText;
```

## API

### `Typewriter` Props

| Prop               | Type                     | Default Value | Description                                                  |
| ------------------ | ------------------------ | ------------- | ------------------------------------------------------------ |
| `text`             | `string`                 | -             | The text that will be typed out.                             |
| `type`             | 'text' \| 'md' \| 'html' | text          | Specifies the format of the input text. Use `'text'` for plain text, `'md'` for Markdown, and `'html'` for HTML content. |
| `speed`            | `number`                 | `100`         | The speed at which the text is typed (in milliseconds).      |
| `loop`             | `boolean`                | `false`       | If `true`, the typing effect will repeat.                    |
| `cursor`           | `boolean`                | `true`        | Whether to display the blinking cursor.                      |
| `cursorBlinkSpeed` | `number`                 | `500`         | The speed of the cursor blinking (in milliseconds).          |
| `loadingNode`      | `React.ReactNode`        | "Generating"  | The loading text or animation displayed while typing is in progress. |

### `useTypewriter` Hook

| Argument  | Type                            | Description                                          |
| --------- | ------------------------------- | ---------------------------------------------------- |
| `text`    | `string`                        | The text that will be typed out.                     |
| `options` | `Partial<UseTypewriterOptions>` | Optional configuration for speed, cursor, loop, etc. |

## Contributing

If you'd like to contribute to `React Typewriter Plus`, feel free to fork the repository and submit pull requests. We welcome improvements, bug fixes, and additional features!

## License

`React Typewriter Plus` is open-source software licensed under the MIT License.
