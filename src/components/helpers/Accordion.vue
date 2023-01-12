<template>
  <!-- <vsa-list> -->
    <!-- Here you can use v-for to loop through items  -->
    <!-- <div v-for="(value, name) in data.data">
      <vsa-item>
        <vsa-heading class="accordion-title" :class="[titleColor, bottomColor]">
          {{ name }}
        </vsa-heading>

        <vsa-content>
          <ul v-for="(e, idx) in value">
            <li class="text-font">
              {{ e }}
            </li>
          </ul>
        </vsa-content>
      </vsa-item>
    </div>
  </vsa-list> -->
  <div>
    <div v-for="(value, name) in data.data">
      <div class="title-font" :class="[titleColor, bottomColor]">{{ name }}</div>
      <div :class="textColor">
        <ul v-for="(e, idx) in value">
          <li>
            {{ e }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- <div>
    <div v-for="(value, name) in data.data">
      <button class="accordion-title title-font" :class="[titleColor, bottomColor]">{{ name }}</button>
      <div class="panel"  :class="textColor">
        <ul v-for="(e, idx) in value">
          <li>
            {{ e }}
          </li>
        </ul>
      </div>
    </div>
  </div> -->
</template>

<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

export default {
  name: "Accordion",
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon
  },
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
/* .vsa-list {
  outline: none !important;
  background-color: transparent !important;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  font-size: 1.8em;
  transition: 0.4s;
  --vsa-text-color: red;
  --vsa-highlight-color: rgba(85, 119, 170, 1);
  --vsa-bg-color: rgba(255, 255, 255, 1);
  --vsa-border-color: rgba(0, 0, 0, 0.2);
  --vsa-border-width: 1px;
  --vsa-border-style: solid;
  --vsa-heading-padding: 1rem 1rem;
  --vsa-content-padding: 1rem 1rem;
  --vsa-default-icon-size: 1;
}

.vsa-content {
  color: #D62D22 !important;
} */

/* .vsa-item {
  outline: none !important;
  background-color: transparent !important;
  color: transparent !important;
} */
/* .vsa-item__heading {
  outline: none !important;
  background-color: transparent !important;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  font-size: 1.8em;
  transition: 0.4s;
} */

.bottom-red {
  border-bottom: 1px solid #D62D22;
}

.bottom-pink {
  border-bottom: 1px solid #F0C6D0;
}

.accordion-title:hover {
  background-color: rgba(254, 149, 145, 0.336);
}

.accordion-title:after {

  content: "\002B";
  color: #D62D22 !important;
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
