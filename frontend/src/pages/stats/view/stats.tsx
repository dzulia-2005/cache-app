/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Header from '../components/header'
import { useGetStatQuery } from '../../../react-query/query';
import type { StatResponse } from '../../../api/stats/index.type';
import Button from '../components/button';
import Error from '../components/error';
import ContentBox from '../components/ContentBox';


const Stats:React.FC = () => {
  const {data,isLoading,isError,error,refetch} = useGetStatQuery();
  const stats = data as StatResponse | undefined;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
        <div className="w-full max-w-xl rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl p-6 md:p-8">

          <Header 
            source={stats ? (data as any).source : null} 
          />

          <Button 
            stats={stats} 
            refetch={refetch} 
            isLoading={isLoading}
          />

          <Error 
            isError={isError}
            error={error}
          />

          <ContentBox
            isLoading={isLoading}
            stats={stats}
            isError={isError}
          />
        </div>
    </div>
  )
}

export default Stats