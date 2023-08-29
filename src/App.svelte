<script lang="ts">
  import Singin from "./componets/Singin.svelte";
  import CssTemplate from "./componets/code-templates/cssTemplate.svelte";
  import { hexToHSL } from "./lib/hexToHsl";
  import { App } from "./lib/app";

  import {
    backgroundColor,
    backgroundImage,
    backgroundType,
  } from "./stores/stores";

  let r: number = 17;
  let g: number = 25;
  let b: number = 40;
  let opacity: number = 0.75;
  let blur: number = 10;
  let saturation: number = 180;

  let linerGradientValue1: string = "#5d72b1";
  let linerGradientValue2: string = "#8a5d28";

  const getBackGroundValue = (e: any) => {
    $backgroundColor = e.target.value;
  };

  const getImageValue = (e: any) => {
    $backgroundImage = e.target.value;
  };

  const getCardValue = (e: any) => {
    r = parseInt(e.target.value.slice(1, 3), 16);
    g = parseInt(e.target.value.slice(3, 5), 16);
    b = parseInt(e.target.value.slice(5, 7), 16);
  };

  const getBlurValue = (e: any) => {
    blur = e.target.value;
  };

  const getOpacityValue = (e: any) => {
    opacity = e.target.value;
  };

  const getSaturationValue = (e: any) => {
    saturation = e.target.value;
  };
</script>

<div class="bg-gray-800 place-content-center h-screen font-serif text-gray-300">
  <div class="container flex flex-col mx-auto gap-y-4 xl:px-52">
    <section class=" bg-gray-800 rounded-sm flex flex-col gap-y-2">
      <header>
        <h1 class="text-4xl">Glassmorphism CSS Generator</h1>
      </header>
      <main>
        <p class="text-md">
          Get moving with this free CSS generator grounded on the glassmorphism
          blueprint particulars to hastily devise and customize the style
          properties.
        </p>
      </main>
      <footer>
        <p class="text-xs">
          Outline founded on <a
            href="https://Vitalcode.xyz"
            class="text-blue-500 font-bold"
            target="_blank">vitalcode.xyz</a
          >
          and fabricated by
          <a
            href="https://x.com/vitalcodexyz"
            target="_blank"
            class="text-pink-500 font-bold">Vital Code</a
          >.
        </p>
      </footer>
    </section>

    <section class="flex flex-col gap-y-4">
      <form
        class="flex justify-between items-center border-2 px-2 py-4 bg-gray-900 rounded-sm gap-4"
      >
        <div class="flex flex-col gap-y-2 w-52">
          <label for="">Background color</label>
          {#if $backgroundType === "solid"}
            <input
              class="bg-gray-900 w-full border-[1px]"
              type="color"
              on:input={(e) => getBackGroundValue(e)}
              bind:value={$backgroundColor}
            />
          {:else if $backgroundType === "gradient"}
            <div class="flex gap-2">
              <input
                class="bg-gray-900 border-[1px] w-full"
                type="color"
                on:input={(e) => getBackGroundValue(e)}
                bind:value={$backgroundColor}
              />
              <input
                class="bg-gray-900 border-[1px] w-full"
                type="color"
                bind:value={linerGradientValue1}
              />
              <input
                class="bg-gray-900 border-[1px] w-full"
                type="color"
                bind:value={linerGradientValue2}
              />
            </div>
          {:else}
            <input
              class="bg-gray-900 w-full border-[1px]"
              type="url"
              on:input={(e) => getImageValue(e)}
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
            on:input={(e) => getCardValue(e)}
            class="bg-gray-900 w-full"
            type="color"
            value="#111928"
          />
        </div>

        <div class="flex flex-col gap-y-2">
          <label for="">Blur value</label>
          <input
            on:input={(e) => getBlurValue(e)}
            min="0"
            max="25"
            value="10"
            type="range"
          />
        </div>

        <div class="flex flex-col gap-y-2">
          <label for="">Opacity</label>
          <input
            on:input={(e) => getOpacityValue(e)}
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
            on:input={(e) => getSaturationValue(e)}
            min="0"
            max="200"
            value="180"
            type="range"
          />
        </div>
      </form>

      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col border-2 rounded-sm">
          <div class="flex justify-between items-center p-2">
            <select name="" id="" class="bg-gray-900">
              <option value="member-card">Member card</option>
              <option value="profile-card">Profile card</option>
              <option value="pricing-card">Pricing card</option>
            </select>
            <div>
              <button>Change me</button>
            </div>
          </div>
          <div class="mx-2 mb-2">
            <Singin
              {r}
              {g}
              {b}
              {opacity}
              {blur}
              {saturation}
              linerGradientValue1={hexToHSL(linerGradientValue1)}
              linerGradientValue2={hexToHSL(linerGradientValue2)}
            />
          </div>
        </div>

        <div class="border-2 rounded-sm">
          <div class="flex justify-between p-2">
            <div>
              <button>Css</button>
            </div>

            <div>
              <button>Copy</button>
            </div>
          </div>

          <div class="break-words">
            <CssTemplate
              {r}
              {g}
              {b}
              {opacity}
              {blur}
              {saturation}
              linerGradientValue1={hexToHSL(linerGradientValue1)}
              linerGradientValue2={hexToHSL(linerGradientValue2)}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
