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
          href="/"
          @click.prevent="$emit('scroll', 'home')"
        >
          <Logo />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style="font-size: 23px;"
            ><i class="fas fa-bars text-dark-red"></i>
            </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a
                class="nav-link text-dark-red"
                href="/portfolio"
                @click.prevent="$emit('scroll', 'portfolio')"
              >
                Portafolio
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-dark-red"
                href="/about"
                @click.prevent="$emit('scroll', 'about')"
              >
                Sobre mi
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-dark-red"
                href="/contact"
                @click.prevent="$emit('scroll', 'contact')"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "./helpers/Logo";
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
