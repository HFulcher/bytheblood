<template>
  <div class="flex flex-col flex-grow px-14 lg:items-center bg-white">
    <div class="body flex flex-col py-10 lg:w-1/2">
      <h1 class="text-3xl font-brand py-5 font-bold">{{ post.title }}</h1>
      <div class="flex md:flex-row flex-col md:justify-between">
        <h2 class="text-sm font-body pt-0 pb-2 text-brand-accent2">
          {{ post.author || 'Huw Fulcher' }}
        </h2>
        <h2 class="text-sm font-body pt-0 pb-4 text-brand-accent2">
          {{ formatDate(post.date) }}
        </h2>
      </div>
      <div
        class="self-center w-full border-b border-opacity-50 border-brand-foreground"
      />
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('blog', params.slug).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
.body > .nuxt-content-container > .nuxt-content > h2 {
  @apply text-2xl font-brand py-5;
}

.body > .nuxt-content-container > .nuxt-content > h3 {
  @apply text-xl font-brand py-2;
}

.body > .nuxt-content-container > .nuxt-content > h4 {
  @apply text-lg font-brand py-2;
}

.body > .nuxt-content-container > .nuxt-content > p {
  @apply text-base font-body pb-10;
}

.body > .nuxt-content-container > .nuxt-content > a {
  @apply text-base font-body text-brand-accent1 underline;
}

.body > .nuxt-content-container > .nuxt-content > blockquote > p {
  @apply text-base font-brand italic text-center self-center text-brand-accent2 pb-10;
}

.body > .nuxt-content-container > .nuxt-content > ul {
  @apply list-disc;
}

.body > .nuxt-content-container > .nuxt-content > ol {
  @apply list-decimal;
}
</style>
