import Certificate from '@/components/support/Certificate'
import React from 'react'

export default function CertificateHero() {
  return (
    <div className='bg-back w-full xl:h-[50vh] h-auto mb-20 flex flex-col xl:flex-row items-center xl:px-44 px-8 gap-8 justify-between 2xl:gap-20 xl:gap-16'>
        <Certificate name="mnas logo.jpg"/>
        <Certificate name="icc logo.png"/>
        <Certificate name="ilac-mra-seeklogo.png"/>
        <Certificate name="4.png"/>
    </div>
  )
}
