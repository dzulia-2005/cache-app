import React from 'react'

interface HeaderProps  {
    source?:"database" | "cache" | null
}

const Header:React.FC<HeaderProps> = ({source}) => {
    const badgeStyle =
    source === "cache"
      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/40"
      : source === "database"
      ? "bg-sky-500/10 text-sky-400 border border-sky-500/40"
      : "bg-slate-700 text-slate-300 border border-slate-600";

  const badgeText =
    source === "cache"
      ? "From Cache"
      : source === "database"
      ? "From Database"
      : "No Data";

  return (
    <div className="flex items-center justify-between gap-3 mb-4">
    <div>
      <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
        Stats Viewer
      </h1>
      <p className="text-xs md:text-sm text-slate-400 mt-1">
        call 
        <span className="font-mono text-slate-300"> /api/stats/get </span> 
        and see the result from the cache or database.
      </p>
    </div>

    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${badgeStyle}`}>
      <span className="mr-1 h-2 w-2 rounded-full bg-sky-400" />
      {badgeText}
    </span>
  </div>
  )
}

export default Header