import { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import TaskForm from '../components/TaskForm'
import FilterBar from '../components/FilterBar'
import TaskList from '../components/TaskList'
import type { Filter, Task, TaskInput } from '../interfaces/Task'
import { loadTasks, saveTasks } from '../services/storage'

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks)
  const [editing, setEditing] = useState<Task | null>(null)
  const [filter, setFilter] = useState<Filter>('hepsi')
  const [search, setSearch] = useState('')

  useEffect(() => saveTasks(tasks), [tasks])

  function addTask(input: TaskInput) {
    const task: Task = { ...input, id: crypto.randomUUID(), completed: false, createdAt: new Date().toISOString() }
    setTasks((prev) => [task, ...prev])
  }

  function updateTask(input: TaskInput) {
    if (!editing) return
    setTasks((prev) => prev.map((t) => (t.id === editing.id ? { ...t, ...input } : t)))
    setEditing(null)
  }

  function deleteTask(id: string) {
    if (!confirm('Bu görevi silmek istediğine emin misin?')) return
    setTasks((prev) => prev.filter((t) => t.id !== id))
    if (editing?.id === id) setEditing(null)
  }

  function toggleTask(id: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const visible = useMemo(() => {
    const q = search.toLocaleLowerCase('tr')
    return tasks
      .filter((t) => (filter === 'aktif' ? !t.completed : filter === 'tamamlanan' ? t.completed : true))
      .filter((t) => (t.title + ' ' + t.description).toLocaleLowerCase('tr').includes(q))
  }, [tasks, filter, search])

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Header total={tasks.length} done={tasks.filter((t) => t.completed).length} />
      <TaskForm key={editing?.id ?? 'new'} editing={editing} onSubmit={editing ? updateTask : addTask} onCancel={() => setEditing(null)} />
      <FilterBar filter={filter} search={search} onFilterChange={setFilter} onSearchChange={setSearch} />
      <TaskList tasks={visible} onToggle={toggleTask} onEdit={setEditing} onDelete={deleteTask} />
    </main>
  )
}
