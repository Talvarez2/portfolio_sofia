<template>
  <div id="app">
    <Navbar/>
    <div v-for="(part, index) in parts">
      <Description v-if="part.type==='Description'" :idx="parseInt(idx)" :part="index"/>
      <Picture v-if="part.type==='Picture'" :idx="parseInt(idx)" :part="index"/>
      <CarouselSection v-if="part.type==='Carousel'" :idx="parseInt(idx)" :part="index"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import info from "../../info";

import Navbar from "./Navbar";
import CarouselSection from "./CarouselSection";
import Description from "./Description";
import Picture from "./Picture";
import Footer from "../helpers/Footer";

export default {
  name: "Project",
  components: {
    Navbar,
    CarouselSection,
    Description,
    Picture,
    Footer,
  },
  props: {
    idx: {
      type: Number,
    },
  },
  data() {
    return {
      parts: info.projects[this.idx].parts,
    };
  },
};
</script>

<style>
#app {
  font-family: "Minion Pro", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #B4312C;
  width: 100%;
}

@media screen and (max-width: 580px) {
  #app {
    width: fit-content;
  }
}

.parent {
  margin-top: 38px;
  padding-top: 40px;
  position: relative;
}

.pgray {
  color: #535a5e;
}

.pblue {
  color: #759cc9;
}

.bg-pink2 {
  background-color: #F0C6D0 !important;
}

.bg-red2 {
  background-color: #D62D22 !important;
}

.text-pink {  
  color: #FAE5EA !important;
}

.text-red {
  color: #D62D22 !important;
}

.text-dark-red {
  color: #B4312C !important;
}

.text-light {
  color: #d3d2d2 !important;
}

.title-font {
  font-family: "Neue Haas Grotesk Display Pro 65", sans-serif !important;
  font-weight: bold !important;
}

.p-st {
  transition: all 0.5s !important;
}

/* To set scrollbar width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 9px;
  border: 2px solid white; /* Use your background color instead of White */
  background-clip: content-box;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #aeaeae;
  border-radius: 9px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #949494;
}

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: #64808e;
  color: white;
  border-radius: 8px;
  font-size: 10px;
  /* padding: 5px 10px 4px; */
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: #64808e;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 10px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s, visibility 0.5s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
