<template>
  <div class="body-wapper">
    <div v-if="allProducts" class="body-container">
      <div
        class="card-container"
        v-for="allProduct in allProducts.data.data"
        :key="allProduct.id"
      >
        <div class="card-item" @click="handleDetailProduct(allProduct.id)">
          <img :src="allProduct.image" class="image-base64" />
          <div class="card-item-body">
            <div class="card-item-shop-name">Shop: {{ allProduct.shop }}</div>
            <p class="card-item-title">{{ allProduct.title }}</p>
            <SpanVue class="card-item-discount">
              {{ allProduct.discount }} % discount
            </SpanVue>
            <p class="card-item-price">đ{{ allProduct.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onUpdated } from "vue";

import SpanVue from "@/components/span/Span.vue";

import { handleGetAllProduct } from "@/api/index";

import { useRouter } from "vue-router";

export default {
  components: { SpanVue },
  name: "MyProducts",
  setup() {
    const router = useRouter();

    const allProducts = ref(null);

    async function getAllProduct() {
      allProducts.value = await handleGetAllProduct();
      console.log("allProduct", allProducts.value);
    }

    getAllProduct();

    const handleDetailProduct = (id) => {
      router.push({ name: "DetailProduct", params: { id: id } });
    };

    onUpdated(() => {});
    return { allProducts, handleDetailProduct };
  },
};
</script>

<style scoped lang="scss">
.body-wapper {
  padding-top: 20px;
  display: flex;
  gap: 5px;
  .body-container {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
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
}
</style>