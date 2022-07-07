<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      :class="{ current: item.componentName === currentIndex }"
      v-for="item in list"
      :key="item.componentName"
      @click="clickFn(item.componentName)"
    >
      <span class="iconfont" :class="item.iconText"></span>
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  data() {
    return {
      currentIndex: 'MyGoodsList',
    }
  },
  props: {
    list: {
      type: Array,
      validator(val) {
        console.log(val)
        if (val.length >= 2 && val.length <= 5) {
          return true
        }
        return false
      },
    },
  },
  methods: {
    clickFn(val) {
      // val 组件的名称
      // 记录一下我现在点击的是谁
      this.currentIndex = val
      this.$emit('changeTab', val)
    },
  },
}
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
  }
}

.current {
  color: #1d7bff;
}

</style>
