<template>
  <div class="updateBox">
    <div class="gx">产品功能发布</div>
    <router-link :to="{name: 'updateModal', params: { modal1bool: true }}"><Button type="primary" class="addUser" >添加</Button></router-link>
    <Table border :columns="columns1" :data="data1"></Table>

    <router-view></router-view>
  </div>
</template>
<script>
  //import Table1 from 'iview/src/components/Table';
  import request from 'superagent';
  export default {
    data () {
      return {
        modal1: false,
        columns1: [
          {
            title: '功能名称',
            key: 'feature'
          },
          {
            title: '负责人',
            key: 'charger'

          },
          {
            title: '提示时间',
            key: 'duration'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render (row, column, index) {
              return `<i-button type="error" size="small" class="deleteBtn" @click="remove(${index})">删除</i-button>`;
            }
          }
        ],
        data1: []
      }
    },
    mounted(){
      request
        .post('/updater/updateList')
        .timeout({
          response: 5000,  // Wait 5 seconds for the server to start sending,
          deadline: 60000, // but allow 1 minute for the file to finish loading.
        })
        .end((err,res)=>{
          if(err) {
            this.$Notice.error({
              title: '更新列表失败',
              desc: err
            });
          }else{
            this.$Notice.success({
              title: '更新列表刷新成功'
            });
            console.log(res);
            this.data1 = JSON.parse(res.text).data;
          }
        })
    },
    methods:{
      remove(index){
        let curBtn = document.querySelectorAll('.deleteBtn')[index];
        if(curBtn.style.backgroundColor != 'gray'){
          curBtn.style.backgroundColor = 'gray';
          curBtn.style.border = '1px solid gray';
          request
            .get('/updater/remove')
            .timeout({
              response: 5000,  // Wait 5 seconds for the server to start sending,
              deadline: 60000, // but allow 1 minute for the file to finish loading.
            })
            .end((err,res)=>{
              if(err){
                curBtn.style.backgroundColor = '#f30';
                curBtn.style.border = '1px solid #f30';
                this.$Notice.error({
                  title: '删除失败',
                  desc: '删除失败原因：' + err
                });
              }else{
                this.data1.splice(index, 1);
                this.$Notice.success({
                  title: '删除成功！'
                });
              }
            })
        }else{
          this.$Message.info('不要重复点击');
        }
      },
      ok () {
        this.$Message.info('点击了确定');
      },
      cancel () {
        this.$Message.info('点击了取消');
      }
    }
  }
</script>

<style lang="scss"  scoped>
  @import "../css/update.scss";
</style>
