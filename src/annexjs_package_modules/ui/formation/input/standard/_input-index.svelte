<script lang="ts">
  import TextInput from "./text-input.svelte";

  export let node: any = null;
</script>

{#if node.inputType === "TEXT"}  
  <TextInput/>
{:else}
  <!-- TODO - GRACEFUL FAIL FOR NOTHING MATCHED -->
  <h3>Input not supported!</h3>
{/if}
