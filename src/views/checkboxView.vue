<template>
  <div>
    {{ form.DeployedServices }}
    <el-card class="box-card">
      <el-checkbox-group
        v-model="form.DeployedServices"
      >
        <span v-for="(city, index) in cities" :key="city.value">
          <el-checkbox
            :label="city.value"
            :disabled="isCheckbox(city.value)"
          >
            {{ city.label }}
          </el-checkbox>
          <el-divider v-if="index === 1 || index === 5 || index === 8"></el-divider>
        </span>
      </el-checkbox-group>
    </el-card>
  </div>
</template>

<script> 
export default ({
  name: "checkboxView",
  data() {
    return {
      form:{
        DeployedServices: ['1643153224573734913']
      },
      cities: [
        {       
          value: '1643153224573734913',
          label: '数字空间管理驾驶舱'
        },
        {       
          value: '1643153505256558593',
          label: '切换办公室'
        },
        {       
          value: '1643153918517137409',
          label: '事件标注管理'
        },
        {       
          value: '1643154147681325057',
          label: '点标注'
        },
        {       
          value: '1643154361762795522',
          label: '线标注'
        },
        {       
          value: '1643154696048824321',
          label: '面标注'
        },
        {       
          value: '1643155064140943361',
          label: '主题配置管理'
        },
        {       
          value: '1643155557156212738',
          label: '主题空间配置'
        },
        {       
          value: '1643155821862932482',
          label: '主题地图配置'
        },
        {       
          value: '1643156539663536129',
          label: '辅助决策分析'
        },
        {       
          value: '1643156859533742082',
          label: '标注信息分析'
        },
        {       
          value: '1643157187637366786',
          label: '业态数据分析'
        },
			],
    };
  },
  computed: {
  },
  methods: {
    isCheckbox(val) {
      const arr1 = ['1643153224573734913', '1643153505256558593']
      const arr2 = ['1643153918517137409', '1643154147681325057', '1643154361762795522', '1643154696048824321']
      // const arr3 = ['1643155064140943361', '1643155557156212738', '1643155821862932482']
      // const arr4 = ['1643156539663536129', '1643156859533742082', '1643157187637366786']
      if(arr1.includes(val) && val !== arr1[0] && !this.form.DeployedServices.includes(arr1[0])) {
        arr1.forEach((item, index) => {
          if(index && this.form.DeployedServices.includes(item)) {
            this.form.DeployedServices.splice(this.form.DeployedServices.indexOf(item), 1)
          }
        })
        return true
      } else if(arr2.includes(val) && val !== arr2[0] && !this.form.DeployedServices.includes(arr2[0])) {
        arr2.forEach((item, index) => {
          if(index && this.form.DeployedServices.includes(item)) {
            this.form.DeployedServices.splice(this.form.DeployedServices.indexOf(item), 1)
          }
        })
        return true
      } else {
        return false
      }
    }
  }
})
</script>
<style scoped>

</style>