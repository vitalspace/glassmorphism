<script lang="ts">
  import Form from "./componets/ui/form.svelte";
  import { componentsList } from "./lib/componentsList";
  import { templateList } from "./lib/templateList";
  import { componentType } from "./stores/stores";
</script>

<div
  class="bg-gray-800 place-content-center h-full xl:h-screen font-serif text-gray-300"
>
  <div class="container flex flex-col mx-auto gap-y-4 xl:px-52">
    <section class=" bg-gray-800 rounded-sm flex flex-col gap-y-2">
      <header>
        <h1 class="text-4xl">Glassmorphism CSS Generator</h1>
      </header>
      <main>
        <p class="text-md">
          Get moving with this free CSS generator based on the glassmorphism
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

    <section class="flex flex-col gap-y-6">
      <Form />
      <div class="xl:grid grid-cols-2 gap-6 flex flex-col">
        <div class="flex flex-col border-[1px] border-gray-600 bg-gray-900 gap-y-4 px-4 py-6 rounded-md">
          <div class="flex justify-between items-center px-2">
            <select
              bind:value={$componentType}
              name=""
              id=""
              class="bg-gray-800 py-1 outline-none border-gray-600"
            >
              <option value="singin-card">Singin card</option>
              <option value="profile-card">Profile card</option>
              <option value="collections-card">Collections card</option>
            </select>
            <!-- <div>
              <button>Change me</button>
            </div> -->
          </div>
          <div class="mx-2 mb-2">
            {#each componentsList as item}
              {#if $componentType === item.label}
                <svelte:component this={item.component} />
              {/if}
            {/each}
          </div>
        </div>

        <div class="border-[1px] border-gray-600 bg-gray-900 rounded-md">
          {#each templateList as item}
            {#if $componentType === item.label}
              <svelte:component this={item.component} />
            {/if}
          {/each}
        </div>
      </div>
    </section>
  </div>
</div>
