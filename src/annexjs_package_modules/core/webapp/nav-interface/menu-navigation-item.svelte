<script lang="ts">
  import { page } from '$app/stores';
  import type { NavigationNode } from "src/global";

  import MenuNavigationItemLabel from './menu-navigation-item-label.svelte';
  import MenuNavigationList from './menu-navigation-list.svelte';
  import WrapAction from '@annexjs/ui/interact/wrap-action.svelte';

  export let toggleMenuTray: any;
  export let navItem: NavigationNode;
  export let levelDepth: string;
  export let navigationType: string;
  export let locationMark: string;
  export let targetActions: {};

  const {
    nodeId,
    actionType, // [INTERNAL_ROUTE(d), EXTERNAL_LINK, SLOT_[target_slot], PROCESS_[target_handle_key]_[...params]]
    //
    slug,
    elementId,
    classes,
    subNodes
  } = navItem;

  const actingId = elementId || nodeId;

  // SLOT INJECTION
  const isSlotInjection: boolean = actionType.includes('SLOT_');
  const [_ATswitch, targetSlot] = actionType.split('_');

	// UI SELECTION HANDLE
  const handleMenuSelection = () => {
		// close any open menu
    if (toggleMenuTray) toggleMenuTray('');
  }

  // SUB NODES
  const navNodeHasChildren = (subNodes && navigationType !== 'SHALLOW');
</script>


<li
	id={`li-${actingId}`}
	class="nav-menu-list-item"
	class:active={$page.url.pathname === slug}
	class:has-sub-nav={navNodeHasChildren}
>
  <!-- switch on actionType -->
  {#if isSlotInjection}
    {#if targetSlot === 'A'}
      <slot name='A'/>
    {/if}
	{:else}
		<WrapAction
			{actingId}
			{navItem}
			{targetActions}
			handle={handleMenuSelection}
		>
			<slot />
			<MenuNavigationItemLabel navItem={navItem}/>
		</WrapAction>
  {/if}

	<!-- render sub nav items -->
  {#if navNodeHasChildren}
    <MenuNavigationList
      {toggleMenuTray}
      elementId={actingId}
      locationMark={locationMark}
      levelDepth={levelDepth}
      navigationType={navigationType}
      navListItems={subNodes}
      targetActions={targetActions}/>
  {/if}
</li>
