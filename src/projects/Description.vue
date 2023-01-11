<template>
  <div class="pt-5 p-st" :class="bgColor">
    <div
      class="container description-container"
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
      <div v-if="content" class="content center-text text-dark-red">
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
      bgColor: info.projects[this.idx].parts[this.part].bgColor,
      title: info.projects[this.idx].parts[this.part].title,
      subtitle: info.projects[this.idx].parts[this.part].subtitle,
      year: info.projects[this.idx].parts[this.part].year,
      content: info.projects[this.idx].parts[this.part].content,
    };
  },
};
</script>

<style scoped>

.description-container {
  padding: 0 15%;
}
.center-text {
  text-align: center;
}

.title {
  font-size: 3em;
  font-weight: 500;
  padding-bottom: 0.3em;
}

.subtitle {
  font-size: 2em;
  font-weight: 300;
  padding-bottom: 0.3em;
}

.year {
  font-size: 2em;
  font-weight: 300;
  padding-bottom: 0.3em;
}

.content {
  font-size: 1em;
  padding-bottom: 3em;
}

</style>
