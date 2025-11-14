import React from 'react'

interface Props {
    isError:boolean;
    error:Error | null
}

const Error:React.FC<Props> = ({isError,error}) => {
  return (
    <>
        {isError && (
            <div className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs md:text-sm text-red-300">
                {(error)?.message || "Something went wrong"}
            </div>
        )}
    </>
  )
}

export default Error