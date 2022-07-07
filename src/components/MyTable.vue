<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr name="title">
        <!-- <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th> -->
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
   
        <tr v-for="obj in arr" :key="obj.id">
          <!-- 
            
            -->
          <slot name="tbody" :row="obj"></slot>
        </tr>
   
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    arr: Array,
  },
};
</script>
