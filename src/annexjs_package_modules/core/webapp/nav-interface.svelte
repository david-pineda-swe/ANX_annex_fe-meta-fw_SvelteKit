<script lang="ts">
  import { mediaIs } from "@annexjs/core/webapp/stores/reactive-media";
  import type { NavigationConfig } from "src/global";

  import MediaMonitorHud from "@annexjs/debug-tools/media-monitor/hud.svelte";
  import MenuTray from "./nav-interface/menu-tray.svelte";

  import HeaderDesktop from '@annexjs/core/webapp/nav-interface/header-desktop.svelte';
  import HeaderMobile from '@annexjs/core/webapp/nav-interface/header-mobile.svelte';
  import { selectedPrimaryMenuTray } from "@annexjs/core/webapp/stores/menu-trays";

  // TODO - INTEGRATE ANNEX CONFIG FOR TRAY UX PREFERENCES

  // TODO - Collect and merge [siteGraph => contentNavigation, $pec/config navigation] navigations
  // import { contentNavigation } from "@annexjs/core/webapp/stores/navigation-outlines";
  // let contentNavigationData;
  // contentNavigation.subscribe((data) => contentNavigationData = data);
  // console.log('>> TEST: CONFIRM ACCESS OF PAGE MODEL VIA STORE:', contentNavigationData);

  export let navigations: Array<NavigationConfig>;

  // TODO - PROJECT_CONFIG FOR headerIsFixed setting
  // TODO - PROJECT_CONFIG FOR headerFixedHeightDefault setting
  let headerIsFixed: boolean = true;
  let currentMenuTray: string;

  selectedPrimaryMenuTray.subscribe((selected) => {
    // console.log('>> SELECTED:', selected);
    currentMenuTray = selected;
  });

  const toggleMenuTray = (selectedTray: string): void => {
    // console.log('>> CHECK SELECTED_TRAY:', selectedTray);
    selectedPrimaryMenuTray.set(selectedTray);
  };
</script>

<!-- TODO >>> MAKE THE .nav-interface-container TOP SPACING REACTIVE TO CUMULATIVE HIGHT OF THE .header-dock -->

<div
  id="annex-nav-interface"
  class="nav-interface-container sm-media"
  class:fixed-header={headerIsFixed}
  class:sm-media={$mediaIs.sm}
>
  <div class="menu-dock">
    {#if $$slots['insert-tray-tp']}
      <MenuTray trayType="TP_TRAY" {toggleMenuTray} {currentMenuTray} {navigations}>
        <slot name="insert-tray-tp" />
      </MenuTray>
    {/if}
    {#if $$slots['insert-tray-rt']}
      <MenuTray trayType="RT_TRAY" {toggleMenuTray} {currentMenuTray} {navigations}>
        <slot name="insert-tray-rt" />
      </MenuTray>
    {/if}
    {#if $$slots['insert-tray-bt']}
      <MenuTray trayType="BT_TRAY" {toggleMenuTray} {currentMenuTray} {navigations}>
        <slot name="insert-tray-bt" />
      </MenuTray>
    {/if}
    {#if $$slots['insert-tray-lt']}
      <MenuTray trayType="LT_TRAY" {toggleMenuTray} {currentMenuTray} {navigations}>
        <slot name="insert-tray-lt" />
      </MenuTray>
    {/if}
    <!-- TODO - CONSIDER WILDCARD CUSTOM MENU -->
  </div>

  <div class="nav-interface-outlet">
    <!-- NOTE - DEVELOPMENT TOOL | MEDIA MONITOR HUD -->
    <!-- <MediaMonitorHud/> -->

    {#if headerIsFixed}
      <slot name="page-layout" />
    {/if}

    <div class="header-dock">
      <!-- DESKTOP_HEADER_SLOTS -->
      <HeaderDesktop {toggleMenuTray} {navigations}>
        <slot slot="insert-header-desktop-aa">
          <slot name="insert-header-desktop-a" />
        </slot>
        <slot slot="insert-header-desktop-bb">
          <slot name="insert-header-desktop-b" />
        </slot>
      </HeaderDesktop>

      <!-- MOBILE_HEADER_SLOT -->
      <HeaderMobile {toggleMenuTray} {navigations}>
        <slot slot="insert-header-mobile">
          <slot name="insert-header-mobile" />
        </slot>
      </HeaderMobile>
    </div>

    {#if !headerIsFixed}
      <slot name="page-layout" />
    {/if}
  </div>
</div>

<style lang="scss">
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
    padding-top: var(--page-header-top);

    &.sm-media {
      padding-top: var(--page-header-top-sm-media);
    }
  }

  .nav-interface-container.fixed-header .nav-interface-outlet .header-dock {
    position: fixed;
    top: 0px;
    width: 100%;
  }
</style>
