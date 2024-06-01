import React from 'react';

interface CardProps {
  image: string;
  name: string;
  price: number;
  onClickCard: () => void;
}

const CardMenu: React.FC<CardProps> = ({image, name, price, onClickCard}) => {
  return (
    <button className="card" type="button" onClick={onClickCard}>
      <img className="card-img" src={image} alt={name}/>
      <div className="card-info">
        <strong className="card-title">{name}</strong>
        <span className="card-price">Price: {price} <span className="card-currency">kgs</span></span>
      </div>
    </button>
  );
};

export default CardMenu;