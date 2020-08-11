<template>
  <div>
    <div
      class="container px-4 md:px-0 max-w-6xl mx-auto md:-mt-20 sm:-mt-10 -mt-24"
    >
      <div class="w-full p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">０</div>
      </div>
      <div class="flex content-center flex-wrap mx-auto">
        <div class="w-full md:w-1/3 p-2">
          <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
        </div>
        <div class="w-full md:w-1/3 p-2">
          <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
        </div>
        <div class="w-full md:w-1/3 p-2">
          <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
        </div>
        <div class="w-full md:w-1/3 p-2">
          <div class="text-gray-700 text-center bg-gray-400 p-2">4</div>
        </div>
      </div>
    </div>
  </div>
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
      type: String,
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
