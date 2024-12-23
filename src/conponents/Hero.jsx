import { ChevronRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div style={{
height:'600px',
backgroundImage:`url(https://images.pexels.com/photos/9667512/pexels-photo-9667512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
backgroundSize:'cover',
backgroundPosition:'center'
    }} className=' relative'>
        <div className=''></div>
        <div className=' relative max-w-7xl mx-auto'>
            <div className=' flex lg:h-[650px] justify-center items-center lg:pt-0 pt-20'>
              <div className=' flex flex-col space-y-8  justify-center items-center text-center px-5 md:px-0'>
                <motion.h3
                        initial={{opacity:0,x:-100}}
                        whileInView={{opacity:1 , x:0}}
                        transition={{duration:1 , delay:0.2}} 
                className='text-white text-lg lg:text-xl'>Digital Marketing Agency___</motion.h3>
                <motion.h1 
                initial={{opacity:0,x:100}}
                whileInView={{opacity:1 , x:0}}
                transition={{duration:1 , delay:0.2}}
                className='text-4xl text-zinc-200 lg:text-6xl font-bold'>Grow Your Business With Digital
                  <br/><span className='text-sky-400'>Mareting solution !!</span>
                </motion.h1>
                <motion.p
                initial={{opacity:0,x:-100}}
                whileInView={{opacity:1 , x:0}}
                transition={{duration:1 , delay:0.2}}
                className='text-sm text-zinc-300'> Unlocl your power of digital marketing to grow your business . Our expert strategies drive result and maximize your online potential</motion.p>
                <motion.div
                initial={{opacity:0,y:100}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:1 , delay:0.2}} className='flex gap-3 items-center'>
                  <button className=' hover:bg-green-800 bg-green-700 text-zinc-200 px-4 py-2 rounded-md font-semibold flex items-center'>Get Started<ChevronRight/></button>
                  <button className=' rounded-md px-4 py-2 bg-transparent text-zinc-200 border-2 border-green-200 bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:bg-indigo-700 hover:shadow-indigo-500'>Learn More</button>
                </motion.div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero