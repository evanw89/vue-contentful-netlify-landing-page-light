<template>
  <layout-default>
    <transition 
      name="slide-fade"
      mode="out-in">
      <router-view/>
    </transition>
  </layout-default>
</template>

<script>
import LayoutDefault from './layouts/LayoutDefault.vue';

export default {
  name: `App`,
  components: {
    LayoutDefault,
  },
};
</script>

<style lang="scss">
p {
  &:last-child {
    margin-bottom: 0;
  }
}
.slide-fade-enter-active {
  transition: 0.3s ease;
}
.slide-fade-leave-active {
  transition: 0.15s ease; 
}
.slide-fade-enter {
  min-height: 100vh;
  transform: translateX(-40px);
  opacity: 0;
}
.slide-fade-leave-to {
  min-height: 100vh;
  transform: translateX(40px);
  opacity: 0;
}
</style>

