"use client"
import React from 'react'
import { InputBox } from '../index';
import { Button } from '../index';
import { FileUpload } from '../index';
import Image from 'next/image'

export default function AddHomePost() {
  return (
    <div  className=' w-full mt-3 flex justify-center mb-20'>
    <div className='bg-white/95 rounded p-2 md:w-3/4 w-full space-y-3'>
        <h3 className='font-bold text-lg ml-2 text-blue-400'>Add Home Post</h3>
        <form className='space-y-3'>
        <div>
            <InputBox label="Title:"  placeholder="Enter Title" className="border-gray-200 border"/>
        </div>
        <div>
            <InputBox label="Info:"  placeholder="Enter Info" className="border-gray-200 border"/>
        </div>
        <div>
            <InputBox label="URL:"  placeholder="url" className="border-gray-200 border"/>
        </div>
    <div className='flex flex-col md:flex-row gap-2'>
        <FileUpload label="Featured Image: "/>
        <div className='w-1/2'>
        <Image
          src="/blog_img.jpg"
          alt="Post Featured Image"
          className="rounded-sm mr-2"
          width={500}
          height={500}
          priority
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        </div>
    </div>
    <div className='flex justify-end'>
        <Button btnName="Add Post" type="submit" className='px-6 text-sm'/>
    </div>
    </form>

    </div>
</div>
  )
}
