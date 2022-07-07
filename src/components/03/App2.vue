<template>
  <div>
    <UseTable>
      <template v-slot:name="scope">
        <input v-model="scope.row.name" />
      </template>
      <template v-slot:age="scope">
        <input v-model="scope.row.age" />
      </template>
      <template v-slot:header="scope">
        <img :src="scope.row.headImgUrl" alt="" />
      </template>
    </UseTable>
  </div>
</template>

<script>
import UseTable from './components/UseTable.vue';
export default {
  data() {
    return {};
  },
  components: {
    UseTable,
  },
};
</script>

<style></style>
