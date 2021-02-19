<template>
  <div class="flex flex-col justify-center items-center bg-brand-background">
    <div class="flex flex-col items-center space-y-5 py-10 my-5 rounded-sm">
      <h2
        class="w-3/4 text-center font-brand text-brand-foreground lg:text-2xl text-xl"
      >
        But now in Christ Jesus you who once were far off have been brought near
        by the blood of Christ.
      </h2>
      <h3
        class="text-center text-brand-foreground font-brand lg:text-xl text-baseline"
      >
        - Ephesians 2:13
      </h3>
    </div>
    <div class="bg-white rounded-md w-4/5 p-5 mb-10">
      <div class="grid grid-flow-row"></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()

    return {
      posts,
    }
  },
}
</script>

<style></style>
