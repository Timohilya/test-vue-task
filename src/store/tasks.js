import { defineStore } from 'pinia'
import { COMPLETED, IN_PROGRESS } from '@/consts/statuses'

const useProjectsStore = defineStore('projects', {
  state: () => ({
    tasks: [
      { id: 1, name: 'Task 1', status: COMPLETED },
      { id: 2, name: 'Task 2', status: IN_PROGRESS }
    ]
  }),

  getters: {
    all: (state) => state.tasks,
  },

  actions: {
    addTask(name) {
      const newId = this.tasks.length ? this.tasks.at(-1).id + 1 : 1
      this.tasks.push({ id: newId, name, status: IN_PROGRESS })
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    },
    updateTaskName(id, name) {
      const task = this.tasks.find(t => t.id === id)
      task.name = name
    },
    toggleTaskStatus(id) {
      const task = this.tasks.find(t => t.id === id)
      task.status = task.status === IN_PROGRESS ? COMPLETED : IN_PROGRESS
    }
  }
})

export default useProjectsStore