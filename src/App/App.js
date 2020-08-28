import React, { useState, useCallback } from 'react';

import ProductCard from '../ProductCard/ProductCard';
import { CARD_STATE } from '../consts';

import './App.css';

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
        description: 'Печень утки разварная с артишоками.',
        quantity: 1,
    },
    {
        id: 2,
        marketingText: 'Сказочное заморское яство',
        brandName: 'Нямушка',
        flavor: 'с рыбой',
        portionCount: 40,
        mouseGiftCount: 2,
        imageUrl: '/nice_cat.png',
        weight: 2,
        description: 'Головы щучьи с чесноком, да свежайшая семгушка.',
        quantity: 2,
    },
    {
        id: 3,
        marketingText: 'Сказочное заморское яство',
        brandName: 'Нямушка',
        flavor: 'с курой',
        portionCount: 100,
        mouseGiftCount: 5,
        bestDeal: true,
        imageUrl: '/nice_cat.png',
        weight: 5,
        description: 'Печень утки разварная с артишоками',
        quantity: 0,
    },
];

function App() {
    // Мок - временная заглушка для тестирования вместо приходящей с бэкенда коллекции товаров.
    const [products] = useState(mock);
    const [selectedProducts, setSelectedProducts] = useState(new Set());

    const getCardState = useCallback((product) => {
        return product.quantity === 0
            ? CARD_STATE.DISABLED
            : selectedProducts.has(product)
                ? CARD_STATE.SELECTED
                : CARD_STATE.DEFAULT;
    }, [selectedProducts]);

    return (
        <div className="App">
            <div className="App-Header">Ты сегодня покормил кота?</div>
            <div className="App-Products">
                {products.map((product) => (
                    <ProductCard
                        className={"App-ProductCard"}
                        cardState={getCardState(product)}
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
