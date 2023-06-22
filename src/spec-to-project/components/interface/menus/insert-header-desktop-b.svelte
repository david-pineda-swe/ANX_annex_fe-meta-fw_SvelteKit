<script lang="ts">
  import { selectedPrimaryMenuTray } from '@annexjs/core/webapp/stores/menu-trays';
  import IconIndex from '@annexjs/core/webapp/display/icon-index.svelte';
  import githubLogo from './images/github-logo.png';

  const handleTargetTrayClick = () => {
    selectedPrimaryMenuTray.set('LT_TRAY');
  };
</script>

<button on:click={handleTargetTrayClick}>
  <IconIndex designation={'ICONIFY_mdi:menu-open_medium|s2|white'}/>
</button>

<a class="brand-logo-link" target="_blank" href="https://github.com/free4m-io/annex-fe-SvelteKit">
  <img src={githubLogo} alt="Annex.JS Repo" /> 
</a>



<style>
  a.brand-logo-link {
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
  }
</style>