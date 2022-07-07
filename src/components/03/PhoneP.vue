<template>
  <div class="all">
    <button class="title" @click="comName = 'NumP'">手机注册</button>
    <button class="title" @click="comName = 'EmailP'">邮箱注册</button>
    <div>
      <component :is="comName"></component>
    </div>
  </div>
</template>

<script>
import NumP from './02/NumP.vue';
import EmailP from './02/EmailP.vue';
export default {
  data() {
    return {
      comName: 'NumP',
    };
  },
  components: {
    NumP,
    EmailP,
  },
};
</script>
<style scoped>
.all {
  padding: 40px 24px;
  height: 1000px;
  background-color: rgb(224, 234, 243);
}
.title {
  font-size: 30px;
  margin-left: 20px;
}
</style>
