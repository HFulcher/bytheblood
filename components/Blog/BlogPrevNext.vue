<template>
  <div class="pt-7 flex flex-row justify-between">
    <div v-if="prev" class="flex flex-col justify-start md:flex-row w-1/3">
      <p class="pr-1">Previous:</p>
      <NuxtLink
        class="text-blue-500 underline"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      >
        {{ prev.title }}
      </NuxtLink>
    </div>

    <div v-else>&nbsp;</div>

    <div v-if="next" class="w-1/3 flex flex-col justify-end md:flex-row">
      <p class="pr-1">Next:</p>
      <NuxtLink
        class="text-blue-500 underline"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      >
        {{ next.title }}
      </NuxtLink>
    </div>

    <div v-else>&nbsp;</div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
