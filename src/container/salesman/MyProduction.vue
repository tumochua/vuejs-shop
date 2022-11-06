<template>
  <div>
    <HeaderVue />
    <div class="container grid">
      <form>
        <div>
          <LableVue>Shop Name</LableVue>
          <InputVue
            placeholder="Shop Name ..."
            :value="products.shop"
            @onChangeValue="handleInput"
            name="shop"
          ></InputVue>
        </div>
        <div>
          <LableVue>Product Name</LableVue>
          <InputVue
            placeholder="Product Name ..."
            :value="products.type"
            @onChangeValue="handleInput"
            name="type"
          ></InputVue>
        </div>
        <div>
          <LableVue>Title</LableVue>
          <InputVue
            placeholder="Title ..."
            :value="products.title"
            @onChangeValue="handleInput"
            name="title"
          ></InputVue>
        </div>
        <div>
          <LableVue>Description</LableVue>
          <InputVue
            placeholder="Description ..."
            mutiline
            :value="products.description"
            @onChangeValue="handleInput"
            name="description"
          ></InputVue>
        </div>
        <div class="flex">
          <div>
            <LableVue>Price</LableVue>
            <InputVue
              placeholder="Price ..."
              :value="products.price"
              @onChangeValue="handleInput"
              name="price"
            ></InputVue>
          </div>
          <div>
            <LableVue>Discount</LableVue>
            <InputVue
              placeholder="Discount ..."
              type="number"
              :value="products.discount"
              @onChangeValue="handleInput"
              name="discount"
            ></InputVue>
          </div>
          <div>
            <LableVue>Quantity</LableVue>
            <InputVue
              placeholder="Quantity ..."
              type="number"
              :value="products.quantity"
              @onChangeValue="handleInput"
              name="quantity"
            ></InputVue>
          </div>
          <div class="product-image">
            <LableVue>Image</LableVue>
            <InputVue
              placeholder="image ..."
              type="file"
              :value="products.image"
              @onChangeValue="handleInput"
              name="image"
            ></InputVue>
            <div class="product-preview">
              <img
                class="product-preview-image"
                :src="previewImage"
                v-if="previewImage"
              />
            </div>
          </div>
        </div>
        <ButtonVue
          primary
          class="btn-add-production"
          @onClickEvent="handleAddProduct"
          >Add</ButtonVue
        >
      </form>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";

import HeaderVue from "../Header/Header.vue";
import LableVue from "@/components/label/Lable.vue";
import InputVue from "@/components/input/Input.vue";
import ButtonVue from "@/components/button/Button.vue";

import { useRoute } from "vue-router";

import { handleCreateProduct } from "../../api/index";

import { handleImageBase64 } from "../../helper/constants";

export default {
  name: "MyProduction",
  components: {
    HeaderVue,
    LableVue,
    InputVue,
    ButtonVue,
  },
  setup() {
    const router = useRoute();

    const products = reactive({
      userId: router.params.id,
      shop: "",
      title: "",
      type: "",
      price: 0,
      discount: 0,
      quantity: 0,
      description: "",
      image: "",
      avatar: "",
    });

    const previewImage = ref(null);

    const handleGetIdRoute = computed(() => {
      return router.params.id;
    });

    async function handlePreviewImage(event) {
      const file = event.target.files[0];
      previewImage.value = URL.createObjectURL(file);
      const base64 = await handleImageBase64.getBase64(file);
      products.avatar = base64;
    }

    const handleInput = async (data) => {
      if (data.name === "image") {
        handlePreviewImage(event);
      }
      products[data.name] = data.value;
    };

    const handleAddProduct = async () => {
      await handleCreateProduct(products);
    };

    return {
      products,
      previewImage,
      handleGetIdRoute,
      handleInput,
      handleAddProduct,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 30px;

  .flex {
    display: flex;
    gap: 10px;
    width: 100%;
  }
  .product-image {
    position: relative;
    .product-preview {
      .product-preview-image {
        position: absolute;
        display: block;
        width: 300px;
        height: 200px;
        object-fit: contain;
      }
    }
  }
  .btn-add-production {
    margin-top: 10px;
  }
}
</style>