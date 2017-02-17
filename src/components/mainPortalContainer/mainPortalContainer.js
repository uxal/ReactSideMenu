/**
 * This is a container for the main page view which is displayed under the header and at the left of the side menu
 */

import React, { Component } from 'react';

import styles from './mainPortalContainer.css';

class MainPortalContainer extends Component {

    render() {
        return (
            <div
                className={styles.portalPageContainerGreyBackground + " " + (this.props.expanded ? styles.sideMenuExpanded : "")}>
                {/* And now display all the pages loaded by router below */}
                {this.props.children}
            </div>
        )
    }
}

export default MainPortalContainer;