<script lang="ts">
  export let trayType: string;
  console.log('>> WORKING MENU_TRAY TYPE:', trayType);
  
</script>

<div class="menu-tray {trayType}"><slot/></div>