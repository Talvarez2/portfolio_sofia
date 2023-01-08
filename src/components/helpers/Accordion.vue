<template>
  <div>
    <div v-for="(value, name) in data.data">
      <button class="accordion title-font" :class="[titleColor, bottomColor]">{{ name }}</button>
      <div class="panel"  :class="textColor">
        <ul v-for="(e, idx) in value">
          <li>
            {{ e }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    data: {
      type: Object,
    },
    titleColor: {
      type: String,
      default: "text-red",
    },
    textColor: {
      type: String,
      default: "text-dark-red",
    },
    bottomColor: {
      type: String,
      default: "bottom-red",
    },
  },
};
</script>

<style scoped>
.accordion {
  outline: none !important;
  background-color: transparent;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  font-size: 1.8em;
  transition: 0.4s;
}

.bottom-red {
  border-bottom: 1px solid #D62D22;
}

.bottom-pink {
  border-bottom: 1px solid #F0C6D0;
}

.accordion:hover {
  background-color: rgba(254, 149, 145, 0.336);
}

.accordion:after {

  content: "\002B";
  /* color: #D62D22 !important; */
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.panel {
  padding-top: 10px;
  background-color: transparent;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

ul {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}

li {
  padding-left: 1em;
  text-indent: -1em;
}

li:before {
  content: "-";
  padding-right: 5px;
}

</style>
