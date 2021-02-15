import React from 'react'
import '../../../static/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/**
 * Footer of the page, holds information about Prospero Gaming Co., and related social media links
 */
export default function Footer() {
    return (
        <footer id="about" className="footer is-light">
            <div className="columns is-centered">
                <div className="column is-one-third">
                    <hr />
                    <h1 className="content is-medium is-uppercase has-text-weight-bold brand">
                        prospero gaming
                    </h1>
                    <p className="content is-small is-uppercase">
                        established 1993
                        <br />
                        ottawa, ontario, canada.
                        <br /><br />
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aenean tempor ac odio id varius. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut quis
                        pharetra augue. Ut finibus mauris eget dolor facilisis, in efficitur felis consequat.
                        In non lacus rutrum, volutpat neque sed, convallis metus.
                    </p>
                </div>
                <div className="column is-one-third">
                    <hr />
                    <h1 className="content is-medium is-uppercase has-text-weight-bold brand">
                        contact us
                    </h1>
                    <p className="content is-small is-uppercase">
                        1385 Woodroffe Avenue
                    <br />
                        Ottawa, Ontario
                    <br />
                        Canada
                    <br />
                        K2G 1V8
                    <br />
                        Phone number: (613) 727-4723 ext 5482
                    <br /><br />
                    <a href="mailto: info@prosperogaming.ca">
                        Email: info@prosperogaming.ca
                    </a>
                    </p>
                </div>
                <div className="column is-one-third">
                    <hr />
                    <h1 className="content is-medium is-uppercase has-text-weight-bold brand">
                        Follow us
                    </h1>
                    <ul className="content">
                        <li>
                            <a className="content" href="https://instagram.com">
                                <FontAwesomeIcon className='pr-1' icon={['fab', 'instagram']} />
                                instagram
                            </a>
                        </li>
                        <li>
                            <a className="content" href="https://linkedin.com">
                                <FontAwesomeIcon className='pr-1' icon={['fab', 'linkedin']} />
                                linkedin
                            </a>
                        </li>
                        <li>
                            <a className="content" href="https://twitter.com">
                                <FontAwesomeIcon className='pr-1' icon={['fab', 'twitter']} />
                                twitter
                            </a>
                        </li>
                        <li>
                            <a className="content brand is-uppercase" href="https://blog.com">
                                <FontAwesomeIcon className='pr-1' icon={'dungeon'} />
                                prospero blog
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}