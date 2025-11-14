import React from 'react'
import type { StatResponse } from '../../../api/stats/index.type';

interface Props {
    isLoading:boolean;
    stats:StatResponse | undefined;
    isError:boolean;
}

const ContentBox:React.FC<Props> = ({isLoading,stats,isError}) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 md:p-5 min-h-[120px]">
    {isLoading && (
      <div className="flex items-center justify-center h-full text-slate-400 text-sm">
        Loading data...
      </div>
    )}

    {!isLoading && !stats && !isError && (
      <div className="flex items-center justify-center h-full text-slate-500 text-sm">
        Press{" "}
        <span className="mx-1 rounded bg-slate-800 px-1.5 py-0.5 font-mono text-xs">
          Load stats
        </span>{" "}
        button to start.
      </div>
    )}

    {!isLoading && stats && (
      <pre className="text-xs md:text-sm text-emerald-300/90 bg-black/40 rounded-lg p-3 overflow-x-auto max-h-72">
        {JSON.stringify(stats, null, 2)}
      </pre>
    )}
  </div>
  )
}

export default ContentBox