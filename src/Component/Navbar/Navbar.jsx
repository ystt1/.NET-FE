import React, { useState } from 'react'
import './Navbar.css'
import cartIcon from '../Assets/shopping-cart.svg'

export const Navbar = () => {
    const [menu,setMenu]=useState("0")
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img width={100} height={100} src='https://i.pinimg.com/originals/28/1c/42/281c428211dbcbbb4896560940df1b16.png' />
                <p>Lưu Niệm</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>setMenu("0")}>Shop{menu==="0"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("1")}>Đồ địa phương{menu==="1"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("2")}>Đồ du lịch{menu==="2"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("3")}>Đồ sự kiện{menu==="3"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>
                    Đăng nhập
                </button>
                <img src={cartIcon} alt="" />
                <div className='nav-cart-count'>
                    0
                </div>
            </div>
        </div>
    )
}
