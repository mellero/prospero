import React from 'react'
import '../../../static/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProductInfo from './productInfo'
import products from '../../../static/productList'
import { navigate } from 'gatsby'

export default function ProductMain({ pid = 0 }) {
    let product = products[pid]

    return (
        <main className="pt-3 main-article">
            <section className="hero">
                <div className="pl-3 my-2 return-results">
                    <div className="return" onClick={() => navigate(-1)} role="button">
                        <FontAwesomeIcon className={'pr-1'} icon={'long-arrow-alt-left'} />
                        return to results
                    </div>
                </div>
                <div className="hero-container">
                    <div className="pt-0 hero-body product-container">
                        <div className="mb-0 box img-section">
                            <div className="product-img-container container">
                                <figure className="image is-square">
                                    <img alt={product.title} src={`../assets/${product.imgURL}`} />
                                </figure>
                            </div>
                        </div>
                        <div className="product-thumbs box">
                            <div className="thumbs-container container">
                                <a className="thumb-link" href="javascript:;">
                                    <figure className="thumb is-square">
                                        <img alt={product.title} src={`../../assets/${product.imgURL}`} />
                                    </figure>
                                </a>
                                <a className="thumb-link" href="javascript:;">
                                    <figure className="thumb is-square">
                                        <img alt={product.title} src={`../../assets/${product.imgURL}`} />
                                    </figure>
                                </a>
                                <a className="thumb-link" href="javascript:;">
                                    <figure className="thumb is-square">
                                        <img alt={product.title} src={`../../assets/${product.imgURL}`} />
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ProductInfo pid={pid} />
                </div>
            </section>
        </main>
    )
}