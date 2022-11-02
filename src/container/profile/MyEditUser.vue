<template>
  <div v-if="userEdit" class="user__edit__wapper grid">
    <div>
      <LableVue>First Name </LableVue>
      <InputVue
        :value="userEdit.firstName"
        @onChangeValue="handleInput"
        name="firstName"
      />
    </div>
    <div class="last__name__wapper">
      <LableVue class="last__name__wapper-title"> Last Name </LableVue>
      <InputVue
        :value="userEdit.lastName"
        @onChangeValue="handleInput"
        name="lastName"
        class="last__name__wapper-imput"
      />
    </div>
    <div>
      <LableVue>Address</LableVue>
      <InputVue
        :value="userEdit.address"
        @onChangeValue="handleInput"
        name="address"
      />
    </div>
    <div>
      <LableVue>Gender</LableVue>
      <MySelectVue :width="true" :value="userEdit.gender"></MySelectVue>
    </div>
    <div>
      <LableVue>Admin</LableVue>
      <MySelectVue :width="true" :value="userEdit.admin"></MySelectVue>
    </div>
    <ButtonVue class="btn-update" @onClickEvent="handleUpdate"
      >Update</ButtonVue
    >
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import LableVue from "@/components/label/Lable.vue";
import InputVue from "@/components/input/Input.vue";
import ButtonVue from "@/components/button/Button.vue";
import MySelectVue from "@/components/select/MySelect.vue";
import { useRoute, useRouter } from "vue-router";

import { handleGetDetailUser, handleApiEditUser } from "../../api/index";
export default {
  name: "MyEditUser",
  components: {
    LableVue,
    InputVue,
    ButtonVue,
    MySelectVue,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const userEdit = ref(null);
    const inputUser = reactive({
      id: route.params.id,
      firstName: "",
      lastName: "",
      address: "",
      gender: "",
      admin: "",
    });

    async function getUserDetail() {
      const user = await handleGetDetailUser(route.params.id);
      userEdit.value = user.data.data;
      console.log(userEdit.value);
    }
    getUserDetail();
    const handleInput = (data) => {
      inputUser[data.name] = data.value;
    };

    const handleUpdate = async () => {
      await handleApiEditUser(inputUser);
      //   console.log(inputUser);
      const page = (route.params.id = 1);
      router.push({ name: "MyUsers", params: { id: page } });
    };

    return { userEdit, handleInput, handleUpdate };
  },
};
</script>

<style scoped lang="scss">
.user__edit__wapper {
  margin-top: 50px;
  .last__name__wapper {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .btn-update {
    margin-top: 10px;
  }
}
</style>