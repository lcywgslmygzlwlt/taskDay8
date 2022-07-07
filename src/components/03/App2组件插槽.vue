<template>
  <div>
    <h1>1. 动态dynamic组件使用</h1>
    <component :is="comName"></component>
    <User></User>
    <hr />
    <h1>2. 组件缓存</h1>
    <ComNo2></ComNo2>
    <hr />
    <h1>3. 组件-插槽</h1>
    <Panel>
      <template v-slot:title>
        <h2>芙蓉楼送辛渐</h2>
      </template>
      <template v-slot:conent="scope">
        <!-- <img src="./assets/R-C.jpeg" alt="" /> -->
        <div>
          {{ scope.row }}
          {{ scope.row.deafultOne + '  ' + scope.row.deafultTwo }}
        </div>
      </template>
    </Panel>
    <hr />
    <!-- <h1>4. 组件-具名插槽</h1>
    <hr /> -->
    <!-- <h1>5. 组件-作用域插槽</h1>  -->

    <!-- <hr />
    <h1>6. 作用域插槽-使用场景</h1>
    <p>组件内标签可以随意定义和数据使用</p>

    <hr />
    <h1>7. 自定义指令</h1> -->
  </div>
</template>

<script>
import ComNo1 from './components/view/ComNo1.vue';
import User from './components/view/user1.vue';
import ComNo2 from './components/view/ComNo2.vue';
import Panel from './components/Panel.vue';
export default {
  data() {
    return {
      comName: ComNo1,
    };
  },
  components: {
    ComNo1: ComNo1,
    User,
    ComNo2,
    Panel,
  },
};
</script>

<style></style>
