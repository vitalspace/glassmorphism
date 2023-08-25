<script lang="ts">
  import Singin from "./componets/Singin.svelte";

  let backgroundColor: '#e9e2e2';
  let cardColor: '#e9e2e2';
  let inputType = "url";
  let backgroundType = "image";
  let blurValue;
  let opacity;
  let saturation;

  const answer = () => {
    if (backgroundType === "solid") {
      inputType = "color";
    } else if (backgroundType === "mesh-gradient") {
      inputType = "color";
    } else {
      inputType = "url";
    }
  };

  const getInputValue = (e: any) => {
    backgroundColor = e.target.value;
    // console.log(e.target.value);
  };

  const getCardValue = (e: any) => {
    cardColor = e.target.value;
  };
</script>

<div class="bg-gray-800 place-content-center h-screen font-serif text-gray-300">
  <div class="container flex flex-col mx-auto gap-y-4">
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
        class="flex justify-between items-center border-2 p-2 bg-gray-900 rounded-sm gap-4"
      >
        <div class="flex flex-col gap-y-2">
          <!-- <p class="text-xs">Background color</p> -->
          <label for="">Background color</label>
          <input
            class="bg-gray-900 w-full border-2"
            type={inputType}
            on:input={(e) => getInputValue(e)}
          />
        </div>

        <div class="flex flex-col gap-y-2">
          <label for="">Background type</label>
          <select
            bind:value={backgroundType}
            on:change={() => answer()}
            name=""
            id=""
            class="bg-gray-900"
          >
            <option value="solid">Solid</option>
            <option value="mesh-gradient">Mesh gradient</option>
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

            value="#ffffff"
          />
        </div>

        <div class="flex flex-col gap-y-2">
          <label for="">Blur value</label>
          <input type="range" />
        </div>

        <div class="flex flex-col gap-y-2">
          <label for="">Opacity</label>
          <input type="range" />
        </div>

        <div class="flex flex-col gap-y-2">
          <label for="">Saturation</label>
          <input type="range" />
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
            <Singin backgroundColor={backgroundColor} cardColor={cardColor} />
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
        </div>
      </div>
    </section>
  </div>
</div>
