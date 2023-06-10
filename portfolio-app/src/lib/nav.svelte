<script>
  let navbar;
  const toggleNav = () => {
    if (navbar.getAttribute('data-expanded') === 'false') {
      navbar.setAttribute('data-expanded', false);
    } else {
      navbar.setAttribute('data-expanded', false);
    }
  };
</script>

<nav
  class="fixed bottom-0 left-[50%] translate-x-[-50%] mb-6 w-[90%] text-zinc-100
    md:left-0 md:top-[50%] md:translate-y-[-50%] md:translate-x-0 md:h-[95%]"
  bind:this={navbar}
  on:mouseover={toggleNav}
  on:focus={toggleNav}
  data-expanded="false"
>
  <ul class="relative flex gap-16 p-6 justify-evenly md:flex-col z-50">
    <li class="hidden md:block">
      <a href="/"
        ><img
          src="../src/assets/svg/sg.svg"
          alt="Stefan Guan logo"
          class="h-6 w-6"
        /></a
      >
    </li>
    <li>
      <a href="/" class="flex gap-12"
        ><img
          src="../src/assets/svg/house-solid.svg"
          alt="Home Screen"
          class="h-6 w-6 invert-[0.8]"
        />
        <span class="hidden md:data-[active='true']:block">Home</span></a
      >
    </li>
    <li>
      <a href="/"
        ><img
          src="../src/assets/svg/library.svg"
          alt="Projects"
          class="h-6 w-6 invert-[0.8]"
        /></a
      >
    </li>
    <li>
      <a href="/"
        ><img
          src="../src/assets/svg/user-solid.svg"
          alt="About Me"
          class="h-6 w-6 invert-[0.8]"
        /></a
      >
    </li>
    <li>
      <a href="/"
        ><img
          src="../src/assets/svg/envelope-solid.svg"
          alt="Contact Me"
          class="h-6 w-6 invert-[0.8]"
        /></a
      >
    </li>
  </ul>

  <div
    class="absolute bg-nav-100 backdrop-blur-lg h-full w-full top-0 rounded-xl
    md:rounded-bl-none md:rounded-tl-none md:w-80 md:-translate-x-[calc(320px-72px)] md:hover:translate-x-0 transition-all"
  />
</nav>

<!-- 320px - 72px -->
