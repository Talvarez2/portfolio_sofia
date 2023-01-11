<template>
  <div class="parent">
    <Home/>
    <Portfolio id="portfolio"/>
    <About id="about" Accordion/>
    <Contact id="contact"/>
    <Footer />
  </div>
</template>

<script>
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "../helpers/Footer";

export default {
  name: "Homepage",
  components: {
    Home,
    About,
    Portfolio,
    Contact,
    Footer,
  },
  props: {
    currentView: {
      type: Array,
      required: true
    }
  },
};
</script>