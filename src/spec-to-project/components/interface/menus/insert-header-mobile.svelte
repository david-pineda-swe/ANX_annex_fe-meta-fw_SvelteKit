<script lang="ts">
  import logo from './images/svelte-logo.svg';
</script>



<div class="branding center">
  <a href="https://kit.svelte.dev" target="_blank">
    <img src={logo} alt="SvelteKit" />
  </a>
</div>



<style>
  .branding.center img {
    width: 3em;
    height: 3em;
    object-fit: contain;
  }

   a:hover {
    color: var(--accent-color);
  }
</style>