import React, { useState } from 'react'
import ResultCard from '../common/resultCard'
import ResultsPanel from './resultsPanel'
import SortBar from './sortBar'
import products from '../../../static/productList'
import { prices } from '../../../static/filter'

/**
 * Main Page Container for Results. Wrapper includes ResultsPanel, SortBar and all results 
 */
export default function ResultsMain({ params = [] }) {
    let productsFound 
    const [filter, setFilter] = useState({ price: prices.all, rating: 1 })
    const [sort, setSort] = useState({ sortFn: null })
    
    /* If no search parameters, return entire product array */
    if (!params)    productsFound = products
    else            productsFound = searchProducts(params)
    /* Get Filters from side bar, then sort from sort bar */
    let filtered = getFiltered(productsFound, filter)
    let sorted = getSorted(filtered, sort)
    let results = getMatchingProducts(sorted)

    return (
        <main className="pt-3 main-article">
            <div className="columns">
                <div className="pt-0 column is-3">
                    <ResultsPanel
                        resetFilter={() => setFilter({ price: prices.all, rating: 1 })}
                        filterPrice={(val) => setFilter({ price: val, rating: filter.rating })}
                        filterRating={(val) => setFilter({ price: filter.price, rating: val })}
                        rating={filter.rating}
                    />
                </div>
                <div className="mr-3 showcase-results column">
                    <div className="p-3 block sort-bar-container">
                        <SortBar 
                            changeSortFn={(sortObj) => setSort(sortObj)}
                            numResults={sorted.length}
                        />
                    </div>
                    <section className="m-5 container">
                        {results}
                    </section> 
                    <div className="block"></div> 
                </div> 
            </div>
        </main> 
    )
}

/* Take a given array of products, and sort based on sortFn given */
const getSorted = (prods, { sortFn }) => {
    if (!sortFn)        return prods
    return sortFn(prods)
}

/* Take a given array of products, and filter based on filter object given */
const getFiltered = (prods, filter) => {
    let res = []
    // If no filter object, return origianl array
    if (!filter)        return prods
    // Otherwise iterate and push all matching products to new array
    for (let i = 0; i < prods.length; i++) {
        if (prods[i].rating >= filter.rating 
            && prods[i].price >= filter.price.lo
            && prods[i].price <= filter.price.hi) {
                res.push(prods[i])
        }
    }
    return res
}

/* Given an array of string search parameters, iterate and find all matching items, then flatten and return */
const searchProducts = (params) => {
    let res = []
    let prod
    for (let p of params) {
        prod = searchProduct(p)
        if (prod) res.push(prod)
    }
    // "new Set" removes all duplicate elements
    return [...new Set(res.flat())]
}

/* Given a single parameter, find all matching products */
const searchProduct = (param) => {
    let res = []
    for (let p of products){
        if (p.title.toLowerCase().includes(param.toLowerCase())) {
            res.push(p)
            continue
        }
        if (p.desc.toLowerCase().includes(param.toLowerCase()))
            res.push(p)
    }
    return (res.length > 0 ? res : null)
}

/* Takes the final array of products and creates the JSX array to display */
const getMatchingProducts = (prods) => {
    let i           = 0,
        resultCards = [],
        res         = []
    
    // Array that holds all matching product ResultCards
    resultCards.push([], [], [])

    for (let r = 0; r < prods.length; r++) {
        if (r !== 0 && r % 3 === 0) i++;

        resultCards[i].push(
            <ResultCard pid={prods[r].id} key={r} />
        )
    }

    // Iterate over all resultCard arrays, placing them in a div row
    for (let r of resultCards) {
        if (r.length < 1) break

        res.push(
            <div className="tile is-ancestor" key={i++}>
                {r[0]}
                {r[1]}
                {r[2]}
            </div>
        ) 
    }

    return res;
}