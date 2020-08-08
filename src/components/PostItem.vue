<template>
  <div>{{ a }}</div>
</template>

<script>
export default {
  props: {
    posts: {
      type: String,
      required: false,
      default: 'A',
    },
  },
  data: () => ({
    a: 'a',
  }),
}
</script>
