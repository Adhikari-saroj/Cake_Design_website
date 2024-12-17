import React from 'react'
import hotcake1 from '../../assets/hot cake1.png'
import hotcake2 from '../../assets/hot cake2.png'
import hotcake4 from '../../assets/hot cake4.png'
import {motion} from "framer-motion"



const CakeTypesDate = [
    {
        id:1,
        name:'cake1',
        img:hotcake1,
        price:'$4.99',
        delay:0.4
    },
    {
        id:2,
        name:'hot cake2',
        img:hotcake2,
        price:'$5.69',
        delay:0.8
    },
    {
        id:3,
        name:'cake3',
        img:hotcake4,
        price:'$2.49',
        delay:1.2
    },
];
const CakeTypes = () => {
  return (
    <section>
        <div className='container py-12'>
            <h3 className='text-4xl text-center font-semibold
            text-darkGreen uppercase py-8 text-outline text-transparent'>
            Cake Types
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-6'>

                {CakeTypesDate.map((item)=>{
                    return(
                       <div 
                       key={item.id}
                       className='group bg-white/50
                       shadow-md p-3 flex items-center
                       gap-3'>
                        <img src={item.img} alt=""
                        className='w-24 rounded-full img-shadow
                        group-hover:scale-12 transition-all
                        duration-700 group-hover:rotate-[500deg]'/>
                        <div>
                            <h3 className='text-xl font-semibold'>{item.name}</h3>
                            <p className='text-xl text-yellow-400 font-bold'>{item.price}</p>
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
     
}

export default CakeTypes
