<template>
  <div class="fsize">
    <p>选择所在地区(实名认证主体所在地):</p>
    <div><input type="radio" />中国大陆 <input type="radio" />中国香港</div>
    <div class="phone">
      <p>手机号码:</p>
      <input type="text" />
      <button>验证码</button>
    </div>
    <div>
      <p>登录密码:</p>
      <input type="password" placeholder="请输入登录密码" /><br />
      <input type="password" placeholder="再次输入登录密码" />
      <p>邀请码(选填)</p>
      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      one: '',
    };
  },
};
</script>
<style lang="less" scoped>
.fsize {
  font-size: 20px;
  font-weight: 500;
}
.phone {
  input {
    width: 100px;
    margin-top: 10px;
  }
  button{
    margin-left: 10px;
  }
}
</style>
