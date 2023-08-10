<script lang="ts">
  export let node:any = null;

  const derivedClasses = `form-field`; // + fieldContainerClasses, fieldHasErrors

  const fieldHasErrors = false; // TODO -
  const fieldHasHintText = false; // TODO -

  console.log(`>> TEST LABEL:`, node);
  
</script>



<div class={derivedClasses}>
  <label for={node.id}>
    {node.label}
  </label>

  <slot/>

  {#if fieldHasErrors}
    <ul class="input-error-list">
      <li class="error-message">
        <h3>TODO: SUPPORT INPUT VALIDATION ERROR HANDLING</h3>
      </li>
    </ul>
  {/if}

  {#if fieldHasHintText}
    <div class="hint-text">
      {node.hintText}
    </div>
  {/if}
</div>