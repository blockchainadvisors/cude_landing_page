import { Puzzle } from 'lucide-react'
import React from 'react'

export default function Card({
    image,
    title, 
    description
}) {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
        <div className='relative rounded-full w-max p-5 overflow-hidden text-white bg-blue-600'>
            { image }
        </div>
        <div className="flex flex-col">
            <h5 className="text-blue-600 font-bold">{title}</h5>
            <span className="text-sm">
                {description}
            </span>
        </div>
    </div>
  )
}

// export default function Card({
//     image,
//     title, 
//     description
// }) {
//   return (
//     <div className="flex flex-col w-full h-full">
//         <div className='h-[350px] md:h-[450px] relative rounded-tr-md rounded-tl-md overflow-hidden'>
//             <img src={image} alt="CardImage" className='absolute object-center object-cover w-full h-full' />
//         </div>
//         <div className="bg-[#189E88] text-white rounded-br-md rounded-bl-md p-5 flex flex-col">
//             <b>{title}</b>
//             <span className="text-xs">
//                 {description}
//             </span>
//         </div>
//     </div>
//   )
// }
