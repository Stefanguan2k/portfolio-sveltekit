<script>
  export let name, role, theme, img, icon, n, path;
  let iconLink;

  const icons = {
    figma: '/assets/svg/figma.svg',
    xd: '/assets/svg/xd.svg',
    code: '/assets/svg/code.svg',
  };

  if (n === '1') {
    switch (icon) {
      case 'figma':
        iconLink = icons.figma;
        break;
      case 'xd':
        iconLink = icons.xd;
        break;
    }
  } else {
    iconLink = icons.figma;
  }
</script>

<a href={path} class="hover:shadow-lg transition ease-ios-smooth duration-500">
  <div
    class="flex items-end w-full h-96 rounded-md overflow-hidden bg-cover bg-center text-zinc-200
      md:justify-center md:flex-wrap md:w-full"
    style="background-image: url({img})"
  >
    <div
      class="bg-black w-full h-max py-4 grid grid-cols-3 backdrop-blur-xl"
      style:background={theme}
    >
      <div class="col-span-2">
        <p id="name" class="text-xl ml-8">{name}</p>
        <p id="role" class="text-md ml-8">{role}</p>
      </div>
      <div class="self-center justify-self-end mr-8 flex gap-4">
        <img
          src="/assets/svg/code.svg"
          alt=""
          class="h-5 w-5 hidden data-[show='2']:block"
          data-show={n}
        />
        <img src={iconLink} alt="" class="h-5 w-5" />
      </div>
    </div>
  </div>
</a>
