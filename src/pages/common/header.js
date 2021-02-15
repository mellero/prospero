import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import '../../../static/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/**
 * Header/Navigation for the site. Holds the search bar, and uses location state to set/send
 * search parameters to the Results page 
 * @param {String} searchParams search string to be tokenized and sent to Results
 */
export default function Header({ searchParams }) {
    /* Sets state to either an empty string or whatever was searched for */
    const [search, setSearch] = useState('' || searchParams)
    /* Two-way binding for search input box */
    const changeHandler = (e) => {
        setSearch(e.target.value)
    }
    /* A string to allow for cleaner URL when search is blank */
    const resultsParamString = search ? '/results?' + search : '/results'
    /* Handles 'enter' functionality for the search bar */
    const enterHandler = (e) => {
        if (e.key === 'Enter') {
            navigate(resultsParamString, { 
                state: { search: search } 
            })
        }
    }

    return (
        <header>
            <div className="fixed">
                <nav className="navbar is-fixed-top is-dark">
                    {/* Brand */}
                    <div className="navbar-brand brand">
                        <Link className="navbar-item" to={'/'}>
                            <FontAwesomeIcon className={'pr-2'} icon={'dungeon'} size={'lg'} />
                            <p className="mx-3 is-uppercase">
                                prospero
                            </p>
                        </Link>
                    </div> {/* End Brand */}
                    {/* Nav Menu */}
                    <div className="navbar-menu" id="nav-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item" to="#about">
                                About
                            </Link>
                            <Link className="navbar-item" to="#">
                                Products
                            </Link>
                            <Link className="navbar-item" to="#">
                                Contact Us
                            </Link>
                        </div>
                        <div className="ml-3 navbar-end is-dark">
                            {/* Nav Search */}
                            <div className="navbar-item">
                                <div className="field has-addons">
                                    <p className="control">
                                        <input
                                            className="input"
                                            id="search-bar"
                                            type="text"
                                            placeholder="Search for products"
                                            value={search}
                                            onChange={changeHandler}
                                            onKeyDown={enterHandler}
                                        />
                                    </p>
                                    <p className="control" id="search-icon">
                                        <Link 
                                            className="button" 
                                            to={resultsParamString}
                                            state={{ search: search }}
                                        >
                                            <FontAwesomeIcon icon={'search'} />
                                        </Link>
                                    </p>
                                </div>
                            </div> {/* End Nav Search */}
                            {/* Cart */}
                            <Link className="navbar-item px-5" to="#">
                                <FontAwesomeIcon className={'pr-2'} icon={'shopping-cart'} size={"lg"} />
                                <span>(0)</span>
                            </Link> {/* End Cart */}
                            <Link className="navbar-item" id="login" to="#">
                                Log in
                            </Link>
                            <Link className="navbar-item" id="signup" to="#">
                                Sign up
                            </Link>
                        </div>
                    </div> {/* End Nav Menu */}
                </nav>
            </div>
        </header>
    )
}