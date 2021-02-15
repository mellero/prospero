import React from 'react'
import { Link } from 'gatsby'
import Rating from './rating'
import products from '../../../static/productList'

/**
 * A card that holds the information of the product specified. Used in the 
 * landing page under hero, and as the main search results component
 * @param {Number} pid product id of product to display 
 */
export default function ResultCard({ pid = 0}) {
    let product = products[pid]

    return (
        <div className="tile is-4 is-parent">
            <div className="tile is-child box">
                {/* Clickable Img */}
                <figure className="image is-square">
                    <Link 
                        className="img-link" 
                        to="/product"
                        state={{ pid: {pid} }}
                    >
                        <img src={`../assets/${product.imgURL}`} alt="item" />
                    </Link>
                </figure> {/* End Clickable Img */}
                {/* Product Info */}
                <div className="card-info">
                    <p className="subtitle card-heading">
                        <Link 
                            className="img-link" 
                            to="/product"
                            state={{ pid: {pid} }}
                        >
                            {product.title}
                        </Link>
                    </p>
                    <div className="card-price">
                        <p className="subtitle card-price">
                            ${product.price}
                        </p>
                    </div>
                    <div className="card-cart">
                        <button className="button add-to-cart">
                            Add to Cart
                        </button>
                    </div>
                    <Rating clName='card-ratings' rating={product.rating} size='xs' />
                </div> {/* End Product Info */}
            </div>
        </div>
    )
}