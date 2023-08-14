<script>
  import Button from '/src/lib/cta-btn.svelte';
  import ImgContainer from '/src/lib/images.svelte';
  let toggle;
</script>

<svelte:head>
  <title>Oasis Case Study - Stefan Guan</title>
  <meta name="description" content="Oasis, a Google UX Design case study" />
  <meta name="keywords" content="UX, Responsive Design, Case Study" />
  <meta name="author" content="Stefan Guan" />
</svelte:head>

<div
  class="bg-background-300 dark:bg-background-900 max-w-[1280px] flex flex-col gap-6 text-zinc-800 dark:text-zinc-200 mx-auto md:pl-24"
>
  <!-- Hero -->
  <section
    class="relative flex flex-col justify-center items-center h-[65vh] mt-4 rounded-2xl bg-cover bg-center shadow-purple
    md:h-[50vh]"
    style="background-image: url('/assets/img/index/index-oasis.png')"
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
        icon="/assets/svg/xd.svg"
        text="Adobe XD Prototype"
        theme="rgba(50,50,50,0.5)"
        type="circleblur"
        location="https://xd.adobe.com/view/99a46e1a-a8af-487b-a735-d5923365ea9f-ccf7/?fullscreen"
      />
      <Button
        icon="/assets/svg/pdf.svg"
        text="Slide Deck"
        theme="rgba(50,50,50,0.5)"
        type="circleblur"
        location="/assets/pdf/oasis-slide-deck.pdf"
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
    md:p-10 md:gap-12"
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
          src="/assets/avatars/david.webp"
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
          src="/assets/avatars/michelle.webp"
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
      path="/assets/img/oasis/oasis-sitemap.webp"
      alt="Sitemap of the Oasis website"
      classList=""
    />
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      With the basic skeleton of the website completed, the next step was to
      create paper wireframes. This allowed quickly iterate through ideas for
      how the would look.
    </p>
    <ImgContainer
      path="/assets/img/oasis/oasis-paper-wireframe.webp"
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
      path="/assets/img/oasis/oasis-digital-wireframe.webp"
      alt="Digital wireframe of the oasis website"
      classList=""
    />
    <ImgContainer
      path="/assets/img/oasis/oasis-digital-wireframe-mobile.webp"
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
      path="/assets/img/oasis/oasis-before-and-after.webp"
      alt="A comparison between the digital wireframe and the mockup of the home and booking screens"
      classList=""
    />
    <ImgContainer
      path="/assets/img/oasis/oasis-mockups.png"
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
      path="/assets/img/oasis/oasis-finalbk.webp"
      alt="Mockups of the final oasis website"
      classList=""
    />
    <a
      href="/assets/img/oasis/oasis-style-guide.webp"
      class="hover:-translate-y-1 hover:shadow-lg transition ease-in-out rounded-lg overflow-hidden"
    >
      <img
        src="/assets/img/oasis/oasis-style-guide.webp"
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
        target="_blank"
      >
        <img src="/assets/svg/xd.svg" alt="" class="h-7 w-7" />
        <div>Prototype</div>
      </a>
      <a
        class="px-8 py-4 flex gap-3 justify-center items-center rounded-full bg-[hsl(273,46%,35%)] hover:bg-[hsl(273,35%,28%)] hover:shadow-lg transition ease-ios-smooth duration-500"
        href="/assets/pdf/oasis-slide-deck.pdf"
        target="_blank"
      >
        <img src="/assets/svg/pdf.svg" alt="" class="h-7 w-7" />
        <div class="data-[type='circleblur']:hidden">Slide Deck</div>
      </a>
    </div>
  </section>
</div>
