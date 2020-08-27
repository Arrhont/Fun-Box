import React, { useState } from 'react';
import './App.css';
import ProductCard from './ProductCard';
import { CARD_STATE } from './consts';


const mock = [
  {
    id: 1,
    marketingText: 'Сказочное заморское яство',
    brandName: 'Нямушка',
    flavor: 'с фуа-гра',
    portionCount: 10,
    mouseGiftCount: 1,
    imageUrl: '/nice_cat.png',
    weight: 0.5,
    description: 'Печень утки разварная с артишоками'
  },
  {
    id: 2,
    marketingText: 'Сказочное заморское яство',
    brandName: 'Нямушка',
    flavor: 'с фуа-гра',
    portionCount: 10,
    mouseGiftCount: 1,
    imageUrl: '/nice_cat.png',
    weight: 0.5,
    description: 'Печень утки разварная с артишоками'
  },
  {
    id: 3,
    marketingText: 'Сказочное заморское яство',
    brandName: 'Нямушка',
    flavor: 'с фуа-гра',
    portionCount: 10,
    mouseGiftCount: 1,
    imageUrl: '/nice_cat.png',
    weight: 0.5,
    description: 'Печень утки разварная с артишоками'
  },
]

function App() {
  const [products, setProducts] = useState(mock);
  return (
    <div className="App">
      <div className="App-Header">
        Ты сегодня покормил кота?
      </div>
      <div className="App-Products">
        {products.map(product => <ProductCard
          className="App-ProductItem"
          cardState={CARD_STATE.DEFAULT}
          product={product}
          key={product.id}
        />)}
      </div>
    </div>
  );
}

export default App;
