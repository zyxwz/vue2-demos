<template>
  <div class="item">
    <input type="text" maxlength="18" placeholder="请输入身份证" id="card">
    <label for="card">Card</label>
    <div class="focusLine"></div>
  </div>
</template>
<script>

</script>
<style lang="scss">
  .item{
    width: 500px;
    position: relative;
    display: flex;
    flex-flow: column-reverse;
    align-items: flex-start;
    margin: 100px auto;
    input{
      order: 10;
      outline: none;
      border: none;
      width: 100%;
      padding: 10px 0;
      font-size: 20px;
      border-bottom: 1px solid #d5d5d5;
      text-indent: 10px;
      &::placeholder {
        opacity: 0;
      }
    }
  }
  .item input, .item label{
    transition: all .3s;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
  .item label{
    order: 100;
    color: #3f4f5b;
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate(10px,40px) scale(1.3);
    transform: translate(10px,40px) scale(1.3);
  }
  input:focus + label {
    color: rgb(82,97,107);
    transform: translate(10px, 0) scale(.9);
  }
  input:focus ~ div {
    width: 100%;
  }
  input:not(:placeholder-shown) + label {
    color: rgb(82,97,107);
    transform: translate(10px, 0) scale(.9);
  }
  input:not(:placeholder-shown) ~ div {
    width: 100%;
  }
  .focusLine{
    width: 0;
    height: 2px;
    background: #2384ea;
    transition: width .5s;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
</style>
