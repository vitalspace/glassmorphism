<script lang="ts">
  //@ts-nocheck

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
    gradient: `
      background: ${$backgroundColor}; 
      background-image: 
      radial-gradient(at 47% 33%, ${$linerGradient1} 0, transparent 59%),  
      radial-gradient(at 82% 65%, ${$linerGradient2} 0, transparent 55%)
    `,
  };
</script>

<div
  style={backgroundStyles[$backgroundType]}
  class=" p-8 text-white rounded-md"
>
  <div
    style=" background-color: rgba({$r}, {$g}, {$b}, {$opacity});     
    backdrop-filter: blur({$blur}px) saturate({$saturation}%);
    -webkit-backdrop-filter: blur({$blur}px) saturate({$saturation}%);"
    class="px-6 py-6 rounded-md"
  >
    <header>
      <h2 class="text-3xl font-bold">Sign In</h2>
      <p class="text-sm text-gray-500">Please sign in to continue</p>
    </header>

    <form class="mt-6" action="">
      <div>
        <label class="block text-sm font-medium" for="email">Email</label>

        <div
          class="relative flex items-center mt-1 rounded-md border border-gray-400 bg-gray-900"
        >
          <img
            class="w-9 h-9 px-2 border-r rounded-l-md"
            src="icons/sms-svgrepo-com.svg"
            alt=""
          />

          <input
            class="email w-full border-0 bg-transparent px-2 py-2 text-sm text-gray-500 outline-none"
            type="email"
            id="email"
            placeholder="example@domain.com"
          />
        </div>
      </div>

      <div class="mt-4">
        <label class="block text-sm font-medium" for="password">Password</label>

        <div
          class="relative flex items-center mt-1 rounded-md border border-gray-400 bg-gray-900"
        >
          <img
            class="w-9 h-9 px-2 border-r rounded-l-md"
            src="icons/lock-alt-svgrepo-com.svg"
            alt=""
          />

          <input
            class="password w-full border-0 bg-transparent px-2 py-2 text-sm text-gray-500 outline-none placeholder"
            type="password"
            id="password"
            placeholder="Your password"
          />
        </div>
      </div>

      <div class="flex justify-between items-center mt-4">
        <div class="flex items-center text-sm">
          <input type="checkbox" id="remember" class="text-red-500" />
          <label for="remember" class="ml-2 text-gray-500">Remember me</label>
        </div>

        <div>
          <a href="#" class="text-sm text-blue-500 hover:underline"
            >Forgot password?</a
          >
        </div>
      </div>

      <button class="mt-4 w-full bg-green-500 py-2 rounded text-white text-sm"
        >Sign in</button
      >

      <p class="mt-4 text-center text-sm text-gray-500">
        Not registered? <a href="#" class="text-blue-500 hover:underline"
          >Create account</a
        >
      </p>
    </form>
  </div>
</div>

<style>
  .email:not(:placeholder-shown) {
    @apply text-white;
  }

  .password:not(:placeholder-shown) {
    @apply text-white;
  }
</style>
