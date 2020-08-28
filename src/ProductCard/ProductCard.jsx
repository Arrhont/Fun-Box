import React, { useState } from 'react';
import plural from 'plural-ru';

import { CARD_STATE } from '../consts';

import './ProductCard.css';

function ProductCard(props) {
    const { cardState, setSelectedProducts, className, product } = props;
    const [isHoveredAfterSelect, setIsHoveredAfterSelect] = useState(false);

    function handleProductClick() {
        if (cardState === CARD_STATE.SELECTED) {
            setSelectedProducts((prevState) => {
                prevState.delete(product);
                return new Set([...prevState]);
            });
            setIsHoveredAfterSelect(false);
        }

        if (cardState === CARD_STATE.DEFAULT) {
            setSelectedProducts(
                (prevState) => new Set([...prevState, product])
            );
        }
    }

    function handleMouseEnter() {
        if (cardState === CARD_STATE.SELECTED) {
            setIsHoveredAfterSelect(true);
        }
    }

    function handleMouseLeave() {
        setIsHoveredAfterSelect(false);
    }

    return (
        <div className={`${className} ProductCard`}>
            <div className={`ProductCard-Border ProductCard-Border_${cardState.toLowerCase()}`}>
                <div
                    className="ProductCard-Card"
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                    onClick={handleProductClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {cardState === CARD_STATE.DISABLED && (<div className="ProductCard-Fade"></div>)}

                    <div className="ProductCard-TextContainer">
                        {isHoveredAfterSelect
                            ? (
                                <div className="ProductCard-CatDisapproval">
                                    Котэ не одобряет?
                                </div>
                            ) : (
                                <div className="ProductCard-MarketingText">
                                    {product.marketingText}
                                </div>
                            )
                        }
                        <div className="ProductCard-BrandName">
                            {product.brandName}
                        </div>
                        <div className="ProductCard-Flavor">
                            {product.flavor}
                        </div>
                        <div className="ProductCard-PortionCount">
                            <span className="ProductCard-PortionCount_bold">
                                {product.portionCount + ' '}
                            </span>
                            <span>
                                {plural(
                                    product.portionCount,
                                    'порция',
                                    'порции',
                                    'порций'
                                )}
                            </span>
                        </div>
                        {product.mouseGiftCount > 0 && (
                            <div className="ProductCard-MouseGift">
                                {product.mouseGiftCount > 1 && (
                                    <span className="ProductCard-MouseGift_bold">
                                        {product.mouseGiftCount + ' '}
                                    </span>
                                )}
                                <span>
                                    {`${plural(
                                        product.mouseGiftCount,
                                        'мышь',
                                        'мыши',
                                        'мышей'
                                    )} в подарок`}
                                </span>
                            </div>
                        )}
                        {product.bestDeal && (
                            <div className="ProductCard-BestDeal">
                                заказчик доволен
                            </div>
                        )}
                    </div>
                    <div className={`ProductCard-Weight ProductCard-Weight_${cardState.toLowerCase()}`}>
                        <div>
                            {String(product.weight).replace('.', ',')}
                        </div>
                        <div className="ProductCard-WeightUnit">КГ</div>
                    </div>
                </div>
            </div>
            <div className={`ProductCard-Tooltip ProductCard-Tooltip_${cardState.toLowerCase()}`}>
                {cardState === CARD_STATE.DEFAULT && (
                    <span>
                        Чего сидишь? Порадуй котэ,{' '}
                        <span
                            className="ProductCard-Link"
                            onClick={handleProductClick}
                        >
                            купи
                        </span>
                    </span>
                )}
                {cardState === CARD_STATE.SELECTED && product.description}
                {cardState === CARD_STATE.DISABLED && `Печалька, ${product.flavor} закончился`}
            </div>
        </div>
    );

}

export default ProductCard;
