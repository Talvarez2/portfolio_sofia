<template>
  <div
    class="pt-5 p-st bg-pink2"
  >
    <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <span class="home-title text-center title-font text-red box">
        <div class="scroll-container">
          <div class="scroll-text">PORTAFOLIO.</div>
          <div class="scroll-text">PORTAFOLIO.</div>
          <div class="scroll-text">PORTAFOLIO.</div>
        </div>
      </span>
      <div class="row align-items-center overlay description-container">
        <div class="column col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <div class="description text-font">
            <p v-html="description"></p>
          </div>
        </div>
        <div class="image col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
          <img :src="picture" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

import Wave from "./helpers/Wave";

export default {
  name: "Home",
  components: {
    Wave,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      linkedin: info.links.linkedin,
      github: info.links.github,
      behance: info.links.behance,
      resume: info.links.resume
    };
  },
};
</script>

<style scoped>
.home-title {
  font-size: 8em;
  font-weight: 500;
}

.column {
  position: absolute;
  margin-bottom: 0;
  bottom: 0;
}

.description-container {
  position: relative;
  height: 550px;
}

.description { 
  position: absolute;
  margin-bottom: 0;
  bottom: 0;
}

.image {
  position: absolute;
  margin-right: 0;
  right: 0;
}

.scroll-container {
  overflow: hidden;
  display: flex;
  margin: 0 auto;
}

.scroll-text {
  min-width: 8em;
  margin-left: 0px;
  margin-right: 0px;
  animation: slide 10s linear infinite;
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-8em, 0, 0); /* The image width */
  }
}

img {
  max-width: 800px;
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
  .box {
    width: 90%;
  }

  .description { 
    width: 90%;
  }

  img {
    object-fit: cover;
    /* border-radius: 50%; */
    margin-top: -20em;
    margin-left: -10em;
    height: 300px;
    /* margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205); */
  }

  .home-title {
    font-size: 4em;
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #759CC9;
  color: #759CC9;
}

.btn:hover {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.btn:focus {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.btn:focus {
  outline: none !important;
}

p {
  text-align: justify;
  font-weight: 400;
}

/* LEAVES */
</style>
