<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">my-blog</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
          >Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
          >GitHub
        </a>
      </div>
      <!-- {{ fetchs() }} -->
      <p>AAAAA</p>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  async asyncData({ $axios, store }) {
    const BASE_URL = `${$axios.defaults.baseURL}?page=${store.state.currentPageNumber}&per_page=${store.state.pagePer}` // $axios.defaults.baseURLでnuxt.config.jsのaxios{}のbaseURLを参照
    try {
      const responce = await $axios.get(BASE_URL) // $getすると$axios.dataが入ってくる．getだと普通のaxiosのgetと同じ
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
      // console.log('AAAAA', this.$store.state.posts)
      return 'a'
    },
  },
}
</script>

<style>
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
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
