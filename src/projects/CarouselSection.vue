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
      <div v-if="subtitle" class="center-text subtitle title-font text-red">
        {{ subtitle }}
      </div>
      <div class="carousel-container">
        <Carousel
          :per-page="1"
          :autoplayTimeout="3000"
          :autoplay="true"
          :loop="true"
          :autoplayHoverPause="false"
          :navigationEnabled="true"
          :adjustableHeight="false"
        >
          <Slide v-for="picture in pictures" :key="picture">
            <img :src="picture" />
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "CarouselSection",
  props: {
    idx: {
      type: Number,
    },
    part: {
      type: Number,
    },
  },
  components: {
    Carousel,
    Slide,
  },
  data() {
    var folder_name = info.projects[this.idx].folder_name;
    var picture_folder_name =
      info.projects[this.idx].parts[this.part].picture_folder_name;
    var names = info.projects[this.idx].parts[this.part].names;
    return {
      bgColor: info.projects[this.idx].parts[this.part].bgColor,
      title: info.projects[this.idx].parts[this.part].title,
      picture_folder_name: picture_folder_name,
      folder_name: folder_name,
      pictures: names.map((name) =>
        require(`@/assets/projects/${folder_name}/${picture_folder_name}/${name}`)
      ),
    };
  },
};
</script>

<style scoped>
.center-text {
  text-align: center;
}

.VueCarousel-slide {
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}

.carousel-container {
  margin-left: 25%;
  max-width: 50%;
  height: auto;
  justify-content: center;
}

.VueCarousel {
  max-width: 100%;
  height: auto;
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

@media screen and (max-width: 580px) {
  .title {
    font-size: 2em;
  }
  .subtitle {
    font-size: 1.5em;
  }
}

img {
  max-width: 100%;
  display: block;
  margin: auto;
}
</style>
