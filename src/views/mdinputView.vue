<template>
  <div>
    <h1>动态表单验证</h1>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" style="width: 500px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="公司" prop="company">
        <el-input v-model="ruleForm.company"></el-input>
      </el-form-item>
      <el-card v-for="(item, index ) in ruleForm.dxengins" :key="index">
        <el-row type="flex" align="middle">
          <el-col :span="20">
            <el-form-item label="单项工程名称" :prop="'dxengins.' + index + '.dxname'" :rules="rules.dxname">
              <el-input v-model="item.dxname"></el-input>
            </el-form-item>
            <el-form-item label="单项工程类型" :prop="'dxengins.' + index + '.dxselect'" :rules="rules.dxselect">
              <el-select v-model="item.dxselect" placeholder="请选择公司">
                <el-option label="公司1" value="shanghai"></el-option>
                <el-option label="公司2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4" v-if="!index">
            <el-button type="success" icon="el-icon-plus" circle @click="addDX()"></el-button>
          </el-col>
          <el-col :span="4" v-else>
            <el-button type="danger" icon="el-icon-delete" circle @click="removeDX(index)"></el-button>
          </el-col>
        </el-row>
      </el-card>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default ({
  name: 'mdinputView',
  data() {
    return {
      ruleForm: {
        name: '',
        company: '',
        dxengins: [
          {
            dxname: '',
            dxselect: '',
          }
        ]
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        company: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        dxname: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        dxselect: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
      }
    }
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
    addDX() {
      this.ruleForm.dxengins.push({
        dxname: '',
        dxselect: '',
      })
    },
    removeDX(val) {
      this.ruleForm.dxengins.splice(val, 1)
    }
  }
})
</script>
<style scoped>

</style>