import type { Task } from '../interfaces/Task'

const KEY = 'gorev-takip:tasks'

export function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Task[]) : []
  } catch {
    return []
  }
}

export function saveTasks(tasks: Task[]) {
  localStorage.setItem(KEY, JSON.stringify(tasks))
}
