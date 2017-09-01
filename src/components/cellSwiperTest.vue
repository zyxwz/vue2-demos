<template>
  <div class="list">
    <ul>
      <li v-for="n in 20"><a href="javascript:void(0)">侧滑显示删除按钮1<i>删除</i></a></li>
      <li><a href="javascript:void(0)">侧滑显示删除按钮2<i>删除</i></a></li>
      <li><a href="javascript:void(0)">侧滑显示删除按钮3<i>删除</i></a></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        
      }
    },
    mounted() {
      //侧滑显示删除按钮
      //预先把删除写在a标签后面，左滑的时候往右平移a标签让删除显示出来就好
      var expansion = null; //当前展开的a标签对象，默认没有展开
      var container = document.querySelectorAll('.list li a');
      for(var i = 0; i < container.length; i++){
        var x, y, X, Y, swipeX, swipeY;
        container[i].addEventListener('touchstart', function(event) {
          x = event.changedTouches[0].pageX; //手指当前左边的距离
          y = event.changedTouches[0].pageY;
          swipeX = true;
          swipeY = true ;
          if(expansion){   //判断是否展开，如果展开则收起
            expansion.className = ""; //收起已经展开的的a
          }
        });
        container[i].addEventListener('touchmove', function(event){
          X = event.changedTouches[0].pageX;
          Y = event.changedTouches[0].pageY;
          // 左右滑动
          if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0){
            // 阻止事件冒泡
            event.stopPropagation();
            if(X - x > 10){   //右滑
              event.preventDefault();
              this.className = "";    //右滑收起
            }
            if(x - X > 10){   //左滑
              event.preventDefault();
              this.className = "swipeleft";   //左滑展开
              expansion = this; //当前展开的对象
            }
            swipeY = false; //左右滑动的时候，禁止上下滑动
          }
          // 上下滑动
          if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
            swipeX = false; //上下滑动的时候，禁止左右滑动
          }
        });
      }
    }
  }
</script>

<style lang="css">
  *{margin:0;padding:0;}
  body{font-size:28px;}
  li{
    list-style:none;
  }
  i{font-style:normal;}
  a{
    color:#393939;
    text-decoration:none;
  }
  .list{
    overflow:hidden;
    margin-top:.2rem;
    padding-left:.3rem;
    border-top:1px solid #ddd;
  }
  .list li{
    overflow:hidden;
    width:120%;
    border-bottom:1px solid #ddd;
    height: 100px;
  }
  .list li a{
    font-size: 30px;
    display:block;
    line-height:100px;
    height: 100%;
    -webkit-transition:all 0.3s linear;
    transition:all 0.3s linear;
  }
  .list li i{
    float:right;
    width:15%;
    text-align:center;
    background:#E2421B;
    color:#fff;
  }
  .swipeleft{
    transform:translateX(-15%);
    -webkit-transform:translateX(-15%);
  }
</style>
