import React from 'react'
import '../../../static/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/**
 * Dynamic rating star container. Takes a integer value and returns that many
 * solid stars and the remaining empty stars (out of 5)
 * @param {String} clName class name if necessary for the wrapper div
 * @param {Number} rating rating from 1-5 to be displayed
 * @param {String} size size to modify star sizes
 *  
 */
export default function Rating({ clName, rating, size = '1x'}) {
    const solid = <FontAwesomeIcon icon={'star'} size={size} />;
    const empty = <FontAwesomeIcon icon={['far', 'star']} size={size} />;

    return (
        <div className={clName}>
            { solid }
            { rating < 2 ? empty : solid }
            { rating < 3 ? empty : solid }
            { rating < 4 ? empty : solid }
            { rating < 5 ? empty : solid }
        </div>
    )
}