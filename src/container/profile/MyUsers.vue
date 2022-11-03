<template>
  <div class="user__wapper">
    <div class="user__header">
      <ProfileHeader />
    </div>
    <ToastVue
      :dateTimes="3000"
      :isToast="isToast"
      @handleCloseToast="handleCloseToast"
      :handleChangeIcon="handleChangeIcon"
      :isErrorToast="false"
    >
      <div>
        <span class="toast__title">Delete</span>
        <p class="toast__description">Delete User successful</p>
      </div>
    </ToastVue>
    <div class="user__body grid">
      <div>
        <ButtonVue @onClickEvent="handleClick" :padding="false"
          >Add New User</ButtonVue
        >
      </div>
      <div class="input__seach">
        <InputVue placeholder="seach.." />
      </div>
      <MyModel :isShow="isShow" @handleHideModal="handleHideModal">
        <template v-slot:header>
          <h1 class="modal-header">Create New Users</h1>
        </template>
        <template v-slot:body>
          <div class="modal__body">
            <div>
              <LableVue>First Name</LableVue>
              <InputVue
                :value="userData.firstName"
                @onChangeValue="handleInput"
                name="firstName"
              ></InputVue>
            </div>
            <div>
              <LableVue>Last Name</LableVue>
              <InputVue
                :value="userData.lastName"
                @onChangeValue="handleInput"
                name="lastName"
              ></InputVue>
            </div>
            <div v-if="isDisabled">
              <LableVue type="email">Email</LableVue>
              <InputVue
                :value="userData.email"
                @onChangeValue="handleInput"
                name="email"
              ></InputVue>
            </div>
            <div v-if="isDisabled">
              <LableVue>Password</LableVue>
              <InputVue
                type="password"
                :value="userData.password"
                @onChangeValue="handleInput"
                name="password"
              ></InputVue>
            </div>
            <div>
              <LableVue>Address</LableVue>
              <InputVue
                :value="userData.address"
                @onChangeValue="handleInput"
                name="address"
              ></InputVue>
            </div>
            <div class="modal__body-select">
              <div class="modal__body-select--wapper">
                <LableVue>gender</LableVue>
                <MySelect
                  :width="true"
                  :value="userData.gender"
                  @onChangeValue="handleInput"
                  name="genderId"
                  :datas="dataSex"
                ></MySelect>
              </div>
              <div class="modal__body-select--wapper">
                <LableVue>admin</LableVue>
                <MySelect
                  :width="true"
                  :value="userData.admin"
                  @onChangeValue="handleInput"
                  name="positionId"
                  :datas="dataRole"
                ></MySelect>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:footer>
          <div class="modal-foooter">
            <ButtonVue
              v-if="changeTextBtn"
              @onClickEvent="handleUpDateUser"
              :primary="true"
              :padding="true"
              :white="true"
            >
              Update</ButtonVue
            >
            <ButtonVue
              v-else
              @onClickEvent="handleClick('register')"
              :primary="true"
              :padding="true"
              :white="true"
            >
              Create</ButtonVue
            >
            <ButtonVue
              @onClickEvent="handleClick"
              :red="true"
              :padding="true"
              :white="true"
              >Close</ButtonVue
            >
          </div>
        </template>
      </MyModel>

      <MyAllUsers
        class="all__user__wapper"
        :dataAllUsers="dataAllUsers"
        :isReder="isReder"
        @handleChange="handleChange"
        @hanldeChangePage="hanldeChangePage"
        @hanldeDelete="hanldeDelete"
        @handleShowModalEdit="handleShowModalEdit"
      ></MyAllUsers>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch, onMounted, onUpdated, computed } from "vue";
import ButtonVue from "@/components/button/Button.vue";
import InputVue from "@/components/input/Input.vue";
import LableVue from "@/components/label/Lable.vue";
import MySelect from "@/components/select/MySelect.vue";
import MyModel from "@/components/model/MyModel.vue";
import ToastVue from "@/components/toast/Toast.vue";

import ProfileHeader from "./ProfileHeader.vue";
import MyAllUsers from "./MyAllUsers.vue";

import {
  handleApiRegister,
  handleGetPagingListUsers,
  handleDeleteUser,
  // handleApiEditUser,
} from "../../api/index";

