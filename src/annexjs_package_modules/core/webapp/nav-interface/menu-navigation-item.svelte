<script lang="ts">
  import { page } from '$app/stores'; // FIX <<<
  import type { NavigationNode } from "src/global";
  import MenuNavigationItemLabel from './menu-navigation-item-label.svelte';

  // TODO - ACCOUNT FOR SLOT CONTENT REPLACEMENT

  export let navItem: NavigationNode;
  export let renderActive: boolean;
  export let targetActions: {};

  const {
    nodeId,
    actionType, // [INTERNAL_ROUTE(d), EXTERNAL_LINK, SLOT, PROCESS_[target_handle_key]_[...params]]
    //
    slug,
    url,
    elementId,
    classes,
  } = navItem;

  const actingId = elementId || nodeId // || or derived imp
  const useActiveClass = renderActive && $page.url.pathname === slug;
  const linkIsActive = (useActiveClass) ? ' active' : '';

  // SLOT INJECTION
  const isSlotInjection: boolean = actionType.includes('SLOT_');
  const [_ATswitch, targetSlot] = actionType.split('_');

  // PROCESS ACTION
  const isProcessAction: boolean = actionType.includes('PROCESS_');
  const processTargetAction = () => {
    const params = actionType.split('_');
    const _ATswitch = params.shift();
    const handleKey = params.shift();
    targetActions[handleKey](params);
  };

  // TODO 
  // linkTarget?: string; // DOCS linkTarget - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
  // subNodes?: Array<NavigationNode>
</script>



<!-- MENU_NAV_ITEM -->
<li id={`li-${actingId}`} class="nav-menu-list-item{linkIsActive}">
  <!-- switch on actionType -->
  {#if isSlotInjection}
    {#if targetSlot === 'A'}
      <slot name='A'/>
    {/if}
  {:else if actionType === 'INTERNAL_ROUTE'}
    <a
      id={actingId}
      class={classes}
      data-sveltekit-preload-data
      href={slug}>
        <MenuNavigationItemLabel navItem={navItem}/>
    </a>
  {:else if actionType === 'EXTERNAL_LINK'}
    <a
      id={actingId}
      class={classes}
      href={url}>
        <MenuNavigationItemLabel navItem={navItem}/>
    </a>
  {:else if isProcessAction}
    <button
      id={actingId}
      class={classes}
      on:click={() => processTargetAction()}>
        <MenuNavigationItemLabel navItem={navItem}/>
    </button>
  {:else}
    -
  {/if}
</li>



<style></style>