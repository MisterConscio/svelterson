<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<svelte:head>
  <title>Svelterson - Articles</title>
</svelte:head>

<main>
  <div class="container">
    <h2>List of articles</h2>
    <ul class="articles-list">
      {#each data.summary as { id, title }}
        <li class="articles-list-item">
          <a href="/articles/{id}">{title}</a>
        </li>
      {/each}
    </ul>
  </div>
</main>

<style>
  h2 {
    margin-bottom: 1rem;
  }

  .articles-list {
    list-style: none;
  }

  .articles-list > * {
    margin-bottom: 0.5rem;
  }
</style>
