<template>
  <div class="saleChart">
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16"  key="amount">
        <div class="amount">
          <p>月销售额</p>
          <div class="content"></div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8"  key="rate">
        <div class="rate">
          <p>产品销售比例</p>
          <div class="content"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'saleChart'
  }
</script>

<style lang="less" scoped>
  .saleChart {
    
    .amount {
      padding: 8px;
      background-color: #fff;

      margin-bottom: 24px;
    }

    .rate {
      // flex: 1 1 auto;
      padding: 8px;
      background-color: #fff;
    }

    .content {
      height: 400px;
    }
  }
</style>