<template>
  <v-container fluid>
    <header-bar />

    <tasks-table @open-edit-modal="item => editModalRef.openEditModal(item)"/>

    <form-input
      label="Task"
      @submit="addTaskByName"
    />

    <edit-modal ref="editModalRef"/>

    <info-message
      ref="taskAddedInfoMessageRef"
      :message="'Task added'"
    />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import useTasksStore from '@/store/tasks'
import HeaderBar from '@/components/common/HeaderBar.vue'
import FormInput from '@/components/common/FormInput.vue'
import InfoMessage from '@/components/common/InfoMessage.vue'
import TasksTable from './_TasksTable.vue'
import EditModal from './_EditModal.vue'

const { addTask } = useTasksStore()

const editModalRef = ref(null)
const taskAddedInfoMessageRef = ref(null)

const addTaskByName = (name) => {
  addTask(name)
  taskAddedInfoMessageRef.value.showMessage()
}
</script>