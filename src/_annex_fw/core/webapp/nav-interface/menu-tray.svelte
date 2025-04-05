<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { NavigationConfig } from "src/global";
  import { sineIn, quintOut } from 'svelte/easing';
  import { mediaIs_SM } from "annex/core/webapp/stores/reactive-media";
  import { selectedMenuTray, toggleMenuTray } from '../stores/menu-trays';
  import filterTargetNavigations from "./filter-target-navigations";
  import MenuPlotter from './menu-plotter.svelte';

  interface MenuTraySig {
    trayPosition: string;
    navigations: Array<NavigationConfig>;
    //
    children: Snippet;
  }
  const props = $props();

  const {
    trayPosition,
    navigations,
    children
  } = props as MenuTraySig

  // Pull targetNav configs
  const targetNavigations = filterTargetNavigations({
    navigations,
    targetMenuLocation: trayPosition
  });

  const openTray = $derived($selectedMenuTray === trayPosition);

  const traySlide = (_domNode: any, { into }: {into: boolean}) => {
    const intoDelay = (into) ? 450 : 0;
    // _domNode: any, _invocationParams: any
    // console.log('>> Transition setup includes:', _domNode, _invocationParams);
    const defaultTransition = {
      delay: intoDelay,
      duration: (into) ? 500 : 700,
      easing: quintOut,
      css: (t: number) => `transform: translate(${-100 + 100*t}%);`
    };

    switch(trayPosition) {
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

  const trayFade = (_domNode: any, { into }: {into: boolean}) => {
    return {
      delay: (into) ? 0 : 550,
      duration: 400,
      easing: sineIn,
      css: (t: number) => `opacity: ${t};`
    };
  }
</script>



{#if $mediaIs_SM}
  <!-- MOBILE BROWSER - has "traySlide" -->
  {#if openTray}
    <div class="menu-tray {trayPosition}"  in:traySlide={{into:true}} out:traySlide={{into:false}}>
      <button type="button" class='btn-close-menu-tray' aria-label="{`close ${trayPosition}`}" onclick={() => {toggleMenuTray('close')}}></button>
      <div class="menu-interface tray-menu mobile interface-container">
        
        {#if targetNavigations}
          <MenuPlotter
            {toggleMenuTray}
            navigations={targetNavigations}
            locationClasses='menu-tray {trayPosition} mobile'
            targetActions={{}}/>
        {/if}
        
        {@render children?.()}
      </div>
    </div>
  {/if}
{:else}
  <!-- DESKTOP - has "trayFade" -->
  {#if openTray}
    <div class="menu-tray {trayPosition}"  in:trayFade={{into: true}} out:trayFade={{into: false}}>
      <button type="button" class='btn-close-menu-tray' aria-label="{`close ${trayPosition}`}" onclick={() => {toggleMenuTray('close')}}></button>
      <div class="menu-interface tray-menu desktop interface-container" in:traySlide={{into:true}} out:traySlide={{into:false}}>
        
        {#if targetNavigations}
          <MenuPlotter
            {toggleMenuTray}
            navigations={targetNavigations}
            locationClasses='menu-tray {trayPosition} desktop'
            targetActions={{}}/>
        {/if}
        
        {@render children?.()}
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
    border: none;
    margin: 0;
    border-radius: 0;
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