<template>
  <h1 class="font-titan-one text-white text-xl">
    {{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s
  </h1>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'Timer',
  setup() {
    const days = ref(0)
    const hours = ref(0)
    const minutes = ref(0)
    const seconds = ref(0)

    let interval

    const updateTimer = () => {
      const eventDate = new Date('2024-08-15T00:00:00')
      const currentTime = new Date()
      const difference = eventDate - currentTime

      if (difference > 0) {
        days.value = Math.floor(difference / (1000 * 60 * 60 * 24))
        hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        seconds.value = Math.floor((difference % (1000 * 60)) / 1000)
      } else {
        clearInterval(interval)
      }
    }

    onMounted(() => {
      updateTimer()
      interval = setInterval(updateTimer, 1000)
    })

    onBeforeUnmount(() => {
      clearInterval(interval)
    })

    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
}
</script>

<style scoped>
.font-titan-one {
  font-family: 'Titan One', sans-serif;
}
</style>
