<template>
  <div>
    <p>1. 获取原生DOM元素</p>
    <h1 id="h" ref="myH">我是一个孤独可怜又能吃的h1</h1>
    <p>2. 获取组件对象 - 可调用组件内一切</p>

    <p>3. vue更新DOM是异步的</p>
    <p ref="myP">{{ count }}</p>
    <button @click="btn">点击count+1, 马上提取p标签内容</button>
  </div>
</template>

<script>
// 目标: 获取组件对象
// 1. 创建组件/引入组件/注册组件/使用组件
// 2. 组件起别名ref
// 3. 恰当时机, 获取组件对象
export default {
  beforeMount() {
    console.log(this.$refs.myP);
    this.$nextTick(() => {
      console.log(this.$refs.myP);
    });
  },
  mounted() {
    console.log(this.$refs.myH);
  },
  data() {
    return {
      count: 0,
    };
  },
  // ref 获取原生DOM元素
  methods: {
    btn() {
      this.count++;
      console.log(this.count);
      this.$nextTick(() => {
        console.log(this.$refs.myP.innerHTML);
      });
    },
  },
  components: {
    // Demo
  },
};
</script>

<style></style>
