interface Props {
  total: number
  done: number
}

export default function Header({ total, done }: Props) {
  const percent = total ? Math.round((done / total) * 100) : 0
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-slate-800">Görev Takip</h1>
      <p className="mt-1 text-slate-500">
        {total} görev · {done} tamamlandı
      </p>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div className="h-full bg-indigo-600 transition-all" style={{ width: `${percent}%` }} />
      </div>
    </header>
  )
}
