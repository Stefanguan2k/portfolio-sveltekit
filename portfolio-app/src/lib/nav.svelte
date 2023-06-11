<script>
  import { page } from '$app/stores';

  let navbar;
  let activeNav;
  const toggleNav = () => {
    if (navbar.getAttribute('data-expanded') === 'false') {
      navbar.setAttribute('data-expanded', false);
    } else {
      navbar.setAttribute('data-expanded', false);
    }
  };

  let homeIcon;
  let projIcon;
  let aboutIcon;
  let contactIcon;

  const resetActive = () => {
    homeIcon.setAttribute('data-active', false);
    projIcon.setAttribute('data-active', false);
    aboutIcon.setAttribute('data-active', false);
    contactIcon.setAttribute('data-active', false);
  };

  export function updateActive(i) {
    switch (i) {
      case 0:
        resetActive();
        homeIcon.setAttribute('data-active', true);
        break;
      case 1:
        resetActive();
        projIcon.setAttribute('data-active', true);
        break;

      case 2:
        resetActive();
        aboutIcon.setAttribute('data-active', true);
        break;

      case 3:
        resetActive();
        contactIcon.setAttribute('data-active', true);
        break;
    }
  }
</script>

<nav
  class="fixed bottom-0 left-[50%] translate-x-[-50%] mb-6 w-[90%] text-zinc-100
    md:left-0 md:top-[50%] md:translate-y-[-50%] md:translate-x-0 md:h-[95%] md:w-max"
  bind:this={navbar}
  on:mouseover={toggleNav}
  on:focus={toggleNav}
  data-expanded="false"
>
  <ul
    class="relative flex gap-16 justify-evenly p-6 md:flex-col md:gap-[7vh] z-50"
  >
    <li class="hidden md:block">
      <a href="/"
        ><img
          src="../src/assets/svg/sg.svg"
          alt="Stefan Guan logo"
          class="h-6 w-6"
        /></a
      >
    </li>
    <li class="relative">
      <a href="/#hero" class="flex gap-12 w-max"
        ><img
          src="../src/assets/svg/house-solid.svg"
          alt="Home Screen"
          class="h-6 w-6 invert-[0.8]"
        />
        <span class="hidden md:data-[active='true']:block">Home</span></a
      >
      <!-- Active indicator -->
      <div
        class="hidden absolute h-10 w-1.5 bg-main-100 rounded-xl top-[50%] translate-y-[-50%] -right-5 md:data-[active='true']:block"
        data-active="false"
        bind:this={homeIcon}
      />
    </li>
    <li class="relative">
      <a href="/#projects" class="flex gap-12 w-max"
        ><img
          src="../src/assets/svg/library.svg"
          alt="Projects"
          class="h-6 w-6 invert-[0.8]"
        /></a
      >
      <!-- Active indicator -->
      <div
        class="hidden absolute h-10 w-1.5 bg-main-100 rounded-xl top-[50%] translate-y-[-50%] -right-5 md:data-[active='true']:block"
        data-active="false"
        bind:this={projIcon}
      />
    </li>
    <li class="relative">
      <a href="/#aboutme" class="flex gap-12 w-max"
        ><img
          src="../src/assets/svg/user-solid.svg"
          alt="About Me"
          class="h-6 w-6 invert-[0.8]"
        /></a
      >
      <!-- Active indicator -->
      <div
        class="hidden absolute h-10 w-1.5 bg-main-100 rounded-xl top-[50%] translate-y-[-50%] -right-5 md:data-[active='true']:block"
        data-active="false"
        bind:this={aboutIcon}
      />
    </li>
    <li class="relative">
      <a href="/#contact" class="flex gap-12 w-max"
        ><img
          src="../src/assets/svg/envelope-solid.svg"
          alt="Contact Me"
          class="h-6 w-6 invert-[0.8]"
        /></a
      >
      <!-- Active indicator -->
      <div
        class="hidden absolute h-10 w-1.5 bg-main-100 rounded-xl top-[50%] translate-y-[-50%] -right-5 md:data-[active='true']:block"
        data-active="false"
        bind:this={contactIcon}
      />
    </li>
  </ul>

  <div
    class="absolute bg-nav-100 backdrop-blur-lg h-full w-full top-0 rounded-3xl
    md:rounded-bl-none md:rounded-tl-none md:rounded-tr-xl md:rounded-br-xl md:w-80 md:-translate-x-[calc(320px-72px)] md:hover:translate-x-0 transition-all"
  />
</nav>

<!-- 320px - 72px -->
