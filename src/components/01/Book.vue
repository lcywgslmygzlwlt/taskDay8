<template>
  <div>
    <input
      type="text"
      placeholder="搜索图书"
      v-model.trim="bookname"
      @keydown.enter="findBook"
    />
    <!-- <button @click="btn">获取数据</button> -->
    <table border="1" width="500" cellpadding="10" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <th>{{ item.id }}</th>
        <th>{{ item.bookname }}</th>
        <th>{{ item.author }}</th>
        <th>{{ item.publisher }}</th>
        <th :list="list">
          <button @click="delBook(obj.id)">删除</button
          ><button @click="delTal(obj.id)">详情</button>
        </th>
      </tr>
    </table>

    <div v-if="isShow">
      <div>
        <input type="text" placeholder="书名" v-model="obj.bookname" />
      </div>
      <div>
        <input type="text" placeholder="作者" v-model="obj.author" />
      </div>
      <div>
        <input type="text" placeholder="出版社" v-model="obj.publisher" />
      </div>
      <button @click="addBook" :disabled="disabled">添加图书</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookname: '',
      list: [],
      obj: {
        bookname: '',
        author: '',
        publisher: '',
      },
      disabled: false,
      isShow: true,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios({
        url: '/api/getbooks',
        method: 'GET',
      }).then((res) => {
        console.log(res);
        this.list = res.data.data;
      });
    },
    findBook() {
      const params = {};
      this.bookname ? (params.bookname = this.bookname) : '';
      this.getList(params);
    },
    addBook(obj) {
      if (
        !this.obj.bookname.trim() ||
        !this.obj.author.trim() ||
        !this.obj.publisher.trim()
      )
        return alert('请输入正确的书名');
      this.disabled = true;
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          ...obj,
          appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
        },
      }).then((res) => {
        console.log(res);
        this.disabled = false;
        this.clear();
      });
    },
    delBook(id) {
      this.$axios({
        url: '/api/delbook',
        params: { id },
      }).then(() => {
        this.getList();
      });
    },
    clear() {
      this.obj.bookname = '';
      this.obj.author = '';
      this.obj.publisher = '';
    },
    delTal(id) {
      this.$axios({
        url: '/api/getbooks',
        params: { id },
      }).then((res) => {
        const info = res.data.data && res.data.data[0];
        alert(
          `作者：${info.author}; 出版社：${info.publisher}; 书名：${info.bookname}`
        );
      });
    },
  },
};
</script>

<style></style>
