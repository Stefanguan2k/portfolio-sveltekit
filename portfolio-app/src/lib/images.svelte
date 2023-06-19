<script>
  export let path, alt, classList;
</script>

<a
  href={path}
  class="hover:-translate-y-1 hover:shadow-lg transition ease-in-out {classList}"
>
  <img
    src={path}
    alt={alt}
    class="rounded-lg w-full max-w-[800px] self-center bg-background-100 dark:bg-background-600"
  />
</a>
