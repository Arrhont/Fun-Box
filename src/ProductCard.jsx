import React, { useState } from 'react';
import plural from 'plural-ru';
import './ProductCard.css';
import { CARD_STATE } from './consts';

function ProductCard(props) {
    const { cardState } = props;

    const [hovered, useHovered] = useState(false);
    const { className, product } = props;
    return (
        <div className={className}>
            <div className="ProductCard-Border">
                <div
                className="ProductCard-Card"
                style={{backgroundImage: `url(${product.imageUrl})`}}
                >
                    <div className="ProductCard-MarkeingText">
                        {product.marketingText}
                    </div>
                    <div className="ProductCard-BrandName">
                        {product.brandName}
                    </div>
                    <div className="ProductCard-Flavor">
                        {product.flavor}
                    </div>
                    <div className="ProductCard-PortionCount">
                        {`${plural(product.portionCount, '%d порция', '%d порции', '%d порций')}`}
                    </div>
                    <div className="ProductCard-MouseGiftCount">
                    {`${plural(product.mouseGiftCount, 'мышь', '%d мыши', '%d мышей')} в подарок`}
                    </div>
                    <div className="ProductCard-Weight">
                        <div>{`${String(product.weight).replace('.', ',')}`}</div>
                        <div className="ProductCard-WeightUnit">КГ</div>
                    </div>
                </div>
            </div>
            <div className="ProductCard-Tooltip">
                {cardState === CARD_STATE.DEFAULT && (
                    <span>
                        Чего стоишь? Порадуй коте, <a href="1"> купи</a>
                    </span>
                )}
                {cardState === CARD_STATE.SELECTED && (
                        product.description
                )}
                {cardState === CARD_STATE.DISABLED && (
                        `Печалька, ${product.flavor} закончился`
                )}      
            </div>
        </div>
    );
}


export default ProductCard;

