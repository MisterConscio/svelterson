<script lang="ts">
  import Article from "$lib/components/Article.svelte";
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
  <Article title="You might be wondering what is this site about">
    <p>
      Cras vel porttitor diam. Maecenas rhoncus ligula sit amet egestas.
      Curabitur a magna nec dui consectetur congue. Pellentesque habitant morbi
      tristique senectus et netus et malesuada fames ac turpis egestas. Etiam
      porta tellus a varius aliquam. Nulla facilisi. Duis.
    </p>
  </Article>
  <Article title="Well, how do i explain...">
    <p>
      Praesent pharetra quam a dui placerat, eu accumsan tortor rutrum. Donec
      tempus malesuada lectus sed finibus. Mauris nec risus auctor, luctus nulla
      vitae, aliquet metus. Morbi maximus dolor sed velit finibus facilisis.
      Vivamus facilisis faucibus velit eu scelerisque. Pellentesque vitae turpis
      et nulla egestas dapibus sed iaculis eros. Suspendisse sed lectus sed eros
      scelerisque lacinia. Maecenas ullamcorper ullamcorper ex, non sollicitudin
      magna hendrerit eget. Nunc mollis quam nec est bibendum.
    </p>
    <p>
      Donec vitae malesuada nibh, vel blandit justo. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Quisque lobortis tellus sit amet ullamcorper
      efficitur. Nunc ultrices elementum ligula. Nullam nec interdum lorem.
      Integer in augue sapien. Ut purus ligula, dignissim ac venenatis ut,
      placerat vitae tortor. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Nulla facilisi. Sed at.
    </p>
  </Article>
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
