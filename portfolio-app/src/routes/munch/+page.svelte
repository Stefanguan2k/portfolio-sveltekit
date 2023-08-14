<script>
  import Button from '/src/lib/cta-btn.svelte';
  import ImgContainer from '/src/lib/images.svelte';
  let mockupPath = '/assets/img/munch/munch-mockup-light.webp';

  const toggleMockup = () => {
    if (mockupPath === '/assets/img/munch/munch-mockup-light.webp') {
      mockupPath = '/assets/img/munch/munch-mockup-dark.webp';
    } else {
      mockupPath = '/assets/img/munch/munch-mockup-light.webp';
    }
  };
</script>

<svelte:head>
  <title>Munch Case Study - Stefan Guan</title>
  <meta name="description" content="Munch, a Google UX Design case study" />
  <meta name="keywords" content="UX, App Design, Case Study" />
  <meta name="author" content="Stefan Guan" />
  <link
    rel="preload"
    as="image"
    href="/assets/img/munch/munch-mockup-dark.webp"
  />
</svelte:head>

<div
  class="bg-background-300 dark:bg-background-900 max-w-[1280px] flex flex-col gap-6 text-zinc-800 dark:text-zinc-200 mx-auto md:pl-24"
>
  <!-- Hero -->
  <section
    class="relative flex flex-col justify-center items-center h-[65vh] mt-4 rounded-2xl bg-cover bg-center shadow-lightblue
    md:h-[50vh]"
    style="background-image: url('/assets/img/index/index-munch.png')"
  >
    <svg
      width="181"
      height="44"
      viewBox="0 0 181 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-64 h-64 z-40 md:self-start md:ml-6 drop-shadow-xl fill-[hsl(194,80%,30%)]"
    >
      <path
        d="M0.635994 43V2.05957H8.969L16.1633 21.1064C16.6809 22.5212 17.3365 24.4535 18.1301 26.9033C18.9238 29.3187 19.4413 30.8887 19.6829 31.6133H19.8899C21.6152 26.61 22.8401 23.1077 23.5647 21.1064L30.6038 2.05957H39.0403V43H32.3118V24.4189C32.3118 21.3135 32.5533 17.1038 33.0364 11.79H32.8294L29.8792 20.4854L22.3743 40.6709H17.302L9.90064 20.4854L6.84693 11.7383H6.58814C7.14023 16.707 7.41627 20.9339 7.41627 24.4189V43H0.635994ZM51.309 32.1826V13.1357H57.8822V31.3545C57.8822 36.0127 59.5212 38.3418 62.7992 38.3418C64.766 38.3418 66.3015 37.5137 67.4056 35.8574C68.5098 34.1667 69.0619 32.1654 69.0619 29.8535V13.1357H75.5834V43H69.2689V39.5322H69.2172C68.7341 40.6019 67.8025 41.6025 66.4222 42.5342C65.0765 43.4658 63.3858 43.9316 61.35 43.9316C60.1423 43.9316 58.9864 43.7419 57.8822 43.3623C56.8125 43.0173 55.7601 42.4479 54.725 41.6543C53.6898 40.8262 52.8617 39.6012 52.2406 37.9795C51.6195 36.3577 51.309 34.4255 51.309 32.1826ZM87.231 43V13.1357H93.5972V16.9141H93.6489C94.1665 15.8099 95.1154 14.7575 96.4956 13.7568C97.9103 12.7217 99.7218 12.2041 101.93 12.2041C104.898 12.2041 107.261 13.1185 109.021 14.9473C110.781 16.776 111.661 19.7262 111.661 23.7979V43H105.087V24.6777C105.087 20.0885 103.535 17.7939 100.429 17.7939C98.5314 17.7939 96.9442 18.5531 95.6675 20.0713C94.4253 21.5895 93.8042 23.4701 93.8042 25.7129V43H87.231ZM121.186 28.0938C121.186 23.2975 122.463 19.4502 125.016 16.5518C127.604 13.6533 130.934 12.2041 135.005 12.2041C137.973 12.2041 140.475 13.1012 142.51 14.8955C144.546 16.6898 145.823 18.7428 146.34 21.0547L140.751 22.6074C140.337 21.2962 139.629 20.1748 138.629 19.2432C137.628 18.277 136.437 17.7939 135.057 17.7939C132.814 17.7939 131.055 18.7773 129.778 20.7441C128.536 22.7109 127.915 25.1608 127.915 28.0938C127.915 31.3372 128.588 33.8561 129.933 35.6504C131.279 37.4447 132.987 38.3418 135.057 38.3418C136.575 38.3418 137.904 37.8242 139.043 36.7891C140.216 35.7194 141.027 34.5117 141.475 33.166L147.065 34.7705C146.409 37.1859 144.977 39.3252 142.769 41.1885C140.561 43.0173 137.973 43.9316 135.005 43.9316C130.934 43.9316 127.604 42.4997 125.016 39.6357C122.463 36.7373 121.186 32.89 121.186 28.0938ZM156.435 43V0.713867H162.905V16.1895H163.06C163.854 15.0508 164.941 14.1019 166.321 13.3428C167.736 12.5837 169.219 12.2041 170.772 12.2041C173.636 12.2041 176.017 13.1357 177.915 14.999C179.813 16.8278 180.761 19.7607 180.761 23.7979V43H174.24V24.626C174.24 20.0713 172.687 17.7939 169.582 17.7939C167.684 17.7939 166.097 18.6048 164.82 20.2266C163.543 21.8483 162.905 23.7461 162.905 25.9199V43H156.435Z"
      />
    </svg>

    <div class="absolute bottom-0 right-0 mb-6 mr-6 flex gap-4">
      <Button
        icon="/assets/svg/figma.svg"
        text="Figma Prototype"
        theme="rgba(50,50,50,0.5)"
        type="circleblur"
        location="https://www.figma.com/proto/93jQf7rWab3raYiQEC4ODT/Google-UX?page-id=203%3A102&node-id=203%3A103&viewport=-3178%2C11%2C0.86&scaling=scale-down&starting-point-node-id=203%3A103"
      />
      <Button
        icon="/assets/svg/pdf.svg"
        text="Slide Deck"
        theme="rgba(50,50,50,0.5)"
        type="circleblur"
        location="/assets/pdf/munch-slide-deck.pdf"
      />
    </div>
  </section>
  <!-- Summary -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-6
    md:p-10"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center text">Summary</h2>
    <div
      class="grid gap-6 h-full w-full content-start grid-rows-auto md:grid-cols-2 md:grid-rows:2 md:content-stretch"
    >
      <div class="bg-background-100 dark:bg-background-600 rounded-lg p-4">
        <div class="mb-2 text-lg">Overview</div>
        <p class="text-zinc-700 dark:text-zinc-300 mb-4">
          Many of today's food ordering apps often have clutter or recommends
          unhealthy fast food restaurants. With the advent of the COVID-19
          pandemic, local businesses suffered the most. The Munch app aims to
          create a marketplace with an emphasis on local eateries, while
          maintaining a streamlined interface.
        </p>
        <div class="mb-2 text-lg">Goal</div>
        <p class="text-zinc-700 dark:text-zinc-300">
          Identify pain points related to ordering food. Design an app that
          solves pain points and makes it simple to order local eats.
        </p>
      </div>

      <div
        class="flex flex-col justify-between gap-6 bg-background-100 dark:bg-background-600 rounded-lg p-4"
      >
        <div>
          <div class="font-medium text-lg">Role</div>
          <p class="text-zinc-700 dark:text-zinc-300">UX Designer</p>
        </div>
        <div>
          <div class="text-lg">Timeline</div>
          <div class="text-zinc-700 dark:text-zinc-300">
            June 2022 - December 2022
          </div>
        </div>
        <div>
          <div class="text-lg mb-2">Responsibilities</div>
          <ul
            class="text-zinc-700 dark:text-zinc-300 flex flex-wrap gap-x-3 gap-y-2"
          >
            <li
              class="bg-background-300 dark:bg-background-500 px-3 rounded-full"
            >
              Mockups
            </li>
            <li
              class="bg-background-300 dark:bg-background-500 px-3 rounded-full"
            >
              Prototyping
            </li>
            <li
              class="bg-background-300 dark:bg-background-500 px-3 rounded-full"
            >
              Usability Studies
            </li>
            <li
              class="bg-background-300 dark:bg-background-500 px-3 rounded-full"
            >
              User Interview
            </li>
            <li
              class="bg-background-300 dark:bg-background-500 px-3 rounded-full"
            >
              Wireframing
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- Research -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-8
    md:p-10 md:gap-12"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">Research</h2>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      After I received my Sharpen prompt, I first set off to investigate user
      pain points of our competitors. Throughout the whole project, I utilized
      qualitative research methods. For instance, competitive audits, surveys,
      user personas, and usability studies.
    </p>
    <!-- Persona container -->
    <div
      class="grid gap-6 h-full w-full content-start grid-rows-auto md:grid-cols-2 md:grid-rows:2 md:content-stretch"
    >
      <div
        class="grid gap-4 grid-cols-2 grid-rows-2 bg-background-100 dark:bg-background-600 rounded-lg p-4"
      >
        <img
          src="/assets/avatars/alexis.webp"
          alt="avatar of Mark"
          class="bg-avatar-100 rounded-md h-32 w-32 self-center"
        />
        <ul class="self-center">
          <li>Name: Alexis</li>
          <li>Age: 19</li>
          <li>Role: Biochem Student</li>
          <li>Location: Toronto</li>
        </ul>
        <p class="col-span-2 text-zinc-700 dark:text-zinc-300">
          Alexis is a undergraduate student who finds herself extremely busy
          with her studies. She usually orders Subway as she believes it is
          healthier than the alternatives. However, since the COVID-19 pandemic,
          she hopes to easily find local alternatives.
        </p>
      </div>
      <div
        class="grid gap-4 grid-cols-2 grid-rows-2 bg-background-100 dark:bg-background-600 rounded-lg p-4"
      >
        <img
          src="/assets/avatars/billy.webp"
          alt="avatar of Sam"
          class="bg-avatar-900 rounded-md h-32 w-32 self-center"
        />
        <ul class="self-center">
          <li>Name: Billy</li>
          <li>Age: 48</li>
          <li>Role: Plumber</li>
          <li>Location: Montreal</li>
        </ul>
        <p class="col-span-2 text-zinc-700 dark:text-zinc-300">
          Billy is a brutally honest plumber. He prioritizes family over
          everything else. Billy typically drives to restaurants to order food.
          However, his children told him about online food ordering. He would
          like to experiment with the flavours of his locale.
        </p>
      </div>
    </div>
  </section>
  <!-- Starting the Design -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-8
  md:p-10 md:gap-12"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">
      Starting the Design
    </h2>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      I began the project by creating a user flow, which enabled a visualization
      of a user ordering food.
    </p>
    <ImgContainer
      path="/assets/img/munch/munch-userflow.webp"
      alt="User flow of the food ordering"
      classList=""
    />
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      The preliminary user flow allowed me to understand what a user would
      typically expect when trying to order food. I initally sketched six
      different variations of the home screen.
    </p>
    <ImgContainer
      path="/assets/img/munch/munch-sketch.webp"
      alt="Various sketches of the home screen"
      classList=""
    />
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      After deciding on which elements I wanted to keep, I repeated the process
      with every screen. Thus, I translated the sketches into a wireframe in
      Figma.
    </p>
    <ImgContainer
      path="/assets/img/munch/munch-wireframe.webp"
      alt="Digital wireframes of the Munch app"
      classList=""
    />
  </section>
  <!-- User Testing -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-8
    md:p-10 md:gap-12"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">User Testing</h2>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      The first order of business is to conduct a usability study with my
      low-fidelity prototype. I gave the participants a goal to order food and
      monitored the steps they took. I then allowed time for user feedback,
      which resulted in three critical insights.
    </p>
    <!-- Insight container -->
    <div class="flex flex-wrap justify-center gap-6 w-full">
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-6 h-6 fill-[hsl(194,70%,60%)] dark:fill-[hsl(194,37%,64%)]"
          >
            <path
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
            />
          </svg>

          <div class="text-lg">Payment Methods</div>
        </div>
        <p>
          Users want to be able to select which card to pay with before
          ordering. In addition, they want the card to appear more prominent to
          ensure accurate payment selection.
        </p>
      </div>
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            class="w-6 h-6 fill-[hsl(194,70%,60%)] dark:fill-[hsl(194,37%,64%)]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            /></svg
          >
          <div class="text-lg">Ratings</div>
        </div>
        <p>
          Users want a way to view a restaurant's ratings and also give their
          own ratings.
        </p>
      </div>
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            class="w-6 h-6 fill-[hsl(194,70%,60%)] dark:fill-[hsl(194,37%,64%)]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"
            /></svg
          >
          <div class="text-lg">Support</div>
        </div>
        <p>
          Users want a way to reach out when an order does not go the way they
          expected.
        </p>
      </div>
    </div>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      The second round of usability studies uses a high-fidelity prototype,
      allowing for further iterations on the mockups.
    </p>
    <ImgContainer
      path="/assets/img/munch/munch-before-after.webp"
      alt="A comparison between the digital wireframe (home screen and restaurant screen) before and after the usability study"
      classList=""
    />
  </section>
  <!-- Final Design -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-8
    md:p-10 md:gap-12"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">Final Design</h2>
    <ImgContainer path={mockupPath} alt="" classList="" />
    <div class="flex gap-6 items-center">
      <div
        class="flex flex-col items-center gap-1 text-xs fill-zinc-700 dark:fill-zinc-300 text-zinc-700 dark:text-zinc-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          class="h-6 w-6"
          ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
          /></svg
        >
        Light
      </div>
      <label
        for="theme-toggle"
        class="relative inline-flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          class="sr-only peer"
          id="theme-toggle"
          on:click={toggleMockup}
        />
        <span
          class="w-16 h-8 bg-background-400 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-background-200 transition ease-ios-smooth duration-500
          peer peer-checked:after:translate-x-[135%] peer-checked:bg-main-100
          after:absolute after:bg-background-100 after:h-6 after:w-6 after:left-1 after:top-1 after:rounded-full after:shadow-sm after:transition after:ease-ios-smooth after:duration-500
          dark:peer-focus:ring-background-700 dark:bg-background-500 dark:after:bg-zinc-300"
        />
      </label>
      <div
        class="flex flex-col items-center gap-1 text-xs fill-zinc-700 dark:fill-zinc-300 text-zinc-700 dark:text-zinc-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
          class="h-6 w-6"
          ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
          /></svg
        >
        Dark
      </div>
    </div>
  </section>
  <!-- Concluding Thoughts -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-8
    md:p-10 md:gap-12"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">
      Concluding Thoughts
    </h2>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      As part of the Google UX Design Certificate Program, this project allowed
      me to apply what I learned throughout the course. For instance, user
      journey mapping, personas, iterative design, usability studies, and more.
      As my first user-centred piece, it helped me empathize with users to
      create a cohesive experience. <br /><br />Further directions with this
      design may include conducting another usability study to identify any new
      pain points. Additionally, user surveys may also help identify areas of
      dissatisfaction and areas that need improvements.
    </p>
    <div class="flex gap-6 flex-wrap text-zinc-100 w-full justify-center">
      <a
        href="https://www.figma.com/proto/93jQf7rWab3raYiQEC4ODT/Google-UX?page-id=203%3A102&node-id=203%3A103&viewport=-3178%2C11%2C0.86&scaling=scale-down&starting-point-node-id=203%3A103"
        class="px-8 py-4 flex gap-3 justify-center items-center rounded-full bg-[hsl(194,46%,35%)] hover:bg-[hsl(194,35%,28%)] hover:shadow-lg transition ease-ios-smooth duration-500"
        target="_blank"
      >
        <img src="/assets/svg/figma.svg" alt="" class="h-7 w-7" />
        <div>Prototype</div>
      </a>
      <a
        class="px-8 py-4 flex gap-3 justify-center items-center rounded-full bg-[hsl(194,46%,35%)] hover:bg-[hsl(194,35%,28%)] hover:shadow-lg transition ease-ios-smooth duration-500"
        href="/assets/pdf/munch-slide-deck.pdf"
        target="_blank"
      >
        <img src="/assets/svg/pdf.svg" alt="" class="h-7 w-7" />
        <div class="data-[type='circleblur']:hidden">Slide Deck</div>
      </a>
    </div>
  </section>
</div>
