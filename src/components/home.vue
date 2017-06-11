<template>
  <div class="app">
    <div class="tabBox">
      <router-link :to="{ name: 'Update', query: { planId: '123' }}"><img class="tab" src="../../images/miao1.jpg"></router-link>
      <router-link to="notice"><img class="tab" src="../../images/miao2.jpeg"></router-link>
      <button @click='a'>点击1（只是一个文字弹出）</button>
      <button @click='b'>点击2（有位置的设定和时间设定）</button>
    </div>
  </div>
</template>

<script>
  import Toast from '../js/toast';
  export default {
    name: 'home',
    methods : {
      a () {
        Toast('只是一个文字弹出')
      },
      b() {
        Toast({
          message : "有位置的设定和时间设定",
          position: 'top',
          duration : 700
        })
      }
    }
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
