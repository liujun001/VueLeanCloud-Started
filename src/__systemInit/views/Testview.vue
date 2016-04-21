<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Testview!',
    };
  },
};
</script>

<style scoped>
h1 {
  color: #ff832c;
}
</style>