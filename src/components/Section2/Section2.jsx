import React from 'react'
import Left from './Left'
import Right from './Right'

const Section2 = () => {
  return (
    <section className='flex items-start justify-center md:flex-nowrap flex-wrap px-14 pt-2 gap-9 w-full'>
        <Left />
      <Right />
    </section>
  )
}

export default Section2
