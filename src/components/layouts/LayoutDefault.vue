<template>
  <div class="LayoutDefault">
    <div class="d-flex align-items-center p-3 mb-3 mb-md-5 bg-white border-bottom box-shadow">
      <span class="mr-auto">Irrelevant</span>
      <nav class="ml-auto">
        <router-link
          class="p-2 text-dark"
          to="/"
        >
          Home
        </router-link> |
        <router-link
          class="p-2 text-dark"
          to="/about"
        >
          About
        </router-link>
      </nav>
    </div>
    <main class="LayoutDefault__main mx-auto">
      <slot/>
    </main>
    <footer class="d-flex align-items-center p-3 bg-white border-top box-shadow">
      &copy; Irrelevant
    </footer>
  </div>
</template>

<script>
export default {
  name: `LayoutDefault`,
};
</script>

<style lang="scss">
.LayoutDefault {
  &__main {
    max-width: 62em;
    padding-right: 1em;
    padding-left: 1em;
  }
}
@media (max-width: 792px) {
  .LayoutDefault {
    &__main {
      padding-right: 3rem;
      padding-left: 4rem;
    }
  }
}
</style>
