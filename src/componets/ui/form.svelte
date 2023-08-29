<script>
  import { app } from "../../lib/app";
  import {
    backgroundColor,
    backgroundType,
    linerGradient1,
    linerGradient2
  } from "../../stores/stores";
</script>

<form
  class="flex justify-between items-center border-2 px-2 py-4 bg-gray-900 rounded-sm gap-4"
>
  <div class="flex flex-col gap-y-2 w-52">
    <label for="">Background color</label>
    {#if $backgroundType === "solid"}
      <input
        class="bg-gray-900 w-full border-[1px]"
        type="color"
        on:input={(e) => app.getBackgroundValue(e)}
        bind:value={$backgroundColor}
      />
    {:else if $backgroundType === "gradient"}
      <div class="flex gap-2">
        <input
          class="bg-gray-900 border-[1px] w-full"
          type="color"
          on:input={(e) => app.getBackgroundValue(e)}
          bind:value={$backgroundColor}
        />
        <input
          class="bg-gray-900 border-[1px] w-full"
          type="color"
          bind:value={$linerGradient1}
        />
        <input
          class="bg-gray-900 border-[1px] w-full"
          type="color"
          bind:value={$linerGradient2}
        />
      </div>
    {:else}
      <input
        class="bg-gray-900 w-full border-[1px]"
        type="url"
        on:input={(e) => app.getImageValue(e)}
        value="https://media.gq.com.mx/photos/60cf8f0a33c54bdef67610ee/16:9/w_2560%2Cc_limit/paisaje.jpg"
      />
    {/if}
  </div>

  <div class="flex flex-col gap-y-2">
    <label for="">Background type</label>
    <select
      bind:value={$backgroundType}
      name=""
      id=""
      class="bg-gray-900 border-[1px]"
    >
      <option value="solid">Solid</option>
      <option value="gradient">Mesh gradient</option>
      <option value="image">Image</option>
    </select>
  </div>

  <div class="flex flex-col gap-y-2">
    <!-- <p class="text-xs">Background color</p> -->
    <label for="">Card color</label>
    <input
      on:input={(e) => app.getCardBackgroundValue(e)}
      class="bg-gray-900 w-full"
      type="color"
      value="#111928"
    />
  </div>

  <div class="flex flex-col gap-y-2">
    <label for="">Blur value</label>
    <input
      on:input={(e) => app.getBlurValue(e)}
      min="0"
      max="25"
      value="10"
      type="range"
    />
  </div>

  <div class="flex flex-col gap-y-2">
    <label for="">Opacity</label>
    <input
      on:input={(e) => app.getOpacityValue(e)}
      min="0"
      max="1"
      value="0.8"
      step="0.1"
      type="range"
    />
  </div>

  <div class="flex flex-col gap-y-2">
    <label for="">Saturation</label>
    <input
      on:input={(e) => app.getSaturationValue(e)}
      min="0"
      max="200"
      value="180"
      type="range"
    />
  </div>
</form>
