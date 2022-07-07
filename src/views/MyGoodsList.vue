<template>
  <div>
    <MyTable :arr="list">
      <template #title>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="scpoe">
        <td>{{ scpoe.row.id }}</td>
        <td>{{ scpoe.row.goods_name }}</td>
        <td>{{ scpoe.row.goods_price }}</td>
        <td>
          <input
            v-if="scpoe.row.inputshow"
            v-focus
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            @blur="scpoe.row.inputshow = false"
            v-model="scpoe.row.inputValue"
            @keyup.enter="enter(scpoe.row)"
            @keyup.esc="scpoe.row.inputValue = ''"
          />
          <button
            v-zzz="1"
            class="btn btn-primary btn-sm add-tag"
            @click="scpoe.row.inputshow = true"
          >
            +Tag
          </button>
          <button
            style="margin-right: 8px"
            v-for="(item, index) in scpoe.row.tags"
            :key="index"
            type="button"
            class="btn btn-warning"
          >
            {{ item }}
          </button>
        </td>

        <td>
          <button
            v-zzz="0"
            style="display: block"
            class="btn btn-danger btn-sm"
            @click="del(scpoe.row.id)"
          >
            删除
          </button>
          <button
            v-zzz="1"
            style="display: block"
            class="btn btn-danger btn-sm"
            @click="del(scpoe.row.id)"
          >
            详情
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
      display: 'block',
    };
  },
  components: {
    MyTable,
  },
  created() {
    this.$axios({
      url: '/api/goods',
    }).then((res) => {
      console.log(res.data.data);
      res.data.data.forEach((ele) => {
        ele.inputshow = false;
      });
      this.list = res.data.data;
    });
  },
  methods: {
    del(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    enter(val) {
      if (val.inputValue.trim() === '') return alert('请输入内容');
      val.tags.push(val.inputValue);
      val.inputValue = '';
    },
  },
};
</script>

<style></style>
