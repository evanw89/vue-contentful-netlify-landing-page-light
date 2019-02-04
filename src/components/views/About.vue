<template>
  <div class="About">
    <div class="About__hero mb-4 mb-md-5 mx-auto text-center">
      <h1 class="display-4">{{ title }}</h1>
      <p class="lead">
        {{ about }}
      </p>
      <div class="overlay"></div>
    </div>
    <div class="About__content-blocks mb-5">
      <app-content-block
        v-for="contentBlock in contentBlocks"
        :key="contentBlock.id"
        v-bind="contentBlock"
      />
    </div>
  </div>
</template>

<script>
import { TimelineLite } from 'gsap'
import { mapActions, mapState } from 'vuex';

import { GET_LANDING_PAGE } from '../../store/action-types';
import { HOME } from '../../models/landing-page';
import landingPage from '../../store/modules/landing-page';

import AppContentBlock from '../app/AppContentBlock.vue';
import AppTeaser from '../app/AppTeaser.vue';

const STORE_NAMESPACE = `landingPage/about`;

export default {
  name: `About`,
  components: {
    AppContentBlock,
    AppTeaser,
  },
  computed: {
    ...mapState(STORE_NAMESPACE, [
      `contentBlocks`,
      `intro`,
      `about`,
      `teasers`,
      `title`,
    ]),
  },
  created() {

    this.$store.registerModule(STORE_NAMESPACE, landingPage);
    if (this.$store.state[STORE_NAMESPACE].id) return;
    this.getLandingPage(HOME);
  },
  mounted() {
    const tl = new TimelineLite()
      .from(".About__hero .overlay", 0.3, {
          opacity: 0, 
          ease: Power2.easeInOut
        }, 
      0)
      .from(".About__hero .overlay", 0.25, {
          scaleX: 0.01,
          ease: Power2.easeInOut
        },
      "-=0.15")
      .from(".About__hero .overlay", 0.15, {
          scaleY: 0.01,
          ease: Power2.easeInOut
        },
      "+=0.15")
      .to(".About__hero .overlay", 0, {
          transformOrigin: "bottom"
        },
      )
      .to(".About__hero .overlay", 0.185, {
          transformOrigin: "bottom center",
          scaleY: 0,
          ease: Power2.easeInOut
        },
      "+=0.25")
      .from(".About__hero h1, .About__hero p", 0.2, {
          opacity: 0,
          ease: Power2.easeInOut
        },
      "-=0.4")
  },
  methods: {
    ...mapActions(STORE_NAMESPACE, {
      getLandingPage: GET_LANDING_PAGE,
    }),
  },
};
</script>

<style lang="scss">
.About {
  &__hero {
    position: relative;
    max-width: 46em;

    .lead {
      white-space: pre-wrap;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #ff6c5d;
      transform-origin: top left;
    }
  }

  &__content-blocks {
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;

    > :not(:last-child) {
      margin-bottom: 4em;
    }
  }

  &__teasers {
    display: flex;
    flex-wrap: wrap;
    margin-top: -1em;
    margin-left: -1em;
    padding-left: 0;
    list-style-type: none;

    > * {
      flex-basis: 16em;
      flex-grow: 9999;
      padding-top: 1em;
      padding-left: 1em;
    }
  }
}
</style>
