<template>
  <div>
    <input type="text" v-focus v-model="qwe" v-number="qwe" />
    <p v-color="colorStr" @click="colorStr = 'aqua'">修改文字颜色</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorStr: 'aqua',
      qwe: '',
    };
  },
  // 自定义指令 局部注册
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
    number: {
      inserted(el, binding, vnode) {
        console.log(el);
        el.value = el.value.replace(/[^\d.]/g, '');
        vnode.context[binding.expression] = el.value;
      },
      update(el, binding, vnode) {
        const num = el.value.replace(/[^\d.]/g, '');
        console.log(num);
        vnode.context[binding.expression] = el.value;
      },
    },
    color: {
      inserted(el, bind) {
        el.style.color = bind.value;
      },
      update(el, bind) {
        el.style.color = bind.value;
      },
    },
  },
};
</script>

<style></style>
