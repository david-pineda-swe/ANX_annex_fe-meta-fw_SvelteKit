<script lang="ts">
  console.log('>> COPY CARD WORKS');
  // OK - INTEGRATE SLOT PROJECTION
  // OK - CONDITIONAL RENDERING
  // TODO - DEFAULT THEME STYLES
  // TODO - ACCEPT PROJECT CONFIGS
  // TODO - ACCEPT INSTANCE CONFIGS
</script>



<div class="copy-card">
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
  .copy-card {
    border: 1px solid red;
    .card-header {
      border: 1px solid green;
    }

    .card-content {
      border: 1px solid blue;
    }

    .card-extra {
      border: 1px solid fuchsia;
    }
  }
</style>