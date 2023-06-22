<script>
  import '../app.css';
  import Navbar from '../lib/nav.svelte';
  import Footer from '../lib/footer.svelte';
  import '@fontsource/poppins';
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href="../src/assets/SG.ico" />
</svelte:head>

<Navbar />
<body class='bg-background-300 dark:bg-background-900'>
  <slot />
  <Footer />
</body>

<style>
  :global(body) {
    font-family: 'Poppins', sans-serif;
  }
</style>
