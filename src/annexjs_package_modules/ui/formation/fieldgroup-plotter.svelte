<script lang="ts">
    import InputPlotter from "./input-plotter.svelte";

    export const node: any = null;
</script>

<div class="form-fieldgroup {node.classes}">
    {#each node.subNodes as subNode}
        <InputPlotter node={subNode}/>
    {:else}
            <!-- TODO - empty list -->
    {/each}
</div>

<!-- <style lang="scss">
    /* your styles go here */
</style> -->
