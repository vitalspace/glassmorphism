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

  $: svelte = `<div style="${backgroundStyles[$backgroundType]}" class="rounded-md p-8 text-white h-screen grid place-items-center bg-cover">
  <div class="bg-[rgba(${$r},${$g},${$b},${$opacity})] backdrop-blur-[${$blur}px] backdrop-saturate-[${$saturation}%] flex flex-col gap-y-6 rounded-md px-6 py-6 w-full xl:w-1/4">
    <div class="h-40 rounded-t-md bg-[url('https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp')] bg-cover"></div>
    <div class="fixed left-0 right-0 top-32 flex items-center justify-center">
      <img class="h-28 w-28 rounded-full border-4" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80" alt="" />
    </div>
    <header class="mt-12 flex flex-col items-center justify-center">
      <h2 class="text-3xl font-bold text-[#7676df]">Stephanie Kula</h2>
      <p class="text-xl text-gray-500">Ui/Ux Designer</p>
    </header>
    <main class="flex justify-around text-gray-500">
      <div class="flex flex-col items-center">
        <p>Projects</p>
        <p>2</p>
      </div>
      <div class="flex flex-col items-center">
        <p>Following</p>
        <p>999</p>
      </div>
      <div class="flex flex-col items-center">
        <p>Followers</p>
        <p>777</p>
      </div>
    </main>
    <footer class="flex justify-center">
      <button class="mx-8 w-full cursor-pointer rounded-md bg-[#7676df] py-2 transition-all hover:bg-[#6464dd]">Follow</button>
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

<ChoseCode {activeTabValue} {typeContent} height={"34.6em"} />
