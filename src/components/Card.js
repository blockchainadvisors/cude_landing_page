import React from 'react'
import { useWindowSize } from '@uidotdev/usehooks';

export default function Card({
    image,
    title,
    description,
    splitTitleOnXs
}) {

    const { width } = useWindowSize();
    const titleList = title.split(" ");
    
    return (
        <div className="flex flex-col gap-5 w-full h-full">
            <div className='flex items-center justify-center relative rounded-full w-[84px] aspect-square overflow-hidden text-white bg-blue-600'>
                {image}
            </div>
            <div className="flex flex-col gap-1">
                <h5 className="text-blue-600 font-bold leading-none">{(width <= 767 && splitTitleOnXs) ? <>{titleList[0]}<br />{titleList[1]}</> : title} {splitTitleOnXs}</h5>
                <span className="text-xs lg:text-sm line-clamp-2">
                    {description}
                </span>
            </div>
        </div>
    )
}