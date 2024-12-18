# React Typewriter Plus

`React Typewriter Plus` is a React typing effect package that simulates a typewriter typing out a text string letter by letter. It supports customizable options such as typing speed, cursor behavior, and loop options.

## Demo

### Typewriter Effect

To demonstrate the typing effect, use the `Typewriter` component or the `useTypewriter` hook. Below is a live demonstration of the typing effect with customizable options.

![screenshot](https://github.com/ramey502/react-typewriter-plus/blob/master/docs/screenshot.gif)

### Typewriter Plus Features

1. **Typing Speed**: Controls how fast the text appears on the screen.
2. **Looping**: Make the typing effect loop infinitely, or stop after finishing.
3. **Cursor**: Show or hide the blinking cursor.
4. **Custom Loading Node**: Display a loading animation or text while the typing effect is being prepared.

## Installation

To install `React Typewriter Plus`, simply use npm or pnpm.

### Using npm:

```bash
npm install react-typewriter-plus
```

## Components

### 1. `Typewriter` Component

The `Typewriter` component is the easiest way to implement the typing effect. It allows you to configure options like typing speed, cursor visibility, and looping directly via props.

#### Example Usage:

```jsx
import { Typewriter } from "react-typewriter-plus";

<Typewriter
  text="welcome to React Typewriter Plus!"
  speed={100}
  cursor={true}
  cursorBlinkSpeed={500}
  loop={true}
/>;
```

### 2. `useTypewriter` Hook

For more control, you can use the `useTypewriter` hook. This is particularly useful if you need to dynamically update the text or integrate the typing effect with other logic in your application.

#### Example Usage:

```jsx
import { useTypewriter } from "react-typewriter-plus";

const typedText = useTypewriter("welcome to React Typewriter Plus!", {
  speed: 100,
  loop: true,
  cursor: true,
  cursorBlinkSpeed: 500,
});

return typedText;
```

## API

### `Typewriter` Props

| Prop               | Type              | Default Value | Description                                                          |
| ------------------ | ----------------- | ------------- | -------------------------------------------------------------------- |
| `text`             | `string`          | -             | The text that will be typed out.                                     |
| `speed`            | `number`          | `100`         | The speed at which the text is typed (in milliseconds).              |
| `loop`             | `boolean`         | `false`       | If `true`, the typing effect will repeat.                            |
| `cursor`           | `boolean`         | `true`        | Whether to display the blinking cursor.                              |
| `cursorBlinkSpeed` | `number`          | `500`         | The speed of the cursor blinking (in milliseconds).                  |
| `loadingNode`      | `React.ReactNode` | "Generating"  | The loading text or animation displayed while typing is in progress. |

### `useTypewriter` Hook

| Argument  | Type                            | Description                                          |
| --------- | ------------------------------- | ---------------------------------------------------- |
| `text`    | `string`                        | The text that will be typed out.                     |
| `options` | `Partial<UseTypewriterOptions>` | Optional configuration for speed, cursor, loop, etc. |

## Contributing

If you'd like to contribute to `React Typewriter Plus`, feel free to fork the repository and submit pull requests. We welcome improvements, bug fixes, and additional features!

## License

`React Typewriter Plus` is open-source software licensed under the MIT License.
