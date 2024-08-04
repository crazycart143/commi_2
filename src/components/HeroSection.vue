<script setup lang="ts">
import Timer from './Timer.vue'

const playerRanks = [
  { rank: '4th', user: 'wiseau', amount: '$5585.76', prize: '$200' },
  { rank: '5th', user: 'chuckpeterson11', amount: '$4722.49', prize: '$200' },
  { rank: '6th', user: 'Wattsy32', amount: '$4300.00', prize: '$25' },
  { rank: '7th', user: 'ZaMooLah', amount: '$4288.05', prize: '$25' },
  { rank: '8th', user: 'Kurulusaldo', amount: '$3673.69', prize: '$25' },
  { rank: '9th', user: 'adrianbbyxxx', amount: '$2728.38', prize: '$25' },
  { rank: '10th', user: 'Gerome243', amount: '$2505.86', prize: '$25' }
]
</script>

<template>
  <div class="flex flex-col w-full justify-center items-center"></div>
  <div
    class="absolute inset-0 w-full h-[800px] md:h-[500px] lg:h-[640px] bg-hero-overlay z-40"
  ></div>
  <div class="bg-hero-pattern bg-contain bg-top w-full h-[800px] md:h-[500px] lg:h-[640px] z-10">
    <!-- Hero  -->

    <div
      class="flex flex-col md:flex-row justify-center items-center h-full md:pt-[40px] lg:pt-[60px] md:px-10 lg:gap-x-[20px]"
    >
      <div class="z-50">
        <img
          src="../assets/hero-logo.png"
          alt="Logo"
          class="w-[460px] sm:w-[500px] md:w-[540px] h-full object-contain"
        />
      </div>
      <div
        class="flex flex-col justify-center items-center md:justify-start md:items-start gap-y-[40px] lg:gap-y-[60px] z-50"
      >
        <img
          src="../assets/hero-text-1.png"
          alt="hero-text-1"
          class="w-[360px] md:w-[540px] h-full object-contain"
        />
        <img
          src="../assets/hero-text-2.png"
          alt="hero-text-2"
          class="w-[360px] md:w-[500px] h-full object-contain"
        />
      </div>
    </div>
  </div>

  <!-- Leaderboard -->

  <div
    class="flex justify-center items-start w-full bg-[#1C1B1B] h-full md:h-[1160px] lg:h-[1240px] px-[20px] md:px-[40px] lg:px-[120px] py-[40px]"
  >
    <div
      class="flex flex-col justify-start items-center w-full h-full bg-[#111010] rounded-[40px] py-[40px] drop-shadow-white"
    >
      <div class="flex flex-col justify-start items-center">
        <img
          src="../assets/leaderboard-header.png"
          alt="leaderboard-text"
          class="w-[360px] md:w-[600px] object-contain ml-4"
        />
        <Timer />
      </div>

      <!-- Trophies -->

      <div
        class="hidden md:flex justify-center items-end mt-4 gap-x-[40px] lg:gap-x-[80px] lg:pl-8"
      >
        <div class="flex flex-col items-center">
          <img
            src="../assets/bronzeTrophy.png"
            alt="2nd place"
            class="w-[120px] lg:w-[160px] object-contain"
          />
          <p
            class="text-white mt-2 text-center font-titan-one uppercase text-[22px] lg:text-[30px] tracking-widest"
          >
            Jupes
          </p>
          <p class="text-white text-center font-titan-one text-sm">wagered: $9966.28</p>
        </div>
        <div class="flex flex-col justify-center items-center mb-10 relative">
          <img
            src="../assets/goldTrophy.png"
            alt="1st place"
            class="w-[160px] lg:w-[260px] object-contain relative z-10"
          />
          <p
            class="text-white mt-2 text-center font-titan-one uppercase text-[22px] lg:text-[30px] tracking-widest"
          >
            350zgambles
          </p>
          <p class="text-white text-center font-titan-one text-sm">wagered: $21966.30</p>
        </div>
        <div class="flex flex-col items-center">
          <img
            src="../assets/silverTrophy.png"
            alt="3rd place"
            class="w-[120px] lg:w-[160px] object-contain"
          />
          <p
            class="text-white mt-2 text-center font-titan-one uppercase text-[22px] lg:text-[30px] tracking-widest"
          >
            CoffeeLOL
          </p>
          <p class="text-white text-center font-titan-one text-sm">wagered: $13893.54</p>
        </div>
      </div>

      <!-- Player Ranks -->

      <div class="w-full h-full mt-8 px-[20px]">
        <table class="w-full text-white text-center md:mt-[80px] font-saira-condensed">
          <thead>
            <tr>
              <th class="text-[20px] md:text-[30px] font-bold">Ranks</th>
              <th class="text-[20px] md:text-[30px] font-bold">User</th>
              <th class="text-[20px] md:text-[30px] font-bold">Amount</th>
              <th class="text-[20px] md:text-[30px] font-bold">Prize</th>
            </tr>
          </thead>
          <tbody>
            <!-- Data Rows -->
            <tr v-for="rank in playerRanks" :key="rank.rank">
              <td class="py-2 text-[16px] md:text-[20px] font-bold">{{ rank.rank }}</td>
              <td class="py-2 text-[16px] md:text-[20px] font-bold">{{ rank.user }}</td>
              <td class="py-2 text-[16px] md:text-[20px] font-bold">{{ rank.amount }}</td>
              <td class="py-2 text-[16px] md:text-[20px] font-bold text-green-500">
                {{ rank.prize }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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

.font-titan-one {
  font-family: 'Titan One', sans-serif;
}

.font-saira-condensed {
  font-family: 'Saira Condensed', sans-serif;
}

table td {
  padding: 1rem; /* Adds padding to each cell */
}

table th {
  padding: 1rem; /* Adds padding to each header cell */
}
</style>
