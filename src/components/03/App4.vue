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
        <!-- <img :src="scope.row.headImgUrl" alt="" /> -->
        <div v-if="scope.row.type == 0">
          <a :href="scope.row.headImgUrl">{{ scope.row.headImgUrl }}</a>
        </div>

        <div v-else-if="scope.row.type == 1">
          <img :src="scope.row.headImgUrl" alt="" />
        </div>

        <div v-else-if="scope.row.type == 2">
          <a>{{ scope.row.headImgUrl }}</a>
        </div>
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
