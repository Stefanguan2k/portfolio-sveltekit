<script>
    let buttonProps = {
        class:[$$restProps.class]
    }
</script>

<button class="flex space-between py-2 px-6 bg-main-100 rounded-3xl gap-2 hover:bg-main-100/70 h-5" {...buttonProps}>
    <slot />
</button>