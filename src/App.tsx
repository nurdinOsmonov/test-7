import React, {useState} from 'react';
import './App.css'

function App() {
  const [items, setItems] = useState([
    {name: 'Hamburger', price: 80},
    {name: 'Cheeseburger', price: 90},
    {name: 'Fries', price: 45},
    {name: 'Coffee', price: 70},
    {name: 'Tea', price: 50},
    {name: 'Cola', price: 40},
  ]);

  const empty = 'Order is empty! Please add some items!';

  return (
    <div className="App">

      <div className="order-details">
        <span>{empty}</span>
      </div>

      <div className="add-items">
        <div className="item">
          <h1>Hamburger</h1>
          <p>Price: 80 KGS</p>
        </div>
      </div>

    </div>
  );
}

export default App;
