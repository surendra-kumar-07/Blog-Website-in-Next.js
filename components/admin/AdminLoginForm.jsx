"use client"
import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import authService from '@/backend/auth'
import  InputBox from '../form/InputBox'
import  Button from '../form/Button'
import Spinner  from '../Spinner'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation';
import { useDispatch,useSelector } from 'react-redux'
import { login as authlogin } from '@/redux/authSlice'

const AdminLoginForm = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false)
    const {register, handleSubmit,formState: { errors }} = useForm()
    const dispatch = useDispatch()

    useEffect(()=>{
      authService.getCurrentUser().then((userData)=>{
        if(userData){
          dispatch(authlogin(userData))
         push("/admin/dashboard")
        }
      })
    },[])

    const userData = useSelector((state)=>state.auth)
    console.log(userData);

    const login = async (data)=>{
      console.log(data);
      try {
        setLoading(true)
       const session = await authService.login(data)
       if(session){
        const userData = await authService.getCurrentUser()
        if(userData){
          dispatch(authlogin(userData))
          toast.success("Login Successfully")
          setTimeout(() => {
            redirect.push("/admin/dashboard")
          }, 500);
        }
       }else{
        toast.error("invalid credentials!")
       }
      } catch (error) {
        console.log(error);
        toast.error("Somthing went wrong!")
      } finally{
        setLoading(false)
      }
    }

  return (
   <>
   {loading && <Spinner/>}
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
                disabled={loading}
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


export default AdminLoginForm