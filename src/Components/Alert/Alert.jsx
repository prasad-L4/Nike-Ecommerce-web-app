import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {
    const {cartList,cartCount,cartAlert}=useSelector((state)=>state.cart)
  return (
    <>
     
        <div
          className={
            "text-white px-6 py-4 border-0 rounded relative mb-4 bg-" +
       
            "-500"
          }
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">!</b> This is a  alert -
            check it out!
          </span>
     
        </div>
     
      
    </>
  )
}

export default Alert
