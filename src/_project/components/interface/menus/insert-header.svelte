<script lang="ts">
  import LogoType from '$pec/components/branding/logo-type.svelte';

  // NOTE - FROM DESKTOP B 
  // import { selectedMenuTray } from 'annex/core/webapp/stores/menu-trays';
  // import IconIndex from 'annex/ui/copy/icon-index.svelte';

  // const handleTargetTrayClick = () => {
  //   selectedMenuTray.set('LT_TRAY');
  // };
</script>

<LogoType location={'desktop'} />

<!-- TODO - ADD SUPPORT FOR MOBILE LAYOUT SWAP -->
<!-- <LogoType location={'mobile'} /> -->

<!-- NOTE - DEACTIVATED FROM DESKTOP B -->
<!-- <button on:click={handleTargetTrayClick}>
  <IconIndex designation={'ICONIFY_mdi:menu-open_medium|s2|white'}/>
</button> -->

<!-- <a class="brand-logo-link" target="_blank" href="https://github.com/free4m-io/annex-fe-SvelteKit">
  <img src="github-logo.png" alt="Annex.JS Repo" /> 
</a> -->

<style>
  /* NOTE FROM DESKTOP B  */
  /* a.brand-logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .brand-logo-link img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  } */
</style>
