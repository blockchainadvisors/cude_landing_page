import React from 'react'

export default function Input({
    placeholder = 'Text',
    type = 'text',
    onChange,
    value
}) {
    if (type === 'textarea') {
        return <textarea 
            rows={6} 
            className="p-3 border border-white rounded-lg bg-transparent text-white text-xs placeholder:text-white placeholder:text-xs outline-none w-full h-full" 
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    } else {
        return <input 
            className="p-3 border border-white rounded-lg bg-transparent text-white text-xs placeholder:text-white placeholder:text-xs outline-none w-full h-full" 
            type="text" 
            placeholder={placeholder} 
            onChange={onChange}
            value={value}
        />
    }
}
