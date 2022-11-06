<template>
  <div class="body-wapper">
    <div v-if="allProducts">
      <div
        class="card-container"
        v-for="allProduct in allProducts.data.data"
        :key="allProduct.id"
      >
        <div class="card-item">
          <img :src="allProduct.image" class="image-base64" />
          <div class="card-item-body">
            <div class="card-item-shop-name">Shop: {{ allProduct.shop }}</div>
            <p class="card-item-title">{{ allProduct.title }}</p>
            <span class="card-item-discount" v-if="allProduct.discount > 0">
              {{ allProduct.discount }} % discount
            </span>
            <p class="card-item-price">đ{{ allProduct.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onUpdated } from "vue";

import { handleGetAllProduct } from "@/api/index";

export default {
  components: {},
  name: "MyProducts",
  setup() {
    const allProducts = ref(null);

    async function getAllProduct() {
      allProducts.value = await handleGetAllProduct();
      console.log("check product", allProducts.value.data);
    }

    getAllProduct();

    onUpdated(() => {});
    return { allProducts };
  },
};
</script>

<style scoped lang="scss">
.body-wapper {
  padding-top: 20px;
  .card-container {
    width: 190px;
    overflow: visible;
    border: 1px solid transparent;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 0.125rem;
    background: #fff;
    padding: 3px;
    &:hover {
      z-index: 2;
      cursor: pointer;
      transform: translateY(-2px);
      box-shadow: 27px 26px 66px -6px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: 27px 26px 66px -6px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 27px 26px 66px -6px rgba(0, 0, 0, 0.4);
    }

    .card-item {
      .image-base64 {
        width: 100%;
        height: 65%;
        object-fit: contain;
        padding: 3px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.87);
      }
      .card-item-body {
        padding: 5px;
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.87);
        line-height: 17px;
        .card-item-shop-name {
          color: var(--colers);
        }
        .card-item-title {
          word-wrap: break-word;
          white-space: normal;
          overflow: hidden;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .card-item-discount {
          color: white;
          background-color: rgb(246, 145, 19);
          padding: 3px;
          margin-top: 3px;
          margin-bottom: 3px;
          display: inline-block;
          border-radius: 3px;
        }
        .card-item-price {
          color: var(--colers);
        }
      }
    }
    .card-item-foo {
    }
  }
}
</style>