<template>
  <div class="summaryData">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="(d, i) in summaryData" :key="i">
        <div class="content">
          <div class="totalLabel">{{ d.totalLabel }}</div>
          <div class="total">
            {{ d.total | formatPrecision() | thousandthMark }}
          </div>
          <div class="current">{{ d.currentLabel }}: {{ d.current | formatPrecision(0) | thousandthMark }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
  data: function () {
      return {
        summaryData: [
          { totalLabel: '总销售额', total: '726520.888', currentLabel: '今日销售额', current: '3442.9' },
          { totalLabel: '访问量', total: '726520.999', currentLabel: '今日访问量', current: '3442.1234' },
          { totalLabel: '总收藏量', total: '726520.387678', currentLabel: '今日收藏量', current: '3442' },
          { totalLabel: '支付量', total: '726520.8', currentLabel: '今日支付量', current: '3442' },
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
.summaryData {
  overflow: hidden;

  .el-col {
    margin-bottom: 24px;
  }

  .content {
    background-color: #ccc;
    border-radius: 4px;
    .totalLabel {
      padding: 8px;
    }
    .total {
      font-size: 20px;
      line-height: 24px;
      padding: 0 16px 8px;
    }
    .current {
      border-top: 1px solid #fff;
      padding: 8px 16px;
    }
  }
}
</style>