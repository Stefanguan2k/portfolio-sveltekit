<script>
  import Button from '../lib/cta-btn.svelte';
</script>

<!-- bg-background-100 -->

<div
  class="flex flex-col gap-8 text-white snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
>
  <section
    class="flex justify-center items-center min-h-[90vh] mt-4 p-10 bg-background-500 rounded-2xl snap-start scroll-mt-11
    md:ml-24"
    id="hero"
  >
    <h1>Hi, I am Stefan Guan</h1>
  </section>
  <section
    class="min-h-[90vh] p-10 bg-background-500 rounded-2xl snap-start scroll-mt-11
    md:ml-24"
    id="projects"
  >
    <h2 class="text-2xl font-bold">My Projects</h2>
  </section>
  <section
    class="min-h-[90vh] p-10 bg-background-500 rounded-2xl snap-start scroll-mt-11
    md:ml-24"
    id="aboutme"
  >
    <h2 class="text-2xl font-bold">About Me</h2>
  </section>
  <section
    class="min-h-[90vh] p-10 bg-background-500 rounded-2xl snap-start scroll-mt-11 mb-16
    md:ml-24"
    id="contact"
  >
    <h2 class="text-2xl font-bold">Contact Me</h2>
  </section>
</div>
