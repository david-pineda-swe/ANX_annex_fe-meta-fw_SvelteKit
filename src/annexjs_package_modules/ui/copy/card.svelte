<script lang="ts">
  // OK - INTEGRATE SLOT PROJECTION
  // OK - CONDITIONAL RENDERING
  // OK - DEFAULT THEME STYLES
  // OK - ACCEPT INSTANCE CONFIGS

  export let cardId:string = null;
  export let cardClass:string = null;
  export let cardConfigType:string = null;
  export let cardTheme:string = null;

  const testingUI = false;

  if (testingUI) {
    console.log('> TEST INST CONFIGS for UI_CopyCard:', cardId);
    console.table({ cardConfigType, cardId, cardTheme, cardClass });
  }
  
  // TODO - ACCEPT PROJECT CONFIGS
</script>



<div id={cardId} class="{cardTheme} copy-card {cardClass}">
  {#if $$slots ["header"]}
    <div class="card-header">
      <slot name="header"></slot>
    </div>
  {/if}

  {#if $$slots ["content"]}
    <div class="card-content">
      <slot name="content"></slot>
    </div>
  {/if}

  {#if $$slots ["extra"]}
    <div class="card-extra">
      <slot name="extra"></slot>
    </div>
  {/if}
</div>



<style lang="scss">
  .base.copy-card {
    padding: 10px;
    margin-bottom: 20px;
    // border: 1px solid red;

    & > div {
      margin-bottom: 7px;
    }

    // .card-header {
    //   border: 1px solid green;
    // }

    // .card-content {
    //   border: 1px solid blue;
    // }

    // .card-extra {
    //   border: 1px solid fuchsia;
    // }
  }
</style>