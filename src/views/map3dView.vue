<template>
  <div>
    <div class="box">
      <img src="http://smlstatic.hismartlab.club/fwslogo5.png" style="width: 44px;height: 28px" alt="">
      <div style="fontSize: 25px;fontWeight: 700; color: #fff">数字空间管理平台</div>
      <el-button @click="fullscreen">全屏</el-button>
      <el-button @click="changeBackgroundColor">变底色</el-button>
      <el-button @click="getInfo">请求</el-button>
      <span>一共获取了 {{ findAllList }} 条模型数据！</span>
    </div>
    <div id="viewport" class="viewport"></div>
  </div>
</template>

<script>
export default ({
  name: "map3dView",
  data() {
    return {
      viewer3D: '',
      findAllList: '',
      isbackColor: 1,
      token: '1',
      project: [
        {
          modelKey: 'M1683872392915',
          projectKey: 'z4d121fa350247caa738ca56497844ac'
        },
        {
          modelKey: 'M1683879955261',
          projectKey: 'z4d121fa350247caa738ca56497844ac'
        }
      ]
    }
  },
  mounted() {
    // this.bos3d()
    this.getInfo()
  },
  // M1598257565598 he3285593fdc4ea3b91784c5741ff8aa
  methods: {
    bos3d() {
      const that = this
      const html = document.querySelector("html");
      document.querySelector(".viewport").style.width = html.clientWidth + 'px';
      document.querySelector(".viewport").style.height = html.clientHeight - 1 + 'px';
      const option = {host: "http://bos3d.bimwinner.com", viewport: "viewport"};
      const viewer3D = new BOS3D.Viewer(option);
      that.viewer3D = viewer3D
      new BOS3DUI({
        viewer3D,
        BOS3D: window.BOS3D,
        // 可选，需要显示哪些工具栏。默认都是true
        // funcOption: {
        //   init: true, // 初始化
        //   fit: true, // 聚焦
        //   undo: false, // 撤销
        //   roam: true, // 漫游
        //   pickByRect: false, // 框选
        //   hide: false, // 隐藏
        //   isolate: false, // 构件隔离
        //   section: false, // 剖切
        //   wireFrame: false, // 线框化
        //   scatter: false, // 模型分解
        //   changeCptColor: false, // 构件变色
        //   setting: false, // 设置
        //   fullScreen: false, // 全屏
        //   changeBgColor: false, // 改变背景色
        //   cptInfo: false, // 构件信息
        //   infoTree: false, // 结构树
        //   measure: false, // 测量
        //   mark: false, // 标签
        //   snapshot: false, // 快照
        //   annotation: false, // 批注
        //   reset:true, //复位
        //   moreMenu:false //更多
        // }

      })
      // 添加视图
      // modelKey:模型key
      // projectKey:项目key
      for(let i = 0; i < that.project.length; i++) {
        that.viewer3D.addView(that.project[i].modelKey, that.project[i].projectKey, this.token);
      }
      // that.viewer3D.addView("M1683872392915", "z4d121fa350247caa738ca56497844ac", this.token);
      // that.viewer3D.addView("M1683879955261", "z4d121fa350247caa738ca56497844ac", this.token);
      // ON_LOAD_COMPLETE：加载完成
      that.viewer3D.registerModelEventListener(window.BOS3D.EVENTS.ON_LOAD_COMPLETE, (event) => {
        // key:构件key
        // 通过key进行控件旋转
        that.viewer3D.rotateComponentByKey("M1683872392915_2fe5XPmKnFnhnF3PtNQVTR");
        // 设置物项位置
        // viewer3D.setModelMatrix('M1683872392915', new BOS3D.THREE.Matrix4().set(
        //   1, 0, 0, 0,
        //   0, 1, 0, 0,
        //   0, 0, 1, 0,
        //   0, 0, 0, 1
        // ))
        that.viewer3D.setModelMatrix('M1683879955261', new BOS3D.THREE.Matrix4().set(
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1
        ))
        let findAllByKey = that.viewer3D.getAllComponentsKey();
        let findAll = that.viewer3D.getComponentsByKey(findAllByKey);
        that.findAllList = findAll.length
      })
      // 单击事件
      that.viewer3D.registerModelEventListener(window.BOS3D.EVENTS.ON_CLICK_PICK, (event) => {
        console.log("event：", event)
      })
      // 加载模型监听函数
      that.viewer3D.registerModelEventListener(BOS3D.EVENTS.ON_LOAD_ERROR, (event) => {
          // alert("模型加载异常监听")
          that.getInfo()
      });
    },
    fullscreen() {
      const state = BOS3D.FullScreen.fullScreen(document.getElementById('viewport'));
      console.log(state)
    },
    // 更改背景色
    changeBackgroundColor() {
      if(this.isbackColor === 1) {
        this.viewer3D.setSceneBackGroundColor('#FFFFFF', 0.1);
      } else if(this.isbackColor === 2) {
        this.viewer3D.setSceneBackGroundColor('red', 0.1);
      } else if(this.isbackColor === 3) {
        this.viewer3D.setSceneBackGroundColor('blue', 0.1);
      } else if(this.isbackColor === 4) {
        this.viewer3D.setSceneBackGroundColor('green', 0.1);
      }
      if(this.isbackColor === 4) {
        this.isbackColor = 1
      } else {
        this.isbackColor ++
      }
    },
    getInfo() {
      const that = this
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if(this.readyState === 4) {
          if(this.status === 200) {
            that.token = JSON.parse(this.response).data.access_token
            document.getElementById('viewport').innerHTML = ''
            that.bos3d()
          }
        }
      }
      xhr.open('POST', ' http://bosgw.bimwinner.com/bospersonnelservice/u75ca159454c4cb184bd2f352ab25313/users/login', true)
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('name=sunlewen&password=sun12345')
    },
  }
})
</script>
<style scoped>
body {
  margin: 0;
  overflow: hidden;
  position: fixed;
}
.box {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #ccc;
}
.viewport {
  height: calc(100vh - 61px)!important;
}
</style>