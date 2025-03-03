<script lang="ts">
  import logo from '$pec/images/branding/Free4m-IO_logo_wht_v14.svg';
  import logoType from '$pec/images/branding/Free4m-IO_logo-type_wht_v11.svg';

  export let location: string;
</script>

<div class="{location} branding">
  <a href="/">
    <img class="brand-logo" src={logo} alt="Free4m Logo" />
    <img class="brand-logo-type" src={logoType} alt="Free4m IO" />
  </a>
</div>

<style lang="scss">
  .desktop.branding {
    padding: 15px 0 0 15px;
  }

  .branding {
    width: 330px;
    a {
      display: flex;
      .brand-logo {
        width: 3em;
        height: 3em;
        margin-right: 10px;
      }
      .brand-logo-type {
        width: 10em;
      }
    }
  }

  a:hover {
    color: var(--links-color);
  }
</style>
