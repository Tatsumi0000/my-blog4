<template>
  <div>
    <div>
      <div class="background-cover w-full m-0 p-0 bg-cover bg-bottom">
        <div class="max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
          <p class="title text-white font-extrabold text-3xl md:text-5xl">
            私的歌詞倉庫
          </p>
          <p class="title text-xl md:text-2xl text-gray-500">
            プログラミングや日常の出来事について記すブログです
          </p>
        </div>
      </div>
    </div>
    <!-- <TopPostItem /> -->
    <PostItem />
  </div>
</template>

<script>
export default {
  components: {
    // TopPostItem: () => import('~/components/TopPostItem.vue'),
    PostItem: () => import('~/components/PostItem.vue'),
  },
  async asyncData({ $axios, store }) {
    const REQUEST_URL = `${$axios.defaults.baseURL}?page=${store.state.currentPageNumber}&per_page=${store.state.pagePer}` // $axios.defaults.baseURLでnuxt.config.jsのaxios{}のbaseURLを参照
    try {
      const responce = await $axios.get(REQUEST_URL) // $getすると$axios.dataが入ってくる．getだと普通のaxiosのgetと同じ
      store.commit('setTotalPostsItems', responce.headers['x-wp-total']) // 総記事数をStoreにセット
      store.commit(
        'setTotalPaginationItems',
        responce.headers['x-wp-totalpages']
      ) // 総ページネーション数をStoreにセット
      store.commit('setPosts', responce.data) // 記事のデータをセット
      return { posts: responce.data }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    fetchs: () => {
      return 'a'
    },
  },
}
</script>

<style scoped>
.background-cover {
  background-image: url('~@/assets/images/cover02.jpg');
  height: 60vh;
  max-height: 460px;
}
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro',
    游ゴシック体, 'Yu Gothic', YuGothic, メイリオ, Meiryo, sans-serif;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
