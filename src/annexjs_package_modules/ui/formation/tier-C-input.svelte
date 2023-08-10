<script lang="ts">
    import { shouldShow } from "./util/should-show";
    import StandardInputIndex from "./input/standard/_input-index.svelte";

    export let node: any = null;
</script>


{#if shouldShow(node)}
    <!-- TODO: PASS OUTLINE TO THIS TIER FOR "inputSetType" -->
    <StandardInputIndex {node}/>
{/if}


<!-- <style lang="scss">
    /* your styles go here */
</style> -->
