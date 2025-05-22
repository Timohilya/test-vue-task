<template>
  <v-snackbar v-model="isVisible" color="green" :timeout="2000">
    {{ message }}
  </v-snackbar>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  message: String,
})

const isVisible = ref(false);

const showMessage = () => {
  isVisible.value = true
  setTimeout(() => isVisible.value = false, 2000)
}

defineExpose({
  showMessage
});
</script>
