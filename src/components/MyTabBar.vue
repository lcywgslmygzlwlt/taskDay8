<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      :class="{ current: obj.componentName == currentIndex }"
      v-for="obj in list"
      :key="obj.componentName"
      @click="clickFn(obj.componentName)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="obj.iconText"></span>
      <!-- 文字 -->
      <span>{{ obj.text }}</span>
    </div>
  </div>
</template>

<script>
// 目标: 点谁谁亮
// 1. 绑定点击事件 - 传入索引值
// 2. 循环索引 - 保存索引 对比
// 3. 点击把索引值同步给selIndex变量上, 引发上面判断的更新
export default {
  props: {
    list: {
      type: Array,
      required: true,
      // 自定义校验规则
      // validator(value) {
      //   // value就是接到数组
      //   if (value.length >= 2 && value.length <= 5) {
      //     return true; // 符合条件就return true
      //   } else {
      //     console.error('数据源必须在2-5项');
      //     return false;
      //   }
      // },
      validator(val) {
        if (val.length >= 2 && val.length <= 5) {
          return true;
        }
        return false;
      },
    },
  },
  data() {
    return {
      currentIndex: 'MyGoodsList', // 默认第一个高亮
    };
  },
  methods: {
    clickFn(val) {
      this.currentIndex = val;
      this.$emit('changeFn', val);
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}

.current {
  color: #1d7bff;
}
</style>
