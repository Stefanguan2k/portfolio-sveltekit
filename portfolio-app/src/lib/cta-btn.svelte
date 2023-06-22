<script>
  export let icon, text, theme, location, type;
</script>

<a class="px-8 py-4 flex gap-3 justify-center items-center rounded-full bg-[{theme}] data-[type='circleblur']:p-3 data-[type='circleblur']:backdrop-blur-md hover:bg-[rgba(90,90,90,0.5)] hover:shadow-lg transition ease-ios-smooth duration-500" data-type={type} href={location} target="_blank">
  <img src={icon} alt="" class="h-6 w-6" />
  <div class="data-[type='circleblur']:hidden" data-type={type}>{text}</div>
</a>
