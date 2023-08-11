<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="error">
  <h1>Bruh <span class="error-code">{$page.status}</span> :(</h1>
  <p>{$page.error?.message}</p>
</div>

<style>
  .error {
    display: grid;
    place-content: center;
  }

  .error-code {
    color: crimson;
  }
</style>
