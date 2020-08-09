export const state = () => ({
  posts: [], // 記事のリスト
  currentPageNumber: 1, // 現在のページ
  totalPagiNationItems: 1, // ページネーションの総数
  totalPostsItems: 1, // 記事の総数
  pagePer: 5, // 1ページあたりの記事
})

export const mutations = {
  // 現在のページの記事一覧のセッター
  setPosts(state, posts) {
    state.posts = posts
  },
  // 現在のページネーションのセッター
  setCurrentPageNumber(state, currentPageNumber) {
    state.currentPageNumber = currentPageNumber
  },
  // 総ページネーションのセッター
  setTotalPaginationItems(state, totalPaginationItems) {
    state.totalPaginationItems = totalPaginationItems
  },
  // 総記事数のセッター
  setTotalPostsItems(state, totalPostsItems) {
    state.totalPostsItems = totalPostsItems
  },
  // 1ページあたりに表示する記事数のセッター
  setPagePer(state, pagePer) {
    state.pagePer = pagePer
  },
}
