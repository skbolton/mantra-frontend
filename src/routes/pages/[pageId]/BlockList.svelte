<script lang="ts">
  import Block from './Block.svelte'
  export let currentTreeId
  export let blocks

  // location in blocks that holds our next sibling
  $: nextSiblingIndex = blocks.slice(1).findIndex(block => block.ancestors[0] === currentTreeId)
  // when recursing we only need to pass blocks up to the next sibling at our level
  $: blocksTillNextSibling = blocks.slice(1, nextSiblingIndex == -1 ? blocks.length : nextSiblingIndex)
</script>

<ul>
  {#each blocks as { ancestors, content }}
    {#if ancestors[0] == currentTreeId}
      <Block content={content} />
    {:else}
      <svelte:self currentTreeId={ancestors[0]} blocks={blocksTillNextSibling} />
    {/if}
  {/each}
</ul>



