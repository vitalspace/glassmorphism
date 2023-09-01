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
  $: code = `<div style="${backgroundStyles[$backgroundType]}" class="rounded-md p-8 text-white h-screen grid place-items-center">
  <div class="bg-[rgba(${$r},${$g},${$b},${$opacity})] backdrop-blur-[${$blur}px] backdrop-saturate-[${$saturation}%] rounded-md px-6 py-6 w-1/4">
    <header>
      <h2 class="text-3xl font-bold">Sign In</h2>
      <p class="text-sm text-gray-500">Please sign in to continue</p>
    </header>

    <form class="mt-6" action="">
      <div>
        <label class="block text-sm font-medium" for="email">Email</label>
        <div class="relative mt-1 flex items-center rounded-md border border-gray-400 bg-gray-900">
          <img class="h-9 w-9 rounded-l-md border-r px-2" src="sms-svgrepo-com.svg" alt="" />
          <input class="email w-full border-0 bg-transparent px-2 py-2 text-sm text-gray-500 outline-none" type="email" id="email" placeholder="example@domain.com" />
        </div>
      </div>

      <div class="mt-4">
        <label class="block text-sm font-medium" for="password">Password</label>
        <div class="relative mt-1 flex items-center rounded-md border border-gray-400 bg-gray-900">
          <img class="h-9 w-9 rounded-l-md border-r px-2" src="lock-alt-svgrepo-com.svg" alt="" />
          <input class="password placeholder w-full border-0 bg-transparent px-2 py-2 text-sm text-gray-500 outline-none" type="password" id="password" placeholder="Your password" />
        </div>
      </div>

      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center text-sm">
          <input type="checkbox" id="remember" class="text-red-500" />
          <label for="remember" class="ml-2 text-gray-500">Remember me</label>
        </div>
        <div>
          <a href="#" class="text-sm text-blue-500 hover:underline">Forgot password?</a>
        </div>
      </div>
      
      <button class="mt-4 w-full rounded bg-green-500 py-2 text-sm text-white">Sign in</button>
      <p class="mt-4 text-center text-sm text-gray-500">Not registered? <a href="#" class="text-blue-500 hover:underline">Create account</a></p>
    </form>
  </div>
</div>
`;
</script>

<svelte:head>
  {@html a11yDark}
</svelte:head>

<Highlight language={vbscriptHtml} {code} />
