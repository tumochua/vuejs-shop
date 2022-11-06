<template>
  <div class="product-container">
    <MyProductionVue />
  </div>
</template>

<script>
import MyProductionVue from "../product/MyProducts.vue";
export default {
  name: "MyBody",
  components: {
    MyProductionVue,
  },
};
</script>

<style scoped lang="scss">
.product-container {
  margin-top: 10px;
}
</style>