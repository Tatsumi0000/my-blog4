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
      {{ posts }}
      <p>AAAAA</p>
    </div>
  </div>
</template>

<script>
// import axios from '@nuxtjs/axios'

export default {
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
  // mounted() {
  //   console.log('mounted')
  //   axios
  //     .get('https://soleil-luminas.com/wp-json/wp/v2/posts')
  //     .then((responce) => console.log(`DEBUG: ${responce.data}`))
  //     .catch((error) => console.log(error))
  // },
  async asyncData({ $axios }) {
    return await $axios
      .$get('https://soleil-luminas.com/wp-json/wp/v2/posts')
      .then((result) => {
        console.log(result)
        return { posts: result.data }
      })
      .catch((err) => {
        console.log(err)
      })
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
