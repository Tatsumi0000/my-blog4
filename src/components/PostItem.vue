<template>
  <div>
    <div
      class="container px-4 md:px-0 max-w-6xl mx-auto md:-mt-20 sm:-mt-10 -mt-24"
    >
      <div class="w-full p-2 mx-auto">
        <div class="flex content-center mx-auto shadow-lg rounded-l">
          <div class="w-full md:w-2/3">
            <img :src="posts[0].thumbnailUrl" alt="" class="rounded-l" />
          </div>
          <div class="w-1/3 flex flex-col flex-grow">
            <div class="flex-1 bg-white rounded-tr">
              <p class="text-gray-600 font-bold p-6">
                {{ posts[0].title }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex content-center flex-wrap mx-auto">
        <div
          v-for="post in posts.slice(1)"
          :key="post.title"
          class="w-full md:w-1/3 p-2"
        >
          <div class="text-gray-700 text-center bg-gray-400 p-2">
            {{ post.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
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
    content: {
      type: String,
      default: 'A',
    },
  },
  data: () => ({
    a: 'a',
  }),
  created: () => {
    // console.log('LLLLLLLLL')
  },
}
</script>
