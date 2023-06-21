<script>
  export let path, alt, classList;
</script>

<!-- Usage: -->
<!-- <ImgContainer path="" alt="" classList="" /> -->

<a
  href={path}
  class="hover:-translate-y-1 hover:shadow-lg transition ease-in-out rounded-lg overflow-hidden {classList}"
>
  <img
    src={path}
    alt={alt}
    class="w-full max-w-[800px] self-center bg-background-100 dark:bg-background-600"
    loading="lazy"
  />
</a>
