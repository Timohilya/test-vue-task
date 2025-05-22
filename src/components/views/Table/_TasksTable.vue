<template>
  <div class="tasks-table">
    <v-card class="mt-4" flat>
      <template v-slot:text>
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        ></v-text-field>
      </template>

      <v-data-table
        :headers="headers"
        :items="tasks"
        :search="search"
      >
        <template #item.status="{ item }">
          <span
            class="cursor-pointer"
            :class="item.status === COMPLETED ? 'text-green' : 'text-blue'"
            @click="toggleTaskStatus(item.id)"
          >
            {{ item.status }}
          </span>
        </template>
        <template #item.actions="{ item }">
          <div class="d-flex justify-end align-center">
            <v-icon
              small
              class="me-2"
              @click="$emit('open-edit-modal', item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              @click="deleteTaskById(item.id)"
            >
              mdi-delete
            </v-icon>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <info-message
      ref="taskDeletedInfoMessageRef"
      :message="'Task deleted'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { COMPLETED } from '@/consts/statuses'
import useTasksStore from '@/store/tasks'
import InfoMessage from '@/components/common/InfoMessage.vue'

const headers = [
  { key: 'id', title: 'ID', width: '2%' },
  { key: 'name', title: 'Name', width: '75%' },
  { key: 'status', title: 'Status', width: '10%' },
  { key: 'actions', title: '', sortable: false, width: '3%', align: 'end' }
]

defineEmits(['open-edit-modal'])

const { tasks } = storeToRefs(useTasksStore())
const { deleteTask, toggleTaskStatus } = useTasksStore()

const taskDeletedInfoMessageRef = ref(null)
const search = ref('')

const deleteTaskById = (id) => {
  deleteTask(id)
  taskDeletedInfoMessageRef.value.showMessage()
}
</script>