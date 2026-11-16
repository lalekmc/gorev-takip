import type { Filter } from '../interfaces/Task'

interface Props {
  filter: Filter
  search: string
  onFilterChange: (f: Filter) => void
  onSearchChange: (s: string) => void
}

const filters: { value: Filter; label: string }[] = [
  { value: 'hepsi', label: 'Hepsi' },
  { value: 'aktif', label: 'Aktif' },
  { value: 'tamamlanan', label: 'Tamamlanan' },
]

export default function FilterBar({ filter, search, onFilterChange, onSearchChange }: Props) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-1 rounded-lg bg-slate-200 p-1">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={`rounded-md px-3 py-1 text-sm font-medium ${filter === f.value ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-800'}`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Görevlerde ara..."
        className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-indigo-500"
      />
    </div>
  )
}
