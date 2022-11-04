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
      <MySelectVue
        :width="true"
        :datas="dataSex"
        @onChangeValue="handleInput"
        name="genderId"
        :value="userEdit.genderId"
      >
      </MySelectVue>
    </div>
    <div>
      <LableVue>Admin</LableVue>
      <MySelectVue
        :width="true"
        :datas="dataRole"
        @onChangeValue="handleInput"
        name="positionId"
        :value="userEdit.positionId"
      ></MySelectVue>
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
      firstName: null,
      lastName: null,
      address: null,
      genderId: "F",
      positionId: "0",
    });

    const dataSex = reactive([
      {
        id: 1,
        name: "Female",
        value: "F",
      },
      {
        id: 2,
        name: "Male",
        value: "M",
      },
      {
        id: 3,
        name: "Other",
        value: "O",
      },
    ]);

    const dataRole = reactive([
      {
        id: 1,
        name: "User",
        value: 0,
      },
      {
        id: 2,
        name: "Salesman",
        value: 1,
      },
      {
        id: 3,
        name: "Shipper",
        value: 2,
      },
      {
        id: 4,
        name: "Admin",
        value: 5,
      },
    ]);

    async function getUserDetail() {
      const user = await handleGetDetailUser(route.params.id);
      userEdit.value = user.data.data;
      // console.log(userEdit.value);
      inputUser.firstName = userEdit.value.firstName;
      inputUser.lastName = userEdit.value.lastName;
      inputUser.address = userEdit.value.address;
      inputUser.genderId = userEdit.value.genderId;
      inputUser.positionId = userEdit.value.positionId;
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

    return { userEdit, dataSex, dataRole, handleInput, handleUpdate };
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