import React, {useRef, useState} from 'react'
import { Cards } from './Cards'


   
 
const Foreground = () => {
 
 

   const ref = useRef(null);

  const data = [
   {
    desc: "this is a test",
    filesize: ".4mb",
    close: true,
    tag: {isOpen: true ,tagTitle: "download now ", tagColor:"green",  } ,
   },
   {
    desc: "touch and drag",
    filesize: ".9mb",
    close: false,
    tag: {isOpen: true ,tagTitle: "upload", tagColor:"blue",  } ,
   },
   {
    desc: "feel the bounciness",
    filesize: ".12mb",
    close: true,
    tag: {isOpen: true ,tagTitle: "download now ", tagColor:"green",  } ,
   }
   ] 
  return (
            <div ref={ref} className='fixed w-full h-screen top-0 left-0 z-[3] flex gap-5 flex-wrap py-40 px-10'>
             {data.map((items,index)=>
                <Cards data={items} reference={ref} />
                
             )}
            </div>
    
    )
}

export default Foreground