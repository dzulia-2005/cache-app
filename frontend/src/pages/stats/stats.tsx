import React from 'react'

const stats:React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
  <div className="w-full max-w-xl rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl p-6 md:p-8">

    {/* Header */}
    <div className="flex items-center justify-between gap-3 mb-4">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
          Stats Viewer
        </h1>
        <p className="text-xs md:text-sm text-slate-400 mt-1">
          გამოიძახე 
          <span className="font-mono text-slate-300"> /api/stats/get </span> 
          და ნახე შედეგი ქეშიდან ან ბაზიდან.
        </p>
      </div>

      {/* Badge */}
      <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/40">
        <span className="mr-1 h-2 w-2 rounded-full bg-sky-400" />
        Source
      </span>
    </div>

    {/* Button */}
    <div className="flex items-center gap-3 mb-5">
      <button
        className="inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-400 px-4 py-2.5 text-sm font-medium shadow-md shadow-indigo-500/30 transition"
      >
        Load stats
      </button>

      <span className="text-xs text-slate-400">
        Lastly updated: 
        <span className="font-mono text-slate-200 ml-1">
          date_here
        </span>
      </span>
    </div>

    {/* Error */}
    <div className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs md:text-sm text-red-300">
      Error message here
    </div>

    {/* Content box */}
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 md:p-5 min-h-[120px]">
      <div className="flex items-center justify-center h-full text-slate-400 text-sm">
        Content goes here
      </div>
    </div>

  </div>
</div>
  )
}

export default stats