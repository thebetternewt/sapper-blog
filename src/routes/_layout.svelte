<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;

    min-height: 100vh;
  }

  main {
    flex-grow: 1;
    position: relative;
    width: 100%;
    max-width: 56em;
    background-color: white;
    box-sizing: border-box;
  }

  footer {
    text-align: center;
    font-size: 2rem;
  }
</style>

<div class="wrapper">
  <Nav {segment} />
  <main>
    <slot />
  </main>
  <footer>🚀</footer>
</div>
