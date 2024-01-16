import React from 'react'
import Background from './components/Background';
import Foreground from './components/Foreground';

const gg = () => {
  return (
    <div className='bg-zinc-900 relative w-full h-screen'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default gg