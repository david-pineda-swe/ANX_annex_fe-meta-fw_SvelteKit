<script lang="ts">
  import type { NavigationConfig } from "src/global";

  import MediaMonitorHud from "@annexjs/debug-tools/media-monitor/hud.svelte";
  import MenuTray from "./nav-interface/menu-tray.svelte";

  import HeaderMobile from '$pec/components/interface/header-mobile.svelte';
  import HeaderDesktop from '$pec/components/interface/header-desktop.svelte';

  // TODO - INTEGRATE ANNEX CONFIG FOR TRAY UX PREFERENCES

  // TODO - Collect and merge [siteGraph, $pec/config] navigations
  // import { contentNavigation } from "@annexjs/core/webapp/stores/navigation-outlines";
  // let contentNavigationData;
  // contentNavigation.subscribe((data) => contentNavigationData = data);
  // console.log('>> TEST: CONFIRM ACCESS OF PAGE MODEL VIA STORE:', contentNavigationData);

  export let navigations: Array<NavigationConfig>;

  let headerIsFixed: boolean = true;
  let currentMenuTray: string;

  const toggleMenuTray = (selectedTray: string) :void => {
    // console.log('>> CHECK SELECTED_TRAY:', selectedTray);
    currentMenuTray = selectedTray;
  }
</script>

<!-- TODO >>> MAKE THE .nav-interface-container TOP SPACING REACTIVE TO CUMULATIVE HIGHT OF THE .header-dock -->

<div id="annex-nav-interface" class="nav-interface-container" class:fixed-header={headerIsFixed}>
  <div class="menu-dock">
    {#if $$slots["tray-interface-tp"]}
      <MenuTray
        trayType="TP_TRAY"
        toggleMenuTray={toggleMenuTray}
        currentMenuTray={currentMenuTray}
        navigations={navigations}>
        <slot name="tray-interface-tp"/>
      </MenuTray>
    {/if}
    {#if $$slots["tray-interface-rt"]}
      <MenuTray
        trayType="RT_TRAY"
        toggleMenuTray={toggleMenuTray}
        currentMenuTray={currentMenuTray}
        navigations={navigations}>
        <slot name="tray-interface-rt"/>
      </MenuTray>
    {/if}
    {#if $$slots["tray-interface-bt"]}
      <MenuTray
        trayType="BT_TRAY"
        toggleMenuTray={toggleMenuTray}
        currentMenuTray={currentMenuTray}
        navigations={navigations}>
        <slot name="tray-interface-bt"/>
      </MenuTray>
    {/if}
    {#if $$slots["tray-interface-lt"]}
      <MenuTray
        trayType="LT_TRAY"
        toggleMenuTray={toggleMenuTray}
        currentMenuTray={currentMenuTray}
        navigations={navigations}>
        <slot name="tray-interface-lt"/>
      </MenuTray>
    {/if}
    <!-- TODO - CONSIDER WILDCARD CUSTOM MENU -->
  </div>

  <div class="nav-interface-outlet">
    <div class="header-dock">
      <!-- MOBILE_HEADER_SLOT -->
      <HeaderMobile
        toggleMenuTray={toggleMenuTray}
        navigations={navigations}/>

      <!-- DESKTOP_HEADER_SLOT -->
      <HeaderDesktop
        toggeleMenuTray={toggleMenuTray}
        navigations={navigations}/>
    </div>

    <MediaMonitorHud/>

    <slot name="page-layout"/>
  </div>
</div>

<style>
  .nav-interface-container {
    position: relative;
    min-height: 100%;
    min-width: 100%;
    overflow: hidden;
    /* border: 2px solid fuchsia; */
  }

  .nav-interface-container.fixed-header .menu-dock {
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 1;
    /* border: 1px solid green; */
  }

  .nav-interface-container.fixed-header {
    padding-top: 65px;
  }

  .nav-interface-container.fixed-header .nav-interface-outlet .header-dock {
    position: fixed;
    top: 0px;
    width: 100%;
  }
</style>