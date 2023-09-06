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
      saturation
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
  
    $: svelte = `<div style="${backgroundStyles[$backgroundType]}" class="rounded-md p-8 text-white h-screen grid place-items-center bg-cover">
    <div class="bg-[rgba(${$r},${$g},${$b},${$opacity})] backdrop-blur-[${$blur}px] backdrop-saturate-[${$saturation}%] rounded-xl gap-y-4 flex flex-col px-6 py-6 w-full xl:w-1/4">
        <header class="my-2">
      <h1 class="text-2xl">Closest stores</h1>
    </header>

    <main class="flex flex-col gap-y-4">
      <div class="flex items-center justify-between gap-4">
        <div class="flex flex-col gap-y-2">
          <label for="zip-code" class="text-xs">Postal Code</label>
          <input type="number" name="zip-code" id="" class="w-28 rounded-md border-[1px] bg-transparent px-2 py-2" value="5055" />
        </div>
        <div class="mt-4 flex items-center">
          <img class="h-6 w-6" src="https://raw.githubusercontent.com/vitalspace/glassmorphism/main/public/icons/location-pin-alt-1-svgrepo-com.svg" alt="" />
          <p class="text-sm text-[#7067f2]">Use my location</p>
        </div>
      </div>

      <div>
        <header class="flex items-center justify-between">
          <h2>POINT Bergen Sentrum</h2>
          <span class="rounded-xl bg-[#ff5dab] px-2 py-1 text-[8px] text-white">CLOSED</span>
        </header>
        <main>
          <p class="text-sm">Strandagaten 55-57, 6007 Bergen</p>
        </main>
        <footer class="flex items-center gap-1">
          <img class="h-4 w-4" src="https://raw.githubusercontent.com/vitalspace/glassmorphism/main/public/icons/clock-two-svgrepo-com.svg" alt="" />
          <p class="text-sm">9:00 - 19:00</p>
        </footer>
      </div>

      <div>
        <header class="flex items-center justify-between">
          <h2>POIVestKanten</h2>
          <span class="rounded-xl bg-[#00bd9b] px-2 py-1 text-[8px] text-white">OPEN</span>
        </header>
        <main>
          <p class="text-sm">Strandagaten 55-57, 6007 Bergen</p>
        </main>
        <footer class="flex items-center gap-1">
          <img class="h-4 w-4" src="https://raw.githubusercontent.com/vitalspace/glassmorphism/main/public/icons/clock-two-svgrepo-com.svg" alt="" />
          <p class="text-sm">9:00 - 19:00</p>
        </footer>
      </div>
    </main>
    <footer>
      <button class="w-full cursor-pointer rounded-md bg-[#746bfe] py-2 text-white transition-all hover:bg-[#b0abf8]">View all</button>
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
  
  
  <ChoseCode {activeTabValue} {typeContent} height={"28.8em"} />
  