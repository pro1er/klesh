import Certificate from '@/components/support/Certificate'
import React from 'react'

export default function CertificateHero() {
  return (
    <div className='bg-back w-full h-[50vh] flex items-center px-44 justify-between'>
        <Certificate name="mnas logo.jpg"/>
        <Certificate name="icc logo.png"/>
        <Certificate name="ilac-mra-seeklogo.png"/>
        <Certificate name="4.png"/>
    </div>
  )
}
