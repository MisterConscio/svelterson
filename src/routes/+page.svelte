<script lang="ts">
  import alphaImg from "$lib/images/alpha.jpg";
</script>

<div class="container">
  <h2 class="center page-title">Hey, welcome!</h2>
  <img
    class="welcome-img"
    src={alphaImg}
    alt="Cute anime girl"
    title="Cute Alpha"
    width="500"
  />
</div>

<style>
  .center {
    text-align: center;
  }

  .page-title {
    margin-bottom: 2rem;
  }

  .welcome-img {
    margin-inline: auto;
    max-width: 500px;
  }
</style>
