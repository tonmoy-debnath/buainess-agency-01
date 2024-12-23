import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
    const [open , setOpen] = useState(false)

    const NavHandler = ()=>{
        setOpen(!open)
        if(open){
            document.body.style.overflow = 'unset'
        }else{
            document.body.style.overflow = 'hidden'
        }
    }

  return (
    <div className='bg-gray-950 py-3'>
        <motion.div 
                initial={{opacity:0,y:-30}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:1 , delay:0.2}}
        className='max-w-7xl mx-auto'>
            <div className=' flex justify-between items-center px-5'>
                {/* logo */}
                <div className='font-bold text-sky-300'>logo</div>
                {/* nav */}
                <div>
                    <ul className=' lg:flex gap-6 items-center font-semibold text-xl text-white hidden'>
                        <li className=' hover:text-sky-300 cursor-pointer transition-all'>Service</li>
                        <li className=' hover:text-sky-300 cursor-pointer transition-all'>About</li>
                        <li className=' hover:text-sky-300 cursor-pointer transition-all'>Tastimonials</li>
                        <li className=' hover:text-sky-300 cursor-pointer transition-all'>Contact Us</li>
                        <button className=' bg-zinc-600 cursor-pointer text-white px-5 py-1 rounded-md hover:bg-green-600'>Get Start</button>
                    </ul>
                    <Menu onClick={NavHandler} className='md:hidden text-white'/>
                </div>
            </div>
            {
                open? (
                    <nav>
                        <button onClick={NavHandler} className='cursor-pointer text-red-800 px-5 py-1 rounded-md hover:bg-green-600 absolute text-2xl font-semibold top-0 z-40 right-0'>X</button>
                        <ul className='flex flex-col border-1 border-sky-300 space-y-10 bg-gray-950 text-gray-300 w-[200px] h-[950px] items-center pt-36 absolute text-2xl font-semibold top-0 z-30 right-0'>
                        <li className=' hover:text-sky-300 cursor-pointer transition-all'>Service</li>
                        <li className=' hover:text-sky-300 cursor-pointer transition-all'>About</li>
                        <li className=' hover:text-sky-300 cursor-pointer transition-all'>Tastimonials</li>
                        <li className=' hover:text-sky-300 cursor-pointer transition-all'>Contact Us</li>
                        <button className=' bg-zinc-600 cursor-pointer text-white px-5 py-1 rounded-md hover:bg-green-700 hover:shadow-green-500'>Get Start</button>                    
                        </ul>
                    </nav>
                ):null
            }
        </motion.div>
    </div>
  )
}

export default Navbar