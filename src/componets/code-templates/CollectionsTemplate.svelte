<script lang="ts">
    //@ts-nocheck
  
    import Highlight from "svelte-highlight";
    import vbscriptHtml from "svelte-highlight/languages/vbscript-html";
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
    gradient: `background: ${$backgroundColor}; background-image: radial-gradient(at 47% 33%, ${$linerGradient1} 0, transparent 59%), radial-gradient(at 82% 65%, ${$linerGradient2} 0, transparent 55%);`,
  };
    $: code = `<div style="${backgroundStyles[$backgroundType]}" class="grid h-screen place-items-center rounded-md p-8 font-sans text-white">
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
</div>


  `;
  </script>
  
  <svelte:head>
    {@html a11yDark}
  </svelte:head>
  
  <Highlight language={vbscriptHtml} {code} />
  