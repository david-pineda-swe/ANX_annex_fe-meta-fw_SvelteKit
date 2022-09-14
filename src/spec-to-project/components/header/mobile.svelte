<script lang="ts">
  // import { page } from '$app/stores';
  import logo from './svelte-logo.svg';
</script>

<header class="mobile-header flex sm:hidden py-2">
  <div class="corner left">
    <button class="tray-toggle top">Top</button>
    <button class="tray-toggle right">Right</button>
  </div>

  <div class="branding center">
    <a href="https://kit.svelte.dev">
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>

  <div class="corner right">
    <button class="tray-toggle bottom">Bottom</button>
    <button class="tray-toggle left">Left</button>
  </div>
</header>

<style>
  header.mobile-header {
    justify-content: space-between;
    background-color: #fff;
  }

  .corner {
    display: flex;
    gap: 10px;
    height: 3em;
  }

  .branding.center img {
    width: 3em;
    height: 3em;
    object-fit: contain;
  }

  .tray-toggle{
    color: white;
    background-color: teal;
    padding: 5px;
    display: inline-block;
    border-radius: 7px;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
