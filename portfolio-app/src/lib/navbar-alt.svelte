<script>
  import _ from 'lodash';
  let links;
  let navbar;

  const navToggle = () => {
    if (links.getAttribute('data-active') === 'true') {
      links.setAttribute('data-active', false);
      navbar.setAttribute('data-active', false);
    } else {
      links.setAttribute('data-active', true);
      navbar.setAttribute('data-active', true);
    }
  };

  function toggleProjects() {
    if (window.innerWidth <= 768) {

    }
    else {

    }
  }

  function widthCloseNav() {
    if (window.innerWidth >= 768) {
      navbar.setAttribute('data-active', false);
      links.setAttribute('data-active', false);
    }
  }
</script>

<svelte:window on:resize={_.throttle(widthCloseNav, 250)} />

<nav
  class="navbar"
  data-expanded="true"
  bind:this={navbar}
>
  <div class="nav-inner">
    <!-- Logo -->
    <div>
      <img
        src="../src/assets/svg/sg.svg"
        alt="Stefan Guan logo"
        class="h-8 w-8"
      />
    </div>
    <!-- Links -->
    <ul
      class="links"
      data-active="false"
      data-pos="-1"
      bind:this={links}
    >
      <li><a href="/">Home</a></li>
      <li><a href="/">Projects</a></li>
      <li><a href="/">About Me</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
    <!-- Projects -->
    <ul class="projects"
    data-active='true'>
        <li><a href="/">SwiftVote</a></li>
      <li><a href="/">Oasis</a></li>
      <li><a href="/">Yopo</a></li>
      <li><a href="/">Munch</a></li>
    </ul>

    <!-- Hamburger Icon -->
    <button on:click={navToggle} class="hamburger">
      <img
        src="../src/assets/svg/hamburger.svg"
        alt="hamburger menu icon"
        class="h-6 w-6 fill-zinc-200"
      />
    </button>
  </div>
</nav>

<style>
    .navbar {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        max-width: 1280px;
        height: 64px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 0.5rem;
        background: rgba(0,0,0,0.6);
        margin-top: 1.5rem;
    }
    .navbar[data-expanded='true'] {
        height: 256px;
    }
    
    .nav-inner {
        display: flex;
        height: 64px;
        width: 100%;
        padding: 2rem;
        justify-content: space-between;
        align-items: center;
        align-self: flex-start;
    }

    .links {
        display: flex;
        gap: 2rem;
        color: white;
    }
    .projects {
        display: grid;
        gap: 6rem;
        position: absolute;
        place-items: center;
        color: white;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-100rem);
        margin-top: 64px;
        background: rgba(255,255,255,0.2);
    }
    .projects[data-active='true'] {
        transform: translateX(-50%) translateY(0);
    }
    .hamburger {
        display: none;
    }

    @media (max-width: 768px) {
        .navbar {
            height: 10rem;
        }
        .links {
            flex-direction: column;
            transform: translateY(10rem);
            align-items: center;
            background: rgba(255,255,255,0.2);
            width: 80%;
            border-radius: 1rem;
            padding: 2rem 0;
        }
        .projects {
            width: 80%;

        }
        .hamburger {
            display: block;
        }
    }

</style>
