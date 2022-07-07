<template>
  <div>
    <MyHeader title="购物车" bg-color="aqua"></MyHeader>

    <div style="margin-top: 45px">
      <MyGoods v-for="item in list" :key="item.id" :obj="item"></MyGoods>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import MyGoods from './components/MyGoods.vue';

export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    MyHeader,
    MyFooter,
    MyGoods,
  },
  created() {
    this.$axios({
      url: '/api/cart',
    }).then((res) => {
      console.log(res.data.list);
      this.list = res.data.list;
    });
  },
};
</script>

<style></style>
