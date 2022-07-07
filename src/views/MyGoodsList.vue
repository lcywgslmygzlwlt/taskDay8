<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <!-- scope的值: {row: obj, index: 索引值} -->
      <template #tbody="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-focus
            v-model="scope.row.inputValue"
            v-if="scope.row.inputVisible"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            style="margin-right: 8px"
            class="btn btn-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
// 目标: 循环商品列表表格
// 1. 封装MyTable.vue 整体表格组件-一套标签和样式
// 2. axios请求数据
// 3. 传入MyTable组件里循环tr显示数据

// 目标: 展示tags标签
// 1. tags数组 - 某个td循环span使用文字
// 2. span设置bs的样式

// 目标: 删除数据
// 1. 删除按钮 - 点击事件
// 2. 作用域插槽把索引值关联出来了
// scope身上就有row和index
// 3. 删除中使用scope.index的索引值
// 4. 删除事件里删除数组里对应索引值的数据
import MyTable from '../components/MyTable.vue'
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [], // 所有数据
    }
  },
  created() {
    axios({
      url: '/api/goods',
    }).then((res) => {
      console.log(res)
      res.data.data.forEach((ele) => {
        ele.inputVisible = false
      })
      this.list = res.data.data
    })
  },
  methods: {
    del(id) {
      const index = this.list.findIndex((ele) => ele.id == id)
      this.list.splice(index, 1)
    },
    enterFn(val) {
        if (val.inputValue.trim()===""){
            return alert("enter message")
        }
         val.tags.push(val.inputValue) // 表单里的字符串状态tags数组
    val.inputValue = ""
    }
  },
}
</script>
<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
