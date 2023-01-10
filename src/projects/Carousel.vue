<template>
  <div class="pt-5 p-st bg-pink2">
    <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div v-if="title" class="center-text title title-font text-red">
        {{ title }}
      </div>
      <!-- <div class="image">
        <img 
          :src="require(`../../src/assets/projects/${folder_name}/${picture_name}`)" 
        />
      </div> -->
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Carousel",
  props: {
    idx: {
      type: Number,
    },
    part: {
      type: Number,
    },
  },
  data() {
    console.log(info.projects[this.idx].parts[this.part].title);
    return {
      title: info.projects[this.idx].parts[this.part].title,
      picture_folder_name: info.projects[this.idx].parts[this.part].picture_folder_name,
      folder_name: info.projects[this.idx].folder_name,
    };
  },
};
</script>

<style scoped>
.center-text {
  text-align: center;
}

.title {
  font-size: 3em;
  font-weight: 500;
  padding-bottom: 1em;
}

</style>
