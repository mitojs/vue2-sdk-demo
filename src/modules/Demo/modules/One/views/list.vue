<template lang="pug">
  .risk-assessment
    div(style="font-size: 26px; color:#c6c6c6;") 请打开控制台查看mitojs的调式结果，当你操作页面时，控制台会打印你的行为
    div(style="font-size: 26px; color:#c6c6c6; margin-top: 20px;") 右边页面会实时打印的你操作行为
    div(style="font-size: 26px; padding: 20px 0 20px 0") count: {{ count }}
    .container
      el-button(@click="count++" class="add") +
      el-button(@click="count--" class="sub") -
      el-button(@click="$router.push({name: 'two'})") 跳到账户信息页面
      el-button(@click="onClickUnhandlerejection") 触发unhandledrejection
      el-button(@click="onClickCodeError") 触发代码错误
      el-button(@click="onClickGoodRequest") 触发正常ajax
      el-button(@click="onClickBadRequest") 触发异常ajax
      el-button(@click="onClickShowCount") console当前count
      el-button(@click="onClickFetch") fetch

</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  name: 'OneList',
  data() {
    return {
      count: 0,
      obj: {}
    }
  },
  methods: {
    onClickCodeError() {
      this.obj.split('')
    },
    onClickShowCount() {
      console.log(`count is:${this.count}`)
    },
    onClickUnhandlerejection() {
      const rejectPromise = () => new Promise((resolve, reject) => reject('this is promise reject'))
      // eslint-disable-next-line promise/catch-or-return
      rejectPromise().then((res) => {
        console.log(res)
      })
    },
    async onClickGoodRequest() {
      // status 200
      const res = await axios.get('https://api.apiopen.top/likePoetry?name=李白')
      console.log('接口返回值：', res.data.message)
    },
    async onClickBadRequest() {
      // 无地址
      axios
        .get('https://notexit.interface/info2', {
          withCredentials: true
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          // console.log(err)
        })
    },
    async onClickFetch() {
      const res = await fetch('https://api.apiopen.top/likePoetry?name=%E6%9D%8E%E7%99%BD', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json())
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.risk-assessment {
  padding: 20px;
  .container {
    display: flex;
    max-width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    button {
      margin: 0 10px 10px 0;
    }
  }
}
</style>
