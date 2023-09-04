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
  <div class="bg-[rgba(${$r},${$g},${$b},${$opacity})] backdrop-blur-[${$blur}px] backdrop-saturate-[${$saturation}%] rounded-md px-6 py-6 w-full xl:w-1/4">
    <header>
      <h2 class="text-3xl font-bold">Sign In</h2>
      <p class="text-sm text-gray-500">Please sign in to continue</p>
    </header>
    <form class="mt-6 flex flex-col gap-y-4" action="">
      <div> 
        <label class="block text-sm font-medium" for="email">Email</label>
        <div class="relative mt-1 flex items-center rounded-md border border-gray-400 bg-gray-900">
          <img class="h-9 w-9 rounded-l-md border-r px-2" src="sms-svgrepo-com.svg" alt="" />
          <input class="email w-full border-0 bg-transparent px-2 py-2 text-sm text-gray-500 outline-none" type="email" id="email" placeholder="example@domain.com" />
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium" for="password">Password</label>
        <div class="relative mt-1 flex items-center rounded-md border border-gray-400 bg-gray-900">
          <img class="h-9 w-9 rounded-l-md border-r px-2" src="lock-alt-svgrepo-com.svg" alt="" />
          <input class="password placeholder w-full border-0 bg-transparent px-2 py-2 text-sm text-gray-500 outline-none" type="password" id="password" placeholder="Your password" />
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center text-sm">
          <input type="checkbox" id="remember" class="text-red-500" />
          <label for="remember" class="ml-2 text-gray-500">Remember me</label>
        </div>
        <div>
          <a href="#" class="text-sm text-blue-500 hover:underline">Forgot password?</a>
        </div>
      </div>
      <button class="w-full rounded bg-green-500 py-2 text-sm text-white">Sign in</button>
      <p class="text-center text-sm text-gray-500">Not registered? <a href="#" class="text-blue-500 hover:underline">Create account</a></p>
    </form>
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
    <button class="px-2 bg-gray-900 rounded-sm hover:bg-purple-800 transition-all" on:click={() => copyClipBoard(typeContent, activeTabValue)}
      >Copy</button
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
