import React from 'react'

export default function Footer() {
  return (
    <div className=' h-96 w-full bg-transparent max-w-7xl mx-auto flex justify-center items-center'>
      <div className='flex gap-16'>
    {
        [1,2,3,4,5].map((item, index) => (
            <div class="flex h-fit  bg-black">
    <span class="absolute mx-auto  mt-1 flex border w-fit bg-gradient-to-r blur-xl from-white via-whie to-white bg-clip-text text-xl box-content font-extrabold text-transparent text-center select-none">
    Theme
  </span>
    <h1
        class="relative top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center from-white to-white bg-clip-text text-xl font-extrabold text-transparent text-center select-auto">
        Theme
    </h1>
</div>
        ))
    }
      </div>
    </div>
  )
}
