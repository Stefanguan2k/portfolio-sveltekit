<script>
  export let name, role, theme;
</script>

<div class="flex flex-col w-full h-max rounded-md px-6 py-8
    md:justify-center md:py-16 md:flex-wrap md:h-full md:items-center"
    style:background={theme}>
  <p id="name">{name}</p>
  <span id="role">{role}</span>
</div>

