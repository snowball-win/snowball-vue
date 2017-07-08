<template>
  <div id="app">

    <div class="nav-box">
      <ul class="nav">
        <li>
          <router-link :to="{path:'/home'}" event="mouseover">home</router-link>
        </li>
        <li>
          <router-link :to="{path:'/document'}" event="mouseover">doc</router-link>
        </li>
        <li>
          <router-link to="/about" event="mouseover">about</router-link>
        </li>
        <li>
          <router-link to="/user" event="mouseover">user</router-link>
        </li>
        <li>
          <router-link to="/mine" event="mouseover">main</router-link>
        </li>
      </ul>
    </div>

    <router-view name="slider"></router-view>

    <router-view class="center"></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
      return {
          index: '/home'
      }
  }
}
</script>

<style>

</style>
