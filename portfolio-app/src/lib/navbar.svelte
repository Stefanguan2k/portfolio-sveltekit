<script>
  let navLinks;
  let navBg;
  function navToggle() {
    if (navLinks.getAttribute('data-active') === 'false') {
      navLinks.setAttribute('data-active', true);
      navBg.setAttribute('data-active', true);
    } else {
      navLinks.setAttribute('data-active', false);
      navBg.setAttribute('data-active', false);
    }
  }
</script>

<nav class="flex justify-between h-16 px-3 items-center fixed w-full m-0">
  <div class="z-50">Hi</div>
  <ul
    class="flex flex-col -translate-y-32 data-[active=true]:translate-y-24 z-50 gap-4 transition-all"
    id="navlinks"
    bind:this={navLinks}
    data-active="false"
  >
    <li>a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
  </ul>
  <button on:click={navToggle} class="z-50">=</button>
  <div
    class="absolute backdrop-blur-sm bg-slate-500/75 h-64 -translate-y-48 bg-slate-100 w-full top-0 left-0 data-[active=true]:translate-y-0 transition-all"
    data-active="false"
    bind:this={navBg}
  />
</nav>
