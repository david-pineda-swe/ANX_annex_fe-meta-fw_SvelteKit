<script lang="ts">
  import { mediaIs } from "annex/core/webapp/stores/reactive-media";
  
  $:mobileAnonActive = ($mediaIs.mobile_anon) ? 'active' : 'inactive';
  $:mobileIPxiiiMaxActive = ($mediaIs.mobile_iPhoneXIIIproMax) ? 'active' : 'inactive';
  $:smallUpActive = ($mediaIs.sm) ? 'active' : 'inactive';
</script>


<div class="media-monitor-hud">
  <div class="bp-indicator class-names-aval {$mediaIs.classNames}">
    Active media query classes: <b>{$mediaIs.classNames}</b>
  </div>

  <div class="bp-indicator">
    <span class="bp-key">- mobile_anon:</span>
    <span class="bp-state {mobileAnonActive}">{$mediaIs.mobile_anon}</span>
    <span class="bp-query-spec">BP spec: (max-width: 390px)</span>
  </div>
  
  <div class="bp-indicator">
    <span class="bp-key">- mobile_iPhoneXIIIproMax:</span>
    <span class="bp-state {mobileIPxiiiMaxActive}">{$mediaIs.mobile_iPhoneXIIIproMax}</span>
    <span class="bp-query-spec">BP spec: (device-width: 428px) <br/> and (device-height: 926px) <br/> and (-webkit-device-pixel-ratio: 3)</span>
  </div>
  
  <div class="bp-indicator">
    <span class="bp-key">- sm:</span>
    <span class="bp-state {smallUpActive}">{$mediaIs.sm}</span>
    <span class="bp-query-spec">BP spec: (min-width: 640px)</span>
  </div>
</div>

<style>
  .bp-indicator {
    padding: 5px 0 5px 10px;
    border-bottom: 2px solid gray;
  }

  .class-names-aval b {
    color: fuchsia;
  }
  .bp-query-spec {
    font-size: 85%;
    display: block;
  }
  .inactive {
    font-weight: lighter;
    color: red;
  }
  .active {
    font-weight: bold;
    color: green;
  }
</style>