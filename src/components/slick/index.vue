
<template>
  <div class="grid">
    <div class="slick-wapper">
      <div class="slick__left">
        <div v-for="slick in slicks" :key="slick.id">
          <ul style="list-style: none">
            <li>
              <img
                :src="slick.img"
                v-if="couterFirst === slick.id"
                class="slick__img"
              />
            </li>
            <!-- <li>{{ couterLasts }}</li>
            <li>{{ couterFirst }}</li> -->
          </ul>

          <!-- :class="{
              slick__img: slick.id !== 1,
              is__slick__img: slick.id === 1,
            }" -->
        </div>
        <div class="slick__left-btn">
          <button
            @click="handleBack"
            style="margin-right: 5px"
            class="slick__left-arrow-left"
          >
            <i class="fa-solid fa-circle-arrow-left"></i>
          </button>
          <button @click="handleNext" class="slick__left-arrow-right">
            <i class="fa-solid fa-circle-arrow-right"></i>
          </button>
        </div>
      </div>
      <div class="slick__right">
        <p>
          In this case, you're probably easier off listening to input events on
          your question in the dom: vuejs.org/guide/events.html – nils Mar 2,
          2016 at 18:51 In this case, you're probably easier off listening to
          input events on your question in the dom: vuejs.org/guide/events.html
          – nils Mar 2, 2016 at 18:51 In this case, you're probably easier off
          listening to input events on your question in the dom:
          vuejs.org/guide/events.html – nils Mar 2, 2016 at 18:51
        </p>
        <p>
          In this case, you're probably easier off listening to input events on
          your question in the dom: vuejs.org/guide/events.html – nils Mar 2,
          2016 at 18:51 In this case, you're probably easier off listening to
          input events on your question in the dom: vuejs.org/guide/events.html
          – nils Mar 2, 2016 at 18:51 In this case, you're probably easier off
          listening to input events on your question in the dom:
          vuejs.org/guide/events.html – nils Mar 2, 2016 at 18:51
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onUpdated, onMounted, onUnmounted, watch } from "vue";
export default {
  name: "SlickVue",
  setup() {
    const slicks = reactive([
      {
        id: 1,
        img: "https://cf.shopee.vn/file/41dd8a06f3911bd1f378c6275f27a001_xxhdpi",
      },
      {
        id: 2,
        img: "https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban_1.jpg",
      },
      {
        id: 3,
        img: "https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban_2.jpg",
      },
      {
        id: 4,
        img: "https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban_3.jpg",
      },
      {
        id: 5,
        img: "https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban_3.jpg",
      },
    ]);

    let couterFirst = ref(slicks[0].id);
    let couterLasts = ref(slicks.length);
    let mounteds = ref(false);
    let cleaNull = ref(null);

    const handleNext = () => {
      couterFirst.value++;
    };
    const handleBack = () => {
      if (couterFirst.value === slicks[0].id) {
        couterFirst.value = couterLasts.value;
        couterFirst.value--;
      } else {
        couterFirst.value--;
      }
      // if (couterFirst.value === couterLasts.value) {
      //   console.log(couterLasts.value);
      //   console.log("tumochua");
      // }
    };
    const handleUpdate = () => {
      let cleaNull = setInterval(() => {
        couterFirst.value++;
      }, 1000);
      if (cleaNull) {
        clearInterval(cleaNull);
        // console.log("setInterval", cleaNull);
      }
    };

    onUpdated(() => {
      // console.log("tumchua");
      // mounteds.value = setInterval(() => {
      //   couterFirst.value++;
      // }, 1000);
      // console.log("onUpdated ", mounteds.value);
      // clearInterval(mounteds.value);
      handleUpdate();
    });
    onMounted(() => {
      // setTimeout(() => {
      //   couterFirst.value++;
      // }, 1000);
      // clearTimeout(clear);
      // console.log(clear);
    });
    onUnmounted(() => {
      // console.log("tumochus onUnmounted");
    });
    watch(
      couterFirst,
      () => {
        if (couterFirst.value === couterLasts.value + 1) {
          couterFirst.value = slicks[0].id;
        }

        // let result = setInterval(() => {
        //   couterFirst.value++;
        //   }, 1000);
        // clearInterval(result);
        // console.log(names.value);
      }
      // ,
      // {
      //   immediate: true,
      // }
    );

    return {
      slicks,
      handleNext,
      handleBack,
      couterFirst,
      couterLasts,
      mounteds,
      cleaNull,
    };
  },
};
</script>

<style scoped lang="scss">
.grid {
  margin-top: 30px;
  .slick-wapper {
    // overflow: hidden;
    height: 274px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 137px 137px;
    column-gap: 6px;
    .slick__left {
      grid-row: span 3;
      position: relative;

      &:hover {
        .slick__left-btn {
          display: block;
        }
      }
      .slick__left-btn {
        display: none;
        .slick__left-arrow-left {
          position: absolute;
          top: 50%;
          cursor: pointer;
          margin-left: 10px;
        }
        .slick__left-arrow-right {
          position: absolute;
          top: 50%;
          right: 0;
          cursor: pointer;
          margin-right: 10px;
        }
      }
    }
    .slick__img {
      width: 100%;
      height: 274px;
      cursor: pointer;
      // animation: 500ms ease-in animateright;
      transition: opacity 0.7s ease-in-out;
    }

    .slick__right {
      // display: grid;
      // grid-template-columns: auto;
      // grid-row-start: 2;
      // grid-row-end: 3;
      // grid-column-start: 1;
    }
  }
}
</style>