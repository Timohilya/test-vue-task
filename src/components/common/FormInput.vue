<template>
  <v-form ref="formRef">
    <v-text-field
      v-model="value"
      :rules="rules"
      :label="label"
      class="mt-8"
    ></v-text-field>
    <v-btn
      class="mt-2"
      :disabled="!isFormValid"
      @click="handleSubmit"
    >
      {{ buttonLabel }}
    </v-btn>
  </v-form>
</template>

<script setup>
import { ref, computed } from 'vue';

const rules = [
  value => !!value || 'Required.',
  value => (value && value.length >= 3) || 'Min 3 characters',
];

const props = defineProps({
  label: String,
  initial: String,
  buttonLabel: {
    type: String,
    default: 'Add',
  }
});

const emit = defineEmits(['submit']);

const formRef = ref(null);
const value = ref(props.initial || '');

const isFormValid = computed(() => {
  return rules.every(rule => rule(value.value) === true);
});

const handleSubmit = () => {
  emit('submit', value.value); 
  value.value = '';
  formRef.value.resetValidation();
};
</script>
