<template>
  <div class="box">
    <h2>纯CSS实现波浪效果</h2>
  </div>
</template>
<style lang="scss" scoped>
  .box {
    position: relative;
    align-items: center;
    width: 80vw;
    height: 50vh;
    margin: 0 auto;
    background-color: rgb(118, 218, 255)!important;
    overflow: hidden;
    border: 1PX solid #00c0ff;
    &:before, &:after {
      content: "";
      position: absolute;
      left: 50%;
      min-width: 300vw;
      min-height: 300vw;
      background-color: #fff;
      animation-name: rotate;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    &:before {
      bottom: 13vh;
      border-radius: 44%;
      animation-duration: 10s;
    }

    &:after {
      bottom: 12vh;
      opacity: .5;
      border-radius: 40%;
      animation-duration: 8s;
    }
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, 0) rotateZ(0deg);
    }
    50% {
      transform: translate(-50%, -2%) rotateZ(180deg);
    }
    100% {
      transform: translate(-50%, 0%) rotateZ(360deg);
    }
  }

  h2 {
    position: relative;
    color: #333;
    z-index: 10;
    text-align: center;
    height: 100vh;
    font-size: 8vw;
    line-height: 50vh;
    text-shadow: 3px 3px 2px #999;
  }

</style>
