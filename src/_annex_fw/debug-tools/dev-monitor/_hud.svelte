<script lang="ts">
  import { mediaWatch, breakpoints } from "annex/core/webapp/stores/reactive-media";
  
  // CONSOLE DIAGNOSTIC
    mediaWatch.subscribe((d) => {
      console.log(">> MEDIAL IS:", d);
    });
</script>

<!-- TODO - ADD COLOR CHANGING BG FOR SEGMENTS -->
<!-- TODO - UI FOR REPOSITION AND COLLAPSING -->
 <!-- TODO - REFACTOR FW SCSS FOR isPast MEDIA QUERIES -->

<div class="dev-monitor-hud">
  <div>Current: {$mediaWatch.classNames}</div>

  <div class="bp-indicator">
    <span class="bp-key">- is_SM:</span>
    <span class="bp-state" class:active={$mediaWatch.is_SM}>{$mediaWatch.is_SM}</span>
    <span class="bp-query-spec">BP spec: {breakpoints.is_SM}</span>
  </div>
  <div class="bp-indicator">
    <span class="bp-key">- isPast_SM:</span>
    <span class="bp-state" class:active={$mediaWatch.isPast_SM}>{$mediaWatch.isPast_SM}</span>
    <span class="bp-query-spec">BP spec: {breakpoints.isPast_SM}</span>
  </div>
  <div class="bp-indicator">
    <span class="bp-key">- is_MD:</span>
    <span class="bp-state" class:active={$mediaWatch.is_MD}>{$mediaWatch.is_MD}</span>
    <span class="bp-query-spec">BP spec: {breakpoints.is_MD}</span>
  </div>
  <div class="bp-indicator">
    <span class="bp-key">- isPast_MD:</span>
    <span class="bp-state" class:active={$mediaWatch.isPast_MD}>{$mediaWatch.isPast_MD}</span>
    <span class="bp-query-spec">BP spec: {breakpoints.isPast_MD}</span>
  </div>
  <div class="bp-indicator">
    <span class="bp-key">- is_LG:</span>
    <span class="bp-state" class:active={$mediaWatch.is_LG}>{$mediaWatch.is_LG}</span>
    <span class="bp-query-spec">BP spec: {breakpoints.is_LG}</span>
  </div>
  <div class="bp-indicator">
    <span class="bp-key">- isPast_LG:</span>
    <span class="bp-state" class:active={$mediaWatch.isPast_LG}>{$mediaWatch.isPast_LG}</span>
    <span class="bp-query-spec">BP spec: {breakpoints.isPast_LG}</span>
  </div>
  <div class="bp-indicator">
    <span class="bp-key">- is_XL:</span>
    <span class="bp-state" class:active={$mediaWatch.is_XL}>{$mediaWatch.is_XL}</span>
    <span class="bp-query-spec">BP spec: {breakpoints.is_XL}</span>
  </div>
</div>

<style lang="scss">
  .dev-monitor-hud {
    position: absolute;
    top: 700px;
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