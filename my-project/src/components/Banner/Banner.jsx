import React from 'react'
import BannerJpg from '../../assets/BannerJpg.jpg'
import {motion} from 'framer-motion'

const Banner = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14
        place-items-center">
          <div className='relative'>
            <img src={BannerJpg} alt="" 
            className='relative rounded-xl'/>
            <div className='absolute top-[50%] right-[50%] '>

            </div>
          </div>
          <div className='space-y-5 lg:max-w-[400px]'>
            <h1 className='text-6xl  font-semibold font-league '>DELICIOUS cake for special ones</h1>
            <p>Lorem itatum reprehenderit soluta saepe iusto quos, eveniet dolores.</p>
            <button className='btn-primary'>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
  
}

export default Banner
