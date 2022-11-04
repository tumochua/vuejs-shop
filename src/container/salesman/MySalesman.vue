<template>
  <div>
    <HeaderVue></HeaderVue>
    <div class="container">
      <ButtonVue class="btn-create-production">Add Production</ButtonVue>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { handleAuthSalesman } from "@/api/index";
import ButtonVue from "@/components/button/Button.vue";
import HeaderVue from "../Header/Header.vue";
export default {
  name: "MySalesman",
  components: { ButtonVue, HeaderVue },
  setup() {
    onMounted(async () => {
      const Salesman = await handleAuthSalesman();
      console.log("Check handleAuthSalesman", Salesman);
    });
  },
};
</script>

<style scoped lang="scss">
</style>