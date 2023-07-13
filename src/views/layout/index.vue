<template>
  <div class="layout">
    <div class="menu">
      <Menu :isCollapse="isCollapse"></Menu>
    </div>
    <div class="content" :class="isCollapse ? 'close' : 'open'">
      <i class="collapseIcon" @click="iconClick" :class="isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"></i>
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Menu from './menu';
import Content from './content';

export default {
  name: 'layoutPage',
  components: {
    Menu,
    Content
  },
  data: function () {
    return {
      isCollapse: false
    }
  },
  methods: {
    iconClick() {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  display: flex;
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #112f50;
  color: #000;
}
.content {
  flex: 1 1 auto;
}
.open {
  margin-left: 200px;
};

.close {
  margin-left: 64px;
}

.collapseIcon{
  float: left;
  line-height: 48px;
  font-size: 20px;
  color: #fff;
}
</style>