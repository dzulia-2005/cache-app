import React from 'react'
import type { StatResponse } from '../../../api/stats/index.type';
import type { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

interface Props {
    stats:StatResponse | undefined;
    refetch:(options?: RefetchOptions | undefined) => Promise<QueryObserverResult<StatResponse, Error>>; 
    isLoading: boolean;
}

const Button:React.FC<Props> = ({stats,refetch,isLoading}) => {
  return (
    <div className="flex items-center gap-3 mb-5">
            <button
              className="inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-400 px-4 py-2.5 text-sm font-medium shadow-md shadow-indigo-500/30 transition"
              onClick={()=>refetch()}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Load Stats"}
            </button>

            {stats && (
            <span className="text-xs text-slate-400">
              Lastly updated:
              <span className="font-mono text-slate-200 ml-1">
                {new Date(stats.updateAt).toLocaleString()}
              </span>
            </span>
          )}
          </div>
  )
}

export default Button