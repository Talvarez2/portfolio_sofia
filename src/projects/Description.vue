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
      <div v-if="subtitle" class="center-text subtitle title-font text-red">
        {{ subtitle }}
      </div>
      <div v-if="year" class="center-text year title-font text-red">
        {{ year }}
      </div>
      <div v-if="content" class="center-text text-red">
        <p v-html="content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Description",
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
      title: info.projects[this.idx].parts[this.part].title,
      subtitle: info.projects[this.idx].parts[this.part].subtitle,
      year: info.projects[this.idx].parts[this.part].year,
      content: info.projects[this.idx].parts[this.part].content,
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

.subtitle {
  font-size: 2em;
  font-weight: 300;
  padding-bottom: 1em;
}

.year {
  font-size: 2em;
  font-weight: 300;
  padding-bottom: 1em;
}

</style>
