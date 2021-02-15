import React, { useState } from 'react'
import Subpanel from '../common/subpanel'
import { prices } from '../../../static/filter'
import '../../../static/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/** 
 * Left-Side Panel for Results Page. Wraps the Subpanel Component, and adds a filter section 
 * at the top of the panel. Filters by price ranges, and by ratings.
 */ 
export default function ResultsPanel({ resetFilter, filterPrice, filterRating, rating }) {
    const [checkedArr, setCheckedArr] = useState([false, false, false, false])
    const [isSolid, setIsSolid] = useState(changeSolid(rating))
    const [tempSolid, setTempSolid] = useState(isSolid)

    /* JSX for the rating stars */
    const solidStar = <FontAwesomeIcon icon={'star'} />
    const emptyStar = <FontAwesomeIcon icon={['far', 'star']} />

    /* Handles the price radio buttons. Uses an array to keep track of 
        which button is pressed for the state */
    const changeHandler = (e) => {
        let price
        switch (e.target.id) {
            case "p-r1":
                price = prices.lo
                setCheckedArr([true, false, false, false])
                break
            case "p-r2":
                price = prices.medLo
                setCheckedArr([false, true, false, false])
                break
            case "p-r3":
                price = prices.med
                setCheckedArr([false, false, true, false])
                break
            case "p-r4":
                price = prices.hi
                setCheckedArr([false, false, false, true])
                break
            default: 
                break
        }
        filterPrice(price)
    }

    /* Resets the Price radio buttons, and the ratings back to default settings */
    const reset = () => {
        setCheckedArr([false, false, false, false])
        setIsSolid(changeSolid(1, setTempSolid))
        resetFilter()
    }

    /* Changes the TempSolid array that keeps track of the hover stars.
        Uses the current isSolid state to start and return back to after
        hovering is complete */
    const changeTempSolid = (id) => {
        let res = [...isSolid]
        for (let i = 1; i < id; i++) {
            res[i] = true;
        }
        setTempSolid(res)
    }

    return (
        <div className="outer">
            <div className="showcase-nav">
                <aside className="menu">
                    {/* Filter header, with reset button */}
                    <div className="level">
                        <p>
                            Filters:
                        </p>
                        <button onClick={reset} className="button is-small">
                            <span className="icon is-small">
                                <FontAwesomeIcon icon='times' />
                            </span>
                        </button>
                    </div>
                    {/* Price Menu */}
                    <div className="block filters-menu">
                        <p className="mb-2 menu-label">
                            Price:
                        </p>
                        <div className="filter-price">
                            <label className="price-range">
                                <input 
                                    id="p-r1" 
                                    type="radio" 
                                    name="price" 
                                    checked={checkedArr[0]} 
                                    onChange={changeHandler}  
                                />
                                $0-$30
                            </label>
                            <label className="price-range">
                                <input 
                                    id="p-r2" 
                                    type="radio" 
                                    name="price" 
                                    checked={checkedArr[1]} 
                                    onChange={changeHandler}  
                                />
                                $31-$60
                            </label>
                            <label className="price-range">
                                <input 
                                    id="p-r3" 
                                    type="radio" 
                                    name="price" 
                                    checked={checkedArr[2]} 
                                    onChange={changeHandler}  
                                />
                                $61-$100
                            </label>
                            <label className="price-range">
                                <input 
                                    id="p-r4" 
                                    type="radio" 
                                    name="price" 
                                    checked={checkedArr[3]} 
                                    onChange={changeHandler}  
                                />
                                $100+
                            </label>
                        </div>
                    </div> {/* End of Price Menu */}
                    {/* Rating Menu */}
                    <div>
                        <p className="mb-0 menu-label">
                            Rating:
                        </p>
                        <button 
                            onClick={() => {
                                setIsSolid(changeSolid(1, setTempSolid))
                                filterRating(1)
                            }} 
                            className="button rating px-1 is-small"
                        >
                            {solidStar}
                        </button>
                        <button 
                            onClick={() => {
                                setIsSolid(changeSolid(2, setTempSolid))
                                filterRating(2)
                            }} 
                            className="button rating px-1 is-small"
                            onMouseEnter={() => changeTempSolid(2)}
                            onMouseLeave={() => setTempSolid(isSolid)}
                        >
                            {(isSolid[1] || tempSolid[1]) ? solidStar : emptyStar}
                        </button>
                        <button 
                            onClick={() => {
                                setIsSolid(changeSolid(3, setTempSolid))
                                filterRating(3)
                            }} 
                            className="button rating px-1 is-small"
                            onMouseEnter={() => changeTempSolid(3)}
                            onMouseLeave={() => setTempSolid(isSolid)}
                        >
                            {(isSolid[2] || tempSolid[2]) ? solidStar : emptyStar}
                        </button>
                        <button 
                            onClick={() => {
                                setIsSolid(changeSolid(4, setTempSolid))
                                filterRating(4)
                            }} 
                            className="button rating px-1 is-small"
                            onMouseEnter={() => changeTempSolid(4)}
                            onMouseLeave={() => setTempSolid(isSolid)}
                        >
                            {(isSolid[3] || tempSolid[3]) ? solidStar : emptyStar}
                        </button>
                        <button 
                            onClick={() => {
                                setIsSolid(changeSolid(5, setTempSolid))
                                filterRating(5)
                            }} 
                            className="button rating px-1 is-small"
                            onMouseEnter={() => changeTempSolid(5)}
                            onMouseLeave={() => setTempSolid(isSolid)}
                        >
                            {(isSolid[4] || tempSolid[4]) ? solidStar : emptyStar}
                        </button>
                    </div> {/* End of Rating Menu */}
                    <hr />
                    <Subpanel />
                </aside>
            </div>
        </div>
    )
}

/* Takes a callback fn to call if necessary. Handles the changing of the
    non-hover rating star states. The cb fn is expected to be setTempSolid */
const changeSolid = (rating, cb) => {
    let res = []
    for (let i = 0; i < 5; i++) {
        if (i < rating)     res.push(true)
        else                res.push(false)
    }
    if (cb) {
        cb(rating)
    }
    return res
}

