<script lang="ts">
  // import { page } from '$app/stores'; // TODO - use for "$page.url.pathname active page check"
  import { contentNavigation } from "@annexjs/core/webapp/stores/navigation-outlines";

  let contentNavigationData;
  contentNavigation.subscribe((data) => contentNavigationData = data);

  console.log('>> TEST: CONFIRM ACCESS OF PAGE MODEL VIA STORE:', contentNavigationData);
  console.log('>> TOP_TRAY_MENU INTERFACE >>');
</script>

<div class="menu-interface top-menu">
  <h1>test TOP menu-tray <span class="merp">@$pec/interface/menus</span></h1>
  
  <!-- TODO - dynamic nav insertion here -->
  <nav class="test-nav">
    <ul class="nav-list">
      <li class="nav-item">test item</li>
    </ul>
  </nav>
</div>


<style lang="scss">
  .test-nav {
    padding-top: 7px;
    border: 1px solid red;
    
    .nav-list {
      padding-top: 7px;
      border: 1px solid green;
      
      .nav-item {
        padding-top: 7px;
        color: white;
        background-color: blue;
      }
    }
  }
</style>