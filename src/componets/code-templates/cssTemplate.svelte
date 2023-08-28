<script lang="ts">
  import Highlight from "svelte-highlight";
  import css from "svelte-highlight/languages/css";
  import a11yDark from "svelte-highlight/styles/a11y-dark";
  import { backgroundColor } from "../../stores/stores";


  export let backgroundType: string;
  // export let backgroundColor: string = "#17B486";
  export let r: number;
  export let g: number;
  export let b: number;
  export let opacity: number;
  export let blur: number;
  export let saturation: number;

  export let linerGradientValue1: string = "hsl(0, 43%, 39%)";
  export let linerGradientValue2: string = "hsl(0, 43%, 39%)";

  export let isGradientIsActive: boolean;

  let code: string;

  function getCardStyles() {
  return `
/* Glassmorphism card effect */
  .card {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(${blur}px) saturate(${saturation}%);
    background-color: rgba(${r}, ${g}, ${b}, ${opacity});
    border-radius: 12px; 
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: 0px 0px 5px 5px #ccc;
  }`
}

$: {
  if (!isGradientIsActive) {
    code = `
/* Background styles */ 
  body { 
    ${backgroundType}: ${$backgroundColor}; 
  }
  ${getCardStyles()}
    `;
  } else {
    code = `/* Background styles */
  body { 
    ${backgroundType}: ${$backgroundColor};
    background-image:
    radial-gradient(at 47% 33%, ${linerGradientValue1} 0, transparent 59%), 
    radial-gradient(at 82% 65%, ${linerGradientValue2} 0, transparent 55%); 
  }
  ${getCardStyles()}  
    `;
  }
}
</script>

<svelte:head>
  {@html a11yDark}
</svelte:head>

<Highlight language={css} {code} />
