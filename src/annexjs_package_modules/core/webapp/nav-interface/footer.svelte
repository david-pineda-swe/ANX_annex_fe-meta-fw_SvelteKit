<script lang="ts">
  import type { NavigationConfig } from "src/global";
  import filterTargetNavigations from "@annexjs/core/webapp/nav-interface/filter-target-navigations";

  import MenuPlotter from "./menu-plotter.svelte";

  // Pull targetNav configs
  export let navigations: Array<NavigationConfig>;
  const targetNavigations = filterTargetNavigations({
    navigations,
    targetMenuLocation: 'FOOTER_MENU'
  });

  // TODO - PROJECT CONFIG FOR TRAY-TOGGLE CONTROL OF POSITIONING
  // TODO - PROJECT CONFIG FOR MODULE-CONTROL POSITIONING
</script>



<footer class="menu-interface footer-menu">
  {#if targetNavigations}
    <MenuPlotter
      navigations={targetNavigations}
      locationClasses='footer-menu'
      targetActions={{}}/>
  {/if}

  <slot name="insert-footer"/>
</footer>



<style>
  footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
		border-top: 2px solid red;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>