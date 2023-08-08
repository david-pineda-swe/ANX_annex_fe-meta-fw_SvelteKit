<script lang="ts">
    import TierC_Input from "./tier-C-input.svelte";

    export const node: any = null;
</script>

<div class="form-fieldgroup {node.classes}">
    {#each node.subNodes as subNode}
        <TierC_Input node={subNode}/>
    {:else}
            <!-- TODO - empty list -->
    {/each}
</div>

<!-- <style lang="scss">
    /* your styles go here */
</style> -->
