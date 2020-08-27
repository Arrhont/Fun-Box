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
        description: 'Печень утки разварная с артишоками',
        quantity: 1,
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
        description: 'Печень утки разварная с артишоками',
        quantity: 2,
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
        description: 'Печень утки разварная с артишоками',
        quantity: 0,
    },
];

function App() {

    const [products, setProducts] = useState(mock);
    const [selectedProducts, setSelectedProducts] = useState(new Set());

    return (
        <div className="App">
            <div className="App-Header">Ты сегодня покормил кота?</div>
            <div className="App-Products">
                {products.map((product) => (
                    <ProductCard
                        className="App-ProductItem"
                        cardState={
                            product.quantity === 0
                                ? CARD_STATE.DISABLED
                                : selectedProducts.has(product)
                                ? CARD_STATE.SELECTED
                                : CARD_STATE.DEFAULT
                        }
                        setSelectedProducts={setSelectedProducts}
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
