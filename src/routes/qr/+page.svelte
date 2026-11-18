<script lang="ts">
  import qrLanding from '$pec/images/qr-codes/Landing00.svg';
</script>

<svelte:head>
  <title>Contact | Free4m IO</title>
</svelte:head>

<div class="content">
  <h1>Hello!</h1>

  <div class="qr-code-container">
    <img class="qr-image" src={qrLanding} alt="Free4m site landing qr code" />
  </div>
</div>

<style>
  .qr-code-container {
    width: 80%;
    margin: 0 auto;
  }
</style>
