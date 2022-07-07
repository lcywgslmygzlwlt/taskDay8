<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格:{{ price }}</p>
    <p>{{ info }}</p>

    <button @click="change">砍价-1</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'info', 'index'],
  methods: {
    change() {
      // props//只读，父件里边修改
      // this.title='asdgdf'
      //this.$emit 去触发 子组件身上绑定一个自定义事件
      console.log(this);
      this.$emit('del', 1, this.index);
    },
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
