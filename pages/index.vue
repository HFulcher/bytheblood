<template>
  <div class="flex flex-col flex-grow items-center bg-white">
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
    <div
      class="self-center w-3/5 border-b border-opacity-50 border-brand-foreground"
    />
    <div
      class="w-10/12 grid grid-flow-row py-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-10 items-center justify-center"
      v-if="posts.length > 0"
    >
      <NuxtLink
        class="relative h-64 w-full flex flex-col justify-end p-3 text-left bg-cover bg-center bg-brand-foreground text-white rounded-md shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl"
        :style="{ backgroundImage: 'url(' + checkImage(post.image) + ')' }"
        v-for="post of posts"
        :key="post.date"
        :to="post.slug"
      >
        <div
          class="absolute top-0 mt-44 rounded-md right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"
        />
        <div class="flex flex-col space-y-2 z-10">
          <h3 class="text-2xl font-brand leading-tight font-medium">
            {{ post.title }}
          </h3>
          <div class="flex flex-row font-body justify-between">
            <h4 class="text-base">
              {{ formatDate(post.date) }}
            </h4>
            <h4 class="text-base">
              {{ post.author || 'Huw Fulcher' }}
            </h4>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div
      class="font-brand md:text-2xl w-10/12 text-center text-xl pt-10"
      v-else
    >
      There's nothing here yet, but there will be soon!
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
    const posts = await $content('blog').sortBy('date', 'desc').fetch()

    return {
      posts,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    checkImage(image) {
      let image_url
      if (image == null) {
        image_url =
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      } else {
        image_url =
          'https://res.cloudinary.com/huwfulcher/image/upload/v1613862765/ByTheBlood/w_600,h_600,q_auto/' +
          image
      }

      return image_url
    },
  },
}
</script>

<style></style>
