<script lang="ts">
  console.log('Here is the webapp/nav-interface');
  // TODO - NEED TO DETERMINE BREAKPOINT CONFIGURATION PROGRAMATICALLY
  // TODO - INTEGRATE ANNEX CONFIG FOR TRAY PREFERENCES
  let isMoblieView = false;
</script>

<div id="annex-nav-interface" class="nav-interface-container">
  { #if isMoblieView }
    <!-- TODO - mobile-navigation-top, left, right, bottom... -->
    <h3>- Mobile nav slot goes here!</h3>
  {:else}
    <slot name="desktop-navigation"/>
  {/if}

    <slot name="page-layout"/>
</div>

<style>
</style>