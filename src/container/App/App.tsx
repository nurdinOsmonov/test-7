import React, {useState} from 'react';
import './App.css'
import AddItems from "../../components/AddItems/AddItems";

function App() {
  const [items, setItems] = useState([
    {name: 'Hamburger', price: 80, id: 1},
    {name: 'Cheeseburger', price: 90, id: 2},
    {name: 'Fries', price: 45, id: 3},
    {name: 'Coffee', price: 70, id: 4},
    {name: 'Tea', price: 50, id: 5},
    {name: 'Cola', price: 40, id: 6},
  ]);


  const [order, setOrder] = useState([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  let empty = 'Order is empty! Please add some items!';

  const addToList = (id: number) => {
    empty = '';
    setItems(prev => [
      ...prev,
      {name, price: parseInt(price), id: Math.random()}
    ]);
  };


  const itemList = (
    <AddItems items={items} addToList={addToList}/>
  )


  return (
    <div className="App">

      <div className="order-details">
        {items.map(item => (
          <div key={item.id}>
            {item.name}
          </div>
        ))}
      </div>

      <div className="add-items">
        {itemList}
      </div>

    </div>
  );
}

export default App;
