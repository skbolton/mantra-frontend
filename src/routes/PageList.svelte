<script lang="ts">
  import { onMount } from 'svelte'
  import { getPages } from '$lib/api/pages'
  
  let pages = []
  onMount(() => {
    const subscription = getPages().subscribe(fetchedPages => {
      pages = fetchedPages
    })

    return () => subscription.unsubscribe()
  })
</script>

<ul>
  {#each pages as page, index}
    <li><a href={`/pages/${page.id}`}>{page.title}</a></li>
  {/each}
</ul>
