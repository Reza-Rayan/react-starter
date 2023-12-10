import React from 'react'

const CustomButton = ({ href, children }) => {
    return (
        <a href={href} className='bg-[#0064AF] border border-[#0064AF] text-white text-[12pt] px-6 py-1 rounded-lg shadow-lg
        inline-block w-auto transition-all
        hover:bg-white hover:text-[#0064AF] hover:shadow-sm '>{children}</a>
    )
}

export default CustomButton