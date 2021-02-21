<template>
  <div class="flex flex-col bg-brand-background">
    <div
      class="flex flex-row justify-between items-center bg-brand-background lg:px-32 md:px-10 px-5 py-5"
    >
      <NuxtLink to="/">
        <img
          class="w-44 md:w-64 lg:w-80"
          :src="require('~/assets/site-logo.png')"
        />
      </NuxtLink>
      <NuxtLink
        class="font-brand text-sm md:text-lg lg:text-xl text-brand-foreground transition duration-300 ease-in-out hover:text-black"
        to="/about"
      >
        About
      </NuxtLink>
    </div>
    <!-- <div
      class="self-center w-3/5 border-b border-opacity-50 border-brand-foreground"
    /> -->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      routes: [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ],
      isOpen: false,
    }
  },
  methods: {
    handleClick: function () {
      this.isOpen = !this.isOpen
    },
    closeBar: function () {
      this.isOpen = false
    },
  },
}
</script>
