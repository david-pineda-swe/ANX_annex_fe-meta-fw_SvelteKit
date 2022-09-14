<script lang="ts">
  // import { page } from '$app/stores';
  import logo from './svelte-logo.svg';
</script>

<header class="mobile-header flex sm:hidden py-2">
  <div class="corner left">
    
  </div>

  <div class="branding center">
    <a href="https://kit.svelte.dev">
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>

  <div class="corner right">
    <!-- TODO hamburger menu icon -->
  </div>
</header>

<style>
  header.mobile-header {
    justify-content: space-between;
    background-color: #fff;
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  .branding.center img {
    width: 3em;
    height: 3em;
    object-fit: contain;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
