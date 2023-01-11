<template>
  <div class="py-4 p-st bg-red2">
    <div class="container">
      <ul>
        <li v-for="(project, idx) in projects" :key="idx" class="title">
          <a
            :href="`#/project/${idx}`"
            class="project-link text-pink title-font"
          >
            {{ project.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from "./helpers/Card";
import Modal from "./helpers/Modal";
import DesignModal from "./helpers/DesignModal";
import Carousel from "./helpers/Carousel";
import info from "../../info";

import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Portfolio",
  components: {
    Card,
    Modal,
    VueTabs,
    VTab,
    VueperSlides,
    VueperSlide,
    DesignModal,
  },
  props: {},
  data() {
    return {
      projects: info.projects,
      all_info: info.portfolio,
      desgin_info: info.portfolio_design,
      portfolio_info: [],
      showModal: false,
      showDesignModal: false,
      modal_info: {},
      design_modal_info: {},
      number: 3,
      showBtn: "show more",
      shower: 0,
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
    };
  },
  created() {
    for (var i = 0; i < this.number; i++) {
      this.portfolio_info.push(this.all_info[i]);
    }
  },
  watch: {
    number() {
      this.portfolio_info = [];
      for (var i = 0; i < this.number; i++) {
        this.portfolio_info.push(this.all_info[i]);
      }
    },
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    closeModal() {
      this.showModal = false;
      this.showDesignModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio;
      this.showModal = true;
    },
    showDesignModalFn(design_portfolio) {
      this.design_modal_info = design_portfolio;
      this.showDesignModal = true;
    },
    showMore() {
      if (this.number != this.all_info.length) {
        this.number += 3;

        window.scrollBy({
          top: document.getElementsByClassName("smcard")[0].clientHeight,
          behavior: "smooth",
        });

        if (this.number > this.all_info.length)
          this.number = this.all_info.length;
      }

      if (this.number == this.all_info.length && this.shower == 0) {
        this.shower = 1;
        this.showBtn = "show less";
      } else if (this.number == this.all_info.length && this.shower == 1) {
        var elementPosition = document.getElementById("portfolio").offsetTop;
        window.scrollTo({ top: elementPosition + 5, behavior: "smooth" });
        this.shower = 0;
        this.number = 3;
        this.showBtn = "show more";
      }
    },
  },
};
</script>

<style scoped>
.project-link {
  font-weight: 500;
  display: block;
  width: 100%;
  height: 100%;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}

.project-link:hover {
  background-color: rgba(254, 149, 145, 0.336);
}

.title {
  font-size: 4em;
  font-weight: 500;
  text-align: center;
}

@media only screen and (max-width: 580px) {
  .title {
    font-size: 2em;
  }
}

ul {
  list-style: none;
  padding-left: 0;
}

a {
  text-decoration: none;
}
</style>
