import React from 'react'
import Header from '../header/Header'

const AdminHeader = () => {
  const menuOptionItems = [
    {
      name: "Home",
      slug: "/admin/dashboard"
    },
    {
      name: "Add-post",
      slug: "/admin/dashboard/add-post"
    },
    {
      name: "Add-Home-post",
      slug: "/admin/dashboard/add-home-post"
    },
  ]

  return (
    <>
    <Header menuOptions={menuOptionItems} admin={true}/>
    </>
  )
}

export default AdminHeader