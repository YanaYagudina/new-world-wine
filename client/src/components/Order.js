import React from 'react';
import OrderRender from './OrderRender.js'; 



function Order ({ onRemoveWine, order}) {

    console.log(order)
    const orderList = order.map((or) => (
        <OrderRender key={or.id} or={or} onItemClick={onRemoveWine} />
      ));

      const orderSum = order.map((or) => or.price * or.quantity)
      
      function sumArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];

        }
        return sum;
      }

      const sum = sumArray(orderSum);



    return (
        <div>
          <h2>My Order</h2>
          {orderList}
          {/* <button className="cart-button" id="green" onClick={submitWineInOrder}>Submit Order!</button> */}
          <h3>Order sum : ${sum}</h3>

        </div>
      );


}
export default Order;

