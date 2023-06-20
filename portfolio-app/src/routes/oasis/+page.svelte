<script>
  import Button from '/src/lib/cta-btn.svelte';
  import Modal from '/src/lib/modal.svelte';
  import ImgContainer from '/src/lib/images.svelte';
  let toggle;
</script>

<Modal bind:this={toggle} />

<div
  class="flex flex-col gap-6 text-zinc-800 dark:text-zinc-200 max-w-[1280px] m-auto mb-64"
>
  <!-- Hero -->
  <section
    class="relative flex flex-col justify-center items-center h-[65vh] mt-4 rounded-2xl bg-cover bg-center shadow-purple
    md:ml-24 md:h-[50vh]"
    style="background-image: url('../src/assets/img/index-oasis.png')"
  >
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2421.44 831.99"
      class="w-64 h-64 z-40 md:self-start md:ml-6 drop-shadow-xl"
    >
      <defs>
        <style>
          .cls-1 {
            fill: url(#linear-gradient-2);
          }

          .cls-2 {
            fill: #231f20;
            font-family: CircularStd-Bold, 'Circular Std';
            font-size: 644.29px;
            font-weight: 700;
            letter-spacing: -0.04em;
          }

          .cls-3 {
            clip-path: url(#clippath-4);
          }

          .cls-4 {
            clip-path: url(#clippath);
          }

          .cls-5 {
            fill: none;
          }

          .cls-6 {
            clip-path: url(#clippath-3);
          }

          .cls-7 {
            fill: url(#linear-gradient-3);
          }

          .cls-8 {
            fill: url(#linear-gradient);
          }
        </style>
        <clipPath id="clippath">
          <rect class="cls-5" y="0" width="831.98" height="831.99" />
        </clipPath>
        <clipPath id="clippath-3">
          <path
            class="cls-5"
            d="m412.96,649.33c-127.49-1.62-230.34-105.47-230.34-233.33s104.48-233.35,233.35-233.35,233.35,104.48,233.35,233.35-102.85,231.71-230.34,233.33c-.99.02-1.99.02-2.99.02s-2.02,0-3.03-.02M416,0C217.62,0,51.67,138.85,10.06,324.67c-6.58,29.39-10.06,59.95-10.06,91.32,0,229.75,186.25,416,416,416s415.99-186.25,415.99-416c0-31.37-3.47-61.93-10.06-91.32C780.31,138.85,614.37,0,416,0Z"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient"
          x1="110.07"
          y1="-83.87"
          x2="111.17"
          y2="-83.87"
          gradientTransform="translate(-48074.09 64896.35) rotate(-90) scale(581.75 -578.14)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#541bc7" />
          <stop offset=".31" stop-color="#ab00ff" />
          <stop offset="1" stop-color="#ab00ff" />
        </linearGradient>
        <clipPath id="clippath-4">
          <path
            class="cls-5"
            d="m415.98,0C217.61,0,51.66,138.85,10.04,324.67c.55,2.44,1.11,4.87,1.7,7.29,26.35,108.4,95.17,200.18,187.83,256.73.3.19.58.36.88.54,62.05,37.66,134.74,59.54,212.49,60.09-127.49-1.62-230.34-105.47-230.34-233.33s104.48-233.35,233.35-233.35,233.35,104.48,233.35,233.35-102.85,231.71-230.34,233.33c77.74-.54,150.41-22.41,212.46-60.04.32-.2.64-.4.96-.59,92.67-56.55,161.49-148.35,187.82-256.77.59-2.41,1.17-4.83,1.7-7.25C780.29,138.85,614.36,0,415.98,0Z"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-2"
          x1="112.78"
          y1="-84.1"
          x2="113.88"
          y2="-84.1"
          gradientTransform="translate(62532.45 -83536.45) rotate(90) scale(740.12 -738.59)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ab00ff" />
          <stop offset=".44" stop-color="#ab00ff" />
          <stop offset=".91" stop-color="#541bc7" />
          <stop offset="1" stop-color="#541bc7" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="1072.31"
          y1="360.81"
          x2="2421.44"
          y2="360.81"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#541bc7" />
          <stop offset=".82" stop-color="#ab00ff" />
        </linearGradient>
      </defs>
      <g class="cls-4">
        <g class="cls-6">
          <rect class="cls-8" x="0" y="0" width="831.98" height="831.99" />
        </g>
        <g class="cls-3">
          <rect class="cls-1" x="10.04" y="0" width="811.87" height="649.33" />
        </g>
      </g>
      <text />
      <g>
        <g>
          <path
            class="cls-7"
            d="m1404.76,434.58c0,97.29-71.52,168.16-166.23,168.16s-166.23-70.87-166.23-168.16,71.52-168.16,166.23-168.16,166.23,70.23,166.23,168.16Zm-85.69,0c0-59.92-38.66-90.2-80.54-90.2s-80.54,30.28-80.54,90.2,38.66,90.2,80.54,90.2,80.54-30.28,80.54-90.2Z"
          />
          <path
            class="cls-7"
            d="m1522.67,410.74l77.96-11.6c18.04-2.58,23.84-11.6,23.84-22.55,0-22.55-17.4-41.23-53.48-41.23s-57.99,23.84-60.56,51.54l-76.03-16.11c5.15-49.61,50.9-104.37,135.95-104.37,100.51,0,137.88,56.7,137.88,120.48v155.92c0,16.75,1.93,39.3,3.87,50.25h-78.6c-1.93-8.38-3.22-25.77-3.22-38.01-16.11,25.13-46.39,47.03-93.42,47.03-67.65,0-108.88-45.75-108.88-95.36,0-56.7,41.88-88.27,94.71-96Zm101.8,54.12v-14.17l-71.52,10.95c-21.91,3.22-39.3,15.46-39.3,39.95,0,18.68,13.53,36.72,41.23,36.72,36.08,0,69.58-17.4,69.58-73.45Z"
          />
          <path
            class="cls-7"
            d="m1815.81,488.7c1.93,25.13,20.62,48.32,57.99,48.32,28.35,0,41.88-14.82,41.88-31.57,0-14.17-9.67-25.77-34.15-30.93l-41.88-9.66c-61.21-13.53-88.91-50.25-88.91-94.71,0-56.7,50.25-103.73,118.55-103.73,90.2,0,120.48,57.34,124.35,91.49l-71.52,16.11c-2.58-18.68-16.11-42.52-52.19-42.52-22.55,0-40.59,13.53-40.59,31.57,0,15.46,11.6,25.13,28.99,28.35l45.1,9.66c62.5,12.89,94.07,50.9,94.07,97.29,0,51.54-39.95,104.37-123.06,104.37-95.36,0-128.21-61.85-132.08-97.93l73.45-16.11Z"
          />
          <path
            class="cls-7"
            d="m2083.84,118.88c29.64,0,52.83,23.84,52.83,53.48s-23.19,52.19-52.83,52.19-52.83-23.84-52.83-52.19,23.84-53.48,52.83-53.48Zm-42.52,474.2v-316.99h85.69v316.99h-85.69Z"
          />
          <path
            class="cls-7"
            d="m2239.75,488.7c1.93,25.13,20.62,48.32,57.99,48.32,28.35,0,41.88-14.82,41.88-31.57,0-14.17-9.66-25.77-34.15-30.93l-41.88-9.66c-61.21-13.53-88.91-50.25-88.91-94.71,0-56.7,50.25-103.73,118.55-103.73,90.2,0,120.48,57.34,124.35,91.49l-71.52,16.11c-2.58-18.68-16.11-42.52-52.19-42.52-22.55,0-40.59,13.53-40.59,31.57,0,15.46,11.6,25.13,28.99,28.35l45.1,9.66c62.5,12.89,94.07,50.9,94.07,97.29,0,51.54-39.95,104.37-123.06,104.37-95.35,0-128.21-61.85-132.08-97.93l73.45-16.11Z"
          />
        </g>
      </g>
    </svg>

    <div class="absolute bottom-0 right-0 mb-6 mr-6 flex gap-4">
      <Button
        icon="../src/assets/svg/xd.svg"
        text="Slide Deck"
        theme="rgba(50,50,50,0.5)"
        type="circleblur"
        location="https://xd.adobe.com/view/99a46e1a-a8af-487b-a735-d5923365ea9f-ccf7/?fullscreen"
      />
      <Button
        icon="../src/assets/svg/pdf.svg"
        text="Slide Deck"
        theme="rgba(50,50,50,0.5)"
        type="circleblur"
        location="../src/assets/pdf/oasis-slide-deck.pdf"
      />
    </div>
  </section>
  <!-- Summary -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-6
    md:p-10 md:ml-24"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center text">Summary</h2>
    <div
      class="grid gap-6 h-full w-full content-start grid-rows-auto md:grid-cols-2 md:grid-rows:2 md:content-stretch"
    >
      <div class="bg-background-100 dark:bg-background-600 rounded-lg p-4">
        <div class="mb-2 text-lg">Overview</div>
        <p class="text-zinc-700 dark:text-zinc-300 mb-4">
          Many online booking websites for vacation stays often features
          complicated interfaces. Consequently, users expressed that they feel
          stressed when trying to find the perfect stay. The objective of this
          website is to create a simple and powerful booking platform, focusing
          on ease-of-use.
        </p>
        <div class="mb-2 text-lg">Goal</div>
        <p class="text-zinc-700 dark:text-zinc-300">
          Identify pain points related to booking vacation stays. Design a
          responsive website that users will find stress-free to use, while
          solving major pain points.
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
            Febrary 2023 - March 2023
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
              Responsive Design
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
    md:p-10 md:ml-24 md:gap-12"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">Research</h2>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      The project began with a user interview aimed at finding any roadblocks
      users have with their online booking experiences. The interview involved
      users that previously used a booking service in the past (e.g., Expedia,
      AirBnb). I conslidated the findings into three different user pain points.
    </p>
    <!-- Insight container -->
    <div class="flex flex-wrap justify-center gap-6 w-full">
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            class="w-6 h-6 fill-[hsl(349,70%,60%)] dark:fill-[hsl(349,46%,61%)]"
          >
            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M190.4 74.1c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2l-128 384c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l128-384zm70.9-41.7c-17.4-2.9-33.9 8.9-36.8 26.3l-64 384c-2.9 17.4 8.9 33.9 26.3 36.8s33.9-8.9 36.8-26.3l64-384c2.9-17.4-8.9-33.9-26.3-36.8zM352 32c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32z"
            />
          </svg>
          <div class="text-lg">Clutter</div>
        </div>
        <p>
          The user interface of some sites often have a lot going on, making it
          difficult to grasp the important details.
        </p>
      </div>
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            class="w-6 h-6 fill-[hsl(349,70%,60%)] dark:fill-[hsl(349,46%,61%)]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z"
            /></svg
          >
          <div class="text-lg">Accessibility</div>
        </div>
        <p>
          The accessibility filters (e.g., no-stair entrances) are sometimes
          hidden away and only accessible after searching.
        </p>
      </div>
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
            class="w-6 h-6 fill-[hsl(349,70%,60%)] dark:fill-[hsl(349,46%,61%)]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
            /></svg
          >
          <div class="text-lg">Group Considerations</div>
        </div>
        <p>
          Users found it frustrating when they were booking a place with their
          co-workers/friends.
        </p>
      </div>
    </div>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      After gathering data and pain points from the user interview, I created
      two personas to help better empathize with the users.
    </p>
    <!-- Persona container -->
    <div
      class="grid gap-6 h-full w-full content-start grid-rows-auto md:grid-cols-2 md:grid-rows:2 md:content-stretch"
    >
      <div
        class="grid gap-4 grid-cols-2 grid-rows-2 bg-background-100 dark:bg-background-600 rounded-lg p-4"
      >
        <img
          src="../src/assets/avatars/david.webp"
          alt="avatar of Mark"
          class="rounded-md h-32 w-32 self-center"
        />
        <ul class="self-center">
          <li>Name: David</li>
          <li>Age: 35</li>
          <li>Role: Entrepreneur</li>
          <li>Location: Toronto</li>
        </ul>
        <p class="col-span-2 text-zinc-700 dark:text-zinc-300">
          David is an entrepreneur who frequently travels for work. They are
          irritated at how complex it is to figure out whether a location has
          accessibility considerations. Additionally, they are overwhelmed by
          how complicated it is to find a place to stay.
        </p>
      </div>
      <div
        class="grid gap-4 grid-cols-2 grid-rows-2 bg-background-100 dark:bg-background-600 rounded-lg p-4"
      >
        <img
          src="../src/assets/avatars/michelle.webp"
          alt="avatar of Sam"
          class="rounded-md h-32 w-32 self-center"
        />
        <ul class="self-center">
          <li>Name: Michelle</li>
          <li>Age: 24</li>
          <li>Role: Legal Assistant</li>
          <li>Location: Montreal</li>
        </ul>
        <p class="col-span-2 text-zinc-700 dark:text-zinc-300">
          Michelle is a full time legal assistant. They work long and tough
          hours and would love to efficiently book vacation trips. They find
          that booking trips with friends is often frustrating. They find that
          there is a lot of back-and-forth and wasted time trying to decide
          where to go.
        </p>
      </div>
    </div>
  </section>
  <!-- Starting the Design -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-8
  md:p-10 md:ml-24 md:gap-12"
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
      After creating the screens for the main user flow, I linked them up to
      create an interactive low fidelity prototype. The prototype enabled
      testing via usability studies.
    </p>
    <ImgContainer
      path="../src/assets/img/sv-lofi-proto.webp"
      alt="Low fidelity prototype of the app"
      classList=""
    />
  </section>
  <!-- User Testing -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-8
    md:p-10 md:ml-24 md:gap-12"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">User Testing</h2>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      After connecting the wireframes into a low-fidelity prototype, I set out
      to test it with a usability study. The parameters of the study include:
      (1) An unmoderated usability study, (2) remote study in Canada, (3) six
      particiapnts, and (4) a duration of 40 minutes. The data from the
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
            height="1em"
            viewBox="0 0 512 512"
            class="w-6 h-6 fill-[#308266] dark:fill-[#90c7b4]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z"
            /></svg
          >
          <div class="text-lg">Confusing Tracker</div>
        </div>
        <p>
          Users found the progress tracker during voter registration confusing.
          They also found the accessibility button a bit confusing as it is
          similar to the progress tracker.
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
            class="w-6 h-6 fill-[#308266] dark:fill-[#90c7b4]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
            /></svg
          >
          <div class="text-lg">Support</div>
        </div>
        <p>
          The users wanted a way to contact support during registration in case
          they have questions or concerns.
        </p>
      </div>
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
            class="w-6 h-6 fill-[#308266] dark:fill-[#90c7b4]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"
            /></svg
          >
          <div class="text-lg">Election Candidates</div>
        </div>
        <p>
          Users needed a way to quickly research about candidates that are
          participating in a specific election to better inform their decisions.
        </p>
      </div>
    </div>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      Thus, with consideration of the insights, I implemented the changes into
      the mockups of the design. In addition, I utilized iconography,
      typography, and colour to make it a more polished iteration.
    </p>
    <ImgContainer
      path="../src/assets/img/sv-before-after.webp"
      alt="A comparison between the digital wireframe and the mockup of the first registration screen"
      classList=""
    />
    <ImgContainer
      path="../src/assets/img/sv-mockups.webp"
      alt="Mockups of the different screens (home, confirmation, appointment, settings, and electoral participant)"
      classList=""
    />
  </section>
  <!-- Hifi Prototype -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-8
    md:p-10 md:ml-24 md:gap-12"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">
      High-Fidelity Prototype
    </h2>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      After creating each screen of the mockups, I created a high-fidelity
      prototype. This iteration contains a similar user flow when compared to
      the low-fidelity prototype. However, this prototype features changes that
      were prompted by the usability study.
    </p>
    <ImgContainer
      path="../src/assets/img/sv-hifi-proto.webp"
      alt="High-fidelity prototype of the swiftvote app"
      classList=""
    />
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      While creating the high-fidelity prototypes, I ensured that I designed
      with accessibility in mind. For instance, some of the accessibility
      considerations include,
    </p>
    <!-- Accessibility container -->
    <div class="flex flex-wrap justify-center gap-6 w-full">
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            class="w-6 h-6 fill-[#308266] dark:fill-[#90c7b4]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"
            /></svg
          >
          <div class="text-lg">Hierarchy</div>
        </div>
        <p>
          Clear and consistent use of font sizes for different elements (e.g.,
          heading, paragraphs) inform the visual hierarchy of each screen.
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
            class="w-6 h-6 fill-[#308266] dark:fill-[#90c7b4]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            /></svg
          >
          <div class="text-lg">Contrast</div>
        </div>
        <p>
          Important elements have high contrast, making it stand out from the
          background (e.g., buttons, toggles).
        </p>
      </div>
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            class="w-6 h-6 fill-[#308266] dark:fill-[#90c7b4]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            /></svg
          >
          <div class="text-lg">Simple Navigation</div>
        </div>
        <p>
          The app features a navigation bar that enables users to quickly jump
          between the most important screens. It is both familiar and
          easy-to-use.
        </p>
      </div>
    </div>
  </section>
  <!-- Responsive Design -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-8
    md:p-10 md:ml-24 md:gap-12"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">
      Responsive Design
    </h2>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      After designing the app, I began working on the complementary responsive
      website. The website enables users who use do not want to download an app
      or use a larger device to access the service. I first created a sitemap to
      visualize the organization of the pages to maintain consistency through
      the experiences.
    </p>
    <ImgContainer
      path="../src/assets/img/sv-sitemap.webp"
      alt="Sitemap of the swiftvote website experience"
      classList=""
    />
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      With the sitemap in mind, I designed variations of the website for mobile,
      tablet, and desktop screen sizes. I kept the same design language
      throughout the experiences to ensure consistency. Furthermore, as various
      screen sizes can fit fewer or more elements, I took advantage of the
      avaliable space. For instance, the desktop website has a persistent side
      bar that shows relevant information depending on the screen.
    </p>
    <ImgContainer
      path="../src/assets/img/sv-responsive-designs.webp"
      alt="Mockups of the home screen on different formats (Left = mobile, center = tablet, right = desktop)"
      classList=""
    />
  </section>
  <!-- Concluding Thoughts -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-8
    md:p-10 md:ml-24 md:gap-12"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">
      Concluding Thoughts
    </h2>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      The SwiftVote project has been an invaluable learning experience. It is a
      case study focused on designing for the greater good. In this case, I
      tackled the problem of non-voters. I conducted research into why some
      individuals decide not to vote. For instance, some stated difficulty when
      scheduling for an election. Thus, I designed a method to check how many
      people sign up for any given voting session. Through user-centred design,
      I was able to solve problems that would otherwise prevent people from
      voting.<br /><br />
      Furthermore, this project served as a great opportunity regarding designing
      for different mediums. I had to consider how a user would use the service on
      various platforms and how to best utilize the space each device affords. I
      believe that by going through the design process, I created a cohesive experience
      that emphasizes consistency.<br /><br />
      Given more time, I could further optimize the space utilization for the differing
      screen sizes.<br /><br />
      Thank you for taking the time out of your day to check my case study on SwiftVote.
    </p>
    <div class="flex gap-6 flex-wrap text-zinc-100 w-full justify-center">
      <button
        class="px-8 py-4 flex gap-3 justify-center items-center rounded-full hover:bg-[rgba(90,90,90,0.5)] bg-[#308264] hover:bg-[#2f614f]"
        on:click={toggle.toggleModal()}
      >
        <img src="../src/assets/svg/figma.svg" alt="" class="h-7 w-7" />
        <div>Prototypes</div>
      </button>
      <a
        class="px-8 py-4 flex gap-3 justify-center items-center rounded-full bg-[#308264] hover:bg-[#2f614f]"
        href="../src/assets/pdf/swiftvote-slide-deck.pdf"
      >
        <img src="../src/assets/svg/pdf.svg" alt="" class="h-7 w-7" />
        <div class="data-[type='circleblur']:hidden">Slide Deck</div>
      </a>
    </div>
  </section>
</div>
