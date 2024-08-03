<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
</script>

<template>
  <header>
    <div class="w-full mx-10">
      <Navbar />
    </div>
  </header>

  <main class="w-full h-full overflow-hidden">
    <HeroSection />
  </main>

  <footer class="w-full h-full">
    <Footer />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
