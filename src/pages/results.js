import React, { useEffect, useState } from 'react'
import { getProductsBySearch } from '../../static/prosperoDB'
import Footer from './common/footer'
import Header from './common/header'
import Welcome from './common/welcome'
import ResultsMain from './results/resultsMain'

/* Wrapper Component for Results Page */
export default function Results({ location }) {
	/* Array of products returned from database, using given url parameters */
	const [productsFound, setProductsFound] = useState([])
	/* Search Parameters based on the url */
	const [searchParams, setSearchParams] = useState(() => 
		location.search ? location.search.split('?')[1] : ''
	)

	/* Sets the state for searchParams based on any changes to url */
	useEffect(() => 
		setSearchParams(location.search ? location.search.split('?')[1] : ''), 
						[location.search]
	)
	/* Asynchronously get products from database, searching using url parameters */
    useEffect(() => {
        async function getProducts() {
            setProductsFound(await searchProducts(getParams(searchParams)))
        }
        getProducts()
	}, [searchParams])
	
    return (
        <div>
            <Header searchParams={searchParams} />
            <Welcome isLanding={false} />
            <ResultsMain productsFound={productsFound} />
            <Footer />
        </div>
    )
}

/* Given an array of string search parameters, iterate and find all matching items, then flatten and return */
const searchProducts = async (params) => {
    let res = []
    let prod, qRes
    /* If empty search, get all products */
    if (!params) {
        prod = await getProductsBySearch('%')
        return prod
    }

    /* If non-empty search, get all products that match search params */
    for (let p of params) {
        qRes = await getProductsBySearch(p)
        res.push(qRes)
    }

    /* Remove non-unique objects based on id */
    return res
        .flat()
        .filter((val, i, arr) =>
            arr.findIndex(e => (e.id === val.id)) === i)
}

/* Takes the search parameter string and returns a split array */
const getParams = search => {
    if (!search) return null

    return search.split(' ')
}