<template>
  <v-container fluid>
    <header-bar />
    
    <v-card class="mt-4">
      <v-list v-if="tasks.length">
        <v-list-item v-for="task in tasks" :key="task.id">
          <div class="d-flex align-center justify-space-between w-100">
            <span>{{ task.name }}</span>
            <span
              class="cursor-pointer"
              :class="task.status === COMPLETED ? 'text-green' : 'text-blue'"
              @click="toggleTaskStatus(task.id)"
            >
              {{ task.status }}
            </span>
          </div>
        </v-list-item>
      </v-list>
      <p v-else class="text-center pa-4">No data available</p>
    </v-card>

    <form-input
      label="New task"
      @submit="addNewTask"
    />

    <info-message
      ref="taskAddedInfoMessageRef"
      :message="'New task added'"
    />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { COMPLETED, IN_PROGRESS } from '@/consts/statuses'
import useTasksStore from '@/store/tasks'
import HeaderBar from '@/components/common/HeaderBar.vue'
import FormInput from '@/components/common/FormInput.vue'
import InfoMessage from '@/components/common/InfoMessage.vue'

const { tasks } = storeToRefs(useTasksStore())
const { addTask, toggleTaskStatus } = useTasksStore()

const taskAddedInfoMessageRef = ref(null);

const addNewTask = (name) => {
  addTask(name)
  taskAddedInfoMessageRef.value.showMessage()
}
</script>