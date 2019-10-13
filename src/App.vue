<template>
  <div id="app">
    <NaviBar/>
    <Avatar/>
    <transition name="fade"><router-view/></transition>
  </div>
</template>

<script>
import NaviBar from './components/NaviBar'
import Avatar from './components/Avatar'
export default {
  name: 'App',
  components: {
    NaviBar,
    Avatar
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity 1s ease-in
}

.fade-leave-active {
  transition: opacity .1s ease-out
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

h1 {
  border-bottom: 3px solid blue;
  text-align: center;
  margin-bottom: 20px;
}

#app {
  background-color: #EEFFFF;
}
</style>