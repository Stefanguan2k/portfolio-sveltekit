<script>
  import { inview } from 'svelte-inview';
  import NavIndex from '../lib/nav.svelte';
  import ProjCard from '../lib/project-card.svelte';

  let isInView;
  const options = {
    threshold: 0.6,
  };

  let indx;
  let changeIndx;
  function change() {
    changeIndx(indx);
  }
</script>

<NavIndex bind:updateActive={changeIndx} />

<div
  class="flex flex-col gap-6 text-white max-w-[1280px] m-auto"
  id="container"
>
  <!-- Hero -->
  <section
    class="relative flex flex-col justify-center items-center min-h-[90vh] mt-4 p-10 rounded-2xl overflow-hidden
    md:ml-24"
    id="hero"
    use:inview={options}
    on:inview_enter={(event) => {
      const { inView } = event.detail;
      isInView = inView;
      indx = 0;
      change();
    }}
  >
    <h1 class="z-10 font-semibold text-2xl">Lorem ipsum dolor sit.</h1>
    <p class="z-10 mt-6 text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </p>
    <div
      class="absolute h-full w-full transform-gpu bg-gradient-to-tl from-main-100 to-violet-900 opacity-50"
    >
      <!-- Background -->
    </div>
  </section>
  <!-- Projects -->
  <section
    class="min-h-[750px] h-[90vh] p-10 bg-background-500 rounded-2xl scroll-mt-11 flex flex-col gap-6
    md:ml-24"
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
      class="grid gap-6 h-full w-full content-start md:grid-cols-2 md:grid-rows:2 md:content-stretch"
    >
      <ProjCard name='SwiftVote' role='UX Case Study' theme='black'/>
      <ProjCard name='Oasis' role='UX Case Study' theme='black'/>
      <ProjCard name='Yopo' role='Web Design' theme='black'/>
      <ProjCard name='Munch' role='UX Case Study' theme='black'/>
    </div>
  </section>
  <!-- About Me -->
  <section
    class="min-h-[90vh] p-10 bg-background-500 rounded-2xl scroll-mt-11
    md:ml-24"
    id="aboutme"
    use:inview={options}
    on:inview_enter={(event) => {
      const { inView } = event.detail;
      isInView = inView;
      indx = 2;
      change();
    }}
  >
    <h2 class="text-2xl font-bold">About Me</h2>
  </section>
  <!-- Contact Me -->
  <section
    class="min-h-[90vh] p-10 bg-background-500 rounded-2xl scroll-mt-11 mb-20 md:mb-12
    md:ml-24"
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
