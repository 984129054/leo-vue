<template>
  <div style="width: 500px ">
    <el-button type="primary" @click="sendGet" size="small">get请求</el-button>
    <el-button type="primary" @click="sendPost" size="small">post请求</el-button>
  </div>
</template>

<script>
import base from '@/api/base'
export default {
  name: 'HelloVue',
  data () {
    return {
      dataForm: {}
    }
  },
  methods: {
    sendGet () {
      this.$axios({
        method: 'GET',
        params: {id: '23', age: 10, name: 'leo'},
        url: `${base.logBaseUrl}/mdtask/testVue`
      }).then(function (resp) {
        console.log(resp.data)
      })
    },
    sendPost: function () {
      this.$axios({
        method: 'POST',
        data: this.$qs.stringify({
          taskid: '112233',
          taskname: '测试',
          username: '廖轩',
          createuser: '张乖乖',
          updateuser: '廖干',
          createtime: '2019-01-09'
        }),
        url: `${base.logBaseUrl}/mdtask/testVue`
      }).then(function (resp) {
        console.log(resp.data)
      })
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
