<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-if="dataAllUsers">
        <tr v-for="item in dataAllUsers.data.data" :key="item.id">
          <th>{{ item.id }}</th>
          <th>{{ item.firstName }}</th>
          <th>{{ item.lastName }}</th>
          <th>{{ item.address }}</th>
          <th>{{ item.genderData.valueEn }}</th>
          <th>{{ item.positionData.valueEn }}</th>
          <th>
            <div class="table-action">
              <i
                class="fa-solid fa-trash table-action--delete"
                @click="hanldeDelete(item.id)"
              ></i>
              <i
                class="fa-solid fa-pen table-action--update"
                @click="handleShowModalEdit(item)"
              ></i>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
    <div
      v-if="dataAllUsers && dataAllUsers.data.totalUsers > 5"
      class="btn__pagination__wappper"
    >
      <ButtonVue
        v-for="(item, index) in 10"
        :key="index"
        @onClickEvent="hanldeChangePage(index + 1)"
        :class="{ active: index === activeItem }"
        >{{ item }}
      </ButtonVue>
    </div>
    <!-- <ButtonVue @onClickEvent="hanldeChangePage(2)">2</ButtonVue>
    <ButtonVue @onClickEvent="hanldeChangePage(3)">3</ButtonVue> -->
  </div>
</template>

<script>
import { ref, watch, computed, onMounted, onUpdated } from "vue";
// import { handleGetPagingListUsers } from "../../api/index";
import { useRouter } from "vue-router";
import ButtonVue from "@/components/button/Button.vue";
// import { usersDelete } from "../../helper/constants";
// import { handleDeleteUser } from "../../api/index";

export default {
  name: "MyAllUsers",
  components: {
    ButtonVue,
  },
  props: {
    dataAllUsers: {
      type: Object,
    },
    isReder: {
      type: Boolean,
    },
  },
  setup({ dataAllUsers }, { emit }) {
    // console.log(dataAllUsers);
    const router = useRouter();
    const activeItem = ref(0);

    const handleCheckUsers = computed(() => {
      return dataAllUsers ? dataAllUsers.data.data : [];
    });
    onMounted(() => {});
    onUpdated(() => {});
    const hanldeChangePage = (page) => {
      try {
        activeItem.value = page - 1;
        // await handleGetPagingListUsers(page);
        router.push({ name: "MyUsers", params: { id: page } });
        emit("hanldeChangePage", page);
      } catch (error) {
        console.log(error);
      }
    };

    const hanldeDelete = (item) => {
      try {
        emit("hanldeDelete", item);
        // await handleDeleteUser(item);
      } catch (error) {
        console.log(error);
      }
    };
    const handleShowModalEdit = (user) => {
      emit("handleShowModalEdit", user);
    };

    watch(dataAllUsers, () => {
      console.log("change dataAllUsers");
    });

    return {
      activeItem,
      handleCheckUsers,
      hanldeChangePage,
      hanldeDelete,
      handleShowModalEdit,
    };
  },
};
</script>

<style scoped lang="scss">
.all_user_wapper {
}
table {
  width: 100%;
  margin-top: 30px;
  /* border: 1px solid #343a40; */
  border-collapse: collapse;
  font-size: 1.8rem;
}

th,
td {
  /* border: 1px solid #343a40; */
  padding: 16px 24px;
  text-align: left;
}

thead th {
  background-color: #087f5b;
  color: #fff;
  width: 25%;
}

tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

tbody tr:nth-child(odd) {
  background-color: #e9ecef;
}
.btn__pagination__wappper {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  margin-right: 10px;
  .btn {
    background: transparent;
  }
  .active {
    // background: violet;
    border: 1px solid #4200ff;
  }
}
.table-action {
  display: flex;
  gap: 20px;
  .table-action--delete {
    color: var(--btn-color);
    cursor: pointer;
  }
  .table-action--update {
    color: var(--color-primary);
    cursor: pointer;
  }
}
</style>