import React from 'react';
import {OrderList} from '../../types';
import './TotalOrderPrice.css';

interface TotalOrderPriceProps {
  orderList: OrderList[];
  menuItem: { name: string; price: number }[];
}

const TotalOrderPrice: React.FC<TotalOrderPriceProps> = ({orderList, menuItem}) => {
  const totalOrderPrice = orderList.reduce((acc, item) => {
    const findNameElement = menuItem.find((element) => element.name === item.name);
    return acc + (findNameElement ? findNameElement.price * item.count : 0);
  }, 0);

  return (
    <>
      {totalOrderPrice !== 0 ? (
        <p>Total price: {totalOrderPrice} <span className="currency">kgs</span></p>
      ) : null}
    </>
  );
};

export default TotalOrderPrice;
