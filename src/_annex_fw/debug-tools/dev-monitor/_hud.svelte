<script lang="ts">
  import { mediaWatch, breakpoints } from "annex/core/webapp/stores/reactive-media";
  
  // CONSOLE DIAGNOSTIC
    mediaWatch.subscribe((d) => {
      console.log(">> MEDIAL IS:", d);
    });
</script>



<div class="dev-monitor-hud">
  <div>Current: {$mediaWatch.classNames}</div>

  <div class="bp-indicator">
    <span class="bp-key">- isSmall:</span>
    <span class="bp-state" class:active={$mediaWatch.isSmall}>{$mediaWatch.isSmall}</span>
    <span class="bp-query-spec">BP spec: {breakpoints.isSmall}</span>
  </div>
  <div class="bp-indicator">
    <span class="bp-key">- isMedium:</span>
    <span class="bp-state" class:active={$mediaWatch.isMedium}>{$mediaWatch.isMedium}</span>
    <span class="bp-query-spec">BP spec: {breakpoints.isMedium}</span>
  </div>
  <div class="bp-indicator">
    <span class="bp-key">- isLarge:</span>
    <span class="bp-state" class:active={$mediaWatch.isLarge}>{$mediaWatch.isLarge}</span>
    <span class="bp-query-spec">BP spec: {breakpoints.isLarge}</span>
  </div>
  <div class="bp-indicator">
    <span class="bp-key">- isUltra:</span>
    <span class="bp-state" class:active={$mediaWatch.isUltra}>{$mediaWatch.isUltra}</span>
    <span class="bp-query-spec">BP spec: {breakpoints.isUltra}</span>
  </div>
</div>

<style lang="scss">
  .dev-monitor-hud {
    position: absolute;
    top: 0px;
    width: 100%;
    padding: 5px;
    background-color: #fff;
    border-bottom: 2px solid gray;
  }

  .bp-indicator {
    padding: 5px 0 5px 10px;
    border-bottom: 2px solid gray;

    .bp-state {
      color: red;

      &.active {
        font-weight: bold;
        color: green;
      }
    }

    .bp-query-spec {
      font-size: 85%;
      display: block;
    }
  }
</style>