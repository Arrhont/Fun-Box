import React, { useState, useEffect } from 'react';
import plural from 'plural-ru';
import './ProductCard.css';
import { CARD_STATE } from './consts';

function ProductCard(props) {
    // useEffect(() => {
    //     console.log('mount');

    //     return () => {
    //         debugger;
    //         console.log('unmount');
    //     };
    // }, []);

    const { cardState, setSelectedProducts, className, product } = props;

    const [hovered, useHovered] = useState(false);
    return (
        <div className={className}>
            <div className="ProductCard-Border">
                <div
                    className="ProductCard-Card"
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                    onClick={() => {
                        setSelectedProducts((prevState) => {
                            if (cardState !== CARD_STATE.DISABLED) {
                                prevState.delete(product);
                            }
                            return new Set([...prevState]);
                        });
                    }}
                >
                    <div className="ProductCard-MarkeingText">
                        {product.marketingText}
                    </div>
                    <div className="ProductCard-BrandName">
                        {product.brandName}
                    </div>
                    <div className="ProductCard-Flavor">{product.flavor}</div>
                    <div className="ProductCard-PortionCount">
                        {`${plural(
                            product.portionCount,
                            '%d порция',
                            '%d порции',
                            '%d порций'
                        )}`}
                    </div>
                    <div className="ProductCard-MouseGiftCount">
                        {`${plural(
                            product.mouseGiftCount,
                            'мышь',
                            '%d мыши',
                            '%d мышей'
                        )} в подарок`}
                    </div>
                    <div className="ProductCard-Weight">
                        <div>{`${String(product.weight).replace(
                            '.',
                            ','
                        )}`}</div>
                        <div className="ProductCard-WeightUnit">КГ</div>
                    </div>
                </div>
            </div>
            <div className="ProductCard-Tooltip">
                {cardState === CARD_STATE.DEFAULT && (
                    <span>
                        Чего стоишь? Порадуй коте,{' '}
                        <span
                            className="ProductCard-Link"
                            onClick={() => {
                                setSelectedProducts(
                                    (prevState) =>
                                        new Set([...prevState, product])
                                );
                            }}
                        >
                            купи
                        </span>
                    </span>
                )}
                {cardState === CARD_STATE.SELECTED && product.description}
                {cardState === CARD_STATE.DISABLED &&
                    `Печалька, ${product.flavor} закончился`}
            </div>
        </div>
    );
}

export default ProductCard;
