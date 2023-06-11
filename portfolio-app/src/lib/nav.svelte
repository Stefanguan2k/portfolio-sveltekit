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
  let homeIndicator;
  let projIndicator;
  let aboutIndicator;
  let contactIndicator;

  const resetActive = () => {
    homeIcon.setAttribute('data-active', false);
    projIcon.setAttribute('data-active', false);
    aboutIcon.setAttribute('data-active', false);
    contactIcon.setAttribute('data-active', false);
    homeIndicator.setAttribute('data-active', false);
    projIndicator.setAttribute('data-active', false);
    aboutIndicator.setAttribute('data-active', false);
    contactIndicator.setAttribute('data-active', false);
  };

  export function updateActive(i) {
    switch (i) {
      case 0:
        resetActive();
        homeIcon.setAttribute('data-active', true);
        homeIndicator.setAttribute('data-active', true);
        break;
      case 1:
        resetActive();
        projIcon.setAttribute('data-active', true);
        projIndicator.setAttribute('data-active', true);
        break;

      case 2:
        resetActive();
        aboutIcon.setAttribute('data-active', true);
        aboutIndicator.setAttribute('data-active', true);
        break;

      case 3:
        resetActive();
        contactIcon.setAttribute('data-active', true);
        contactIndicator.setAttribute('data-active', true);
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
        ><svg
          class="h-6 w-6 fill-zinc-300 data-[active='true']:fill-main-100 md:data-[active='true']:fill-zinc-300"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
          data-active="false"
          bind:this={homeIcon}
          ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
          /></svg
        >
        <span class="hidden md:data-[active='true']:block">Home</span></a
      >
      <!-- Active indicator -->
      <div
        class="hidden absolute h-10 w-1.5 bg-main-100 rounded-xl top-[50%] translate-y-[-50%] -right-5 md:data-[active='true']:block"
        data-active="false"
        bind:this={homeIndicator}
      />
    </li>
    <li class="relative">
      <a href="/#projects" class="flex gap-12 w-max"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
          class="h-6 w-6 fill-zinc-300 data-[active='true']:fill-main-100 md:data-[active='true']:fill-zinc-300"
          data-active="false"
          bind:this={projIcon}
          ><path
            d="M347-427h234v-67H347v67Zm0-97h420v-67H347v67Zm0-97h420v-67H347v67Zm-62 426q-36.413 0-63.706-27.612Q194-250.225 194-286v-542q0-36.188 27.294-64.094Q248.587-920 285-920h542q36.188 0 63.594 27.906T918-828v542q0 35.775-27.406 63.388Q863.188-195 827-195H285ZM134-44q-36.825 0-63.912-27.406Q43-98.812 43-135v-633h91v633h633v91H134Z"
          /></svg
        ></a
      >
      <!-- Active indicator -->
      <div
        class="hidden absolute h-10 w-1.5 bg-main-100 rounded-xl top-[50%] translate-y-[-50%] -right-5 md:data-[active='true']:block"
        data-active="false"
        bind:this={projIndicator}
      />
    </li>
    <li class="relative">
      <a href="/#aboutme" class="flex gap-12 w-max"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          class="h-6 w-6 fill-zinc-300 data-[active='true']:fill-main-100 md:data-[active='true']:fill-zinc-300"
          data-active="false"
          bind:this={aboutIcon}
          ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          /></svg
        ></a
      >
      <!-- Active indicator -->
      <div
        class="hidden absolute h-10 w-1.5 bg-main-100 rounded-xl top-[50%] translate-y-[-50%] -right-5 md:data-[active='true']:block"
        data-active="false"
        bind:this={aboutIndicator}
      />
    </li>
    <li class="relative">
      <a href="/#contact" class="flex gap-12 w-max"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          class="h-6 w-6 fill-zinc-300 data-[active='true']:fill-main-100 md:data-[active='true']:fill-zinc-300"
          data-active="false"
          bind:this={contactIcon}
          ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          /></svg
        ></a
      >
      <!-- Active indicator -->
      <div
        class="hidden absolute h-10 w-1.5 bg-main-100 rounded-xl top-[50%] translate-y-[-50%] -right-5 md:data-[active='true']:block"
        data-active="false"
        bind:this={contactIndicator}
      />
    </li>
  </ul>

  <div
    class="absolute bg-nav-100 backdrop-blur-lg h-full w-full top-0 rounded-3xl
    md:rounded-bl-none md:rounded-tl-none md:rounded-tr-xl md:rounded-br-xl md:w-80 md:-translate-x-[calc(320px-72px)] md:hover:translate-x-0 transition-all"
  />
</nav>

<!-- 320px - 72px -->
