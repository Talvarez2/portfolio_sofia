<template>
  <div class="py-4 p-st bg-pink2">
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <hr class="hr-red" width="100%" />
        <span class="title title-font text-red">
          <div class="scroll-container">
            <div class="scroll-text">Sobre mi.</div>
            <div class="scroll-text">Sobre mi.</div>
            <div class="scroll-text">Sobre mi.</div>
            <div class="scroll-text">Sobre mi.</div>
            <div class="scroll-text">Sobre mi.</div>
          </div>
        </span>
        <hr class="hr-red hr-bottom" width="100%" />
      </div>
      <div class="row align-items-center overlay description-container">
        <div class="invisible-column column col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5"></div>
        <div class="image col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
          <img :src="picture" />
        </div>
      </div>
      <div class="row">
        <div class="text-font col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <p class="presentation" v-html="presentation.data"></p>
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Accordion :data="skills" :color="text-red"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "./helpers/Accordion";
import info from "../../info";

export default {
  name: "About",
  components: {
    Accordion,
  },
  props: {},
  data() {
    return {
      picture: info.portrait_picture,
      presentation: {
        title: "presentation",
        data: info.about.presentation,
      },
      skills: {
        title: "skills",
        data: info.about.skills,
      },
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 4em;
  font-weight: 500;
}

.hr-red {
  border-color: #d62d22;
}

.hr-bottom {
  margin-bottom: 2em;
}

.scroll-container {
  overflow: hidden;
  display: flex;
  margin: 0 auto;
}

.text-center {
  margin-top: 5em;
}

.scroll-text {
  min-width: 5.5em;
  margin-left: 0px;
  margin-right: 0px;
  animation: slide 3s linear infinite;
}

.image {
  position: absolute;
  margin-top: -20em;
  margin-right: 0;
  right: 0;
}

.presentation {
  margin-top: 1.5em;
}

img {
  max-width: 500px;
  max-height: 500px;
  margin-top: 80px;
}

.container {
  position: relative;
}
.box {
  width: 100%;
  height: 100%;
  position: absolute;
}

.overlay {
  z-index: 9;
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    margin-left: 12em;
    margin-top: -12em;
    border: 2px solid #d62d22;
  }

  .text-center {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin-top: 0;
  }

  .container {
    width: 24em;
  }

  .title {
    font-size: 3em;
    width: 100%;
  }

  .invisible-column {
    display: none;
  }

  .presentation {
    margin-top: 0em;
  }
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-5.5em, 0, 0); /* The image width */
  }
}
</style>
