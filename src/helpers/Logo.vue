<template>
  <div class="logo-div title-font text-red">
    <span
      class="logo-title-name"
    >
      {{ name }}
    </span>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Logo",
  props: {},
  data() {
    return {
      name: info.logo_name,
    };
  },
};
</script>

<style scoped>

.logo-title-name {
  font-size: 35px;
  transition: 0.5s all;
}

@media only screen and (max-width: 580px) {
  .logo-title-name {
    font-size: 25px;
  }
}
</style>
