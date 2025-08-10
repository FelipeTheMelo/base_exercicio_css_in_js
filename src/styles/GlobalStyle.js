import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Seu CSS global aqui */

  *, *::before, *::after {
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
  }

  * {
    --scrollbar-track: transparent;
    --scrollbar-thumb: hsl(var(--muted-foreground));
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border-color: hsl(var(--border));
  }

  body {
    margin: 0;
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-size: 1rem;
    line-height: inherit;
    font-family: var(--font-camera-plain), Camera Plain Variable, ui-sans-serif, system-ui, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb);
    border-radius: 9999px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--scrollbar-track);
    border-radius: 9999px;
  }

  /* Defina as variáveis de cor */

  :root {
    --background: 45 40% 98%;
    --foreground: 0 0% 11%;
    --border: 45 17% 91%;
    --muted-foreground: 60 1% 37%;
    /* ... outras variáveis que você tiver */
  }

  /* Outras regras globais que você quiser */
`;