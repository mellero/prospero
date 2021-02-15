import React from 'react'
import Subpanel from '../common/subpanel'

/**
 * Wrapper Component for the Subpanel, allows consistent sizing of panel
 */
export default function LandingPanel() {
   return (
    <div className="showcase-nav no-outer">
        <aside className="menu">
            <Subpanel />
        </aside>
    </div>
   )
}