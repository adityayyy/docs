import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"



export const Cards = ({data,reference }) => {
  return (
 // aditya sharma is gey
 
 <motion.div drag dragConstraints={reference}  whileDrag={{scale : 1.2}} dragElastic={2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className=' relative flex-shrink-0 rounded-[45px] w-60 h-72 bg-teal-900 text-white p-5  px-5 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 '>
          {data.desc}
        </p>
        <div className=' footer absolute bottom-0 left-0  w-full  '>
            <div className='flex items-center justify-between mb-3 py-0 px-8'> 
                <h4>{data.filesize}</h4>
                <span className='w-6 h-6 bg-zinc-800 rounded-full flex items-center justify-center  '>
                {data.close ? <IoMdClose/> : <LuDownload size=".8em" color='white' />}
                </span>
            </div>
            {
              data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" :"bg-green-600"} flex items-center justify-center`} >
                <h4 className='text-sm font-semibold'>{data.tag.tagTitle} </h4>
                </div>
                )
            }

            

        </div>
    </motion.div>

  )
}
