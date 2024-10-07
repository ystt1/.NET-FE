import React, { useState } from 'react'
import './Navbar.css'
import cartIcon from '../Assets/shopping-cart.svg'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu,setMenu]=useState("shop")
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img width={100} height={100} src='https://i.pinimg.com/originals/28/1c/42/281c428211dbcbbb4896560940df1b16.png' />
                <p>Lưu Niệm</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>setMenu("shop")}><Link to='/' style={{textDecoration:'none'}}>Shop</Link> {menu==="shop"? <hr/>:<></>}</li>
                <li onClick={()=>setMenu("local")}><Link to='/local' style={{textDecoration:'none'}}>Đồ địa phương</Link>{menu==="local"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("travel")}><Link to='/travel' style={{textDecoration:'none'}}>Đồ du lịch</Link>{menu==="travel"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("special")}><Link to='/special' style={{textDecoration:'none'}}>Đồ sự kiện</Link>{menu==="special"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login' style={{textDecoration:'none'}}>
                <button>
                    Đăng nhập
                </button>
                </Link>
                <Link to='/cart' style={{textDecoration:'none'}}>
                <img src={cartIcon} alt="" />
                </Link>
                <div className='nav-cart-count'>
                    0
                </div>
            </div>
        </div>
    )
}
