<script>
  import Button from '/src/lib/cta-btn.svelte';
  import ImgContainer from '/src/lib/images.svelte';
  let toggle;
</script>

<svelte:head>
  <title>Yopo Web Overhaul - Stefan Guan</title>
  <meta
    name="description"
    content="Yopo, a website overhaul design/development project"
  />
  <meta name="keywords" content="UX, Responsive Design, Web design" />
  <meta name="author" content="Stefan Guan" />
</svelte:head>

<div
  class="bg-background-300 dark:bg-background-900 max-w-[1280px] flex flex-col gap-6 text-zinc-800 dark:text-zinc-200 mx-auto md:pl-24"
>
  <!-- Hero -->
  <section
    class="relative flex flex-col justify-center items-center h-[65vh] mt-4 rounded-2xl bg-cover bg-center shadow-purple
    md:h-[50vh]"
    style="background-image: url('../src/assets/img/index/index-yopo.png')"
  >
    <img
      src="../src/assets/img/yopo/yopo-logo.webp"
      alt=""
      class="w-max h-24 z-40 md:self-start md:ml-6 shadow-xl"
    />

    <div class="absolute bottom-0 right-0 mb-6 mr-6 flex gap-4">
      <Button
        icon="../src/assets/svg/link-out.svg"
        text="Yopo Sweet Mandarin Website"
        theme="rgba(50,50,50,0.5)"
        type="circleblur"
        location="https://sweetmandarin.ca/"
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
          Yopo Sweet Mandarin is a restaurant serving up traditional Chinese
          food. They are located in the heart of Yaletown, Vancouver BC.
        </p>
        <div class="mb-2 text-lg">Goal</div>
        <p class="text-zinc-700 dark:text-zinc-300">
          To revamp Yopo Sweet Mandarin's online presence. Around this time,
          COVID-19 hit local businesses and restaurants especially hard. With
          many places limiting walk-in service, I noted that having a strong
          online presence is a key to success. The previous website had
          accessibility and usability challenges.
        </p>
      </div>

      <div
        class="flex flex-col justify-between gap-6 bg-background-100 dark:bg-background-600 rounded-lg p-4"
      >
        <div>
          <div class="font-medium text-lg">Role</div>
          <p class="text-zinc-700 dark:text-zinc-300">Web Designer/Developer</p>
        </div>
        <div>
          <div class="text-lg">Timeline</div>
          <div class="text-zinc-700 dark:text-zinc-300">
            Febrary 2022 - August 2022
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
              Developer
            </li>
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
              Stakeholder Management
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
      I kicked off the project by conducting user surveys. I got in contact with
      some of the patrons through the owners. Some of the inqueries included:
      frequency of visiting the website, intent, roadblocks, and more. The
      survey resulted in important challenges that the new design has to solve.
    </p>
    <!-- Insight container -->
    <div class="flex flex-wrap justify-center gap-6 w-full">
      <div
        class="flex flex-col gap-6 p-6 bg-background-100 dark:bg-background-600 rounded-md overflow-hidden md:w-[352px]"
      >
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
            class="w-6 h-6 fill-[hsl(349,70%,60%)] dark:fill-[hsl(349,46%,61%)]"
            ><path
              xmlns="http://www.w3.org/2000/svg"
              d="M162-249v-490q0-37.588 26.594-64.794Q215.188-831 253-831h548q20.2 0 33.1 13.963 12.9 13.963 12.9 32.616t-12.9 32.037Q821.2-739 801-739H253v490h138q25 0 42.5 17.225 17.5 17.226 17.5 41.834 0 25.024-17.5 42.483Q416-130 391-130H139q-27 0-45-17.559t-24-42.5q0-25.024 16.917-41.983Q103.833-249 130-249h32Zm384.706 119q-18.831 0-31.268-13.012Q503-156.025 503-178.53v-466.94q0-17.355 12.164-29.942Q527.329-688 546.571-688h290.048Q860-688 875.5-675.412 891-662.825 891-645.47v466.94q0 22.505-15.825 35.518Q859.351-130 837.193-130H546.706ZM572-249h251v-371H572v371Z"
            /></svg
          >
          <div class="text-lg">Responsiveness</div>
        </div>
        <p>
          The users browsed the website through their mobile phones. They found
          that the site was not mobile friendly. For example, they had to
          frequently zoom in and out.
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
            class="w-6 h-6 fill-[hsl(349,70%,60%)] dark:fill-[hsl(349,46%,61%)]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
            /></svg
          >
          <div class="text-lg">Menu</div>
        </div>
        <p>
          The users found it difficult to find dishes via categories. For
          instance, they had to manually scroll to find the main category of the
          dish.
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
            class="w-6 h-6 fill-[hsl(349,70%,60%)] dark:fill-[hsl(349,46%,61%)]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
            /></svg
          >
          <div class="text-lg">Online Ordering</div>
        </div>
        <p>
          When asked about the online ordering services, the patrons were not
          aware that they can order through the delivery partners.
        </p>
      </div>
    </div>
  </section>
  <!-- Concept -->
  <section
    class="h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col items-center gap-8
  md:p-10 md:gap-12"
  >
    <!-- Top bar -->
    <h2 class="text-2xl font-bold self-start md:self-center">Concept</h2>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      With the user challenges in mind, I then investigated restaurant website
      designs. For example, I looked at restaurants like Miku and Blue Water
      Cafe. I noticed some patterns:
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
            viewBox="0 0 448 512"
            class="w-6 h-6 fill-[hsl(36,70%,60%)] dark:fill-[hsl(36,46%,61%)]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            /></svg
          >
          <div class="text-lg">Prominent Call to Action</div>
        </div>
        <p>
          The websites all had large buttons flanking the hero section. They
          provide quick and easy access to the important pages (e.g., menu).
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
            class="w-6 h-6 fill-[hsl(36,70%,60%)] dark:fill-[hsl(36,46%,61%)]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z"
            /></svg
          >
          <div class="text-lg">Simple Menu Structure</div>
        </div>
        <p>
          The websites had the menu items organized neatly. The menu provided
          graphics to indicate different attributes (e.g., spicy, vegetarian).
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
            class="w-6 h-6 fill-[hsl(36,70%,60%)] dark:fill-[hsl(36,46%,61%)]"
            ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"
            /></svg
          >
          <div class="text-lg">Contact Info</div>
        </div>
        <p>
          The websites always made it easy to find contact information. Social
          media links and phone numbers were easy to find (e.g., in the footer,
          in a contact page).
        </p>
      </div>
    </div>
    <p class="text-zinc-700 dark:text-zinc-300 max-w-[800px]">
      Given the feedback from patrons and knowledge from other restaurants'
      sites, I drafted up a quick diagram for the sitemap. Which consequently
      helped me with the initial wireframes. As the mobile space grows, I
      decided to take a progressive enhancement approach. That is, designing for
      mobile users first, then scaling upwards for desktop.
    </p>
    <ImgContainer
      path="../src/assets/img/yopo/yopo-sitemap.webp"
      alt="Sitemap of the yopo website redesign"
      classList=""
    />
    <ImgContainer
      path="../src/assets/img/yopo/yopo-digital-wireframe-mobile.webp"
      alt="Mobile digital wireframe of the yopo redesign"
      classList=""
    />
    <ImgContainer
      path="../src/assets/img/yopo/yopo-digital-wireframe.webp"
      alt="Desktop digital wireframe of the yopo redesign"
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
      I gave the prototype to the owner and some of their patrons to test out
      the new design. They generally liked the visual refresh but found some
      minor issues. For example, the mobile navigation menu elements were placed
      too high and the map was too small on the desktop view. Provided with the
      feedback, I created mockups for both mobile and desktop.
    </p>
    <ImgContainer
      path="../src/assets/img/yopo/yopo-hifi-mobile.webp"
      alt="Mobile high-fidelity digital wireframe of the yopo redesign"
      classList=""
    /><ImgContainer
      path="../src/assets/img/yopo/yopo-hifi-desktop.webp"
      alt="Desktop high-fidelity digital wireframe of the yopo redesign"
      classList=""
    />
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
      I initally offered to overhaul the website as I noticed the user
      experience was sub-optimal. I leveraged my Google UX Design Course
      knowledge to conduct user research and see how I could improve the
      website. Through iterative design and data-driven decisions, I was able to
      develop and deploy a static website befitting of the restaurant.<br /><br
      />
      Thank you for taking the time out of your day to check my case study on Oasis.
    </p>
    <div class="flex gap-6 flex-wrap text-zinc-100 w-full justify-center">
      <a
        href="https://xd.adobe.com/view/99a46e1a-a8af-487b-a735-d5923365ea9f-ccf7/?fullscreen"
        class="px-8 py-4 flex gap-3 justify-center items-center rounded-full bg-[hsl(36,46%,35%)] hover:bg-[hsl(36,35%,28%)] hover:shadow-lg transition ease-ios-smooth duration-500"
        target="_blank"
      >
        <img src="../src/assets/svg/link-out.svg" alt="" class="h-5 w-5" />
        <div>Live Website</div>
      </a>
    </div>
  </section>
</div>
