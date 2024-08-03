<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<template>
  <nav
    class="flex justify-between w-full bg-transparent absolute top-0 left-0 h-[100px] md:h-[80px] p-4 md:px-[30px]"
  >
    <div class="flex justify-start items-center lg:w-[400px] z-50">
      <img src="../assets/logo.png" width="200" height="200" alt="asd" class="w-[200px]" />
    </div>
  </nav>
</template>

<style scoped>
nav,
ul,
li,
a {
  font-family: 'Acme', sans-serif;
}
</style>
