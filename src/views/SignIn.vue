<template>
  <div>
    <LogComp2></LogComp2>
  </div>
</template>

<script>
import LogComp2 from "../components/logComp2";

export default {
  name: "SignIn",
  components: {
    LogComp2
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

