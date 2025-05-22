<template>
  <div class="edit-modal">
    <v-dialog v-model="isEditModalOpened" max-width="500">
      <v-card>
        <v-card-title>Edit Task</v-card-title>
        <v-card-text>
          <form-input
          label="Task"
          :initial="editedTask.name"
          button-label="Save"
          @submit="saveEdit"
          />
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn text @click="isEditModalOpened = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <info-message
      ref="taskEditedInfoMessageRef"
      :message="'Task edited'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useTasksStore from '@/store/tasks'
import FormInput from '@/components/common/FormInput.vue'
import InfoMessage from '@/components/common/InfoMessage.vue'

const isEditModalOpened = ref(false)
const editedTask = ref(null)
const taskEditedInfoMessageRef = ref(null)

const { updateTaskName } = useTasksStore()

const openEditModal = (task) => {
  editedTask.value = task
  isEditModalOpened.value = true
}

const saveEdit = (name) => {
  updateTaskName(editedTask.value.id, name )
  isEditModalOpened.value = false
  taskEditedInfoMessageRef.value.showMessage()
}

defineExpose({
  openEditModal
});
</script>
