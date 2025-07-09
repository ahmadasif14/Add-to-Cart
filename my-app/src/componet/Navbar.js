"use client";
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const item = useSelector((state)=>state.cart)
  return (
    <div style={{
                 display:"flex",
                 alignItems:"center",
                 justifyContent:"space-between",
                 position: "sticky",
                 top: 0,
                 left:0,
                 backgroundColor: 'white',
                 zIndex: 1000,
                 }}>
         <span
         style={{
              padding: "8px 16px",
              backgroundColor: "#764abc",
              borderRadius: "6px",
              fontWeight: "bold",
              color: "white",
            }}
         >Add-to-Card</span>


         <div style={{
                 padding: "8px 16px",
                 margin: "20px",}}>

            <Link className='navLink' style={{
                 padding: "8px 16px",
                 backgroundColor: "black", // blue color
                 color: "white",
                 borderRadius: "6px",
                 fontWeight: "bold",
                 textDecoration: "none",
                 transition: "background-color 0.3s ease",}} href={"/"}>Home</Link>


            <Link className='navLink' style={{
                  padding: "8px 16px",
                  margin: "10px",
                  backgroundColor: "#764abc", // green color
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  transition: "background-color 0.3s ease",}} href={"/cart"}>Cart</Link>
            
    
            <span style={{fontWeight:"bolder"}}>Items:{item.length}</span>
         </div>
    </div>
  )
}

export default Navbar