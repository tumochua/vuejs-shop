<template>
  <div>
    <h1>
      {{ storeProvide.state.name }}
    </h1>
    <button @click="hanldeChanName(storeProvide)">click</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  inject: ["storeProvide"],
  setup() {
    // console.log(storeProvide);
    const hanldeChanName = (data) => {
      data.chanName();
      // console.log(data);
    };
    return { hanldeChanName };
  },
};
</script>

<style>
</style>