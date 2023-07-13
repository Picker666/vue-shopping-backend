<template>
  <div class="footer">
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"  key="item1">
        <div class="item">
          <p>今日订单</p>
          <div class="content">
            <div class="contentItem">
              <span>今日订单数</span>
              <span>汇总确认订单</span>
              <span>累计金额</span>
            </div>
            <div class="contentItem">
              <span>今日订单数</span>
              <span>汇总确认订单</span>
              <span>累计金额</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"  key="item2">
        <div class="item">
          <p>本月订单</p>
          <div class="content">
            <div class="contentItem">
              <span>今月订单数</span>
              <span>汇总确认订单</span>
              <span>累计金额</span>
            </div>
            <div class="contentItem">
              <span>今月订单数</span>
              <span>汇总确认订单</span>
              <span>累计金额</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"  key="item3">
        <div class="item">
          <p>快捷入口</p>
          <div class="content">
            <el-button type="primary">产品管理</el-button>
            <el-button>消息管理</el-button>
            <el-button>内容管理</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'footer-order'
  }
</script>

<style lang="less" scoped>
.item {
  background-color: #fff;
  
  p {
    padding: 16px;
    font-size: 18px;
    line-height: 24px;
    border-bottom: 1px solid #eee;
  }
}

.content {
  height: 80px;
  text-align: center;
  overflow: hidden;
  margin-bottom: 24px;

  .contentItem {
    margin: 16px 0;
    span {
      display: inline-block;
      padding: 0 16px;
      border-right: #eee solid 1px;

      &:last-of-type {
        border: none;
      }
    }
  }

  .el-button{
    margin: 20px 10px;
  }
}
</style>