<template>
  <div class="app">
    <div class="tabBox">
      <router-link :to="{ name: 'Update', query: { planId: '123' }}"><img class="tab" src="../../images/miao1.jpg"></router-link>
      <router-link to="notice"><img class="tab" src="../../images/miao2.jpeg"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style lang="scss" scoped>
  .app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60pr;
    .tabBox{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height:100%;
      a{
        display: block;
        width: 200pr;
        height:200pr;
        .tab{
          width: 100%;
          height:100%;
        }
      }
    }
  }
</style>
