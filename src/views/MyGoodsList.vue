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
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-focus
            v-model="scope.row.inputValue"
            v-if="scope.row.inputShow"
            @blur="scope.row.inputShow = false"
            @keydown.enter="enterFn(scope.row)"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scope.row.inputShow = true"
          >
            +Tag
          </button>
          <span
            style="margin-right: 8px"
            class="badge badge-warning"
            v-for="(str, ind) in scope.row.tags"
            :key="ind"
            >{{ str }}
          </span>
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="btnDle(scope.row.id)"
            v-gfocus="quanx"
          >
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
export default {
  data() {
    return {
      quanx: "quanx",
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios({
        url: "/api/goods",
      }).then((res) => {
        res.data.data.forEach((ele) => {
          ele.inputShow = false;
        });
        console.log(res);
        this.list = res.data.data;
      });
    },
    btnDle(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    enterFn(obj) {
      console.log(obj.inputValue, "===", obj.tags);
      if (obj.inputValue.trim() == "") {
        return alert("enter message");
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = "";
    },
  },
  components: {
    MyTable,
  },
};
</script>

<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
