<script lang="ts">
  import type { NavigationConfig } from "src/global";
  import type { Snippet } from "svelte";
  import { mediaWatch } from "annex/core/webapp/stores/reactive-media";
  import DevMonitorHud from "annex/debug-tools/dev-monitor/_hud.svelte"; // NOTE - FOR RESPONSIVE TESTING 
  import MenuTray from "./nav-interface/menu-tray.svelte";
  import HeaderDockManager from "./nav-interface/header-dock-manager.svelte";

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
    //
    pageLayout?: Snippet;
    HeaderInsert?: Snippet;
    TrayTopInsert?: Snippet;
    TrayRightInsert?: Snippet;
    TrayBottomInsert?: Snippet;
    TrayLeftInsert?: Snippet;
  }
  const props = $props();

  const {
    navigations,
    pageLayout,
    HeaderInsert,
    TrayTopInsert,
    TrayRightInsert,
    TrayBottomInsert,
    TrayLeftInsert
  } = props as NavInterfaceSig;

  // TODO - PROJECT_CONFIG FOR headerIsFixed setting
  // TODO - PROJECT_CONFIG FOR headerFixedHeightDefault setting
  const headerIsFixed: boolean = true;
</script>

<div
  id="annex-nav-interface"
  class="nav-interface-container"
  class:sm-media={$mediaWatch.is_SM}
>
  <div class="menu-dock">
    {#if TrayTopInsert}
      <MenuTray trayPosition="TP_TRAY" {navigations}>
        {@render TrayTopInsert?.()}
      </MenuTray>
    {/if}
    {#if TrayRightInsert}
      <MenuTray trayPosition="RT_TRAY" {navigations}>
        {@render TrayRightInsert?.()}
      </MenuTray>
    {/if}
    {#if TrayBottomInsert}
      <MenuTray trayPosition="BT_TRAY" {navigations}>
        {@render TrayBottomInsert?.()}
      </MenuTray>
    {/if}
    {#if TrayLeftInsert}
      <MenuTray trayPosition="LT_TRAY" {navigations}>
        {@render TrayLeftInsert?.()}
      </MenuTray>
    {/if}
  </div>

  <div class="nav-interface-outlet">
    {#if headerIsFixed}
      {@render pageLayout?.()}
    {/if}

    <HeaderDockManager {headerIsFixed} {navigations}>
      {#snippet HeaderInsertSpot()}
        {@render HeaderInsert?.()}
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
