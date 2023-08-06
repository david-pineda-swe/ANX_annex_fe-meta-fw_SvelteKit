<script lang="ts">
    export const node: any = null;
</script>

<div class="form-fieldgroup {node.classes}">
    {#each node.subNodes as subNode}
        <!-- TODO - InputPlotter here -->
    {:else}
            <!-- TODO - empty list -->
    {/each}
</div>

<!-- <style>
    /* your styles go here */
</style> -->
