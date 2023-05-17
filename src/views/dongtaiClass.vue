<template>
  <div>
    <el-button @click="istrue = !istrue">按钮</el-button>
    <div :style="getStyle"></div>
  </div>
</template>

<script>
  export default ({
    name: "dongtaiClass",
    data() {
      return {
        istrue: false
      }
    },
    computed: {
      getStyle() {
        if(this.istrue) {
          return {
            width: '200px',
            height: '200px',
            backgroundColor: 'red'
          }
        } else {
          return {
            width: '200px',
            height: '200px',
            backgroundColor: 'blue'
          }
        }
      }
    },
    methods: {
      
    }
  })
</script>
<style scoped>

</style>