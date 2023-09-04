<script lang="ts">
  //@ts-nocheck

  import Highlight from "svelte-highlight";
  import cssStyle from "svelte-highlight/languages/css";
  import vbscriptHtml from "svelte-highlight/languages/vbscript-html";
  import a11yDark from "svelte-highlight/styles/a11y-dark";
  import { copyClipBoard } from "../../lib/copyClipBoard";
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
    gradient: `background: ${$backgroundColor}; background-image: radial-gradient(at 47% 33%, ${$linerGradient1} 0, transparent 59%), radial-gradient(at 82% 65%, ${$linerGradient2} 0, transparent 55%);`,
    card: `
/* Glassmorphism card effect */
  .card {
    backdrop-filter: blur(${$blur}px) saturate(${$saturation}%);
    -webkit-backdrop-filter: blur(${$blur}px) saturate(${$saturation}%);
    background-color: rgba(${$r}, ${$g}, ${$b}, ${$opacity});
    border-radius: 12px; 
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: 0px 0px 5px 5px #ccc;
  }`,
  };

  $: css = "";

  $: {
    if ($backgroundType === "solid") {
      css = `/* Background styles */
  body {     
    ${backgroundStyles[$backgroundType]}
  }
    ${backgroundStyles["card"]}`;
    } else if ($backgroundType === "gradient") {
      css = `/* Background styles */
  body {
    ${backgroundStyles[$backgroundType].split(";")[0] + ";"}
   ${backgroundStyles[$backgroundType].split(";")[1] + ";"}
  }
    ${backgroundStyles["card"]}`;
    } else {
      css = `/* Background styles */
  body {
    ${backgroundStyles[$backgroundType]}
  }
    ${backgroundStyles["card"]}`;
    }
  }

  $: svelte = `<div style="${backgroundStyles[$backgroundType]}" class="grid h-screen place-items-center rounded-md p-8 font-sans text-white bg-cover">
  <div class="flex w-full xl:w-1/4 flex-col gap-y-6 rounded-md px-6 py-6 bg-[rgba(${$r},${$g},${$b},${$opacity})] backdrop-blur-[${$blur}px] backdrop-saturate-[${$saturation}%]">
    <div class="h-40 rounded-md bg-[url('https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg')] bg-cover"></div>
    <div class="flex justify-between gap-6">
      <div class="h-32 w-full rounded-md bg-[url('https://e1.pxfuel.com/desktop-wallpaper/189/656/desktop-wallpaper-beautiful-landscape-aesthetic-landscape-purple.jpg')] bg-cover"></div>
      <div class="h-32 w-full rounded-md bg-[url('https://e1.pxfuel.com/desktop-wallpaper/189/656/desktop-wallpaper-beautiful-landscape-aesthetic-landscape-purple.jpg')] bg-cover"></div>
      <div class="h-32 w-full rounded-md bg-[url('https://e1.pxfuel.com/desktop-wallpaper/189/656/desktop-wallpaper-beautiful-landscape-aesthetic-landscape-purple.jpg')] bg-cover"></div>
    </div>
    <footer class="flex items-center justify-between">
      <div><p class="text-2xl text-[#908ee3]">Hostory</p></div>
      <div class="flex items-center gap-2">
        <img class="h-6 w-6" src="img-box-svgrepo-com.svg" alt="" />
        <p class="text-[#908ee3]">432</p>
      </div>
    </footer>
  </div>
</div>`;
  $: react = svelte.replaceAll("class", "className");

  $: typeContent = [
    {
      label: "Css",
      content: css,
    },
    {
      label: "Svelte",
      content: svelte,
    },
    {
      label: "React",
      content: react,
    },
  ];

  let activeTabValue = "Css";

  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<svelte:head>
  {@html a11yDark}
</svelte:head>

<div class="flex justify-between p-2">
  <div class="flex gap-4">
    {#each typeContent as item}
      <button
        class={activeTabValue === item.label
          ? "bg-purple-800 text-white px-4 rounded-sm transition-all"
          : "bg-none px-4 hover:bg-gray-900 hover:text-white rounded-sm transition-all"}
        on:click={handleClick(item.label)}>{item.label}</button
      >
    {/each}
  </div>
  <div>
    <button
      class="px-2 bg-gray-900 rounded-sm hover:bg-purple-800 transition-all"
      on:click={() => copyClipBoard(typeContent, activeTabValue)}>Copy</button
    >
  </div>
</div>

<div class="overflow-auto h-[29em]">
  {#each typeContent as item}
    {#if activeTabValue === item.label}
      {#if item.label !== "Css"}
        <Highlight language={vbscriptHtml} code={item.content} />
      {:else}
        <Highlight language={cssStyle} code={item.content} />
      {/if}
    {/if}
  {/each}
</div>
