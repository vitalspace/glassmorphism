<script lang="ts">
  export let typeContent;
  export let activeTabValue;
  export let height;

  import Highlight from "svelte-highlight";
  import cssStyle from "svelte-highlight/languages/css";
  import vbscriptHtml from "svelte-highlight/languages/vbscript-html";
  import a11yDark from "svelte-highlight/styles/a11y-dark";
  import { copyClipBoard } from "../../lib/copyClipBoard";

  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<svelte:head>
  {@html a11yDark}
</svelte:head>

<section class="flex flex-col gap-y-3 p-6">
  <div class="flex justify-between items-center">
    <div class="flex gap-4">
      {#each typeContent as item}
        <button
          class={activeTabValue === item.label
            ? "bg-purple-800 text-white px-4 py-1 rounded-sm transition-all"
            : "bg-none px-4 py-1 hover:bg-gray-800 hover:text-white rounded-sm transition-all"}
          on:click={handleClick(item.label)}>{item.label}</button
        >
      {/each}
    </div>
    <div>
      <button
        class="px-2 py-1 bg-gray-900 rounded-sm hover:bg-purple-800 transition-all"
        on:click={() => copyClipBoard(typeContent, activeTabValue)}>Copy</button
      >
    </div>
  </div>

  <div class="overflow-auto rounded-md" style="height: {height};">
    {#each typeContent as item}
      {#if activeTabValue === item.label}
        {#if item.label !== "Css"}
          <Highlight language={vbscriptHtml} code={item.content} />
        {:else}
          <Highlight language={cssStyle} code={item.content} />
        {/if}
      {/if}
    {/each}
  </div>
</section>
