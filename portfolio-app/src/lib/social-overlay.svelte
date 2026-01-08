<script>
  let overlay;

  export function toggleOverlay() {
    if (overlay.getAttribute('data-active') === 'false') {
      overlay.classList.remove('hidden');
      setTimeout(() => {
        overlay.setAttribute('data-active', true);
      }, 100);
    } else {
      overlay.setAttribute('data-active', false);
      setTimeout(() => {
        overlay.classList.add('hidden');
      }, 400);
    }
  }
</script>

<div
  class="absolute w-full h-full dark:bg-nav-800 backdrop-blur-lg z-30 p-8 flex flex-col gap-8 data-[active='false']:opacity-0 hidden transition ease-ios-smooth duration-700 rounded-xl"
  data-active="false"
  bind:this={overlay}
>
  <div class="flex justify-between items-center">
    <div class="text-2xl font-bold">Social Links</div>
    <button class="flex justify-center items-center" on:click={toggleOverlay}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 384 512"
        class="fill-zinc-800 dark:fill-zinc-300 h-6 w-6"
        ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        /></svg
      >
    </button>
  </div>
  <div>
    <a
      href="https://www.linkedin.com/in/stefan-guan-a72224228/"
      target="_blank"
      class="bg-background-200/50 dark:bg-background-700/50 rounded-md py-4 px-4 flex justify-between items-center md:gap-24 fill-zinc-300 hover:bg-background-400/50 dark:hover:bg-background-500/50 transition ease-ios-smooth duration-500"
    >
      <div class="flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-5 h-5 fill-zinc-700 dark:fill-zinc-200"
          ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          /></svg
        >
        <div>Linkedin</div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        class="fill-zinc-600 dark:fill-zinc-400"
        ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
        /></svg
      >
    </a>
  </div>
</div>
