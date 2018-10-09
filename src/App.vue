<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">Todo</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import '../node_modules/bootstrap/scss/bootstrap';

</style>
