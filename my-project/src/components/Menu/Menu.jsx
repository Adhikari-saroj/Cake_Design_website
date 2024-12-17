import React from 'react'
import cake6 from '../../assets/cake6.jpg'
import { IoCartOutline } from 'react-icons/io5'
import {motion} from "framer-motion"



 const SlideUp = (delay)=>{
  return{
    hidden:{
      y:'100%',
      opacity:0,
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        duration:0.6,
        delay:delay,
      },

    },
  };
};
{/* Menu section */}
const Menu = () => {
  return (
       <main>
        <div className='container min-h-[600px] flex justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12
          lg:gap-24 place-items-center justify-between relative z-10'>

          <div className='space-y-3 mt-14 text-center md:text-left
          md:mt-0'>
            {/* text section */}
            <motion.h1 
            variants ={SlideUp(0.5)}
            initial='hidden'
            whileInView='show'
            className='relative text-5xl lg:text-7xl
            xl:text-8xl font-bold uppercase text-outline
            text-transparent'>
              DELICIOUS
            </motion.h1>
            <motion.h1 
            variants ={SlideUp(1)}
            initial='hidden'
            whileInView='show'
            className='text-5xl lg:text-7xl
            xl:text-8xl font-bold uppercase'>CAKE
            </motion.h1>
            <motion.p 
             variants ={SlideUp(1.5)}
              initial='hidden'
            whileInView='show'
            className='text-sm'>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Reprehenderit minima iusto, 
              numquam ut possimus vero a itaque laborum, 
             </motion.p>
             {/* Button section */}
             <motion.button 
              variants ={SlideUp(2)}
              initial='hidden'
            whileInView='show'
             className='btn-primary
             inline-block !mt-10'>
              <IoCartOutline className='inline mr-2' />
              Order Now
             </motion.button>
          </div>
         {/* Images section */}
         <div>
           <img src={cake6} alt="" className='w-[450px] img-shadow'/>
         </div>
        </div>
        </div>
        
         {/* Background color section */}
         <motion.div 
         initial={{opacity:0, rotate:60, x:200, y:100}}
         whileInView={{opacity:1, rotate:40, x:0, y:0}}
         className='w-[2500px] h-[2500px] rounded-3xl
         bg-yellow-200 absolute top-[-30%] left-[70%]
         z-0'>

         </motion.div>
       </main>
  )
}

export default Menu

