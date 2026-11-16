export type Priority = 'dusuk' | 'orta' | 'yuksek'

export interface Task {
  id: string
  title: string
  description: string
  priority: Priority
  completed: boolean
  createdAt: string
}

export type TaskInput = Pick<Task, 'title' | 'description' | 'priority'>

export type Filter = 'hepsi' | 'aktif' | 'tamamlanan'
