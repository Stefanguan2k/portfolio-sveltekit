<script>
  import { inview } from 'svelte-inview';
  import NavIndex from '../lib/nav.svelte';
  import ProjCard from '../lib/project-card.svelte';

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
    <h1 class="z-10 font-thin text-3xl">Hi, I am Stefan Guan, a UX/Web Designer based in Surrey, BC.</h1>
    <div
      class="absolute h-full w-full bg-gradient-to-tl from-main-100 to-violet-900 opacity-50"
    >
      <!-- Background -->
    </div>
  </section>
  <!-- Projects -->
  <section
    class="h-full py-8 px-6 bg-background-200 dark:bg-background-500 rounded-2xl scroll-mt-11 flex flex-col gap-6
    md:p-10 md:ml-24"
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
      <a href='../swiftvote'><ProjCard name="SwiftVote" role="UX Case Study" theme="rgba(0,100,100,0.5)" img='../src/assets/img/index-swiftvote.png' icon='figma' n='1'/></a>
      <ProjCard name="Oasis" role="UX Case Study" theme="rgba(50,0,100,0.5)" img='../src/assets/img/index-oasis.png' icon='xd' n='1'/>
      <ProjCard name="Yopo" role="Web Design" theme="rgba(95,50,0,0.5)" img='../src/assets/img/index-yopo.png' icon='codefigma' n='2'/>
      <ProjCard name="Munch" role="UX Case Study" theme="rgba(0,50,100,0.5)" img='../src/assets/img/index-munch.png' icon='figma' n='1'/>
    </div>
  </section>
  <!-- About Me -->
  <section
    class="min-h-[500px] h-max py-8 px-6 bg-background-200 dark:bg-background-500 rounded-2xl scroll-mt-11 flex flex-col gap-6
    md:p-10 md:ml-24 data-[expanded='true']:fixed data-[expanded='true']:h-full data-[expanded='true']:w-full data-[expanded='true']:z-50 data-[expanded='true']:m-0"
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
      class="grid gap-6 items-start h-full w-full
      md:grid-cols-2"
    >
      <div
        class="bg-black flex justify-center pt-4 px-4 w-max h-max pb-16 rounded-xl m-auto mt-0 md:m-0 md:justify-self-center"
      >
        <img
          src="https://placehold.co/400"
          alt=""
          class="rounded-md h-56 w-56"
        />
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        necessitatibus eius, nam qui inventore doloremque placeat maiores quos
        molestias perferendis sit reiciendis asperiores. Recusandae earum id
        enim sint expedita assumenda quas illo ut, quo distinctio qui a
        provident et voluptates blanditiis laudantium aperiam eius minima
        excepturi fugit voluptas quia! Suscipit sit minima architecto molestias
        aliquam id dicta quibusdam ad consequatur nulla explicabo, incidunt,
        repellat quasi repellendus facere ab similique ex dolorem nobis
        assumenda soluta delectus accusamus maxime officia! Quibusdam
        consequuntur, consequatur modi minus atque eius officia libero repellat
        quaerat non quod similique amet est, ut minima nesciunt, quidem magni.
        Velit.
      </p>
    </div>
  </section>
  <!-- Contact Me -->
  <section
    class="min-h-[90vh] py-8 px-6 bg-background-200 dark:bg-background-500 rounded-2xl scroll-mt-11 mb-10 md:mb-12
    md:p-10 md:ml-24"
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
