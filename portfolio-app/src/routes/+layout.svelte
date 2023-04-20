<script>
  import '../app.css';
  import Navbar from '../lib/navbar.svelte';
  import Footer from '../lib/footer.svelte';
  import '@fontsource/poppins';
</script>

<Navbar />
<body>
  <slot />
</body>
<Footer />

<style>
  :global(body) {
    font-family: 'Poppins', sans-serif;
  }
</style>
