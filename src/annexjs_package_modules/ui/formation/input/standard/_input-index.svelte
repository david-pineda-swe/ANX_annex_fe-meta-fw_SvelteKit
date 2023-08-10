<script lang="ts">
  // your script goes here

  export let node: any = null;
</script>

{#if node.inputType === "TEXT"}  
  <h3>Text input here</h3>
{/if}

<!-- TODO - GRACEFUL FAIL FOR NOTHING MATCHED -->