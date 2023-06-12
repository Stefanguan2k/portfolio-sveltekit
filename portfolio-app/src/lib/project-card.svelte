<script>
  export let info = {
    name: 'test',
    role: 'tests',
    img: 'test',
    theme: '#444444',
  };
</script>

<div class="flex flex-col w-full h-max rounded-md px-6 py-8
    md:justify-center md:py-16 md:flex-wrap md:h-full md:items-center"
    style:background={info.theme}>
  <p id="name">{info.name}</p>
  <span id="role">{info.role}</span>
</div>

