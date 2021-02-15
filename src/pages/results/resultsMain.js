import React, { useEffect, useState } from 'react'
import ResultCard from '../common/resultCard'
import ResultsPanel from './resultsPanel'
import SortBar from './sortBar'
import { prices } from '../../../static/filter'

/**
 * Main Page Container for Results. Wrapper includes ResultsPanel, SortBar and all results 
 */
export default function ResultsMain({ productsFound = [] }) {
    /* Result rows, containing up to 3 ResultCards each */
    const [results, setResults] = useState(<div></div>)
    /* Number of total results, once sorted/filtered */
    const [numResults, setNumResults] = useState(0)
    /* Current filter settings */
    const [filter, setFilter] = useState({ price: prices.all, rating: 1 })
    /* Current sort settings */
    const [sort, setSort] = useState({ sortFn: null })

    /* Assign proper values to state once correct product list is given.
     * Fires if dependencies are changed
     */
    useEffect(() => {
        const filtered = getFiltered(productsFound, filter)
        const sorted = getSorted(filtered, sort)
        setNumResults(sorted.length)
        setResults(getMatchingProducts(sorted))
    }, [productsFound, filter, sort])

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
                            numResults={numResults}
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
    if (!sortFn) { return prods }
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
            <ResultCard product={prods[r]} key={r} />
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