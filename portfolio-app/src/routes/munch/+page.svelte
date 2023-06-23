<script>
  import Button from '/src/lib/cta-btn.svelte';
  import ImgContainer from '/src/lib/images.svelte';
  let toggle;
</script>

<svelte:head>
  <title>Munch Case Study - Stefan Guan</title>
  <meta name="description" content="Munch, a Google UX Design case study" />
  <meta name="keywords" content="UX, App Design, Case Study" />
  <meta name="author" content="Stefan Guan" />
</svelte:head>

<div
  class="bg-background-300 dark:bg-background-900 max-w-[1280px] flex flex-col gap-6 text-zinc-800 dark:text-zinc-200 mx-auto md:pl-24"
>
  <!-- Hero -->
  <section
    class="relative flex flex-col justify-center items-center h-[65vh] mt-4 rounded-2xl bg-cover bg-center shadow-purple
    md:h-[50vh]"
    style="background-image: url('../src/assets/img/index-munch.png')"
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
        icon="../src/assets/svg/figma.svg"
        text="Figma Prototype"
        theme="rgba(50,50,50,0.5)"
        type="circleblur"
        location="https://www.figma.com/proto/93jQf7rWab3raYiQEC4ODT/Google-UX?page-id=203%3A102&node-id=203%3A103&viewport=-3178%2C11%2C0.86&scaling=scale-down&starting-point-node-id=203%3A103"
      />
      <Button
        icon="../src/assets/svg/pdf.svg"
        text="Slide Deck"
        theme="rgba(50,50,50,0.5)"
        type="circleblur"
        location="../src/assets/pdf/munch-slide-deck.pdf"
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
          src="../src/assets/avatars/alexis.webp"
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
          src="../src/assets/avatars/billy.webp"
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
      With consideration of the user needs, I created a sitemap for the website.
      The sitemap lays different paths users can take with the product. I found
      it to be crucial when planning out the organization of the website.
    </p>
    <ImgContainer
      path="../src/assets/img/oasis-sitemap.webp"
      alt="Sitemap of the Oasis website"
      classList=""
    />
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      With the basic skeleton of the website completed, the next step was to
      create paper wireframes. This allowed quickly iterate through ideas for
      how the would look.
    </p>
    <ImgContainer
      path="../src/assets/img/oasis-paper-wireframe.webp"
      alt="Paper wireframe of the oasis website"
      classList=""
    />
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      After satisfactory paper wireframes, I converted the designs into digital
      wireframes using Adobe XD. I created a pair of mobile and desktop
      wireframes. Thus, the digital wireframes enabled the ability to gether
      more feedback.
    </p>
    <ImgContainer
      path="../src/assets/img/oasis-digital-wireframe.webp"
      alt="Digital wireframe of the oasis website"
      classList=""
    />
    <ImgContainer
      path="../src/assets/img/oasis-digital-wireframe-mobile.webp"
      alt="Digital wireframe of the mobile oasis website"
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
      After connecting the wireframes into a low-fidelity prototype, I set out
      to test it with a usability study. The parameters of the study include:
      (1) An unmoderated usability study, (2) remote study in Canada, (3) five
      particiapnts, and (4) a duration of 20-40 minutes. The data from the
      usability study gave three important insights.
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
            class="w-6 h-6 fill-[hsl(260,70%,60%)] dark:fill-[hsl(260,37%,64%)]"
          >
            <path
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
            />
          </svg>

          <div class="text-lg">Saved Payment Methods</div>
        </div>
        <p>
          Users wanted a way select a previously used card for future bookings.
        </p>
      </div>
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-6 h-6 fill-[hsl(260,70%,60%)] dark:fill-[hsl(260,37%,64%)]"
          >
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
          <div class="text-lg">Navigation</div>
        </div>
        <p>
          The current navigation bar do not sufficiently describe where an
          element links to.
        </p>
      </div>
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-6 h-6 fill-[hsl(260,70%,60%)] dark:fill-[hsl(260,37%,64%)]"
          >
            <path
              d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            />
          </svg>
          <div class="text-lg">Contrast</div>
        </div>
        <p>
          Elements there were toggleable lacked contrast. Some users reported
          not konwing whether an option was on or off.
        </p>
      </div>
    </div>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      The insights were consequently implemented into the next iteration of the
      designs—the mockups.
    </p>
    <ImgContainer
      path="../src/assets/img/oasis-before-and-after.webp"
      alt="A comparison between the digital wireframe and the mockup of the home and booking screens"
      classList=""
    />
    <ImgContainer
      path="../src/assets/img/oasis-mockups.png"
      alt="Mockups of the different screens (home, search, listing, book together, and settings)"
      classList=""
    />
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      Additionally, the mockups were crafted with the following accessibility
      features in mind.
    </p>
    <!-- Accessibility Container -->
    <div class="flex flex-wrap justify-center gap-6 w-full">
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            class="w-6 h-6 fill-[hsl(260,70%,60%)] dark:fill-[hsl(260,37%,64%)]"
            ><path
              d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"
            /></svg
          >

          <div class="text-lg">Hierarchy</div>
        </div>
        <p>
          Clear and consistent text styles inform the visual hierarchy of each
          page.
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
            class="w-6 h-6 fill-[hsl(260,70%,60%)] dark:fill-[hsl(260,37%,64%)]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
            /></svg
          >
          <div class="text-lg">Alt Text</div>
        </div>
        <p>
          As there is a heavy emphasis on images, each image contains alt text
          to help screen readers identify the content of the pictures.
        </p>
      </div>
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-6 h-6 fill-[hsl(260,70%,60%)] dark:fill-[hsl(260,37%,64%)]"
          >
            <path
              d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            />
          </svg>
          <div class="text-lg">Contrast</div>
        </div>
        <p>
          Important elements have high contrast, making it stand out from the
          background.
        </p>
      </div>
    </div>
  </section>
  <!-- Final Designe -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-8
    md:p-10 md:gap-12"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">Final Design</h2>
    <ImgContainer
      path="../src/assets/img/oasis-finalbk.webp"
      alt="Mockups of the final oasis website"
      classList=""
    />
    <a
      href="../src/assets/img/oasis-style-guide.webp"
      class="hover:-translate-y-1 hover:shadow-lg transition ease-in-out rounded-lg overflow-hidden"
    >
      <img
        src="../src/assets/img/oasis-style-guide.webp"
        alt="Oasis style guide"
        class="w-full max-w-[800px] self-center bg-background-600"
        loading="lazy"
      />
    </a>
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
      The Oasis project has been an extremely rewarding experience. I had the
      opportunity to learn the ropes of Adobe XD and apply the design process at
      the same time. I also got to delve into the realm of responsive web
      design, which is crucial in today's landscape.<br /><br />
      Overall, I could not implement all of the features I wanted to due to the lack
      of time. However, those ideas may be realized in future designs.<br /><br
      />
      Thank you for taking the time out of your day to check my case study on Oasis.
    </p>
    <div class="flex gap-6 flex-wrap text-zinc-100 w-full justify-center">
      <a
        href="https://xd.adobe.com/view/99a46e1a-a8af-487b-a735-d5923365ea9f-ccf7/?fullscreen"
        class="px-8 py-4 flex gap-3 justify-center items-center rounded-full bg-[hsl(273,46%,35%)] hover:bg-[hsl(273,35%,28%)] hover:shadow-lg transition ease-ios-smooth duration-500"
      >
        <img src="../src/assets/svg/xd.svg" alt="" class="h-7 w-7" />
        <div>Prototype</div>
      </a>
      <a
        class="px-8 py-4 flex gap-3 justify-center items-center rounded-full bg-[hsl(273,46%,35%)] hover:bg-[hsl(273,35%,28%)] hover:shadow-lg transition ease-ios-smooth duration-500"
        href="../src/assets/pdf/oasis-slide-deck.pdf"
      >
        <img src="../src/assets/svg/pdf.svg" alt="" class="h-7 w-7" />
        <div class="data-[type='circleblur']:hidden">Slide Deck</div>
      </a>
    </div>
  </section>
</div>
