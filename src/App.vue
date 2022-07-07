<template>
  <div>
    <MyHeader title="34253"></MyHeader>
    <div style="margin-top: 45px">
      <component :is="comName"></component>
    </div>
    <MyTabBar :list="tabList" @changeTab="changeTabFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyTabBar from './components/MyTabBar.vue';
import MyGoodsList from './components/views/MyGoodsList.vue';
import MyUserInfo from './components/views/MyUserInfo.vue';
import MyGoodsSearch from './components/views/MyGoodsSearch.vue';
export default {
  data() {
    return {
      tabList: [
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
      comName: '',
    };
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyUserInfo,
    MyGoodsSearch,
  },
  methods: {
    changeTabFn(val) {
      this.comName = val;
    },
  },
};
</script>

<style></style>
