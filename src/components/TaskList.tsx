import type { Task } from '../interfaces/Task'
import TaskItem from './TaskItem'

interface Props {
  tasks: Task[]
  onToggle: (id: string) => void
  onEdit: (task: Task) => void
  onDelete: (id: string) => void
}

export default function TaskList({ tasks, ...actions }: Props) {
  if (!tasks.length) {
    return <p className="rounded-xl border-2 border-dashed border-slate-300 p-8 text-center text-slate-400">Gösterilecek görev yok.</p>
  }
  return (
    <ul className="space-y-3">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} {...actions} />
      ))}
    </ul>
  )
}
