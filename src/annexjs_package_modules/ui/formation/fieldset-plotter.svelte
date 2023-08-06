<script lang="ts">
    // your script goes here

    import FieldgroupPlotter from "./fieldgroup-plotter.svelte";

    const formNodes = []; // controller.outline.layouts.formNodes = []
</script>



{#each formNodes as node}

    <!-- TODO - PRE/POST HRs -->

    {#if node.type === 'FIELDSET'}
        <fieldset class="form-fieldset {node.classes}">
            <legend>{node.legend}</legend>

            {#each node.subNodes as subNode}
                 {#if subNode.type === 'FIELDGROUP'}
                      <FieldgroupPlotter node={subNode}/>
                 {/if}
     
                 {#if subNode.type === 'INPUT'}
                      <!-- TODO - InputPlotter -->
                 {/if}
            {:else}
                 <!-- TODO - empty list -->
            {/each}
        </fieldset>
    {/if}

    {#if node.type === 'FIELDGROUP'}
         <FieldgroupPlotter {node}/>
    {/if}

    {#if node.type === 'INPUT'}
        <!-- TODO - InputPlotter -->
    {/if}
{/each}



<style lang="scss">
    /* your styles go here */
</style>
