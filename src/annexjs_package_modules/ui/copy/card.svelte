<script lang="ts">
  console.log('>> COPY CARD WORKS');
  // OK - INTEGRATE SLOT PROJECTION
  // OK - CONDITIONAL RENDERING
  // OK - DEFAULT THEME STYLES
  // TODO - ACCEPT INSTANCE CONFIGS
  // cardId
  // cardClass
  // cardConfigType
  // cardTheme
  // TODO - ACCEPT PROJECT CONFIGS
</script>



<div class="base copy-card">
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