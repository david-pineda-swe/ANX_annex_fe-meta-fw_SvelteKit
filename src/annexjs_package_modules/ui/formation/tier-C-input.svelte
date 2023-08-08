<script lang="ts">
    import { shouldShow } from "./util/should-show";

    export const node: any = null;
</script>



{#if shouldShow(node)}
    <!-- TODO - Possible input node types go here -->
    <!-- TODO - GRACEFUL FAIL FOR NOTHING MATCHED -->
{/if}


<!-- <style lang="scss">
    /* your styles go here */
</style> -->
