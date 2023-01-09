<template>
  <div>
    <h1>Project  {{ idx }}</h1>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    idx: {
      type: String,
    },
  },
};
</script>