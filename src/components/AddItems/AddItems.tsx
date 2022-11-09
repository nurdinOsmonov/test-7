import React from 'react';
import Item from "./Item";
import {OrderItem} from "../../types";

interface Props {
  items: OrderItem[];
  addToList: (id: number) => void;
}

const AddItems: React.FC<Props> = ({items, addToList}) => {
  return (
    <div>
      {items.map((item) => (
        <Item
          name={item.name}
          price={item.price}
          onDivClick={() => addToList(item.id)}
        />
      ))}
    </div>
  );
};

export default AddItems;