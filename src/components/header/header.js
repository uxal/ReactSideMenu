import React, { Component } from 'react';

import styles from './header.css'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topNavigationBarMenuDisplayed: false
        }
    }

    clickedNavigationMobileToggler() {
        this.setState({
            topNavigationBarMenuDisplayed: !this.state.topNavigationBarMenuDisplayed
        });
    }

    render() {

        return (
            <div>
                <nav className="navbar navbar-toggleable-sm navbar-inverse fixed-top bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right" type="button"
                            onClick={this.clickedNavigationMobileToggler.bind(this)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">Sidemenu demonstration</a>
                    <div
                        className={styles.uxalTopNavMenu + " collapse navbar-collapse " + (this.state.topNavigationBarMenuDisplayed ? styles.show : "")}>
                        <ul className="navbar-nav mr-auto">

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;