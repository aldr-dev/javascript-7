import './App.css';
import {useState} from 'react';
import burgerImage from './assets/ic-burger.png';
import hotDogImage from './assets/ic-hot-bog.png';
import friesImage from './assets/ic-fries.png';
import coffeeImage from './assets/ic-coffee.png';
import lemonadeImage from './assets/ic-lemonade.png';
import colaImage from './assets/ic-cola.png';
import {OrderList} from './types';
import CardMenu from './components/CardMenu/CardMenu';
import OrderDetails from './components/OrderDetails/OrderDetails';
import TotalOrderPrice from './components/TotalOrderPrice/TotalOrderPrice';

interface MenuItem {
  name: string;
  price: number;
  image: string;
}

const menuItem: MenuItem[] = [
  {name: 'Hamburger', price: 180, image: burgerImage},
  {name: 'Lemonade', price: 120, image: lemonadeImage},
  {name: 'Fries', price: 60, image: friesImage},
  {name: 'Coffee', price: 70, image: coffeeImage},
  {name: 'HotDog', price: 80, image: hotDogImage},
  {name: 'Cola', price: 50, image: colaImage},
];

const App = () => {
  const [orderList, setOrderList] = useState<OrderList[]>([
    {name: 'Hamburger', count: 0},
    {name: 'Lemonade', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'HotDog', count: 0},
    {name: 'Cola', count: 0},
  ]);

  const updateCounterValue = (name: string, change: number) => {
    setOrderList((prevState) => {
      const updatedList = prevState.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            count: item.count + change,
          };
        }
        return item;
      });

      const sortedList: OrderList[] = [...updatedList].sort((a, b) => b.count - a.count);
      return sortedList;
    });
  };

  const addOrder = (name: string) => {
    updateCounterValue(name, 1);
  };

  const deleteOrder = (name: string) => {
    updateCounterValue(name, -1);
  };

  return (
    <div className="constructor-container">
      <fieldset className="order-list">
        <legend className="constructor-name">Order Details:</legend>
        <OrderDetails orderList={orderList} onClickButtonDelete={deleteOrder}/>
        <TotalOrderPrice orderList={orderList} menuItem={menuItem}/>
      </fieldset>

      <fieldset className="card-menu-list">
        <legend className="constructor-name">Add items:</legend>
        <div className="card-menu-wrapper">
          {menuItem.map((card,index) => {
            return (
              <CardMenu
                key={`card-${index}`}
                image={card.image}
                name={card.name}
                price={card.price}
                onClickCard={() => addOrder(card.name)}
              />
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};

export default App;