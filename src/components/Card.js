import React from 'react'

export default function Card({
    image,
    title, 
    description
}) {
  return (
    <div className="flex flex-col w-full h-full">
        <div className='h-[350px] md:h-[450px] relative rounded-tr-md rounded-tl-md overflow-hidden'>
            <img src={image} alt="CardImage" className='absolute object-center object-cover w-full h-full' />
        </div>
        <div className="bg-[#189E88] text-white rounded-br-md rounded-bl-md p-5 flex flex-col">
            <b>{title}</b>
            <span className="text-xs">
                {description}
            </span>
        </div>
    </div>
  )
}
