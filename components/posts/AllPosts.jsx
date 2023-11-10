import React from 'react'
import {GrSearch} from 'react-icons/gr'

export default function AllPosts() {
  return (
    <>
    <div className='w-full min-h-screen bg-black/10 pb-10 pt-2'>
        <div className=' flex justify-center'>
            <div className='md:w-1/2 w-full'>
            <div className='m-2 relative'>
                <input className='outline-none bg-white rounded p-2 w-full
                ' type="text" placeholder='Search'/>
                <div className='absolute top-1/2 -translate-y-1/2 right-2 border-l-2 p-1 pl-3 cursor-pointer'>
                <GrSearch className='text-xl ' />
                </div>
                </div>

                {/* <div className='mt-5 bg-white p-2 py-5 rounded-lg space-y-10'>
                {posts?.map((post)=>(
                    <PostCard key={post.$id} post={post} />
                ))}
                    
                </div> */}
            
            </div>
        </div>
    </div>
    </>
  )
}
