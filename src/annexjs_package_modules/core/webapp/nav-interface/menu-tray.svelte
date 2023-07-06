<script lang="ts">
  import { sineIn, quintOut } from 'svelte/easing';
  import type { NavigationConfig } from "src/global";
  import filterTargetNavigations from "./filter-target-navigations";
  import { mediaIsMobile } from "@annexjs/core/webapp/stores/reactive-media";
    import MenuPlotter from './menu-plotter.svelte';

  export let trayType: string;
  export let toggleMenuTray: any;
  export let currentMenuTray: string;

  // Pull targetNav configs
  export let navigations: Array<NavigationConfig>;
  const targetNavigations = filterTargetNavigations({
    navigations,
    targetMenuLocation: trayType
  });

  let openTray: boolean;
  $:openTray = currentMenuTray === trayType;

  const trayFade = (_domNode: any, { into }) => {
    return {
      delay: (into) ? 0 : 550,
      duration: 400,
      easing: sineIn,
      css: (t: number) => `opacity: ${t};`
    };
  }

  const traySlide = (_domNode: any, { into }) => {
    const intoDelay = (into) ? 450 : 0;
    // _domNode: any, _invocationParams: any
    // console.log('>> Transition setup includes:', _domNode, _invocationParams);
    const defaultTransition = {
      delay: intoDelay,
      duration: (into) ? 500 : 700,
      easing: quintOut,
      css: (t: number) => `transform: translate(${-100 + 100*t}%);`
    };

    switch(trayType) {
      case 'TP_TRAY':
        return {
          ...defaultTransition,
          ...{
            css: (t: number) => `transform: translatey(${-110 + 110*t}%);`
          }
        };
      case 'RT_TRAY':
        return {
          ...defaultTransition,
          ...{
            css: (t: number) => `transform: translate(${100 - 100*t}%);`
          }
        };
      case 'BT_TRAY':
        // TODO - still quirks with iP 13 pro max chrome
        return {
          ...defaultTransition,
          ...{
            css: (t: number) => `transform: translatey(${100 - 100*t}%);`
          }
        };
      case 'LT_TRAY':
        return defaultTransition;
      default:
        // LEFT MENU TRAY
        return defaultTransition;
    };
  };
</script>



{#if $mediaIsMobile}
  <!-- MOBILE BROWSER -->
  {#if openTray}
    <div class="menu-tray {trayType}"  in:traySlide={{into:true}} out:traySlide={{into:false}}>
      <button type="button" class='btn-close-menu-tray' on:click={toggleMenuTray('close')}/>
      <div class="menu-interface tray-menu mobile interface-container">
        
        {#if targetNavigations}
          <MenuPlotter
            {toggleMenuTray}
            navigations={targetNavigations}
            locationClasses='menu-tray {trayType} mobile'
            targetActions={{}}/>
        {/if}
        
        <slot/>
      </div>
    </div>
  {/if}
{:else}
  <!-- DESKTOP -->
  {#if openTray}
    <div class="menu-tray {trayType}"  in:trayFade={{into: true}} out:trayFade={{into: false}}>
      <button type="button" class='btn-close-menu-tray' on:click={toggleMenuTray('close')}/>
      <div class="menu-interface tray-menu desktop interface-container" in:traySlide={{into:true}} out:traySlide={{into:false}}>
        
        {#if targetNavigations}
          <MenuPlotter
            {toggleMenuTray}
            navigations={targetNavigations}
            locationClasses='menu-tray {trayType} desktop'
            targetActions={{}}/>
        {/if}
        
        <slot/>
      </div>
    </div>
  {/if}
{/if}

<style>
  /* .mobile-nav__menu-container */
  .menu-tray {
    /* display: none; */
    width: 100%;
    height: 100%;
    z-index: 1;
    position: fixed;
    /* background-color: fuchsia; */
  }

  .menu-tray.slide-open {
    display: block;
  }

  .btn-close-menu-tray {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
  }

  .interface-container {
    position: absolute;
    overflow-x: hidden;
  }
  .interface-container::-webkit-scrollbar {
    display: none;
  }
  
  /* TOP & BOTTOM */
  .menu-tray.TP_TRAY .interface-container,
  .menu-tray.BT_TRAY .interface-container {
    width: 100%;
    height: 100%;
  }

  /* RIGHT */
  .menu-tray.RT_TRAY .interface-container {
    height: 100%;
    right: 0px;
  }

  /* LEFT */
  .menu-tray.LT_TRAY .interface-container {
    height: 100%;
  }
</style>