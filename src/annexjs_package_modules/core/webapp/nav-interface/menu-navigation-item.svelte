<script lang="ts">
  import { page } from '$app/stores'; // FIX <<<
  import type { NavigationNode } from "src/global";

  // TODO - ACCOUNT FOR SLOT CONTENT REPLACEMENT

  export let navItem: NavigationNode;
  export let renderActive: boolean;
  export let targetActions: {};

  const {
    nodeId,
    label,
    actionType, // [INTERNAL_ROUTE, EXTERNAL_LINK, PROCESS_[target_handle_key]_[...params]]
    //
    slug,
    url,
    elementId,
    classes
  } = navItem;

  const actingId = elementId || nodeId // || or derived imp
  const useActiveClass = renderActive && $page.url.pathname === slug;
  const linkIsActive = (useActiveClass) ? ' active' : '';
  const isProcessAction: boolean = actionType.includes('PROCESS_');
  const processTargetAction = () => {
    const params = actionType.split('_');
    const _ATswitch = params.shift();
    const handleKey = params.shift();
    targetActions[handleKey](params);
  };

  // TODO 
  // linkTarget?: string; // DOCS linkTarget - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
  // icon?: string;
  // subNodes?: Array<NavigationNode>
</script>



<!-- MENU_NAV_ITEM -->
<li id={`li-${actingId}`} class="nav-menu-list-item{linkIsActive}">
  <!-- switch on actionType -->
  {#if actionType === 'INTERNAL_ROUTE'}
    <a
      id={actingId}
      class={classes}
      data-sveltekit-preload-data
      href={slug}>
        {label}</a>
  {:else if actionType === 'EXTERNAL_LINK'}
    <a
      id={actingId}
      class={classes}
      href={url}>
        {label}</a>
  {:else if isProcessAction}
    <button
      id={actingId}
      class={classes}
      on:click={() => processTargetAction()}>
        {label}</button>
  {:else}
    -
  {/if}
</li>



<style></style>