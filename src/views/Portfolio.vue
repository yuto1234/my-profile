<template>
  <div class="portfolio">
    <h1>Portfolio List</h1>
    <div class="portfolio-list">
      <PortfolioList/>
    </div>
  </div>
</template>

<script>
import PortfolioList from '@/components/PortfolioList.vue'
export default {
  name: 'portfolio',
  components: {
    PortfolioList,
  }
}
</script>

<style scoped>
.portfolio {
  width: 70vw;
  margin: 0 auto;
}

.portfolio-list{
  width: 70vw;
  margin: 0 auto;
}
</style>