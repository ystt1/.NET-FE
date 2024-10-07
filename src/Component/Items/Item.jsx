import React from 'react'
import './Item.css'
export const Item = (prop) => {
    return (
        <div className='item'>
            <img src={prop.image} alt="" />
            <p className='item-prices'>
                <div className="item-prices">
                    <div className="item-price-new">
                        {prop.new_price} đ
                    </div>
                    <div className="item-price-old">
                        ${prop.old_price} đ
                    </div>
                </div>
            </p>
        </div>
    )
}

export default Item;