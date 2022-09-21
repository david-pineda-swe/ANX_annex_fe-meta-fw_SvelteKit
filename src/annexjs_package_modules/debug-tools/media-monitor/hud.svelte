<script lang="ts">
  import mediaIs from "@annexjs/debug-tools/media-monitor/store";
  
  $:mobileActive = ($mediaIs.mobile) ? 'active' : 'inactive';
  $:smallUpActive = ($mediaIs.sm) ? 'active' : 'inactive';
</script>

<div class="media-monitor-hud">
  <div class="bp-indicator">
    <span class="bp-key">Mobile BP (max-width: 390px) class directive = mobile:</span>
    <span class="bp-state {mobileActive}">{$mediaIs.mobile}</span>
  </div>
  <div class="bp-indicator">
    <span class="bp-key">Small & UP BP (min-width: 640px) class directive = sm:</span>
    <span class="bp-state {smallUpActive}">{$mediaIs.sm}</span>
  </div>
</div>

<style>
  .inactive {
    font-weight: lighter;
    color: red;
  }
  .active {
    font-weight: bold;
    color: green;
  }
</style>