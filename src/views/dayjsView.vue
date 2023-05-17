<template>
  <div>
    <h1>月份选择器结束日期选中当月最后一天</h1>
    <el-date-picker
      v-model="value1"
      type="monthrange"
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份"
      value-format="yyyy-MM"
      @change="onChange($event)"
    >
    </el-date-picker>
    {{ value1 }}
  </div>
</template>

<script>
  export default ({
    name: "dayjsView",
    data() {
      return {
        value1: [],
        startTime: '',
        endTime: '',
      }
    },
    methods: {
      onChange(val) {
        this.startTime = val[0] + '-01 00:00:00'
        this.endTime = this.getMonthFinalDay(val[1]) + ' 23:59:59'
      },
      // 获取选中月份日期的最后一天
      getMonthFinalDay (yearMonth){
        let ym = yearMonth.split('-')
        let day='';
        let year = ym[0]
        let month = ym[1]
        if(year==null || year==undefined || year==''){
          year = new Date().getFullYear();
        }
        if(month==null ||  month==undefined || month==''){
          month = new Date().getMonth()+1;
        }
        day = new Date(new Date(year,month).setDate(0)).getDate();
        return year+"-"+month+"-"+day;
      }
    }
  })
</script>
<style scoped>

</style>