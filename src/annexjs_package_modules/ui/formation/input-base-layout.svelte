<script lang="ts">
  import { is_empty } from "svelte/internal";

  export let node:any = null;

  const derivedClasses = `form-field`; // + fieldContainerClasses, fieldHasErrors

  const fieldHasErrors = !is_empty(node.errors);
  const fieldHasHintText = false; // TODO -

  // console.log(`>> TEST LABEL:`, node);
  
</script>



<div class={derivedClasses}>
  <label for={node.id}>
    {node.label}
  </label>

  <div class="input-container">
    <slot/>
  </div>

  <!-- TODO - Consider support for multi lib toast indicators -->
  {#if fieldHasErrors}
    <ul class="input-error-list">
        {#each node.errors as error}
          <li class="error-message">
            {error}
          </li>
        {/each}
      </ul>
  {/if}

  {#if fieldHasHintText}
    <div class="hint-text">
      {node.hintText}
    </div>
  {/if}
</div>

<style lang="scss">
  .form-field {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: calc(var(--block-bottom-margin));
    // border: 1px solid red;

    // label {
    //   border: 1px solid green;
    // }

    .input-container {
      margin-bottom: var(--item-bottom-margin);
      // border: 1px solid blue;
    }

    .input-error-list {
      list-style: disc;
      // border: 1px solid fuchsia;
    }

    .hint-text {
      border: 1px solid orange;
    }
  }
</style>