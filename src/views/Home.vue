<template>
  <div class="home">
    <GoodsList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import GoodsList from "@/components/GoodsList";

export default {
  name: "Home",
  components: {
      GoodsList,
  }
};
</script>
