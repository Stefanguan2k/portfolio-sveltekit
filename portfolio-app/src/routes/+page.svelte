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
  class="flex flex-col gap-6 text-white max-w-[1280px] m-auto mb-0"
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
    md:ml-24 data-[expanded='true']:fixed data-[expanded='true']:h-full data-[expanded='true']:w-full data-[expanded='true']:z-50 data-[expanded='true']:m-0"
    id="projects"
    data-expanded="false"
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
      <ProjCard name="SwiftVote" role="UX Case Study" theme="black" />
      <ProjCard name="Oasis" role="UX Case Study" theme="black" />
      <ProjCard name="Yopo" role="Web Design" theme="black" />
      <ProjCard name="Munch" role="UX Case Study" theme="black" />
    </div>
  </section>
  <!-- About Me -->
  <section
    class="min-h-[500px] h-max p-10 bg-background-500 rounded-2xl scroll-mt-11 flex flex-col gap-6
    md:ml-24 data-[expanded='true']:fixed data-[expanded='true']:h-full data-[expanded='true']:w-full data-[expanded='true']:z-50 data-[expanded='true']:m-0"
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
    class="min-h-[90vh] p-10 bg-background-500 rounded-2xl scroll-mt-11 mb-10 md:mb-12
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
