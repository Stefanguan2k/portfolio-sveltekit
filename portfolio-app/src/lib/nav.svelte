<script>
  import { page } from '$app/stores';
  import { navigating } from '$app/stores';

  let home;
  let about;
  let contact;
  let project;
  let projectMobileIndicator;

  const resetActive = () => {
    home = 'false';
    project = 'false';
    about = 'false';
    contact = 'false';
  };

  // Determine active element
  export function updateActive(i) {
    switch (i) {
      case 0:
        resetActive();
        home = 'true';
        break;
      case 1:
        resetActive();
        project = 'true';
        break;

      case 2:
        resetActive();
        about = 'true';
        break;

      case 3:
        resetActive();
        contact = 'true';
        break;
    }
  }

  // Determine if current page is within projects
  if ($page.url.pathname === '/') {
    project = 'false';
    projectMobileIndicator = 'false';
  } else {
    project = 'true';
    projectMobileIndicator = 'true';
  }

  $: if ($navigating) {
    if ($navigating.to.route.id === '/') {
      project = 'false';
      projectMobileIndicator = 'false';
    } else {
      project = 'true';
      projectMobileIndicator = 'true';
    }
  }
</script>

<nav
  class="z-40 fixed bottom-0 left-[50%] translate-x-[-50%] mb-6 w-[90%] bg-nav-100 dark:bg-nav-800 backdrop-blur-lg rounded-3xl shadow-xl md:shadow-none
    md:left-0 md:top-[50%] md:translate-y-[-50%] md:translate-x-0 md:h-[95%] md:w-max md:rounded-bl-none md:rounded-tl-none md:rounded-xl"
>
  <div
    class="relative flex flex-row z-50 p-6 h-full justify-evenly md:flex-col md:justify-between md:overflow-y-auto md:px-4"
  >
    <ul
      class="flex justify-between w-full px-6 md:p-0 md:flex-col md:gap-[clamp(1.5rem,7vh,7vh)] md:px-2"
    >
      <!-- SG Logo -->
      <li class="hidden md:block">
        <a href="/"
          ><img
            src="../src/assets/svg/sg.svg"
            alt="Stefan Guan logo"
            class="h-6 w-6 invert-[0.85] dark:invert-0"
          /></a
        >
      </li>
      <!-- Home Icon -->
      <li>
        <a
          href="/#home"
          class="relative fill-zinc-700 dark:fill-zinc-300
          before:hidden before:w-1 before:h-[150%] before:bg-main-100 before:absolute before:left-[-100%] before:top-[50%] before:translate-y-[-50%]
          md:data-[active='true']:before:block data-[active='true']:fill-main-100 data-[active='true']:before:rounded-full"
          data-active={home}
          ><svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            /></svg
          >
        </a>
      </li>
      <!-- Projects Icon -->
      <li>
        <a
          href="/#projects"
          class="relative fill-zinc-700 dark:fill-zinc-300
            before:hidden before:w-1 before:h-[150%] before:bg-main-100 before:absolute before:left-[-100%] before:top-[50%] before:translate-y-[-50%]
            md:data-[active='true']:before:block data-[active='true']:fill-main-100 data-[active='true']:before:rounded-full
            data-[nested='true']:before:rounded-none data-[nested='true']:before:rounded-tr-full data-[nested='true']:before:rounded-br-full"
          data-active={project}
          data-nested={projectMobileIndicator}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
            class="h-6 w-6"
            ><path
              d="M347-427h234v-67H347v67Zm0-97h420v-67H347v67Zm0-97h420v-67H347v67Zm-62 426q-36.413 0-63.706-27.612Q194-250.225 194-286v-542q0-36.188 27.294-64.094Q248.587-920 285-920h542q36.188 0 63.594 27.906T918-828v542q0 35.775-27.406 63.388Q863.188-195 827-195H285ZM134-44q-36.825 0-63.912-27.406Q43-98.812 43-135v-633h91v633h633v91H134Z"
            /></svg
          >
          <div
            class="absolute data-[active='false']:hidden md:hidden h-1 w-[200%] -bottom-full bg-main-100 rounded-tr-full rounded-tl-full left-[50%] translate-x-[-50%]"
            data-active={projectMobileIndicator}
          />
        </a>
      </li>
      <!-- About Me Icon -->
      <li>
        <a
          href="/#aboutme"
          class="relative fill-zinc-700 dark:fill-zinc-300
          before:hidden before:w-1 before:h-[150%] before:bg-main-100 before:absolute before:left-[-100%] before:top-[50%] before:translate-y-[-50%]
          md:data-[active='true']:before:block data-[active='true']:fill-main-100 data-[active='true']:before:rounded-full"
          data-active={about}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            class="h-6 w-6"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
            /></svg
          ></a
        >
      </li>
      <!-- Contact Icon -->
      <li>
        <a
          href="/#contact"
          class="relative fill-zinc-700 dark:fill-zinc-300
          before:hidden before:w-1 before:h-[150%] before:bg-main-100 before:absolute before:left-[-100%] before:top-[50%] before:translate-y-[-50%]
          md:data-[active='true']:before:block data-[active='true']:fill-main-100 data-[active='true']:before:rounded-full"
          data-active={contact}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            class="h-6 w-6"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            /></svg
          ></a
        >
      </li>
    </ul>
  </div>
</nav>

<!-- 320px - 72px -->
