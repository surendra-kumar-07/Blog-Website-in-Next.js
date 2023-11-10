"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import InputBox from '../form/InputBox';
import Button from '../form/Button';
import SelectBox from '../form/SelectBox'
import Image from 'next/image'
import postService from '@/backend/postConf';
import {useForm} from 'react-hook-form'
import { useSelector } from 'react-redux';
import fileService from '@/backend/fileConf';
import Spinner from '../Spinner';
import { toast } from 'react-toastify';


export default function AddPost({post}) {
  const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
  const [loading, setLoading] = useState(false)
  const {register, handleSubmit, watch, setValue, getValues, formState: { errors }} = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '',
      status: post?.status || "active",

    }
  })

  const userData = useSelector(state=>state.auth.userData)
  
  const submit = async (data)=>{
    
   try {
    setLoading(true);
    if(post){
      const file = data.image[0] ? fileService.uploadFile(data.image[0]) : null
      if(file){
        fileService.deleteFile(post.featuredImage)
      }
      const dbpost = await postService.updatePost(post.$id, {
        ...data, 
        featuredImage: file ? file.$id : undefined
      })

      if(dbpost){
        toast.success("Update Post Successfully")
        // navigate
      }

    } else {
      const file = await fileService.uploadFile(data.image[0]);

      if(file){
        const fileId = file.$id
        data.featuredImage = fileId
        const dbpost = await postService.createPost({
          ...data,
         

        })
        if(dbpost){
          toast.success("Add Post Successfully")
          // navigate
        }
      }
    }

   
   } catch (error) {
    console.log(error);
    toast.error("Something went wrong!")
   } finally{
    setLoading(false);
   }
  }

  const slugTransform = useCallback((value)=>{
    if(value && typeof value === 'string'){
      const slug = value.trim()
      .toLocaleLowerCase()
      .replace(/[^a-zA-Z\d\s]+/g, '-')
      .replace(/\s/g, '-');
      return slug
    }
    return ''
  }, [])

  useEffect(()=>{
    const subscription = watch((value, {name})=>{
      if(name === 'title'){
        setValue('slug', slugTransform(value.title, {shouldValidate: true}))
      }
    })
    return ()=>{
      subscription.unsubscribe()
    }
  }, [watch])
    

  return (
    <div  className='w-full mt-3 flex justify-center mb-20'>
      {loading && <Spinner />}
        <div className='bg-white/95 rounded p-2 md:w-3/4 w-full space-y-3'>
            <h3 className='font-bold text-lg ml-2 text-blue-400'>Add Post</h3>
            {errors && <p className='text-red-600 text-center text-base'>{errors?.email?.message}</p>}
            <form className='space-y-3' onSubmit={handleSubmit(submit)}>
            <div>
                <InputBox label="Title:"  placeholder="Enter Title" className="border-gray-200 border"
                {...register("title", {required:true})}
                />
            </div>
            <div>
                <InputBox label="Slug:"  placeholder="slug" className="border-gray-200 border"
                {...register("slug", {required:true})}
               readOnly={true}
                />
            </div>
            <div className='border hover:border-cyan-400'>
              
        <JoditEditor
			value={getValues.content}
			tabIndex={1} 
			onBlur={newContent => setValue("content",newContent)}
		/></div>
        <div className='flex flex-col md:flex-row'>
            <InputBox
            label="Featured Image : "
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", {
              required: !post
            })}
            />
            {post && <div className='w-1/2'>
            <Image
              src={fileService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-sm"
              width={500}
              height={500}
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            </div>}
        </div>
        <div className='w-1/2'>
            <SelectBox label="status:" options={["active","inactive"]}
            {...register("status", {required: true})}/>
        </div>
        <div className='flex justify-end'>
            <Button  disabled={loading} btnName={post? "Update" : "Submit"} type="submit" className='px-6 text-sm'/>
        </div>
        </form>

        </div>
    </div>
  )
}
