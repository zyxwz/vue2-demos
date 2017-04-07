<template>
  <div>
    <count-down :start='start' @countDown ='start=false' @click.native='sendCode'></count-down>
  </div>
</template>
<script>
  import countDown from './countDown.vue';
  export default {
    components: {
      countDown
    },
    data () {
      return {
        start : false,
        isClick:false
      }
    },
    methods : {
      sendCode (value) {
        if(!isClick){
          this.isClick = true;
          console.log("sendCode");
          //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
          this.start = true;
        }else{
           this.isClick = false;
        }
      }
    }
  }
</script>
