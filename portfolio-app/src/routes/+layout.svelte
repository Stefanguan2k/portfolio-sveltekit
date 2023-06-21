<script>
  import '../app.css';
  import Navbar from '../lib/nav.svelte';
  import Footer from '../lib/footer.svelte';
  import '@fontsource/poppins';
</script>

<Navbar />
<body
  class="bg-background-300 dark:bg-background-900 max-w-[1100px] flex flex-col gap-6 text-zinc-800 dark:text-zinc-200 mx-auto"
>
  <slot />
  <Footer />
</body>

<style>
  :global(body) {
    font-family: 'Poppins', sans-serif;
  }
</style>
