<script>
  import '../app.css';
  import Navbar from '../lib/nav.svelte';
  import '@fontsource/poppins';
</script>

<Navbar />
<body class="bg-background-100">
  <slot />
</body>

<style>
  :global(body) {
    font-family: 'Poppins', sans-serif;
  }
</style>
