import React from 'react'
import '../../../static/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/**
 * Section that separates the Header/Nav from the Main section of the page
 * @param {Boolean} isLanding a boolean that describes if the Welcome component is being
 *                              rendered from the Landing page
 */
export default function Welcome({ isLanding }) {
    /* If isLanding, display the Title Brand and tag line */
    return (
        <section className="p-3 section welcome">
            <div className="level">
                <div className="level-item">
                    { isLanding && <div className="mr-5">
                        <p className="title brand">
                            Prospero Gaming
                        </p>
                        <p className="heading">
                            Selling nerd crap since 1993
                        </p>    
                    </div> } 
                    <div className="ml-5">
                        <FontAwesomeIcon icon={'dungeon'} size={'5x'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}