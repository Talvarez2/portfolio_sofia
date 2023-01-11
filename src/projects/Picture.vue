<template>
  <div class="pt-5 p-st" :class="bgColor">
    <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div v-if="title" class="center-text title title-font text-red">
        {{ title }}
      </div>
      <div class="image">
        <img 
          :src="require(`@/assets/projects/${folder_name}/${picture_name}`)" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Picture",
  props: {
    idx: {
      type: Number,
    },
    part: {
      type: Number,
    },
  },
  data() {
    return {
      bgColor: info.projects[this.idx].parts[this.part].bgColor,
      title: info.projects[this.idx].parts[this.part].title,
      picture_name: info.projects[this.idx].parts[this.part].picture_name,
      folder_name: info.projects[this.idx].folder_name,
    };
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  padding-bottom: 5em;
}
.center-text {
  text-align: center;
}

.title {
  font-size: 3em;
  font-weight: 500;
  padding-bottom: 1em;
}

img {
    max-width: 100%;
}

</style>
