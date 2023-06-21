<script>
  import { inview } from 'svelte-inview';
  import NavIndex from '../lib/nav.svelte';
  import ProjCard from '../lib/project-card.svelte';
  import SocialOverlay from '../lib/social-overlay.svelte';

  let toggle;
  let isInView;

  const options = {
    threshold: 0.4,
    rootMargin: '0px',
  };

  let indx;
  let changeIndx;
  function change() {
    changeIndx(indx);
  }

  // let projectSection;
  // const expandCard = () => {
  //   if (projectSection.getAttribute('data-expanded') === 'false') {
  //     projectSection.setAttribute('data-expanded', true);
  //   } else {
  //     projectSection.setAttribute('data-expanded', false);
  //   }
  // };
</script>

<NavIndex bind:updateActive={changeIndx} />

<div
  class="flex flex-col gap-6 text-zinc-800 dark:text-zinc-200 max-w-[1280px] m-auto mb-0"
  id="container"
>
  <!-- Home -->
  <section
    class="relative flex flex-col justify-center items-center min-h-[80vh] mt-4 p-10 rounded-2xl overflow-hidden"
    id="home"
    use:inview={options}
    on:inview_enter={(event) => {
      const { inView } = event.detail;
      isInView = inView;
      indx = 0;
      change();
    }}
  >
    <h1 class="z-10 font-thin text-3xl">
      Hi, I am Stefan Guan, a UX/Web Designer based in Surrey, BC.
    </h1>
    <!-- Background -->
    <div
      class="absolute h-full w-full bg-gradient-to-tl from-main-100 to-violet-900 opacity-50"
    />
    <div class="absolute top-0 right-0 mt-6 mr-6">
      <button
        class="flex gap-3 justify-center items-center rounded-full p-3 backdrop-blur-md bg-[rgba(25,25,25,0.5)] hover:bg-[rgba(90,90,90,0.5)]"
        on:click={toggle.toggleOverlay()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          class="h-7 w-7 fill-zinc-300"
          ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"
          /></svg
        >
      </button>
    </div>
    <SocialOverlay bind:this={toggle} />
  </section>

  <!-- Projects -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col gap-6
    md:p-10"
    id="projects"
    use:inview={options}
    on:inview_enter={(event) => {
      const { inView } = event.detail;
      isInView = inView;
      indx = 1;
      change();
    }}
  >
    <!-- Top bar -->
    <div class="flex justify-between">
      <h2 class="text-2xl font-bold">Projects</h2>
    </div>
    <div
      class="grid gap-6 h-full w-full content-start grid-rows-auto md:grid-cols-2 md:grid-rows:2 md:content-stretch"
    >
      <ProjCard
        name="SwiftVote"
        role="UX Case Study"
        theme="rgba(0,100,100,0.5)"
        img="../src/assets/img/index-swiftvote.png"
        path="../swiftvote"
        icon="figma"
        n="1"
      />

      <ProjCard
        name="Oasis"
        role="UX Case Study"
        theme="rgba(50,0,100,0.5)"
        img="../src/assets/img/index-oasis.png"
        icon="xd"
        path="../oasis"
        n="1"
      />
      <ProjCard
        name="Yopo"
        role="Web Design"
        theme="rgba(95,50,0,0.5)"
        img="../src/assets/img/index-yopo.png"
        icon="codefigma"
        n="2"
      />
      <ProjCard
        name="Munch"
        role="UX Case Study"
        theme="rgba(0,50,100,0.5)"
        img="../src/assets/img/index-munch.png"
        icon="figma"
        n="1"
      />
    </div>
  </section>
  <!-- About Me -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col gap-6
    md:p-10"
    id="aboutme"
    use:inview={options}
    on:inview_enter={(event) => {
      const { inView } = event.detail;
      isInView = inView;
      indx = 2;
      change();
    }}
  >
    <!-- Top bar -->
    <div class="flex justify-between">
      <h2 class="text-2xl font-bold">About Me</h2>
    </div>
    <div
      class="grid gap-6 h-max w-full
      md:grid-cols-2"
    >
      <div class="self-center justify-self-center">
        <img
          src="../src/assets/img/profile-img.webp"
          alt="Portait of myself"
          class="rounded-md h-56 w-56"
        />
      </div>
      <div class="flex flex-col gap-6 text-center md:text-justify">
        <p>
          I am a UX Designer based in Surrey, BC. My personal mission is to
          craft brilliant experiences that positively impacts the user.
        </p>
        <p>
          I have a passion for understanding human behaviour. I enjoy breaking
          down the needs of users to generate ways of solving problems. By
          combining user research and user-centric design, I can create digital
          experiences that benefit lives.
        </p>
        <p>
          In my free time, I love learning new technologies. For instance, I am
          learning how to use <a
            href="https://kit.svelte.dev/"
            class="underline">sveltekit</a
          > (what this website runs on!). I am always looking for ways to improve
          myself, whether through going to the gym or continuously studying.
        </p>
        <p>
          I recently signed up for the Daily UI 100 day design challenge! I
          would love for you to check my progress <a
            href="/100day"
            class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400"
            >here</a
          >.
        </p>
      </div>
    </div>
  </section>
  <!-- Contact Me -->
  <section
    class="min-h-[90vh] py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11
    md:p-10"
    id="contact"
    use:inview={options}
    on:inview_enter={(event) => {
      const { inView } = event.detail;
      isInView = inView;
      indx = 3;
      change();
    }}
  >
    <h2 class="text-2xl font-bold">Contact</h2>
  </section>
</div>
