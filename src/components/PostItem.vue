<template>
  <div>{{ a }}</div>
</template>

<script>
export default {
  props: {
    // 記事タイトル
    title: {
      type: String,
      default: 'title',
    },
    // サムネのURL
    thumbnailUrl: {
      type: String,
      default: 'thumbnail_url',
    },
    // 記事の作成日
    createdDate: {
      type: Date,
      default: '2000-01-01',
    },
    // 記事の本文
    posts: {
      type: String,
      default: 'A',
    },
  },
  data: () => ({
    a: 'a',
  }),
}
</script>
