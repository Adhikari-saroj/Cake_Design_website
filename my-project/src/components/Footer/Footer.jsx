import React from 'react'
import small_cake from '../../assets/small_cake.jpg';
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    className='bg-indigo-300'
    >
        <div className="container py-14">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
       <div className='space-y-3 lg:max-w-[300px]'>
        <img src= {small_cake}alt="" className='w-24'/>
        <p>
          CAKES
        </p>
        <a href="#"
        className='inline-block mt-6 text-sm'>Contact@food.com
        </a>
       </div>
          <div className="col-span-2 grid grid-cols-2
          md:grid-cols-3 gap-6">
           <div>
            <h1 className='text-xl font-semibold'>Trending</h1>
            <ul className='space-y-3 mt-6'>
                <li className='footer-link'>Cake Builder</li>
                <li className='footer-link'>Cooking</li>
                <li className='footer-link'>Slices</li>
                <li className='footer-link'>Coffee</li>
            </ul>
           </div>

           <div>
            <h1 className='text-xl font-semibold'>Get to know us</h1>
            <ul className='space-y-3 mt-6'>
                <li className='footer-link'>Press</li>
                <li className='footer-link'>Buddy </li>
                <li className='footer-link'>Careers</li>
                <li className='footer-link'>Cake ATM</li>
            </ul>
           </div>

           <div>
            <h1 className='text-xl font-semibold'>Support</h1>
            <ul className='space-y-3 mt-6'>
                <li className='footer-link'>Policy</li>
                <li className='footer-link'>FAQs</li>
                <li className='footer-link'>Shipping</li>
                <li className='footer-link'>Locations</li>
            </ul>
           </div>

           
          </div>
         </div>
        </div>
    </motion.footer>
  )
}

export default Footer
