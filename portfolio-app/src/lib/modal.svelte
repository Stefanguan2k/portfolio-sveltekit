<script>
  let modal;

  export function toggleModal() {
    if (modal.getAttribute('data-active') === 'false') {
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.setAttribute('data-active', true);
      }, 100);
    } else {
      modal.setAttribute('data-active', false);
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 400);
    }
  }

  let resizeTimer;
  function pauseTransition() {
    modal.classList.add('transition-none');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      modal.classList.remove('transition-none');
    }, 100);
  }
</script>

<svelte:window on:resize={pauseTransition} />

<div
  class="fixed bottom-0 h-max w-full bg-nav-100 z-50 backdrop-blur-xl rounded-tl-xl rounded-tr-xl dark:bg-nav-800 px-8 pt-4 pb-32 text-zinc-300 data-[active='false']:translate-y-[100%]
    transition ease-ios-smooth duration-700 hidden
    md:top-[50%] md:translate-y-[-50%] md:w-max md:left-[50%] md:translate-x-[-50%] md:rounded-md md:data-[active='false']:opacity-0 md:data-[active='false']:translate-y-[-50%] md:pb-12 md:shadow-xl md:backdrop-brightness-[0.4]"
  data-active="false"
  bind:this={modal}
>
  <!-- Title bar -->
  <div class="flex justify-between pb-8">
    <h2 class="text-2xl font-bold">Prototypes</h2>
    <button class="flex justify-center items-center" on:click={toggleModal}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 384 512"
        class="fill-zinc-300 h-6 w-6"
        ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        /></svg
      >
    </button>
  </div>
  <div class="flex flex-col">
    <a
      href="https://www.figma.com/proto/vWjOCqzVo7VJeMlT7ipUJV/SwiftVote-GoogleUX?page-id=64%3A5768&node-id=82-755&viewport=1268%2C147%2C0.13&scaling=scale-down&starting-point-node-id=82%3A719"
      class="bg-background-700 rounded-tl-md rounded-tr-md py-4 px-4 flex justify-between items-center md:gap-24 fill-zinc-300 hover:bg-background-500"
    >
      <div class="flex gap-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
          class="w-5 h-5"
          ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
          /></svg
        >
        <div>Mobile Variant</div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        class="fill-zinc-400"
        ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
        /></svg
      >
    </a>
    <div class="h-[1px] bg-background-500">
      <!-- Horizontal Line -->
    </div>
    <a
      href="https://www.figma.com/proto/vWjOCqzVo7VJeMlT7ipUJV/SwiftVote-GoogleUX?page-id=155%3A1252&node-id=315-6231&viewport=-518%2C-685%2C0.07&scaling=scale-down&starting-point-node-id=315%3A6231&show-proto-sidebar=1"
      class="bg-background-700 rounded-bl-md rounded-br-md py-4 px-4 flex justify-between items-center fill-zinc-300 hover:bg-background-500"
    >
      <div class="flex gap-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
          class="w-5 h-5"
          ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"
          /></svg
        >
        <div>Desktop Variant</div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        class="fill-zinc-400"
        ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
        /></svg
      >
    </a>
  </div>
</div>
