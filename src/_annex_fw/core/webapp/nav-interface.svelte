<script lang="ts">
  import { mediaWatch } from "annex/core/webapp/stores/reactive-media";
  import type { NavigationConfig } from "src/global";

  import DevMonitorHud from "annex/debug-tools/dev-monitor/_hud.svelte"; // NOTE - FOR RESPONSIVE TESTING 
  import MenuTray from "./nav-interface/menu-tray.svelte";
  import HeaderDockManager from "./nav-interface/header-dock-manager.svelte";
  import { selectedPrimaryMenuTray } from "annex/core/webapp/stores/menu-trays";
  import type { Snippet } from "svelte";

  // TODO - CREATE AND ADD DIAGNOSTIC TO A PROJECT CONFIG
  const showDiagnostic = false;

  // TODO - INTEGRATE ANNEX CONFIG FOR TRAY UX PREFERENCES

  // TODO - Collect and merge [siteGraph => contentNavigation, $pec/config navigation] navigations
  // import { contentNavigation } from "annex/core/webapp/stores/navigation-outlines";
  // let contentNavigationData;
  // contentNavigation.subscribe((data) => contentNavigationData = data);
  // console.log('>> TEST: CONFIRM ACCESS OF PAGE MODEL VIA STORE:', contentNavigationData);

  interface NavInterfaceSig {
    navigations: Array<NavigationConfig>;
    pageLayout?: Snippet;
    desktopHeaderInsert?: Snippet;
    mobileHeaderInsert?: Snippet;
  }
  const props = $props();

  const {
    navigations,
    pageLayout,
    desktopHeaderInsert,
    mobileHeaderInsert,
  } = props as NavInterfaceSig;

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
  class="nav-interface-container"
  class:sm-media={$mediaWatch.is_SM}
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

    {#if headerIsFixed}
      {@render pageLayout?.()}
    {/if}

    <HeaderDockManager {headerIsFixed} {toggleMenuTray} {navigations}>
      {#snippet DHinsert()}
        {@render desktopHeaderInsert?.()}
      {/snippet}
      {#snippet MHinsert()}
        {@render mobileHeaderInsert?.()}
      {/snippet}
    </HeaderDockManager>

    {#if !headerIsFixed}
      {@render pageLayout?.()}
    {/if}
  </div>

  {#if showDiagnostic}
    <!-- NOTE - DEVELOPMENT TOOL | MEDIA MONITOR HUD -->
    <DevMonitorHud/>
  {/if}
</div>

<style lang="scss">
  .nav-interface-container {
    position: relative;
    min-height: 100%;
    min-width: 100%;
    overflow: hidden;
    padding-top: var(--page-header-height-desktop);
    /* border: 2px solid fuchsia; */

    &.sm-media {
      padding-top: var(--page-header-height-mobile);
    }

    .menu-dock {
      position: absolute;
      top: 0px;
      width: 100%;
      z-index: 1;
      /* border: 1px solid green; */
    }
  }
</style>
