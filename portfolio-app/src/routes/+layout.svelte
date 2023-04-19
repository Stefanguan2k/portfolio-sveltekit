<script>
  import '../app.css';
  import Navbar from '../lib/navbar.svelte'
  import "@fontsource/poppins";
</script>


<Navbar />
<div>
  <slot />
</div>

<style>
  :global(body) {
    font-family: "Poppins", sans-serif;
  }
</style>