<script lang="ts">
  import alphaImg from "$lib/images/alpha.jpg";
</script>

<svelte:head>
  <title>Svelterson</title>
</svelte:head>

<main>
  <div class="container">
    <h2 class="center page-title">Hey, welcome!</h2>
    <img
      class="welcome-img"
      src={alphaImg}
      alt="Cute anime girl"
      title="Cute Alpha"
    />
  </div>
</main>

<style>
  .center {
    text-align: center;
  }

  .page-title {
    margin-bottom: 2rem;
  }

  .welcome-img {
    margin-inline: auto;
    max-width: 300px;
  }
</style>
