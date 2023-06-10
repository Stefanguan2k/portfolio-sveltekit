<script>
  import { page } from '$app/stores';
  import _ from 'lodash';

  let navbar;
  let navBg;
  let linkContainer;
  let navLink;
  let projLink;
  let returnToNav;
  let currentLocation = $page.url.pathname;

  function determinePage() {}

  function navToggle() {
    if (linkContainer.getAttribute('data-active') === 'false') {
      linkContainer.setAttribute('data-active', true);
      navBg.setAttribute('data-active', true);
    } else {
      linkContainer.setAttribute('data-active', false);
      navBg.setAttribute('data-active', false);
    }
  }

  function revealProject() {
    if (window.innerWidth <= 768) {
      if (navLink.getAttribute('data-pos') === '0') {
        navLink.setAttribute('data-pos', '-1');
        projLink.setAttribute('data-pos', '0');
        returnToNav.setAttribute('data-active', true);
      } else {
        navLink.setAttribute('data-pos', '0');
        projLink.setAttribute('data-pos', '1');
        returnToNav.setAttribute('data-active', false);
      }
    } else {
      if (navLink.getAttribute('data-pos') === '0') {
        navLink.setAttribute('data-pos', '-1');
        projLink.setAttribute('data-pos', '0');
      } else {
        navLink.setAttribute('data-pos', '0');
        projLink.setAttribute('data-pos', '1');
      }
    }
  }

  function widthCloseNav() {
    if (window.innerWidth >= 768) {
      linkContainer.setAttribute('data-active', false);
      navBg.setAttribute('data-active', false);
      returnToNav.setAttribute('data-active', false);
    }
  }
</script>

<svelte:window
  on:resize={_.throttle(widthCloseNav, 250)}
  on:load={() => determinePage()}
/>

<nav
  class="flex justify-between h-nav px-6 items-center fixed w-full m-0 text-zinc-200 z-99
   md:mt-6 md:w-11/12 md:left-[50%] md:translate-x-[-50%] md:max-w-7xl"
>
  <!-- Logo -->
  <div class="z-50 flex gap-6 items-center">
    <a href="/">
      <img
        src="../src/assets/svg/sg.svg"
        alt="Stefan Guan logo"
        class="h-8 w-8"
      />
    </a>
    <p class="hidden">Project</p>
  </div>
  <div
    class="relative overflow-none z-50 w-5/6 -translate-y-64 transition-all data-[active=true]:translate-y-36 md:translate-y-0 md:w-auto"
    bind:this={linkContainer}
    data-active="false"
  >
    <!-- -------------------- -->
    <!-- Main navigation link -->
    <!-- -------------------- -->
    <ul
      class="relative top-0 flex w-full flex-col gap-8 text-center bg-zinc-700/50 rounded-lg py-6 data-[pos='-1']:-translate-x-[calc(100%+2rem)] transition-all
      md:flex-row md:p-0 md:bg-transparent md:data-[pos='-1']:opacity-0 md:data-[pos='-1']:-translate-x-[500rem]"
      bind:this={navLink}
      data-pos="0"
    >
      <li>
        <a
          href="/"
          class="item aria-current:text-main-100 hover:text-zinc-500"
          class:active={$page.url.pathname === '/'}>Home</a
        >
      </li>
      <li>
        <button
          on:click={() => revealProject()}
          class="aria-current:text-main-100 hover:text-zinc-500"
          class:active={$page.url.pathname === '/oasis' ||
            $page.url.pathname === '/yopo' ||
            $page.url.pathname === '/swiftvote' ||
            $page.url.pathname === '/munch'}>Projects</button
        >
      </li>

      <li>
        <a
          href="/aboutme"
          class="aria-current:text-main-100 hover:text-zinc-500"
          class:active={$page.url.pathname === '/aboutme'}>About Me</a
        >
      </li>
      <li>
        <a
          href="/contact"
          class="aria-current:text-main-100 hover:text-zinc-500"
          class:active={$page.url.pathname === '/contact'}>Contact</a
        >
      </li>
      <!-- Hidden right panel for changing panel back to main nav elements -->
      <li class="absolute h-full w-10 right-0 top-0 z-999 md:hidden">
        <button
          class="flex justify-end items-center h-full w-10 opacity-0 cursor-default data-[active=true]:cursor-pointer data-[active=true]:opacity-100"
          bind:this={returnToNav}
          data-active="false"
          on:click={() => revealProject()}
          on:keypress={() => revealProject()}
          ><img
            src="../src/assets/svg/chevron-left.svg"
            alt="Back to main nav"
          /></button
        >
      </li>
    </ul>
    <!-- ------------- -->
    <!-- Project links -->
    <!-- ------------- -->
    <div
      class="absolute top-0 left-0 grid grid-cols-2 grid-rows-3 gap-4 h-full text-center transition-all w-full data-[pos='1']:translate-x-[calc(100%+10rem)]
       md:flex md:opacity-0 md:data-[pos='1']:translate-x-[calc(100%+50rem)] md:data-[pos='0']:translate-y-0 md:data-[pos='0']:opacity-100 md:gap-8 md:left-[-2rem]
       md:data-[pos='1']:translate-x-0 
       "
      bind:this={projLink}
      data-pos="1"
    >
      <button
        class="absolute hidden w-6 h-full left-[-3rem] md:flex items-center rotate-180 hover:opacity-50"
        on:click={() => revealProject()}
      >
        <img
          class="w-10 h10"
          src="../src/assets/svg/chevron-left.svg"
          alt="Back to main nav"
        /></button
      >
      <a
        href="/swiftvote"
        class="col-span-1 row-span-3 bg-zinc-700/50 rounded-lg grid place-items-center hover:bg-green-300/30 hover:shadow-md transition-all
        md:bg-transparent md:hover:bg-transparent md:hover:text-zinc-500"
      >
        SwiftVote
      </a>
      <a
        href="/oasis"
        class="bg-zinc-700/50 rounded-lg grid place-items-center hover:bg-purple-300/30 hover:shadow-md transition-all
        md:bg-transparent md:hover:bg-transparent md:hover:text-zinc-500"
      >
        Oasis
      </a>
      <a
        href="/yopo"
        class="bg-zinc-700/50 rounded-lg grid place-items-center hover:bg-yellow-300/30 hover:shadow-md transition-all
        md:bg-transparent md:hover:bg-transparent md:hover:text-zinc-500"
        >Yopo</a
      >
      <a
        href="/munch"
        class="bg-zinc-700/50 rounded-lg grid place-items-center hover:bg-cyan-300/30 hover:shadow-md transition-all
        md:bg-transparent md:hover:bg-transparent md:hover:text-zinc-500"
        >Munch</a
      >
    </div>
  </div>

  <button on:click={navToggle} class="z-50 md:hidden">
    <img
      src="../src/assets/svg/hamburger.svg"
      alt="hamburger menu icon"
      class="h-6 w-6 fill-zinc-200"
    />
  </button>
  <!-- ----------------- -->
  <!-- Navbar background -->
  <!-- ----------------- -->
  <div
    class="absolute backdrop-blur-md bg-zinc-900/75 h-80 bg-slate-100 w-full top-0 left-0 -translate-y-[270px] data-[active=true]:translate-y-0 data-[active=true]:rounded-lg
    transition-all md:translate-y-0 md:rounded-lg md:h-nav"
    data-active="false"
    bind:this={navBg}
  />
</nav>

<style>
  .active {
    color: #0087ac;
    font-weight: bold;
  }
</style>
