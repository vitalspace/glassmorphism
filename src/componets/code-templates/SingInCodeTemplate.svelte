<script lang="ts">
  import Highlight from "svelte-highlight";
  import css from "svelte-highlight/languages/css";
  import a11yDark from "svelte-highlight/styles/a11y-dark";

  export let backgroundColor: string = "#17B486";
  export let r: number;
  export let g: number;
  export let b: number;
  export let opacity: number;
  export let blur: number;
  export let saturation: number;

  $: code = `
/* Background styles */
body {
    background-color: ${backgroundColor};
}

/* Glassmorphism card effect */
.card {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(${blur}px) saturate(${saturation}%);
    background-color: rgba(${r}, ${g}, ${b}, ${opacity});
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}
  `;
</script>

<svelte:head>
  {@html a11yDark}
</svelte:head>


<p>          {backgroundColor}
  {r}
  {g}
  {b}
  {opacity}
  {blur}
  {saturation}</p>


<Highlight language={css} {code} />
