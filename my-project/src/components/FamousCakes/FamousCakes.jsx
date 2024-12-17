import React from 'react'
import hotcake1 from '../../assets/hot cake1.png'
import hotcake2 from '../../assets/hot cake2.png'
import hotcake4 from '../../assets/hot cake4.png'
import {motion} from "framer-motion"




const FamousCakesData = [
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
        price:'$6.99',
        delay:0.8
    },
    {
        id:3,
        name:'cake3',
        img:hotcake4,
        price:'$5.99',
        delay:1.2
    },
];
const FamousCakes = () => {
  return (
    <section>
     <div className="container py-24">
        <h3 className='text-4xl text-center font-league text-transparent 
        text-outline py-8 font-semibold'>List of Famous Cakes</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-6 place-items-center">
          {FamousCakesData.map((item)=>{
            return(
               <div className='group space-y-3 text-center
               bg-white/50 shadow-xl p-3 rounded-xl'>
                <img src={item.img} alt="" className='
                w-44 mx-auto img-shadow group-hover:scale-x-110-
                group-hover:translate-y-[-50px]
                group-hover:rotate-[50deg]
                transition-all duration-700'/>
                <div>
                    <button className='btn-primary
                    group-hover:mb-3 opacity-0 group-hover:opacity-100'>Buy Now</button>
                    <p className='text-xl font-semibold'>{item.name}</p>
                    <p className='text-xl font-bold text-yellow-400'>{item.price}</p>
                </div>
                </div> 
            );
          })}
        </div>
        </div>   
    </section> 
  )
}

export default FamousCakes
