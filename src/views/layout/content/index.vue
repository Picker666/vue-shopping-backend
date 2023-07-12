<template>
  <div>
    <Header></Header>
    <h2>content</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header.vue';
export default {
  name: 'contentPage',
  components: {
    Header
  }
}
</script>

<style lang="less" scoped></style>