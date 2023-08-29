<script lang="ts">
  import Singin from "./componets/Singin.svelte";
  import CssTemplate from "./componets/code-templates/cssTemplate.svelte";
  import Form from "./componets/ui/form.svelte";

  import { app } from "./lib/app";
  import { hexToHSL } from "./lib/hexToHsl";

  import {
    backgroundColor,
    backgroundImage,
    backgroundType,
    r,
    g,
    b,
    blur,
    opacity,
    saturation,
    linerGradient1,
    linerGradient2
  } from "./stores/stores";



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

  {blur}


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
      <Form/>

      <div class="xl:grid grid-cols-2 gap-4 flex flex-wrap">
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
              linerGradient1={hexToHSL(linerGradient1)}
              linerGradient2={hexToHSL(linerGradient2)}
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
              linerGradient1={hexToHSL(linerGradient1)}
              linerGradient2={hexToHSL(linerGradient2)}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
