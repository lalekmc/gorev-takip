import type { Priority, Task } from '../interfaces/Task'

interface Props {
  task: Task
  onToggle: (id: string) => void
  onEdit: (task: Task) => void
  onDelete: (id: string) => void
}

const badge: Record<Priority, { label: string; cls: string }> = {
  dusuk: { label: 'Düşük', cls: 'bg-emerald-100 text-emerald-700' },
  orta: { label: 'Orta', cls: 'bg-amber-100 text-amber-700' },
  yuksek: { label: 'Yüksek', cls: 'bg-rose-100 text-rose-700' },
}

export default function TaskItem({ task, onToggle, onEdit, onDelete }: Props) {
  return (
    <li data-testid="task" className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="mt-1 h-5 w-5 cursor-pointer accent-indigo-600"
        aria-label="Tamamlandı"
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className={`font-medium break-words ${task.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{task.title}</h3>
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badge[task.priority].cls}`}>{badge[task.priority].label}</span>
        </div>
        {task.description && <p className="mt-1 text-sm break-words text-slate-500">{task.description}</p>}
        <p className="mt-1 text-xs text-slate-400">{new Date(task.createdAt).toLocaleString('tr-TR')}</p>
      </div>
      <div className="flex shrink-0 gap-1">
        <button onClick={() => onEdit(task)} className="rounded-md px-2 py-1 text-sm text-indigo-600 hover:bg-indigo-50">
          Düzenle
        </button>
        <button onClick={() => onDelete(task.id)} className="rounded-md px-2 py-1 text-sm text-rose-600 hover:bg-rose-50">
          Sil
        </button>
      </div>
    </li>
  )
}
