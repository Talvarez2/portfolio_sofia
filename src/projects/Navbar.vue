<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-pink2 fixed-top p-st"
      :class="{
        'navbar-blur': navbarConfig.blur,
      }"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="#"
        >
          <Logo />
        </a>
        <a
          class="nav-link text-dark-red"
          href="#"
        >
          Inicio
        </a>
      </div>
    </nav>
  </div>
</template>
  
<script>
import Logo from "../helpers/Logo";
import info from "../../info";

export default {
  name: "Navbar",
  props: {},
  data() {
    return {
      navbarConfig: info.config.navbar,
    };
  },
  components: {
    Logo,
  },
  methods: {},
};
</script>

<style scoped>
.nav-link {
  font-weight: 500;
}
.nav-link:hover{
  background-color: rgba(254, 149, 145, 0.336);
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

nav {
  position: fixed !important;
}

.navbar-blur {
  background-color: #ffffff7e;
  backdrop-filter: blur(12px);
}
</style>
