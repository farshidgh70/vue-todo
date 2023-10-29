import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/models/Task'
import { useRoute } from 'vue-router'

export const useTaskStore = defineStore('task', () => {
  // route
  const route = useRoute()

  // refs
  const tasks = ref<Task[]>([])
  const preTasks = ref<Task[]>([])
  const backlogSearch = ref<string>('')

  // computed
  const completedTasks = computed<Task[]>(() => {
    return tasks.value.filter((task: Task) => task.completed)
  })

  const notCompletedTasks = computed<Task[]>(() => {
    return tasks.value.filter((task: Task) => !task.completed && !task.backlog)
  })

  const backlogTasks = computed<Task[]>(() => {
    let result: Task[] = tasks.value.filter((task: Task) => !task.completed && task.backlog)

    if (backlogSearch.value) {
      result = result.filter((el) => el.text.includes(backlogSearch.value))
    }

    return result
  })

  const newId = computed<number>(() => {
    // return (tasks.value.at(-1)?.id ?? 0) + 1
    return tasks.value.length
      ? tasks.value.reduce(
          (max: number, task: Task) => (task.id > max ? task.id : max) + 1,
          tasks.value[0].id
        )
      : 1
  })

  // functions
  function addTask(text: string): void {
    tasks.value.push({
      id: newId.value,
      text,
      completed: false,
      backlog: false,
      createdAt: new Date().getTime()
    })
  }

  function findIndexTask(taskId: number): number {
    const taskIndex: NonNullable<number> = tasks.value.findIndex(
      (task: Task) => task.id === taskId
    ) as number

    return taskIndex
  }

  function removeTask(taskId: number): void {
    const taskIndex: number = findIndexTask(taskId)

    if (taskIndex !== -1) {
      tasks.value.splice(taskIndex, 1)
    }
  }

  function completeTask(task: Task): void {
    const taskIndex: number = findIndexTask(task.id)

    if (taskIndex !== -1) {
      tasks.value[taskIndex].backlog = !tasks.value[taskIndex].backlog
      tasks.value[taskIndex].completed = !tasks.value[taskIndex].completed
    }
  }

  function changeBacklogStatus(task: Task): void {
    const taskIndex: number = findIndexTask(task.id)

    if (taskIndex !== -1) {
      tasks.value[taskIndex].backlog = !tasks.value[taskIndex].backlog
    }
  }

  function sortBacklogByText(): void {
    tasks.value.sort((a: Task, b: Task) => a.text.localeCompare(b.text))
  }

  function sortBacklogByDate(): void {
    tasks.value.sort((a: Task, b: Task) => a.createdAt - b.createdAt)
  }

  // watcher
  watch(route, (newValue: any) => {
    switch (newValue.name) {
      case 'home':
        tasks.value = []
        for (const task of preTasks.value) {
          tasks.value.push(task)
        }
        break
      case 'backlog':
        preTasks.value = []
        for (const task of tasks.value) {
          preTasks.value.push(task)
        }
        break
    }
  })

  return {
    tasks,
    preTasks,
    addTask,
    removeTask,
    completeTask,
    completedTasks,
    notCompletedTasks,
    backlogTasks,
    changeBacklogStatus,
    backlogSearch,
    sortBacklogByText,
    sortBacklogByDate
  }
})
