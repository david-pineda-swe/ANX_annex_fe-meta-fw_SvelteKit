<script lang="ts">
    // your script goes here

    const formNodes = []; // controller.outline.layouts.formNodes = []
</script>

{#each formNodes as node}
    {#if node === 'FIELD_SET'}
        <fieldset>
            <legend>{node.legend}</legend>

            <!-- TODO - InputsPlotter goes here -->
        </fieldset>
    {/if}

    <!-- TODO - FieldGroup -->
    <!-- TODO - input -->

{/each}

<style lang="scss">
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->