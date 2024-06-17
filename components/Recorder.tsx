import React from 'react'
import activeAssistantIcon from '../img/active.gif'
import notActiveAssistantIcon from '../img/nontactive.gif'
import Image from 'next/image'


function Recorder() {
  return (
    <div className='flex items-center justify-center'>
      <Image
      src={activeAssistantIcon}
      width={150}
      height={150}
      alt='Recording'
      priority

      />
    
    </div>
  )
}

export default Recorder