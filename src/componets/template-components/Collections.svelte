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
  class=" p-8 text-white rounded-md font-sans"
>
  <div
    style=" background-color: rgba({$r}, {$g}, {$b}, {$opacity});     
      backdrop-filter: blur({$blur}px) saturate({$saturation}%);
      -webkit-backdrop-filter: blur({$blur}px) saturate({$saturation}%);"
    class="px-6 py-6 rounded-md flex flex-col gap-y-6"
  >
    <div
      class="h-40 rounded-md bg-[url('https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg')] bg-cover"
    />
    <div class="flex justify-between gap-6">
      <div
        class="rounded-md h-32 w-full bg-cover bg-[url('https://e1.pxfuel.com/desktop-wallpaper/189/656/desktop-wallpaper-beautiful-landscape-aesthetic-landscape-purple.jpg')]"
      />
      <div
        class="rounded-md h-32 w-full bg-cover bg-[url('https://e1.pxfuel.com/desktop-wallpaper/189/656/desktop-wallpaper-beautiful-landscape-aesthetic-landscape-purple.jpg')]"
      />
      <div
        class="rounded-md h-32 w-full bg-cover bg-[url('https://e1.pxfuel.com/desktop-wallpaper/189/656/desktop-wallpaper-beautiful-landscape-aesthetic-landscape-purple.jpg')]"
      />
    </div>

    <footer class="flex justify-between items-center">
      <div>
        <p class="text-2xl text-[#908ee3]">Hostory</p>
      </div>
      <div class="flex items-center gap-2">
        <img class="w-6 h-6" src="img-box-svgrepo-com.svg" alt="" />
        <p class="text-[#908ee3]">432</p>
      </div>
    </footer>
  </div>
</div>
