<script lang="ts">
  console.log('>> COPY CARD WORKS');
  // OK - INTEGRATE SLOT PROJECTION
  // TODO - CONDITIONAL RENDERING
  // TODO - DEFAULT THEME STYLES
  // TODO - ACCEPT PROJECT CONFIGS
  // TODO - ACCEPT INSTANCE CONFIGS
</script>



<div class="copy-card">
  <div class="card-header">
    <slot name="header"></slot>
  </div>

  <div class="card-content">
    <slot name="content"></slot>
  </div>

  <div class="card-extra">
    <slot name="extra"></slot>
  </div>
</div>



<style lang="scss"></style>