import { useRoute, useRouter } from "vue-router";
export default {
  name: "MyUsers",
  components: {
    ProfileHeader,
    ButtonVue,
    MyModel,
    InputVue,
    LableVue,
    MySelect,
    MyAllUsers,
    ToastVue,
  },
  setup() {
    const userData = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      genderId: "F",
      positionId: "0",
    });
    const userEdit = ref(null);
    const isShow = ref(false);
    const dataAllUsers = ref(null);
    const watchAllUsers = ref(false);
    const isReder = ref(false);
    const isToast = ref(false);
    const isDisabled = ref(false);

    const changeTextBtn = ref(false);

    const route = useRoute();
    const router = useRouter();

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

    async function getAllUsers() {
      const page = route.params.id;
      const data = await handleGetPagingListUsers(page);
      dataAllUsers.value = data.data;
    }
    getAllUsers();

    function handleShowHideModal() {
      isShow.value = !isShow.value;
    }

    const hanldeChangePage = async (page) => {
      const data = await handleGetPagingListUsers(page);
      dataAllUsers.value = data.data;
    };
    const handleClick = async (register) => {
      changeTextBtn.value = false;
      isDisabled.value = true;
      handleShowHideModal();

      if (register) {
        console.log(userData);
        await handleApiRegister(userData);
        watchAllUsers.value = !watchAllUsers.value;
      }
    };
    const handleUpDateUser = async () => {
      console.log(userData);
    };
    const hanldeDelete = async (item) => {
      try {
        await handleDeleteUser(item);
        watchAllUsers.value = !watchAllUsers.value;
        isToast.value = true;
      } catch (error) {
        console.log(error);
      }
    };

    const handleShowModalEdit = async (user) => {
      router.push({ name: "MyEditUser", params: { id: user.id } });
      // handleShowHideModal();
      // isDisabled.value = false;
      // userData.firstName = user.firstName;
      // userData.lastName = user.lastName;
      // userData.address = user.address;
      // userData.gender = user.gender;
    };
    const handleCloseToast = () => {
      isToast.value = false;
    };
    onUpdated(() => {
      // getAllUsers();
    });
    const handleHideModal = () => {
      isShow.value = false;
    };
    const handleInput = (data) => {
      userData[data.name] = data.value;
    };
    const handleChange = () => {
      isReder.value = !isReder.value;
    };
    const handleChangeIcon = computed(() => {
      return "fa-solid fa-circle-check toast__wapper--icon-success";
    });
    const changeText = computed(() => {
      return changeTextBtn.value ? "Edit" : "Create";
    });

    onMounted(async () => {
      // const data = await handleGetPagingListUsers();
      // dataAllUsers.value = data.data;
      // console.log(dataAllUsers.value);
    });
    watch(watchAllUsers, () => {
      getAllUsers();
    });
    watch(isReder, () => {
      // getAllUsers();
      // console.log("handleChange");
    });

    return {
      userEdit,
      isShow,
      isDisabled,
      isToast,
      changeTextBtn,
      userData,
      dataSex,
      dataRole,
      dataAllUsers,
      handleClick,
      handleHideModal,
      handleInput,
      handleChange,
      hanldeChangePage,
      hanldeDelete,
      handleCloseToast,
      handleChangeIcon,
      changeText,
      handleShowModalEdit,
      handleShowHideModal,
      handleUpDateUser,
    };
  },
};
</script>

<style scoped lang="scss">
.user__wapper {
  height: 500px;
  .user__header {
    background: #21222d;
  }
  .user__body {
    .input__seach {
      width: 20%;
      float: right;
      margin-bottom: 3x;
      margin-right: 3px;
    }
    .modal-header {
      text-align: center;
    }
    .modal__body {
      margin-top: 10px;
      margin-bottom: 10px;
      .modal__body-select {
        display: flex;
        gap: 10px;
        margin-bottom: 3px;
        .modal__body-select--wapper {
          width: 100%;
        }
      }
      .all__user__wapper {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }

    .modal-foooter {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }

    .all__user__wapper {
      margin-top: 10px;
      padding-bottom: 50px;
    }
  }
}
</style>