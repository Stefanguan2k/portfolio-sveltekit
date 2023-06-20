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
    class="relative flex flex-col justify-center items-center h-[65vh] mt-4 rounded-2xl bg-cover bg-center shadow-green
    md:ml-24 md:h-[50vh]"
    style="background-image: url('../src/assets/img/swiftvote-hd.png')"
  >
    <img
      src={'../src/assets/svg/swiftvote-logo.svg'}
      alt="Swiftvote logo"
      class="w-64 h-64 z-40 md:self-start md:ml-6"
    />
    <div class="absolute bottom-0 right-0 mb-6 mr-6 flex gap-4">
      <button
        class="rounded-full p-3 bg-[rgba(50,50,50,0.5)] hover:bg-[rgba(90,90,90,0.5)]"
        on:click={toggle.toggleModal()}
      >
        <img src="../src/assets/svg/figma.svg" alt="" class="h-7 w-7" />
      </button>
      <Button
        icon="../src/assets/svg/pdf.svg"
        text="Slide Deck"
        theme="rgba(50,50,50,0.5)"
        type="circleblur"
        location="../src/assets/pdf/swiftvote-slide-deck.pdf"
      />
    </div>
  </section>
  <!-- Summary -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-6
    md:p-10 md:ml-24"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">Summary</h2>
    <div
      class="grid gap-6 h-full w-full content-start grid-rows-auto md:grid-cols-2 md:grid-rows:2 md:content-stretch"
    >
      <div class="bg-background-100 dark:bg-background-600 rounded-lg p-4">
        <div class="mb-2 font-medium">Overview</div>
        <p class="text-zinc-700 dark:text-zinc-300 mb-4">
          Users find that registering to vote is not always simple. SwiftVote is
          a service that empowers individuals to register to vote. The service
          aims to offer features that make it easy for users to register and
          stay on top of their registration.
        </p>
        <div class="font-medium">Goal</div>
        <p class="text-zinc-700 dark:text-zinc-300">
          Identify pain points with the voting registration process. Design an
          app and responsive website to alleviate the problems.
        </p>
      </div>

      <div
        class="flex flex-col justify-between gap-6 bg-background-100 dark:bg-background-600 rounded-lg p-4"
      >
        <div>
          <div class="font-medium">Role</div>
          <p class="text-zinc-700 dark:text-zinc-300">UX Designer</p>
        </div>
        <div>
          <div>Timeline</div>
          <div class="text-zinc-700 dark:text-zinc-300">
            March 2023 - April 2023
          </div>
        </div>
        <div>
          <div class="font-medium mb-2">Responsibilities</div>
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
      The project began with a user interview aimed at determining the
      roadblocks to voting registration. The participants raised issues such as,
      <span class="bg-green-200 dark:bg-green-900">difficulty scheduling</span>
      and
      <span class="bg-green-200 dark:bg-green-900"
        >lack of electoral knowledge</span
      >. During the interview, some users revealed that the registration process
      is complex. To better empathize with users during the design process, I
      created two personas that encapsulate user frustrations.
    </p>
    <!-- Persona container -->
    <div
      class="grid gap-6 h-full w-full content-start grid-rows-auto md:grid-cols-2 md:grid-rows:2 md:content-stretch"
    >
      <div
        class="grid gap-4 grid-cols-2 grid-rows-2 bg-background-100 dark:bg-background-600 rounded-lg p-4"
      >
        <img
          src="../src/assets/avatars/mark.webp"
          alt="avatar of Mark"
          class="rounded-md h-32 w-32 self-center"
        />
        <ul class="self-center">
          <li>Name: Mark</li>
          <li>Age: 42</li>
          <li>Role: Accountant</li>
          <li>Location: Calgary</li>
        </ul>
        <p class="col-span-2 text-zinc-700 dark:text-zinc-300">
          Mark is a father to two children. He is extremely busy, if not with
          work than with his children. In the last few years, Mark skipped
          voting for the election due to scheduling conflicts. Furthermore, he
          is afraid of wait times.
        </p>
      </div>
      <div
        class="grid gap-4 grid-cols-2 grid-rows-2 bg-background-100 dark:bg-background-600 rounded-lg p-4"
      >
        <img
          src="../src/assets/avatars/sam.webp"
          alt="avatar of Sam"
          class="rounded-md h-32 w-32 self-center"
        />
        <ul class="self-center">
          <li>Name: Sam</li>
          <li>Age: 20</li>
          <li>Role: Student</li>
          <li>Location: Edmonton</li>
        </ul>
        <p class="col-span-2 text-zinc-700 dark:text-zinc-300">
          Sam is a very punctual student, taking time to plan everything. As a
          student, Sam spends a lot of her time studying and is not up to date
          with upcoming elections nor the candidates.
        </p>
      </div>
    </div>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      Afterwards, I started to brainstorm ideas to solve user problems. I began
      with the Crazy-8's exercise, dividing up a page into eighths. Within each
      section, I sketched potential ways of alleviating pain points. I focused
      on areas such as reminders/notifications, accessibility, and electoral
      information.
    </p>
    <ImgContainer
      path="../src/assets/img/sv-crazy-eights.webp"
      alt="Crazy eight sketches of solutions to user pain points"
      classList="dark:brightness-[0.8]"
    />
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
      After the ideation pase and sketching of paper wireframes, I created
      digital wireframes. These wireframes serve the purpose of resolving issues
      that users had with other implementations.
    </p>

    <a
      href="../src/assets/img/sv-digital-wireframe.webp"
      class="hover:-translate-y-1 hover:shadow-lg transition ease-in-out rounded-lg overflow-hidden"
    >
      <img
        src="../src/assets/img/sv-digital-wireframe.webp"
        alt="A digital wireframe for the swiftvote app"
        class="w-full max-w-[800px] self-center bg-background-600"
      />
    </a>
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
      <a class="px-8 py-4 flex gap-3 justify-center items-center rounded-full bg-[#308264] hover:bg-[#2f614f]" href='../src/assets/pdf/swiftvote-slide-deck.pdf'>
        <img src='../src/assets/svg/pdf.svg' alt="" class="h-7 w-7" />
        <div class="data-[type='circleblur']:hidden">Slide Deck</div>
      </a>

    </div>
  </section>
</div>
