<template>
  <button
    class="rounded-full no-underline px-2 md:mx-1 mr-1 mb-1 text-sm py-0.5 bg-gray-400 text-center text-white"
    @click="emitTag"
  >
    {{ tag }}
  </button>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
    },
  },
  methods: {
    emitTag() {
      this.$emit('filter-tag', this.tag)
    },
  },
}
</script>
