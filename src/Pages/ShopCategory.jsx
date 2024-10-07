import React from "react";
import "./CSS/ShopCategory.css";
import Item from '../Component/Items/Item'
import { all_products } from "../Component/Assets/all_product";

export const ShopCategory = () => {

  const item = all_products.length > 0 ? all_products[0] : null;
  console.log(item);
  return (
    <div>
      {item && (
        <Item
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      )}
    </div>
  );
}