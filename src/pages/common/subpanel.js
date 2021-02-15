import React, { useState } from 'react'
import '../../../static/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'gatsby'

/**
 * The main panel that holds navigation for the site. Is a child
 * of ResultsPanel and LandingPanel.
 */
export default function Subpanel() {
    /* State for each panel subsection: whether they are expanded or collapsed */
    const [isOpen, setIsOpen] = useState([true, false, false])

    /* Event Handler for expanding/collapsing given subsection */
    const changeIsOpen = (id, bool) => {
        let res = [...isOpen]
        res[id] = bool
        setIsOpen(res)
    }

    return (
        <div>
            {/* Tabletop Games */}
            <div className="menu-label">
                {/* TTG Label */}
                <div onClick={() => changeIsOpen(0, !isOpen[0])} className="level" role="button">
                    <div className="level-left">
                        <Link to="#"  className="menu-item">
                            Tabletop Games
                        </Link>
                    </div>
                    {/* Expand/Collapse Buttons */}
                    <div className="level-right">
                        <span className={(isOpen[0] ? ' collapse' : ' expand')}>
                            <button to="#"  className="button is-small expand-collapse">
                                <FontAwesomeIcon icon={'plus'} />
                            </button>
                        </span>
                        <span className={(isOpen[0] ? ' expand' : ' collapse')}>
                            <button to="#"  className="button is-small expand-collapse">
                                <FontAwesomeIcon icon={'minus'} />
                            </button>
                        </span>
                    </div>
                </div> {/* End TTG Label */}
            </div>
            {/* TTG Options */}
            <ul className={'menu-list' + (isOpen[0] ? ' expand' : ' collapse')}>
                <li>
                    <Link to="#">
                        Call of Cthulhu
                    </Link> 
                </li>
                <li>
                    <Link to="#">
                        Dungeons & Dragons
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        Pathfinder
                    </Link>
                </li>
                <li>
                    <Link className="is-active" to="/results">
                        Warhammer 40k
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        Warhammer Age of Sigmar
                    </Link>
                </li>
            </ul> {/* End TTG Options */}
            <hr /> {/* End Tabletop Games */}
            {/* Books */}
            <div className="menu-label">
                {/* Books Label */}
                <div  onClick={() => changeIsOpen(1, !isOpen[1])} className="level" role="button">
                    <div className="level-left">
                        <Link to="#" className="menu-item">
                            Books
                        </Link>
                    </div>
                    {/* Expand/Collapse Buttons */}
                    <div className="level-right">
                        <span className={(isOpen[1] ? 'collapse' : 'expand')}>
                            <button to="#" className="button is-small expand-collapse">
                                <FontAwesomeIcon icon={'plus'} />
                            </button>
                        </span>
                        <span className={(isOpen[1] ? 'expand' : 'collapse')}>
                            <button to="#" className="button is-small expand-collapse">
                                <FontAwesomeIcon icon={'minus'} />
                            </button>
                        </span>
                    </div>
                </div> 
            </div> {/* End Books Label */}
            {/* Books Options */}
            <ul className={'menu-list' + (isOpen[1] ? ' expand' : ' collapse')}>
                <li>
                    <Link to="#">
                        Black Library
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        Fantasy
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        Science Fiction
                    </Link>
                </li>
            </ul> {/* End of Books Options */}
            <hr /> {/* End of Books */}
            {/* Other */}
            <div className="menu-label">
                {/* Other Label */}
                <div  onClick={() => changeIsOpen(2, !isOpen[2])} className="level" role="button">
                    <div className="level-left">
                        <Link to="#" className="menu-item">
                            Other
                        </Link>
                    </div>
                    <div className="level-right">
                        <span className={(isOpen[2] ? 'collapse' : 'expand')}>
                            <button to="#" className="button is-small expand-collapse">
                                <FontAwesomeIcon icon={'plus'} />
                            </button>
                        </span>
                        <span className={(isOpen[2] ? 'expand' : 'collapse')}>
                            <button to="#" className="button is-small expand-collapse">
                                <FontAwesomeIcon icon={'minus'} />
                            </button>
                        </span>
                    </div>
                </div>
            </div> {/* End Other Label */}
            {/* Other Options */}
            <ul className={'menu-list' + (isOpen[2] ? ' expand' : ' collapse')}>
                <li>
                    <Link to="#">
                        Dice
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        Painting
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        Miniatures
                    </Link>
                </li>
            </ul> {/* End Other | End Other Options */}
        </div>
    )
}