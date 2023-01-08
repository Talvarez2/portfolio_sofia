<template>
  <div
    class="py-4 p-st bg-red2"
  >
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <span class="contact-title text-center title-font text-pink">
            Contáctame.
          </span>
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Accordion 
            :data="skills" 
            titleColor="text-pink" 
            textColor="text-pink" 
            bottomColor="bottom-pink"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "./helpers/Accordion";
import info from "../../info";

export default {
  name: "Contact",
  components: {
    Accordion,
  },
  props: {},
  data() {
    return {
      skills: {
        title: "contact",
        data: info.contact.options,
      },
    };
  },
};
</script>

<style scoped>
.contact-title {
  font-size: 4em;
  font-weight: 500;
}

@media only screen and (max-width: 580px) {
  .contact-title {
    font-size: 3em;
  }
}
</style>