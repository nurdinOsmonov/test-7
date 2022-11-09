import React from 'react';

interface ItemProps {
  name: string;
  price: number;
  onDivClick: React.MouseEventHandler;
}

const Item: React.FC<ItemProps> = (props) => {
  return (
    <div className="item" onClick={props.onDivClick}>
      <h1>{props.name}</h1>
      <p>{props.price}</p>
    </div>
  );
};

export default Item;