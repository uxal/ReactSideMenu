import React, { Component, PropTypes } from 'react';

import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Close from 'material-ui/svg-icons/navigation/close';

import styles from './sideMenu.css';

class SideMenu extends Component {
    constructor(props) {
        super(props);

        //the size of the menu/x buttons width and height
        this._menuIconSize = 30;

        this.state = {
            dynamicStyle: {width: this.props.expanded ? this.props.openedWidth : this.props.closedWidth}
        }
    }

    animateSideMenu() {
        //this.props.dispatch({type: ANIMATE_SIDEMENU, payload: this.props.expanded ? false : true});
        this.setState({
            dynamicStyle: {width: !this.props.expanded ? this.props.openedWidth : this.props.closedWidth}
        });
        this.props.onAnimate(!this.props.expanded);
    }


    render() {
        //output the html
        return (
            <aside
                className={styles.uxalSideMenu}
                style={this.state.dynamicStyle}
            >
                <FlatButton
                    icon={!this.props.expanded ? <Menu style={{fill: '#fff', height: this._menuIconSize, width: this._menuIconSize}}/> :
                        <Close style={{fill: '#fff', height: this._menuIconSize, width: this._menuIconSize}}/>  }
                    onClick={this.animateSideMenu.bind(this)}
                    style={{minWidth: 'auto', textAlign: 'left', paddingLeft: '23px'}}
                />
                <div className={styles.uxalSideMenuList}>
                    {this.props.children}
                </div>
            </aside>
        )
    }
}

SideMenu.propTypes = {
    /**
     * This decides if the side menu is opened or not
     */
    expanded: PropTypes.bool,

    /**
     *This is the width used for the side menu when it is closed
     */
    closedWidth: PropTypes.number,

    /**
     * This is the width used for the side menu when it is expanded
     */
    openedWidth: PropTypes.number,

    /**
     * This is the function executed when the animation takes place
     */
    onAnimate: PropTypes.func

}

SideMenu.defaultProps = {
    expanded: false,
    closedWidth: 70,
    openedWidth: 300
}


export default SideMenu;