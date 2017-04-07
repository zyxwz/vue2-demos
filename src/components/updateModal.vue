<template>
  <div>
    <Modal
      v-model="modelShow"
      title="产品功能发布"
      @on-ok="ok"
      @on-cancel="cancel">
      <Form :model="formItem" :label-width="80">
        <Form-item label="功能名称">
          <Input v-model="formItem.funName" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="负责人">
          <Input v-model="formItem.leader" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="提示时间">
          <Row>
            <Col span="11">
                <Date-picker type="date" placeholder="年/月/日" v-model="formItem.firstDate"></Date-picker>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
                <Date-picker type="date" placeholder="年/月/日" v-model="formItem.endDate"></Date-picker>
            </Col>
          </Row>
        </Form-item>
        <Form-item>
          <div class="demo-upload-list" v-for="item in uploadList">
            <template v-if="item.status === 'finished'">
              <img :src="item.url">
              <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
              </div>
            </template>
            <template v-else>
              <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
            </template>
          </div>
          <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            :on-progress="handleProgress"
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block;width:58px;">
            <div style="width: 58px;height:58px;line-height: 58px;">
              <Icon type="camera" size="20"></Icon>
            </div>
          </Upload>
          <Modal title="查看图片" v-model="visible">
            <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
          </Modal>
        </Form-item>

<!--
        <div class="ivu-progress ivu-progress-success">
          <div class="ivu-progress-outer">
            <div class="ivu-progress-inner">
              <div class="ivu-progress-bg" style="width: 100%; height: 10px;"></div>
            </div>
          </div> &lt;!&ndash;&ndash;&gt;
        </div>-->


      </Form>
    </Modal>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        modelShow:true,
        formItem:{
          funName:'',
          leader:'',
          firstDate:'',
          endDate:''
        },
        defaultList: [
          {
            'name': 'a42bdcc1178e62b4694c830f028db5c0',
            'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
          },
          {
            'name': 'bc7521e033abdd1e92222d733590f104',
            'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
          }
        ],
        imgName: '',
        visible: false,
        uploadList: [],
      }
    },
    mounted(){
      //console.log(this.$route.params.modal1bool);
      console.log("mounted");
      this.uploadList = this.$refs.upload.fileList;
    },
    methods:{
      ok () {
        this.$Message.info('点击了确定');
      },
      cancel () {
        this.$Message.info('点击了取消');
      },
      handleView (name) {
        console.log("handleView");
        this.imgName = name;
        this.visible = true;
      },
      handleRemove (file) {
        console.log("handleRemove");
        // 从 upload 实例删除数据
        const fileList = this.$refs.upload.fileList;
        this.uploadList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess (res, file) {
        // 因为上传过程为实例，这里模拟添加 url
        file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';

        console.log("====handleSuccess");
        console.log("file=");
        console.log(file);
        console.log("this.uploadList=");
        console.log(this.uploadList);
        this.uploadList.push(file);
      },
      handleFormatError (file) {
        console.log("handleFormatError");
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
        });
      },
      handleMaxSize (file) {
        console.log("handleMaxSize");
        this.$Notice.warning({
          title: '超出文件大小限制',
          desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
        });
      },
      handleBeforeUpload () {
        console.log("handleBeforeUpload");
        const check = this.uploadList.length < 5;
        if (!check) {
          this.$Notice.warning({
            title: '最多只能上传 5 张图片。'
          });
        }
        return check;
      },
      handleProgress (res,file,filelist) {
        console.log("======handleProgress");
        console.log("file=");
        console.log(file);
        console.log("filelist=");
        console.log(filelist);
      }
    },

  }
</script>
<style scoped>
  .demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>
