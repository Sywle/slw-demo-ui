<template>
  <div class="home">
    <h2>{{ createForm.timeCycle }}</h2>
    <el-date-picker
    v-model="createForm.timeCycle"
    :unlink-panels="unlinkPanels"
    type="monthrange"
    :picker-options="pickerOptions"
    range-separator="至" 
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    value-format="yyyy-MM-dd"
>
</el-date-picker>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="活动名称" :prop="unlinkPanels ? 'name' : ''">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
    data(){
      return {
        unlinkPanels: false,
        createForm: {
          timeCycle:[]
        },
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', [date,date]);
            }
          }, 
            {
            text: '近7天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setTime(start.getTime() - 3600 * 1000 * 24 )
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '近30天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setTime(start.getTime() - 3600 * 1000 * 24 )
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '近90天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setTime(start.getTime() - 3600 * 1000 * 24 )
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            },
          },
           {
            text: '近180天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setTime(start.getTime() - 3600 * 1000 * 24 )
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 180);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: '近一年',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setTime(start.getTime() - 3600 * 1000 * 24 )
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
              picker.$emit('pick', [start, end]);
            },
          },
          {text: '本周',
              onClick(picker) {
                 const end = new Date();
                 const start = new Date();
                 end.setTime(start.getTime() - 3600 * 1000 * 24 )
                 //现在星期几；0代表星期天，6代表星期六
                 var thisDay = start.getDay();
                 //现在是一个月的第几天
                 var thisDate = start.getDate();
                 console.log(thisDay)
                 console.log(thisDate)
                 if (thisDay != 0) {
                     start.setDate(thisDate - thisDay+1);
                 }
                   picker.$emit('pick', [start, end]);
              }
           },
           {
              text: '本月',
              onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  end.setTime(start.getTime() - 3600 * 1000 * 24 )
                  start.setDate(1);
                  picker.$emit('pick', [start, end]);
              }
            },
            {
              text: '本季度',
              onClick(picker) {
                  var oDate = new Date();
                  var thisYear = oDate.getFullYear();
                  var thisMonth = oDate.getMonth() + 1;
                  var n = Math.ceil(thisMonth / 3); // 季度
                  var Month = n * 3 - 1;
                  var start = new Date(thisYear, Month - 2, 1);
                  var end = new Date();
                  end.setTime(end.getTime() - 3600 * 1000 * 24 )
                  picker.$emit('pick', [start, end]);
            }
          },
          {
              text: '本年',
              onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setMonth(0);
                  start.setDate(1);
                  end.setTime(end.getTime() - 3600 * 1000 * 24 )
                  picker.$emit('pick', [start, end]);
              }
          }, 
          ]
        },
        repeat: [
          {
            label: '章三',
            value: '1'
          },
          {
            label: '章三',
            value: '1'
          },
          {
            label: '李四',
            value: '2'
          },
          {
            label: '王五',
            value: '3'
          }
        ],
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },
    created() {
      const unique = [...new Set(this.repeat.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))
      console.log(unique);
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
