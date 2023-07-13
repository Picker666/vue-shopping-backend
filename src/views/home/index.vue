<template>
  <div class="home">
    <SummaryInfo />
    <SaleChart />
    <Footer />
  </div>
</template>

<script>
import SummaryInfo from './SummaryInfo.vue';
import SaleChart from './SaleChart.vue';
import Footer from './Footer.vue';

  export default {
  name: 'homePage',
  components: {
    SummaryInfo,
    SaleChart,
    Footer
  },
  data: function () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  padding: 24px;
}
</style>