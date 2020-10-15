<template>
  <div id="app">
    <b-overlay
      :show="$store.state.app.loading"
      rounded
      opacity="0.6"
      spinner-small
      spinner-variant="primary"
      class="d-inline-block"
    >
      <router-view />
    </b-overlay>
  </div>
</template>

<style lang="css">
body {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}
</style>
