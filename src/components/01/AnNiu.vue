<template>
  <div>
    <button :class="`one-${type}`" @click="btn">{{ title }}</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '按钮组件',
    },
    type: {
      type: String,
      default: 'style1',
      validator(val) {
        console.log(111);
        return ['style1', 'style2', 'style3', 'style4'].includes(val);
      },
    },
  },
  methods: {
    btn() {
      console.log(34532);
      this.$emit('myclick');
    },
  },
};
</script>

<style lang="less" scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
}
.one-style1 {
  background-color: aqua;
}
.one-style2 {
  background-color: green;
}
.one-style3 {
  background-color: purple;
}
.one-style4 {
  background-color: yellow;
}
</style>
