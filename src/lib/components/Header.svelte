<header>
  <nav class="nav container">
    <a href="/">
      <h1 class="header-title">Svelterson</h1>
    </a>
    <ul class="header-nav-list">
      <li>
        <a href="/why">Why??</a>
      </li>
      <li>
        <a href="/articles">Articles</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    text-align: center;
    padding-block: 1rem 2rem;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-nav-list {
    display: flex;
    gap: 1rem;

    list-style: none;
  }

  .nav a {
    text-decoration: none;
  }

  .header-nav-list a:hover {
    filter: brightness(1.25);
  }
</style>
