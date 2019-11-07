<template>
  <div>
    <LogComp></LogComp>
  </div>
</template>

<script>
import LogComp from "../components/LogComp";

export default {
  name: "home",
  components: {
    LogComp
  },
  data() {
    return {
      display: true
    };
  }
};
</script>
<style scoped>
</style>

