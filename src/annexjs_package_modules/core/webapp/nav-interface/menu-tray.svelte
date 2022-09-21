<script lang="ts">
  import { sineIn, quintOut } from 'svelte/easing';

  export let trayType: string;
  export let toggleMenuTray: any;
  export let currentMenuTray: string;

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
    // _domNode: any, _invocationParams: any
    // console.log('>> Transition setup includes:', _domNode, _invocationParams);
    const defaultTransition = {
      delay: (into) ? 450 : 0,
      duration: (into) ? 500 : 700,
      easing: quintOut,
      css: (t: number) => `transform: translate(${-100 + 100*t}%);`
    };

    switch(trayType) {
      case 'top':
        return {
          ...defaultTransition,
          ...{
            css: (t: number) => `transform: translatey(${-110 + 110*t}%);`
          }
        };
      case 'right':
        return {
          ...defaultTransition,
          ...{
            css: (t: number) => `transform: translate(${100 - 100*t}%);`
          }
        };
      case 'bottom':
        return {
          ...defaultTransition,
          ...{
            css: (t: number) => `transform: translatey(${100 - 100*t}%);`
          }
        };
      case 'left':
        return defaultTransition;
      default:
        // LEFT MENU TRAY
        return defaultTransition;
    };
  };
</script>

{#if openTray}
  <div class="menu-tray {trayType}"  in:trayFade={{into: true}} out:trayFade={{into: false}}>
    <button type="button" class='btn-close-menu-tray' on:click={toggleMenuTray('close')}/>
    <div class="interface-container" in:traySlide={{into:true}} out:traySlide={{into:false}}>
      <slot/>
    </div>
  </div>
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
    padding: 10px;
    background-color: #fff;
  }

  .menu-tray.right .interface-container {
    width: 300px;
    height: 100%;
    right: 0px;
  }

  .menu-tray.top .interface-container,
  .menu-tray.bottom .interface-container {
    width: 100%;
    height: 100%;
    top: 65px;
  }

  .menu-tray.left .interface-container {
    /* left: -300px; */
    width: 300px;
    height: 100%;
  }
</style>