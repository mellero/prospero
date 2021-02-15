import React from 'react'
import Footer from './common/footer'
import Header from './common/header'
import Welcome from './common/welcome'
import ResultsMain from './results/resultsMain'

/* Wrapper Component for Results Page */
export default function Results( { location, search = '' } ) {
    /* Keeps search parameter state between Results and Product */
    if (location.state && location.state.search) {
        search = location.state.search
    }

    const params = getParams(search)

    return (
        <div>
            <Header searchParams={search}/>
            <Welcome isLanding={false} />
            <ResultsMain params={params} />
            <Footer />
        </div>
    )
}

/* Takes the search parameter string and returns a split array */
const getParams = search => {
    if (!search)    return null

    return search.split(' ')
}