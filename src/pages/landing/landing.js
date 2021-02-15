import React from 'react'
import ResultCard from '../common/resultCard'
import LandingPanel from './landingPanel'
import products from '../../../static/productList'
import '../../../static/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'gatsby'

/**
 * Main Landing page. Contains a Hero section and three random products to display under it
 */
export default function Landing() {
    /* Takes the total number of products and grabs 3 random ids to display under Hero */
    const n = products.length
    let ids = []
    ids = setIDs(ids, n)

    return (
        <main className="pt-3 main-article">
            <div className="columns">
                <div className="pt-0 column is-3">
                    <LandingPanel />
                </div>
                {/* Hero Wrapper Div */}
                <div className="mr-3 column">
                    {/* Hero */}
                    <article className="hero">
                        <section className="hero-body">
                            {/* Hero Banner */}
                            <div className="container box">
                                <Link className="title-click" to="#">
                                    <h1 className="title">
                                        Tasha's Cauldron of Everything
                                    </h1>
                                    <h1 className="subtitle">
                                        Coming November 17!
                                    </h1>
                                </Link>
                            </div> {/* End Hero Banner */}
                            {/* Hero Img */}
                            <div className="container">
                                <div className="tile is-ancestor">
                                    <div className="tile is-12 is-parent box hero-image-container">
                                        <div className="mr-2 hero-arrow hero-left-arrow">
                                            <button>
                                                <FontAwesomeIcon icon={'chevron-left'} size={'2x'} />
                                            </button>
                                        </div>
                                        <figure className="image is-fullwidth">
                                            <Link className="img-click" to='#'>
                                                <img
                                                    className="tile is-12"
                                                    src="https://media.dnd.wizards.com/TCoE_Gallery_Thumb_0.jpg"
                                                    alt="Wizard casting a spell from a book"
                                                />
                                            </Link>
                                        </figure>

                                        <div className="ml-2 hero-arrow hero-right-arrow">
                                            <button>
                                                <FontAwesomeIcon icon={'chevron-right'} size={'2x'} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* End Hero Img */}
                        </section>
                    </article> {/* End Hero */}
                    {/* Random Product Display */}
                    <section className="mx-5 my-5 container features">
                        <div className="tile is-ancestor">
                            <ResultCard pid={ids[0]} />
                            <ResultCard pid={ids[1]} />
                            <ResultCard pid={ids[2]} />
                        </div>
                    </section> {/* End Random Product Display */}
                </div> {/* End Hero Wrapper Div */}
            </div>
        </main >
    )
}

/* Functions to determine the ids of three random products from product list */
const randID = (n) => Math.floor(Math.random() * n)
const setIDs = (arr, n) => {
    let id = randID(n)
    for (let i = 0; i < 3; i++) {
        while (arr.includes(id)) id = randID(n)
        arr.push(id)
    }
    
    return arr
}