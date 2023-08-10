<script lang="ts">
    import { shouldShow } from "./util/should-show";

    export let node: any = null;
</script>



{#if shouldShow(node)}
    {#if node.inputType === "TEXT"}  
      <h3>Text input here</h3>
    {/if}
    <!-- TODO - GRACEFUL FAIL FOR NOTHING MATCHED -->
{/if}


<!-- <style lang="scss">
    /* your styles go here */
</style> -->
