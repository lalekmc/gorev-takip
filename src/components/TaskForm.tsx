import { useState, type FormEvent } from 'react'
import type { Priority, Task, TaskInput } from '../interfaces/Task'

interface Props {
  editing: Task | null
  onSubmit: (input: TaskInput) => void
  onCancel: () => void
}

const empty: TaskInput = { title: '', description: '', priority: 'orta' }

export default function TaskForm({ editing, onSubmit, onCancel }: Props) {
  const [form, setForm] = useState<TaskInput>(
    editing ? { title: editing.title, description: editing.description, priority: editing.priority } : empty,
  )
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.title.trim()) {
      setError('Görev başlığı boş olamaz.')
      return
    }
    onSubmit({ ...form, title: form.title.trim(), description: form.description.trim() })
    if (!editing) setForm(empty)
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h2 className="mb-4 text-lg font-semibold text-slate-700">{editing ? 'Görevi Güncelle' : 'Yeni Görev Ekle'}</h2>
      <div className="grid gap-3 sm:grid-cols-[1fr_160px]">
        <input
          name="title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Görev başlığı"
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
        <select
          name="priority"
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value as Priority })}
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500"
        >
          <option value="dusuk">Düşük öncelik</option>
          <option value="orta">Orta öncelik</option>
          <option value="yuksek">Yüksek öncelik</option>
        </select>
        <textarea
          name="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Açıklama (isteğe bağlı)"
          rows={2}
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 sm:col-span-2"
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <div className="mt-4 flex gap-2">
        <button type="submit" className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700">
          {editing ? 'Kaydet' : 'Ekle'}
        </button>
        {editing && (
          <button type="button" onClick={onCancel} className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-600 hover:bg-slate-200">
            Vazgeç
          </button>
        )}
      </div>
    </form>
  )
}
