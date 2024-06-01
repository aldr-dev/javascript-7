import React from 'react';
import {OrderList} from '../../types';

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
    <div>
      <p>Total price: {totalOrderPrice} KGS</p>
    </div>
  );
};

export default TotalOrderPrice;
