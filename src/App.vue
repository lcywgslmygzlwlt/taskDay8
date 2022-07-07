<template>
  <div>
    <MyHeader title="TabBar案例"></MyHeader>
    <div class="main">
      <component :is="comName"></component>
    </div>
    <MyTabBar :list="tabList" @changeFn="changeFn1"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader';
import MyTabBar from './components/MyTabBar';

import MyGoodsList from './views/MyGoodsList.vue';
import MyGoodsSearch from './views/MyGoodsSearch.vue';
import MyUserInfo from './views/MyUserInfo.vue';

export default {
  data() {
    return {
      comName: 'MyGoodsList', // 默认显示的组件
      tabList: [
        // 底部导航的数据
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    };
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  methods: {
    changeFn1(val) {
      this.comName = val;
    },
  },
};
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 51px;
}
</style>
