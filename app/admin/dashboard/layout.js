import AdminHeader from '@/components/admin/AdminHeader'

export const metadata = {
    title: 'Admin Dashboard',
    description: 'Generated by create next app',
  }

  import React from 'react'
  
  export default function DashboardLayout({children}) {
    return (
     <>
      <AdminHeader />
      {children}
     </>
    )
  }
  