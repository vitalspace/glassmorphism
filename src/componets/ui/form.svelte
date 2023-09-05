<script lang="ts">
  import { app } from "../../lib/app";
  import {
    backgroundColor,
    backgroundType,
    linerGradient1,
    linerGradient2,
    blur,
    opacity,
    saturation,
  } from "../../stores/stores";
</script>

<form
  class="flex flex-col md:flex-row justify-between items-center border-[1px] border-gray-600 px-6 py-4 bg-gray-900 rounded-sm gap-4"
>
  <div class="flex flex-col w-full gap-y-2 ">
    <label for="">Background color</label>
    {#if $backgroundType === "solid"}
      <input
        class="bg-gray-800 w-full border-[1px] border-gray-600 h-[1.9em] outline-none"
        type="color"
        on:input={(e) => app.getBackgroundValue(e)}
        bind:value={$backgroundColor}
      />
    {:else if $backgroundType === "gradient"}
      <div class="flex gap-2">
        <input
          class="bg-gray-800 w-full border-[1px] border-gray-600 h-[1.9em] outline-none"
          type="color"
          on:input={(e) => app.getBackgroundValue(e)}
          bind:value={$backgroundColor}
        />
        <input
          class="bg-gray-800 w-full border-[1px] border-gray-600 h-[1.9em] outline-none"
          type="color"
          bind:value={$linerGradient1}
        />
        <input
          class="bg-gray-800 w-full border-[1px] border-gray-600 h-[1.9em] outline-none"
          type="color"
          bind:value={$linerGradient2}
        />
      </div>
    {:else}
      <input
        class="bg-gray-800 w-full border-[1px] border-gray-600 h-[1.9em] py-1 outline-none px-2"
        type="url"
        on:input={(e) => app.getImageValue(e)}
        value="https://media.gq.com.mx/photos/60cf8f0a33c54bdef67610ee/16:9/w_2560%2Cc_limit/paisaje.jpg"
      />
    {/if}
  </div>

  <div class="flex flex-col gap-y-2 w-full">
    <label for="">Background type</label>
    <select
      bind:value={$backgroundType}
      name=""
      id=""
      class="bg-gray-800 py-1 outline-none border-[1px] border-gray-600"
    >
      <option value="solid">Solid</option>
      <option value="gradient">Mesh gradient</option>
      <option value="image">Image</option>
    </select>
  </div>

  <div class="flex flex-col gap-y-2 w-full">
    <!-- <p class="text-xs">Background color</p> -->
    <label for="">Card color</label>
    <input
      on:input={(e) => app.getCardBackgroundValue(e)}
      class="bg-gray-800 w-full border-[1px] border-gray-600 h-[1.9em] outline-none"
      type="color"
      value="#111928"
    />
  </div>

  <div class="flex flex-col gap-y-2 w-full">
    <label for="">Blur value <span class="text-[lime]">{$blur}px</span></label>
    <input
      class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 [&::-webkit-slider-thumb]:bg-purple-800 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full"
      on:input={(e) => app.getBlurValue(e)}
      min="0"
      max="25"
      value="10"
      type="range"
    />
  </div>

  <div class="flex flex-col gap-y-2 w-full">
    <label for="">Opacity <span class="text-[lime]">{$opacity}</span></label>
    <input
      class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 [&::-webkit-slider-thumb]:bg-purple-800 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full"
      on:input={(e) => app.getOpacityValue(e)}
      min="0"
      max="1"
      value="0.8"
      step="0.1"
      type="range"
    />
  </div>

  <div class="flex flex-col gap-y-2 w-full">
    <label for=""
      >Saturation <span class="text-[lime]">{$saturation}%</span></label
    >
    <input
      class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 [&::-webkit-slider-thumb]:bg-purple-800 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full"
      on:input={(e) => app.getSaturationValue(e)}
      min="0"
      max="200"
      value="180"
      type="range"
    />
  </div>
</form>
