<template>
  <div class="flex flex-col w-full justify-center items-center"></div>
  <div class="absolute inset-0 w-full h-[700px] bg-hero-overlay z-40"></div>
  <div class="bg-hero-pattern bg-contain bg-top w-full h-[700px] z-10">
    <!-- Hero  -->

    <div class="flex justify-center items-center pt-[160px] gap-x-[100px]">
      <div class="z-50">
        <img
          src="../assets/hero-logo.png"
          alt="Logo"
          class="w-[400px] h-full object-contain -rotate-[14deg]"
        />
      </div>
      <div class="flex flex-col gap-y-[60px] z-50">
        <img src="../assets/hero-text-1.png" alt="Logo" class="w-[600px] h-full object-contain" />
        <img src="../assets/hero-text-2.png" alt="Logo" class="w-[500px] h-full object-contain" />
      </div>
    </div>
  </div>

  <!-- Leaderboard -->

  <div class="w-full h-[500px]">
    <h1>Leaderboards</h1>
  </div>
</template>

<style scoped>
.font-acme {
  font-family: 'Acme', sans-serif;
}

.font-angkor {
  font-family: 'Angkor', sans-serif;
}

.font-cantarell {
  font-family: 'Cantarell', sans-serif;
}
</style>
