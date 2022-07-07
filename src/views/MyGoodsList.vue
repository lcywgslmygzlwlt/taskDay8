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
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-foucs
            v-if="scope.row.inputVisible"
            v-model="scope.row.inputValue"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            v-else
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            style="margin-right: 8px"
            class="badge badge-warning"
            v-for="(obj, index) in scope.row.tags"
            :key="index"
            >{{ obj }}</span
          >
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="del(scope.row.id)"
            v-permissions="admin"
          >
            删除
          </button>
          <button class="btn btn-danger btn-sm" v-permissions="admin">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue';

export default {
  data() {
    return {
      list: [],
      admin: 'admin',
    };
  },
  created() {
    this.getList();
  },
  components: {
    MyTable,
  },
  methods: {
    getList() {
      this.$axios({
        url: '/api/goods',
      }).then((res) => {
        // console.log(res);
        this.list = res.data.data;
      });
    },
    del(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    enterFn(obj) {
      if (obj.inputValue.trim() == '') return alert('Please enter a value');
      obj.tags.push(obj.inputValue);
      obj.inputValue = '';
    },
  },
};
</script>

<style></style>
