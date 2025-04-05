<script lang="ts">
  import type { NavigationNode } from "src/global";
  import MenuNavigationItem from "./menu-navigation-item.svelte";

  // TODO - S5_MIGRATE
  export let toggleMenuTray: any;
  export let elementId: string | undefined;
  export let locationMark: string;
  export let levelDepth: string;
  export let navigationType: string;
  export let navListItems: Array<NavigationNode>
  export let targetActions: {};

  //
  const checkDepth = parseInt(levelDepth);
  const currentLevelDepthString = (checkDepth).toString();
  const isSubMenu = checkDepth >= 1;
  const nextLevelDepth = (parseInt(levelDepth) + 1).toString();

	// TODO - Refactor class designations with svelte class: shorthand 
  // fix - if no locationMark
  const dynamicListId = `${elementId}-${
    (locationMark)
      ? (isSubMenu)
        ? `${locationMark}-sub-list-${currentLevelDepthString}`
        : `${locationMark}-list`
      : "list"
  }`

  // EXPANDABLE
  const expandable = (isSubMenu && navigationType === 'EXPANDABLE')
</script>



<ul
  id={dynamicListId}
  class={`nav-menu-list${(isSubMenu) ? ' sub-list' : ''}${(expandable) ? ' expand' : ''}`}>
  {#each navListItems as navItem}
    <MenuNavigationItem
      {toggleMenuTray}
      navItem={navItem}
      levelDepth={nextLevelDepth}
      navigationType={navigationType}
      locationMark={locationMark}
      targetActions={targetActions}>
        <slot slot="A">
          <slot name="A"/>
        </slot>
    </MenuNavigationItem>
  {/each}
</ul>
