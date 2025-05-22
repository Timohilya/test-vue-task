<template>
  <div class="header">
    <h1>{{ route.name.toUpperCase() }}</h1>
    <button @click="switchViews">
      Switch to {{ otherViewName }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { LIST, TABLE } from '@/consts/views'

defineProps({
  title: {
    type: String,
    required: true
  }
})

const route = useRoute()
const router = useRouter()

const otherViewName = computed(() => {
  return route.name === LIST ? TABLE : LIST
})

const switchViews = () => {
  router.push({ name: otherViewName.value })
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>