<script>
  import { page } from '$app/stores';
  import { add_transform } from 'svelte/internal';

  let navBg;
  let linkContainer;
  let navLink;
  let projLink;
  let returnToNav;
  let currentLocation = $page.url.pathname;

  const navToggle = () => {
    if (linkContainer.getAttribute('data-active') === 'false') {
      linkContainer.setAttribute('data-active', true);
      navBg.setAttribute('data-active', true);
    } else {
      linkContainer.setAttribute('data-active', false);
      navBg.setAttribute('data-active', false);
    }
  };

  const indexSwitch = () => {
    if (navLink.getAttribute('data-pos') === '0') {
      navLink.setAttribute('data-pos', '-1');
      projLink.setAttribute('data-pos', '0');
      returnToNav.setAttribute('data-active', true);
    } else {
      navLink.setAttribute('data-pos', '0');
      projLink.setAttribute('data-pos', '1');
      returnToNav.setAttribute('data-active', false);
    }
  };
</script>

<nav
  class="flex justify-between h-nav px-6 items-center fixed w-full m-0 text-zinc-200 z-99"
>
  <!-- Logo -->
  <div class="z-50">
    <a href="/">
      <img
        src="../src/assets/svg/sg.svg"
        alt="Stefan Guan logo"
        class="h-8 w-8"
      />
    </a>
  </div>

  <div
    class="relative overflow-none z-50 w-5/6 -translate-y-64 transition-all data-[active=true]:translate-y-36"
    bind:this={linkContainer}
    data-active="false"
  >
    <ul
      class="relative top-0 flex w-full flex-col gap-8 text-center bg-zinc-700/50 rounded-lg py-6 data-[pos='-1']:-translate-x-[calc(100%+2rem)] transition-all"
      bind:this={navLink}
      data-pos="0"
    >
      <li>
        <a href="/" class="aria-current:text-main-100">Home</a>
      </li>
      <li>
        <button
          on:click={() => indexSwitch()}
          class="aria-current:text-main-100">Projects</button
        >
      </li>

      <li>
        <a href="/aboutme" class="aria-current:text-main-100">About Me</a>
      </li>
      <li><a href="/contact" class="aria-current:text-main-100">Contact</a></li>
      <!-- Hidden right panel for changing panel back to main nav elements -->
      <li class="absolute h-full w-10 right-0 top-0 z-999">
        <button
          class="flex justify-end items-center h-full w-10 opacity-0 cursor-default data-[active=true]:cursor-pointer data-[active=true]:opacity-100"
          bind:this={returnToNav}
          data-active="false"
          on:click={navLink.getAttribute('data-pos') === '-1'
            ? indexSwitch()
            : console.log('hi')}
          on:keypress={navLink.getAttribute('data-pos') === '-1'
            ? indexSwitch()
            : console.log('hi')}
          ><img
            src="../src/assets/svg/chevron-left.svg"
            alt="Back to main nav"
          /></button
        >
      </li>
    </ul>
    <div
      class="absolute top-0 left-0 grid grid-cols-2 grid-rows-3 gap-4 h-full text-center transition-all w-full data-[pos='1']:translate-x-[calc(100%+10rem)]"
      bind:this={projLink}
      data-pos="1"
    >
      <a
        href="/swiftvote"
        class="col-span-1 row-span-3 bg-zinc-700/50 rounded-lg grid place-items-center hover:bg-green-300/30 hover:shadow-md transition-all"
      >
        SwiftVote
      </a>
      <a
        href="/oasis"
        class="bg-zinc-700/50 rounded-lg grid place-items-center hover:bg-purple-300/30 hover:shadow-md transition-all"
      >
        Oasis
      </a>
      <a
        href="/yopo"
        class="bg-zinc-700/50 rounded-lg grid place-items-center hover:bg-yellow-300/30 hover:shadow-md transition-all"
        >Yopo</a
      >
      <a
        href="/munch"
        class="bg-zinc-700/50 rounded-lg grid place-items-center hover:bg-cyan-300/30 hover:shadow-md transition-all"
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
  <!-- Navbar background -->
  <div
    class="absolute backdrop-blur-md bg-zinc-900/75 h-80 bg-slate-100 w-full top-0 left-0 -translate-y-[270px] data-[active=true]:translate-y-0 data-[active=true]:rounded-b-xl transition-all"
    data-active="false"
    bind:this={navBg}
  />
</nav>
