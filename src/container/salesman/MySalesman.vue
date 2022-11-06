<template>
  <div>
    <HeaderVue></HeaderVue>
    <div class="container grid">
      <ButtonVue
        class="btn-create-production"
        primary
        @onClickEvent="handleAddProduction"
        >Add Production</ButtonVue
      >
    </div>
  </div>
</template>

<script>
import ButtonVue from "@/components/button/Button.vue";
import HeaderVue from "../Header/Header.vue";

import { useRouter, useRoute } from "vue-router";
export default {
  name: "MySalesman",
  components: { ButtonVue, HeaderVue },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const handleAddProduction = () => {
      router.push({
        name: "Production",
        params: { id: route.params.id },
      });
      // console.log(route.params.id);
    };

    return { handleAddProduction };
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 30px;
  .btn-create-production {
  }
}
</style>