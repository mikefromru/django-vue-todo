<template>
  <div id="app">
    <!--<img src="/static/lego.jpg">-->
        <!--<router-link :to="{name: 'home'}">Home</router-link>-->
        <!--<router-link :to="{name: 'login'}">Login</router-link>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
body {
    /* background: #293134 ;
    color: #6BA15B; */
}
</style>
