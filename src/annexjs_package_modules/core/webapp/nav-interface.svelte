<script lang="ts">
  console.log('Here is the webapp/nav-interface');
  // TODO - NEED TO DETERMINE BREAKPOINT CONFIGURATION PROGRAMATICALLY
  // TODO - INTEGRATE ANNEX CONFIG FOR TRAY PREFERENCES
</script>

<div id="annex-nav-interface" class="nav-interface-container">

    <!-- TODO - mobile-navigation-top, left, right, bottom... -->
    <h3 class="sm:hidden">- Mobile nav slot goes here!</h3>

    <slot name="desktop-navigation"/>

    <slot name="page-layout"/>
</div>

<style>
</style>