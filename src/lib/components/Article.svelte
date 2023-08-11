<script lang="ts">
  export let title = "Article"
</script>

<article class="article">
  <h3>{title}</h3>
  <slot />
</article>

<style>
  .article {
    padding-block: 2rem;
  }

  .article > :global(* + *) {
    margin-top: 1em;
  }
</style>
