<script lang="ts">
  import type { NavigationConfig } from "src/global";
  import filterTargetNavigations from "annex/core/webapp/nav-interface/filter-target-navigations";
  import MenuPlotter from "./menu-plotter.svelte";
  import type { Snippet } from "svelte";

  interface FooterSig {
    navigations?: NavigationConfig[];
    //
    children?: Snippet
  }
  const props = $props();
  const {
    navigations = [],
    children
  } = props as FooterSig;

  // Pull targetNav configs
  const targetNavigations = filterTargetNavigations({
    navigations,
    targetMenuLocation: 'FOOTER_MENU'
  });
</script>



<footer class="menu-interface footer-menu">
  {#if targetNavigations}
    <MenuPlotter
      navigations={targetNavigations}
      locationClasses='sub-footer-menu'
      targetActions={{}}/>
  {/if}
  {@render children?.()}
</footer>



<style>
  footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 0 100px;
		min-height: 400px;
	}

	/* @media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	} */
</style>