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
  class="p-8 text-white rounded-md font-sans"
>
  <div
    style=" background-color: rgba({$r}, {$g}, {$b}, {$opacity});     
      backdrop-filter: blur({$blur}px) saturate({$saturation}%);
      -webkit-backdrop-filter: blur({$blur}px) saturate({$saturation}%);"
    class="rounded-md flex flex-col gap-y-8 pb-8"
  >
    <div
      class="rounded-t-md h-40 bg-cover bg-[url('https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp')]"
    />
    <div class="flex justify-center fixed items-center right-0 left-0 top-28">
      <img
        class="w-28 h-28 rounded-full border-4"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
        alt=""
      />
    </div>
    <header class="flex justify-center flex-col items-center mt-12">
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
      <button
        class="bg-[#7676df] w-full cursor-pointer mx-8 py-2 rounded-md hover:bg-[#6464dd] transition-all"
      >
        Follow
      </button>
    </footer>
  </div>
</div>
