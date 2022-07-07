<template>
  <div>
    <p>学习生命周期 - 看控制台打印</p>
    <p id="myP">{{ msg }}</p>
    <ul id="myUL">
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="arr.push(1000)">点击末尾加值</button>
  </div>
</template>

<script>
export default {
  name: 'LifeAxiosLife',

  data() {
    return {
      msg: 'Hello Vue!',
      arr: [1, 2, 3, 4],
      timer: '',
    };
  },
  // // 创建阶段
  // // beforeCreate  创建前
  // // created 创建后
  beforeCreate() {
    console.log('beforeCreate === 执行');
    console.log(this.msg);
    // fn();
  },
  created() {
    console.log('created === 执行');
    this.fn();
  },
  // 挂载阶段
  beforeMount() {
    console.log('beforeMount === 执行');
    console.log(document.getElementById('myP'));
  },
  mounted() {
    console.log('mounted ===执行');
    console.log(document.getElementById('myP'));
  },
  // 更新阶段
  beforeUpdate() {
    console.log('beforeUpdate === 执行');
    console.log(this.arr[4]);
    console.log(document.querySelectorAll('#myUL > li')[4]);
  },
  Update() {
    console.log('update === 执行');
    console.log(this.arr[4]);
    console.log(document.querySelectorAll('#myUL > li')[4]);
  },
  // 销毁阶段
  beforeDestroy() {
    console.log('beforeDestroy===执行');
    console.log(this.msg);
    console.log(this.timer);
  },
  destroy() {
    console.log('destroy=== 执行');
    console.log(this.msg);
  },
  methods: {
    fn() {
      console.log('----');
    },
  },
  setTimeout() {},
};
</script>

<style scoped></style>
