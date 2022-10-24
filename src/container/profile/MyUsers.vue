<template>
  <div class="user__wapper">
    <div class="user__header">
      <ProfileHeader />
    </div>
    <div class="user__body grid">
      <ButtonVue @onClickEvent="handleClick">Add New User</ButtonVue>
      <MyModel :isshow="isshow"></MyModel>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ButtonVue from "@/components/button/Button.vue";
import ProfileHeader from "./ProfileHeader.vue";
import MyModel from "@/components/model/MyModel.vue";
export default {
  name: "MyUsers",
  components: {
    ProfileHeader,
    ButtonVue,
    MyModel,
  },
  setup() {
    const isshow = ref(false);
    const handleClick = () => {
      isshow.value = !isshow.value;
    };
    return { isshow, handleClick };
  },
};
</script>

<style scoped lang="scss">
.user__wapper {
  height: 500px;
  .user__header {
    background: #21222d;
  }
}
</style>