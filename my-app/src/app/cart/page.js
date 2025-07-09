"use client";
import React from 'react';
import { remove } from '@/Redux/Cartslice';
import { useDispatch, useSelector } from 'react-redux';

const Cartpage = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);

  const handleremove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart page</h3>
      <div className="cartWrapper">
        {
          cartitems.length > 0 ? (
            cartitems.map((item) => (
              <div key={item.id} className="cartCard"> {/* ✅ Key added here */}
                <img src={item.image} alt="img" />
                <h5>{item.title}</h5>
                <h5>${item.price}</h5>
                <button className="btn" onClick={() => handleremove(item.id)}>Remove</button>
              </div>
            ))
          ) : (
            <h4 style={{ marginTop: "20px" }}>No items in cart</h4> // ✅ If cart is empty
          )
        }
      </div>
    </div>
  );
};

export default Cartpage;
