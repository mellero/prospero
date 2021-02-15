import React from 'react'
import '../../../static/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { sortFns } from '../../../static/filter'

/** 
 * Sort Bar at top of Results Main. Allows Sorting functionality for Revelance (default),
 * Price low-to-high, Price high-to-low, and Alphabetical ascending and descending.
 */
export default function SortBar({ changeSortFn, numResults }) {
    /* Handles the sorting state for the ResultsMain parent component */
    const changeHandler = (sortObj) => {
        changeSortFn(sortObj)
    }

    return (
        <section className="sort-menu-bar">
            <div className="level">
                <div className="level-left">
                    {/* Sort Drop Down */}
                    <div className="dropdown is-hoverable">
                        <div className="dropdown-trigger">
                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                <span>Sort by</span>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon='angle-down' aria-hidden="true" />
                                </span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                            <div className="dropdown-content" role="listbox">
                                <div onClick={() => changeHandler({ sortFn: null })} className="dropdown-item" role="listitem">
                                    Relevance 
                                </div>
                                <div onClick={() => changeHandler({ sortFn: sortFns.sortHiLo })} className="dropdown-item" role="listitem">
                                    Price High-to-Low
                                </div>
                                <div onClick={() => changeHandler({ sortFn: sortFns.sortLoHi })} className="dropdown-item" role="listitem">
                                    Price Low-to-High
                                </div>
                                <div onClick={() => changeHandler({ sortFn: sortFns.sortAZ })} className="dropdown-item" role="listitem">
                                    A-Z
                                </div>
                                <div onClick={() => changeHandler({ sortFn: sortFns.sortZA })} className="dropdown-item" role="listitem">
                                    Z-A
                                </div>
                            </div>
                        </div>
                    </div> {/* End Sort Drop Down */}
                    <div className="ml-5 block">
                        <p className="results">
                            Showing <strong>{numResults} Results</strong> of {numResults}
                        </p>
                    </div>
                </div>
                {/* Pagination */}
                <div className="level-right">
                    <nav className="pagination is-centered is-small is-rounded" role="navigation" aria-label="pagination">
                        <a className="pages pagination-previous" href="#">
                            <FontAwesomeIcon icon='chevron-left' />
                        </a>
                        <a className="pages pagination-next" href="#">
                            <FontAwesomeIcon icon='chevron-right' />
                        </a>
                        <ul className="pagination-list">
                            <li>
                                <a className="pages pagination-link is-current" aria-label="Goto page 1" href="#">
                                    1
                                </a>
                            </li>
                            <li>
                                <a className="pages pagination-link" aria-label="Goto page 2" href="#">
                                    2
                                </a>
                            </li>
                            <li>
                                <a className="pages pagination-link" aria-label="Goto page 3" href="#">
                                    3
                                </a>
                            </li>
                            <li>
                                <span className="pages pagination-ellipsis">&hellip;</span>
                            </li>
                            <li>
                                <a className="pages pagination-link" aria-label="Goto page 6" href="#">
                                    6
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div> {/* End Pagination */}
            </div>
        </section>
    )
}