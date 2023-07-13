<script>
  import { inview } from 'svelte-inview';
  import NavIndex from '../lib/nav.svelte';
  import ProjCard from '../lib/project-card.svelte';
  import SocialOverlay from '../lib/social-overlay.svelte';
  import emailjs from '@emailjs/browser';

  let toggle;
  let nameInput;
  let emailInput;
  let subjectInput;
  let messageInput;
  let isInView;
  let contactState = 'submit';

  const options = {
    threshold: 0.3,
    rootMargin: '0px',
  };

  let indx;
  let changeIndx;
  function change() {
    changeIndx(indx);
  }

  function sendEmail(e) {
    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLIC_KEY').then(
      (result) => {
        console.log('SUCCESS!', result.text);
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  }
</script>

<svelte:head>
  <title>Stefan Guan's Portfolio</title>
  <meta name="description" content="Stefan Guan's UX Portfolio" />
  <meta name="keywords" content="UX Design, Portfolio, Case Studies" />
  <meta name="author" content="Stefan Guan" />
</svelte:head>

<NavIndex bind:updateActive={changeIndx} />

<div
  class="bg-background-300 dark:bg-background-900 max-w-[1280px] flex flex-col gap-6 text-zinc-800 dark:text-zinc-200 mx-auto md:pl-24"
>
  <!-- Home -->
  <section
    class="relative flex flex-col justify-center items-center min-h-[80vh] mt-4 p-10 rounded-2xl w-full"
    id="home"
    use:inview={options}
    on:inview_enter={(event) => {
      const { inView } = event.detail;
      isInView = inView;
      indx = 0;
      change();
    }}
  >
    <h1 class="z-10 font-thin text-3xl z-20">
      Hi, I am Stefan Guan, a UX/Web Designer based in Surrey, BC.
    </h1>
    <!-- Background -->
    <div
      class="absolute h-full w-full bg-gradient-to-tl from-main-100 to-violet-600 dark:to-violet-900 brightness-150 saturate-[0.55] dark:brightness-75 dark:saturate-100 rounded-2xl z-10"
    />
    <!-- Shadow -->
    <div
      class="absolute h-full w-full bg-gradient-to-tl from-main-100 to-violet-600 dark:to-violet-900 brightness-150 saturate-[0.55] dark:brightness-50 dark:saturate-100 translate-y-2 blur-md opacity-40"
    />

    <div class="absolute top-0 right-0 mt-6 mr-6 z-20">
      <button
        class="flex gap-3 justify-center items-center rounded-full p-3 backdrop-blur-md bg-[rgba(25,25,25,0.5)] hover:bg-[rgba(90,90,90,0.5)] hover:shadow-lg transition ease-ios-smooth duration-500"
        on:click={toggle.toggleOverlay()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          class="h-6 w-6 fill-zinc-300"
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
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col gap-6 w-full
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
        img="../src/assets/img/index/index-swiftvote.png"
        path="../swiftvote"
        icon="figma"
        n="1"
      />

      <ProjCard
        name="Oasis"
        role="UX Case Study"
        theme="rgba(50,0,100,0.5)"
        img="../src/assets/img/index/index-oasis.png"
        icon="xd"
        path="../oasis"
        n="1"
      />
      <ProjCard
        name="Yopo"
        role="Web Design"
        theme="rgba(95,50,0,0.5)"
        img="../src/assets/img/index/index-yopo.png"
        icon="codefigma"
        path="../yopo"
        n="2"
      />
      <ProjCard
        name="Munch"
        role="UX Case Study"
        theme="rgba(0,50,100,0.5)"
        img="../src/assets/img/index/index-munch.png"
        icon="figma"
        path="../munch"
        n="1"
      />
    </div>
  </section>
  <!-- About Me -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col gap-6 w-full
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
          src="../src/assets/img/index/profile-img.webp"
          alt="Portait of myself"
          class="rounded-md h-56 w-56"
        />
      </div>
      <div class="flex flex-col gap-6 text-center md:text-start">
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
    class="h-max py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 w-full
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
    <h2 class="text-2xl font-bold mb-6">Contact</h2>
    <div class="flex flex-col md:flex-row gap-6">
      <div
        class="flex flex-col bg-background-100 dark:bg-background-600 rounded-md p-4 w-full gap-4"
      >
        <p>Let's get in touch!</p>
        <p>
          I would love the chance to get in contact with you! You may use the
          form for convenience or you can connect with me using the links below.
        </p>
        <div class="flex flex-col gap-4">
          <a
            href="mailto:stefan.guan@outlook.com"
            class="flex gap-2 text-sm items-center fill-zinc-700 dark:fill-zinc-300 w-max"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              class="w-5 h-5"
              ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              /></svg
            >
            <div>stefan.guan@outlook.com</div></a
          >
          <a
            href="mailto:stefan.guan@outlook.com"
            class="flex gap-2 text-sm items-center fill-zinc-700 dark:fill-zinc-300 w-max"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              class="w-5 h-5"
              ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              /></svg
            >
            <div>Stefan Guan</div></a
          >
        </div>
      </div>
      <div class="w-full">
        <form class="flex flex-col gap-2" on:submit|preventDefault={sendEmail}>
          <div class="relative">
            <input
              type="text"
              name="user_name"
              id="name"
              bind:this={nameInput}
              class="block focus:shadow-md bg-transparent rounded-md pl-3 pr-9 pt-4 pb-2 peer w-full border-2 border-background-400 dark:border-background-500 focus:outline-none focus:border-main-100 focus:border-1 focus:ring-0 focus:shadow-md transition ease-ios-smooth duration-500"
              placeholder=" "
              required
            />
            <label
              for="name"
              class="absolute text-sm transition ease-ios-smooth duration-500 left-[0.9rem] peer-focus:text-main-100 dark:peer-focus:text-cyan-400 -translate-y-4 scale-75 top-4 select-none text-zinc-800 dark:text-zinc-300
                  peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:scale-75 origin-[0]
                  peer-placeholder-shown:-translate-y-[50%] peer-placeholder-shown:top-[50%] peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-600 dark:peer-placeholder-shown:text-zinc-400"
              >Name</label
            >
            <button
              class="absolute top-[50%] right-3 translate-y-[-50%] inline-block peer-placeholder-shown:hidden p-1 rounded-full bg-background-400/70"
              on:click={(nameInput.value = '')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
                class="h-3 w-3 fill-zinc-600"
                ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                /></svg
              >
            </button>
          </div>
          <div class="relative">
            <input
              type="email"
              name="user_email"
              id="email"
              bind:this={emailInput}
              class="block focus:shadow-md bg-transparent rounded-md pl-3 pr-9 pt-4 pb-2 peer w-full border-2 border-background-400 dark:border-background-500 focus:outline-none focus:border-main-100 focus:border-1 focus:ring-0 focus:shadow-md transition ease-ios-smooth duration-500"
              placeholder=" "
              required
            />
            <label
              for="email"
              class="absolute text-sm transition ease-ios-smooth duration-500 left-[0.9rem] peer-focus:text-main-100 dark:peer-focus:text-cyan-400 -translate-y-4 scale-75 top-4 select-none text-zinc-800 dark:text-zinc-300
                  peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:scale-75 origin-[0]
                  peer-placeholder-shown:-translate-y-[50%] peer-placeholder-shown:top-[50%] peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-600 dark:peer-placeholder-shown:text-zinc-400"
              >Email</label
            >
            <button
              class="absolute top-[50%] right-3 translate-y-[-50%] inline-block peer-placeholder-shown:hidden p-1 rounded-full bg-background-400/70"
              on:click={(emailInput.value = '')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
                class="h-3 w-3 fill-zinc-600"
                ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                /></svg
              >
            </button>
          </div>
          <div class="relative">
            <input
              type="text"
              name="subject"
              id="subject"
              bind:this={subjectInput}
              class="block focus:shadow-md bg-transparent rounded-md pl-3 pr-9 pt-4 pb-2 peer w-full border-2 border-background-400 dark:border-background-500 focus:outline-none focus:border-main-100 focus:border-1 focus:ring-0 focus:shadow-md transition ease-ios-smooth duration-500"
              placeholder=" "
              required
            />
            <label
              for="subject"
              class="absolute text-sm transition ease-ios-smooth duration-500 left-[0.9rem] peer-focus:text-main-100 dark:peer-focus:text-cyan-400 -translate-y-4 scale-75 top-4 select-none text-zinc-800 dark:text-zinc-300
                  peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:scale-75 origin-[0]
                  peer-placeholder-shown:-translate-y-[50%] peer-placeholder-shown:top-[50%] peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-600 dark:peer-placeholder-shown:text-zinc-400"
              >Subject</label
            >
            <button
              class="absolute top-[50%] right-3 translate-y-[-50%] inline-block peer-placeholder-shown:hidden p-1 rounded-full bg-background-400/70"
              on:click={(subjectInput.value = '')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
                class="h-3 w-3 fill-zinc-600"
                ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                /></svg
              >
            </button>
          </div>
          <div class="relative">
            <textarea
              name="message"
              id="message"
              bind:this={messageInput}
              oninput="this.style.height = '';this.style.height = this.scrollHeight + 'px';"
              class="block overflow-y-hidden focus:shadow-md bg-transparent rounded-md pl-3 pr-9 pt-4 pb-2 peer w-full border-2 border-background-400 dark:border-background-500 focus:outline-none focus:border-main-100 focus:border-1 focus:ring-0 focus:shadow-md transition ease-ios-smooth duration-500"
              placeholder=" "
              required
            />
            <label
              for="message"
              class="absolute text-sm transition ease-ios-smooth duration-500 left-[0.9rem] peer-focus:text-main-100 dark:peer-focus:text-cyan-400 -translate-y-4 scale-75 top-4 select-none text-zinc-800 dark:text-zinc-300
                  peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:scale-75 origin-[0]
                  peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-600 dark:peer-placeholder-shown:text-zinc-400"
              >Message</label
            >
            <button
              class="absolute top-4 right-3 translate-y-0 inline-block peer-placeholder-shown:hidden p-1 rounded-full bg-background-400/70"
              on:click={(messageInput.value = '')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
                class="h-3 w-3 fill-zinc-600"
                ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                /></svg
              >
            </button>
          </div>
          <div class="text-xs my-4">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" class="underline"
              >Privacy Policy</a
            >
            and
            <a href="https://policies.google.com/terms" class="underline"
              >Terms of Service</a
            > apply.
          </div>
          <button
            class="bg-main-100 rounded-md p-4 text-zinc-100 transform ease-ios-smooth duration-500 capitalize
              data-[state='submit']:hover:shadow-md data-[state='submit']:hover:bg-main-100/70
              data-[state='submitting']:bg-main-100/50 data-[state='submitting']:pointer-events-none
              data-[state='error']:bg-red-500 dark:data-[state='error']:bg-red-900/80 data-[state='error']:pointer-events-none"
            data-state={contactState}
          >
            {contactState}
          </button>
        </form>
      </div>
    </div>
  </section>
</div>
