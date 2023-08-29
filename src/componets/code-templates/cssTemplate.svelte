<script lang="ts">
  //@ts-nocheck

  import Highlight from "svelte-highlight";
  import css from "svelte-highlight/languages/css";
  import a11yDark from "svelte-highlight/styles/a11y-dark";
  import {
    b,
    backgroundColor,
    backgroundImage,
    backgroundType,
    blur,
    g,
    linerGradient1,
    linerGradient2,
    opacity,
    r,
    saturation,
  } from "../../stores/stores";
  let code: string;

  $: backgroundStyles = {
    solid: "background:" + $backgroundColor + ";",
    image: "background-image:" + `url(${$backgroundImage});`,
    gradient: `    background: ${$backgroundColor}; 
    background-image: 
    radial-gradient(at 47% 33%, ${$linerGradient1} 0, transparent 59%),  
    radial-gradient(at 82% 65%, ${$linerGradient2} 0, transparent 55%)`,
    card: `
/* Glassmorphism card effect */
  .card {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(${$blur}px) saturate(${$saturation}%);
    background-color: rgba(${$r}, ${$g}, ${$b}, ${$opacity});
    border-radius: 12px; 
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: 0px 0px 5px 5px #ccc;
  }
    `,
  };

  $: {
    if ($backgroundType === "solid") {
      code = `
/* Background styles */
  body {     
    ${backgroundStyles[$backgroundType]}
  }
    ${backgroundStyles["card"]}
  `;
    } else if ($backgroundType === "gradient") {
      code = `
/* Background styles */
  body {
${backgroundStyles[$backgroundType]}
  }
    ${backgroundStyles["card"]}
    `;
    } else {
      code = `
/* Background styles */
  body {
    ${backgroundStyles[$backgroundType]}
  }
    ${backgroundStyles["card"]}
    `;
    }
  }
</script>

<svelte:head>
  {@html a11yDark}
</svelte:head>

<Highlight language={css} {code} />
