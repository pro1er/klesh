import React from 'react'

export default function Certificate() {
  return (
    <div className='w-full h-[40vh] bg-black text-white flex justify-between items-center px-[270px] py-[120px]'>
        <div>
            <h1 className='font-bold text-[38px]'>Certificate</h1>
        </div>
        <div className='w-[1px] h-full bg-white'></div>
        <div className='flex gap-8 '>
            <img src="/partner/5.webp" className='h-[129px] '/>
            <img src="/partner/4.webp" className='h-[129px] '/>
            <img src="/partner/6.webp" className='h-[129px] '/>
            <img src="/partner/7.webp" className='h-[129px]'/>
        </div>
    </div>
  )
}
