<script lang="ts">
  import type { NavigationConfig } from 'src/global';
  import filterTargetNavigations from '@annexjs/core/webapp/nav-interface/filter-target-navigations';

  export let toggleMenuTray: any;

  // Pull targetNav configs
  export let navigations: Array<NavigationConfig>;
  const targetNavigations = filterTargetNavigations({
    navigations,
    targetMenuLocation: 'HEADER_MOBILE'
  });

  console.log('>> HEADER_MOBILE HAS MENUS:', targetNavigations);

  // TODO - PROJECT CONFIG FOR TRAY-TOGGLE CONTROL OF POSITIONING
  // TODO - PROJECT CONFIG FOR MODULE-CONTROL POSITIONING
</script>

<header class="mobile-header flex sm:hidden p-2">
  <div class="corner left">
    <button class="tray-toggle tp-tray-btn" on:click={toggleMenuTray('TP_TRAY')}>TP</button>
    <button class="tray-toggle rt-tray-btn" on:click={toggleMenuTray('RT_TRAY')}>RT</button>
  </div>

  <slot/>

  <div class="corner right">
    <button class="tray-toggle bt-tray-btn" on:click={toggleMenuTray('BT_TRAY')}>BT</button>
    <button class="tray-toggle lt-tray-btn" on:click={toggleMenuTray('LT_TRAY')}>LT</button>
  </div>
</header>

<style>
  .corner {
    display: flex;
    gap: 10px;
    height: 3em;
  }

  header.mobile-header {
    justify-content: space-between;
    background-color: #fff;
  }

  .tray-toggle{
    color: white;
    background-color: teal;
    padding: 5px;
    display: inline-block;
    border-radius: 7px;
  }
</style>
