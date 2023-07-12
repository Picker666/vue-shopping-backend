<template>
  <div>
    <div :class="isCollapse ? 'close' : 'open'">
      <el-menu
        :default-active="$router.path || '/'"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#112f50"
        text-color="#fff"
        router
      >
        <el-menu-item>
          <template slot="title">
            海马生鲜采购系统
          </template>
        </el-menu-item>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">
            首页
          </span>
        </el-menu-item>
        <el-submenu index="/product">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>产品管理</span>
          </template>
          <el-menu-item index="/product/list">
            <i class="el-icon-menu"></i>
            产品列表
          </el-menu-item>
          <el-menu-item index="/product/category">
            <i class="el-icon-menu"></i>
            产品分类
          </el-menu-item>
        </el-submenu>
        <el-submenu index="/order">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item index="/order/list">
            <i class="el-icon-menu"></i>
            订单列表
          </el-menu-item>
          <el-menu-item index="/order/collect">
            <i class="el-icon-menu"></i>
            订单清单
          </el-menu-item>
          <el-menu-item index="/order/verify">
            <i class="el-icon-menu"></i>
            订单审核
          </el-menu-item>
        </el-submenu>
        <el-submenu index="/advertise">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>广告分类</span>
          </template>
          <el-menu-item index="/advertise/list">
            <i class="el-icon-menu"></i>
            广告列表
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuPage',
  props: {
    isCollapse: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleOpen(v) {
      console.log('v: ', v);
    },
    handleClose(v) {
      console.log('v3: ', v);
    }
  },
}
</script>

<style lang="less" scoped>
.title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 48px;
  line-height: 48px;
  padding: 0 20px;
  font-size: 18px;
}
// .open {
//   width: 200px;
// };
.el-menu-vertical-demo {
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.close {
  width: 64px;
}

.el-menu {
  border: none;

  .el-menu-item.is-active {
    background-color: #1e78bf!important;
    color: #fff;
  }
}

</style>