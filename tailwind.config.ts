import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { light, dark } from "daisyui/src/theming/themes";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        yellow: "#FFC100",
        gray: "#F3F4F6",
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        lightTheme: {
          ...light,
          primary: "#75a1de",
          "primary-content": "#000000",
          secondary: "#666666",
          "accent-content": "#D7DDE4",
          accent: "rgb(189,189,189)",
          neutral: "#333",
          "base-100": "#fdfdfd",
          "base-200": "rgba(236,236,236,0.84)",
        },
        darkTheme: {
          ...dark,
          primary: "#75a1de",
          "primary-content": "#ffffff",
          secondary: "#666666",
          accent: "#666666",
          "accent-content": "rgba(88,91,91,0.26)",
          neutral: "#fff",
          "base-100": "#1E1E1E",
          "base-200": "#000000",
        },
      },
    ],
  },
};
