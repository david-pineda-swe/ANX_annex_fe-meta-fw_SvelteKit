<script lang="ts">
    import { shouldShow } from "./util/should-show";

    export let node: any = null;
</script>



{#if shouldShow(node)}
    <h3>Placeholder - form input here </h3>
    <!-- TODO - Possible input node types go here -->
    <!-- TODO - GRACEFUL FAIL FOR NOTHING MATCHED -->
{/if}


<!-- <style lang="scss">
    /* your styles go here */
</style> -->
