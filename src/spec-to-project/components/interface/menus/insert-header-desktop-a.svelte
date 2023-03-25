<script lang="ts">
  import logo from './images/svelte-logo.svg';
</script>


<a class="brand-logo-link" target="_blank" href="https://kit.svelte.dev">
  <img src={logo} alt="SvelteKit" /> 
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