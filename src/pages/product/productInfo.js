import React, { useEffect, useState } from 'react'
import Rating from '../common/rating'

export default function ProductInfo({ product = {} }) {
    const [price, setPrice] = useState(product.price)
    useEffect(() => setPrice(product.price), [product])
    
    const calcPrice = (e) => setPrice(product.price * e.target.value);

    return (
        <div className="mr-5 product-info box">
            <div className="info">
                <p className="subtitle info-title">
                    {product.title}
                </p>
                <div className="mb-5 info-desc">
                    <p>
                        {product.description}
                    </p>
                </div>
                <div className={"info-pqrc"}>
                    <div className={"info-pq"} >
                        <div className="info-price">
                            <p className="subtitle card-price">
                                ${price}
                            </p>
                        </div>
                        <div className="info-quantity">
                            <p className="pr-2">
                                Quantity:
                            </p>
                            <div className="select">
                                <select onChange={calcPrice}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Rating clName='info-rating' rating={product.rating} size='xs' />
                        <div className="info-cart">
                            <div className="info-cart">
                                <button href="#"className="button add-to-cart">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


