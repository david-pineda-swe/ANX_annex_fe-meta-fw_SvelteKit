<script lang="ts">
  // TODO - S5_MIGRATE
  export let cardId:string|null = null;
  export let cardClass:string|null = null;
  export let cardConfigType:string|null = null;
  export let cardTheme:string|null = null;

  // TODO - ADD TO DIAGNOSTIC CONFIG OR REMOVE
  const testingUI = false;

  if (testingUI) {
    console.log('> TEST INST CONFIGS for UI_CopyCard:', cardId);
    console.table({ cardConfigType, cardId, cardTheme, cardClass });
  }
  
  // TODO - ACCEPT PROJECT CONFIGS
  // TODO - SUPPORT FOR site-graph dynamic rendering
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

    & > div {
      margin-bottom: 7px;
    }
  }
</style>