<script lang="ts">
  import { onMount } from 'svelte'
  import { pipe, startWith } from 'rxjs'
  import { getBlocks } from '$lib/api/pages'
  import BlockList from './BlockList.svelte'

  export let data

  let blocks = []
  onMount(() => {
    const subscription = getBlocks(data.pageId).pipe(
      startWith([])
    ).subscribe(fetchedBlocks => {
      blocks = fetchedBlocks
    })

    return () => subscription.unsubscribe()
  })
</script>

<h1>Welcome to page {data.pageId}</h1>
<BlockList currentTreeId={data.pageId} blocks={blocks}/>

