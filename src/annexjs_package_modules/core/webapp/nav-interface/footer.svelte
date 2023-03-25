<script lang="ts">
  import filterTargetNavigations from "@annexjs/core/webapp/nav-interface/filter-target-navigations";
  import type { NavigationConfig } from "src/global";

  // Pull targetNav configs
  export let navigations: Array<NavigationConfig>;
  const targetNavigations = filterTargetNavigations({
    navigations,
    targetMenuLocation: 'FOOTER_MENU'
  });

  console.log('>> FOOTER_MENU HAS MENUS:', targetNavigations);

  // TODO - PROJECT CONFIG FOR TRAY-TOGGLE CONTROL OF POSITIONING
  // TODO - PROJECT CONFIG FOR MODULE-CONTROL POSITIONING
</script>



<footer class="menu-interface footer-menu">
  <slot name="insert-footer"/>
</footer>



<style>
  footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		border-top: 2px solid red;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>