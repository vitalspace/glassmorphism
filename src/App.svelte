<script lang="ts">
  console.log("Hello world");
</script>

<div class="bg-gray-800 place-content-center h-screen font-serif text-gray-300">
  <div class="container flex flex-col mx-auto gap-y-4 px-60">
   
    <section class="border-2 p-2 bg-gray-700 rounded-sm">
      <header>
        <h1 class="text-4xl">Glassmorphism CSS Generator</h1>
      </header>
      <main>
        Get moving with this free CSS generator grounded on the
        glassmorphism blueprint particulars to hastily devise and customize the style properties.
      </main>
      <footer>
        Outline founded on vitalcode.xyz and fabricated by Vital Code.
      </footer>
    </section>

    <section class="flex flex-col gap-y-4">
      <form class="flex justify-evenly border-2 p-2 bg-gray-700 rounded-sm gap-4">
        <div class="">
          <!-- <p class="text-xs">Background color</p> -->
          <label class="text-xs" for="">Background color</label>
          <input class="bg-gray-900 px-2 w-full" type="color" />
        </div>

        <div>
          <label for="">Background type</label>
          <select name="" id="" class="bg-gray-900">
            <option value="solid">Solid</option>
            <option value="mesh-gradient">Mesh gradient</option>
            <option value="image">Image</option>
          </select>
        </div>

        <div>
          <label for="">Blur value</label>
          <input type="range" />
        </div>

        <div>
          <label for="">Opacity</label>
          <input type="range" />
        </div>

        <div>
          <label for="">Saturation</label>
          <input type="range" />
        </div>
      </form>

      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col border-2 rounded-sm">
          <div class="flex justify-between items-center p-2">
            <select name="" id="">
              <option value="member-card">Member card</option>
              <option value="profile-card">Profile card</option>
              <option value="pricing-card">Pricing card</option>
            </select>
            <div>
              <button>Change me</button>
            </div>
          </div>
          <div>Hello</div>
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
