"use client"
import React from 'react'
import {useForm} from 'react-hook-form'
import { InputBox, Button } from '../index'

export default function AdminLoginForm() {
    const {register, handleSubmit,formState: { errors }} = useForm()

    const login = async()=>{

    }

  return (
   <>
    <div className='w-full h-screen bg-black/10'>
        <div className='flex justify-center items-center h-full'>
        <div className='w-full m-3 md:w-1/4 p-3 -mt-48'>
            <div className='mb-3 text-center font-bold text-lg text-blue-600'>
                Admin Panel 
            {errors && <p className='text-red-600 text-center text-base'>{errors?.email?.message}</p>}
            </div>
            <form onSubmit={handleSubmit(login)} className='space-y-4'>
                <InputBox placeholder='Enter Username' type="email"
                {...register("email",{
                  required: true,
                  validate: {
                    matchPatern: (value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                  }
                })}
                
                />
                  
                <InputBox placeholder='Enter Password' type="password" required 
                {...register("password",{
                  required: true,
                })}
                />
                
                <Button 
                // disabled={loading}
                  type='submit'
                   className='w-full disabled:opacity-80'
                    btnName="Login" />
            </form>
        </div>
     </div>
     </div>
   </>
  )
}
