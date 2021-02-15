import React, { useEffect, useState } from 'react'
import ResultCard from '../common/resultCard'
import LandingPanel from './landingPanel'
import '../../../static/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'gatsby'
import { getLandingProducts } from '../../../static/prosperoDB'

/**
 * Main Landing page. Contains a Hero section and three random products to display under it
 */
export default function Landing() {
    /* Takes the total number of products and grabs 3 random ids to display under Hero */
    const [prods, setProds] = useState([])
    /* Asynchronously get 3 random products from the backend */
    useEffect(() => {
        async function getIds() {
            setProds(await getLandingProducts())
        }
        getIds()
    }, [])

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
                            <ResultCard product={prods[0]} />
                            <ResultCard product={prods[1]} />
                            <ResultCard product={prods[2]} />
                        </div>
                    </section> {/* End Random Product Display */}
                </div> {/* End Hero Wrapper Div */}
            </div>
        </main >
    )
}