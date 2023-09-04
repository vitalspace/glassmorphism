<script lang="ts">
  //@ts-nocheck
  import ChoseCode from "../ui/choseCode.svelte";

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
    border-radius: 0.375rem; 
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
</script>

<ChoseCode {activeTabValue} {typeContent}  />

