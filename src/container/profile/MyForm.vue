<template>
  <div class="user__body grid">
    <ButtonVue @onClickEvent="handleClick" :padding="false"
      >Add New User</ButtonVue
    >
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
                name="gender"
                :datas="dataSex"
              ></MySelect>
            </div>
            <div class="modal__body-select--wapper">
              <LableVue>admin</LableVue>
              <MySelect
                :width="true"
                :value="userData.admin"
                @onChangeValue="handleInput"
                name="admin"
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
    <div>
      <InputVue placeholder="seach" />
    </div>
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
</template>

<script>
import ButtonVue from "@/components/button/Button.vue";
import InputVue from "@/components/input/Input.vue";
import LableVue from "@/components/label/Lable.vue";
import MySelect from "@/components/select/MySelect.vue";
import MyModel from "@/components/model/MyModel.vue";
import MyAllUsers from "./MyAllUsers.vue";
export default {
  nam: "MyForm",
  components: {
    ButtonVue,
    MyModel,
    InputVue,
    LableVue,
    MySelect,
    MyAllUsers,
  },
};
</script>

<style scoped lang="scss">
.user__body {
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
</style>