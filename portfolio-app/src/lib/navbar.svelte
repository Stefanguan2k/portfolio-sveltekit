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

<nav
  class="flex justify-between h-nav px-6 items-center fixed w-full m-0 text-zinc-200 z-99"
>
  <div class="z-50">
    <img
      src="../src/assets/svg/sg.svg"
      alt="Stefan Guan logo"
      class="h-8 w-8"
    />
  </div>
  <ul
    class="flex flex-col gap-8 text-center -translate-y-64 data-[active=true]:translate-y-36 z-50 transition-all"
    id="navlinks"
    bind:this={navLinks}
    data-active="false"
  >
    <li><a href="/">Home</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/aboutme">About Me</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  <button on:click={navToggle} class="z-50">
    <img
      src="../src/assets/svg/hamburger.svg"
      alt="hamburger menu icon"
      class="h-6 w-6 fill-zinc-200"
    />
  </button>
  <!-- Navbar -->
  <div
    class="absolute backdrop-blur-md bg-zinc-900/75 h-80 bg-slate-100 w-full top-0 left-0 -translate-y-[270px] data-[active=true]:translate-y-0 data-[active=true]:rounded-b-xl transition-all"
    data-active="false"
    bind:this={navBg}
  />
</nav>
