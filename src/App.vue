<template lang="jade">
  #app
    .navbar
      .navbar__logo
        a(v-link="{path: '/'}"): img(src='./assets/navbar__logo.png')
      .navbar__menu
        ul
          li: a(v-link="{ path: '/news'}") News
          li: a(v-link="{ path: '/events'}") Events
          li: a(v-link="{ path: '/videos'}") Videos
          li: a(v-link="{ path: '/contact'}") Blog
          li: a(v-link="{ path: '/about'}") About
    .content.container
      router-view
    .footer
</template>

<script>

</script>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
  padding-top: 100px;
  background-color: #f0f0f0;
}

.navbar {
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
}

.navbar__logo {
  display: inline;
  img {
    margin-top: 22px;
    margin-left: 100px;
    width: 150px;
  }
}

.navbar__menu {
  font-weight: bold;
  display: inline;
  right: 0;
  position: absolute;
  margin-top: 32px;
  margin-right: 150px;
  ul {
    display: inline;
    li {
      display: inline;
      margin: 15px;
    }
  }
}

</style>
