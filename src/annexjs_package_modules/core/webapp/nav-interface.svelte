<script lang="ts">
  import MenuTray from "./nav-interface/menu-tray.svelte";

  console.log('Here is the webapp/nav-interface SLOTS', $$slots);
  // TODO - INTEGRATE ANNEX CONFIG FOR TRAY UX PREFERENCES
</script>

<div id="annex-nav-interface" class="nav-interface-container">

    <!-- TODO - mobile-navigation-top, left, right, bottom... -->
    {#if $$slots["tray-interface-tp"]}
      <MenuTray trayType="top">
        <slot name="tray-interface-tp"/>
      </MenuTray>
    {/if}
    {#if $$slots["tray-interface-rt"]}
      <MenuTray trayType="right">
        <slot name="tray-interface-rt"/>
      </MenuTray>
    {/if}
    {#if $$slots["tray-interface-bt"]}
      <MenuTray trayType="bottom">
        <slot name="tray-interface-bt"/>
      </MenuTray>
    {/if}
    {#if $$slots["tray-interface-lt"]}
      <MenuTray trayType="left">
        <slot name="tray-interface-lt"/>
      </MenuTray>
    {/if}

    <div class="nav-interface-outlet">
      <slot name="header-mobile"/>
  
      <slot name="header-desktop"/>
  
      <slot name="page-layout"/>
    </div>
</div>

<style>
</style>