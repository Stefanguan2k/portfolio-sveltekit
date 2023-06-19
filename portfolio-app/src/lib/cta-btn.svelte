<script>
  export let icon, text, theme, location, type;
</script>

<a class="px-8 py-4 flex gap-3 justify-center items-center rounded-full data-[type='circleblur']:p-3 data-[type='circleblur']:backdrop-blur-md bg-[{theme}] hover:bg-[rgba(90,90,90,0.5)]" data-type={type} href={location}>
  <img src={icon} alt="" class="h-7 w-7" />
  <div class="data-[type='circleblur']:hidden" data-type={type}>{text}</div>
</a>
