import React from 'react'

export default function Grid() {
  return (
    <div className="fixed top-0 left-0 px-10 w-full h-full -z-[1]">
        <div className="flex items-center justify-between w-full h-full">
            <div className="h-full w-max flex gap-[17px] -ml-5">
                <div className="h-full border border-neutral-100 border-dashed"></div>
                <div className="h-full border border-neutral-100 border-dashed"></div>
            </div>
            
            <div className="h-full w-max flex gap-[17px]">
                <div className="h-full border border-neutral-100 border-dashed"></div>
                <div className="h-full border border-neutral-100 border-dashed"></div>
            </div>

            <div className="h-full w-max flex gap-[17px]">
                <div className="h-full border border-neutral-100 border-dashed"></div>
                <div className="h-full border border-neutral-100 border-dashed"></div>
            </div>

            <div className="h-full w-max flex gap-[17px] -mr-5">
                <div className="h-full border border-neutral-100 border-dashed"></div>
                <div className="h-full border border-neutral-100 border-dashed"></div>
            </div>
        </div>
    </div>
  )
}
