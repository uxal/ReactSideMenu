import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import KeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

import styles from './sideMenuItem.css'

class SideMenuItem extends Component {
    constructor(props) {
        super(props);

        this._listItemHeight = 56;

        this.state = {
            subMenuOpened: false
        }

        this.uniquePrefix = "";
        if (this.props.subItems) {
            this.uniquePrefix = this.generateUniqueKey();
        }
    }

    handleSubItemsDisplay() {
        this.autoScrollWithJquery();
        this.setState({
            subMenuOpened: !this.state.subMenuOpened
        });
    }

    autoScrollWithJquery() {
        if (typeof ($) === "function" && !this.state.subMenuOpened) {
            const $this = $(this.parentDivElement);
            setTimeout(function () {

                const sideMenuContainer = $this.closest('.uxalSideMenu');

                let topPositionOfClickedElement = $this.position().top - 35;
                if (topPositionOfClickedElement < 0) {
                    topPositionOfClickedElement = 0;
                }
                else {
                    topPositionOfClickedElement += sideMenuContainer.scrollTop();
                }

                //sideMenuContainer.scrollTop($this.position().top);
                sideMenuContainer.animate({
                    scrollTop: topPositionOfClickedElement
                }, 1000);
            }, 200);
        }

    }

    componentDidUpdate() {
        if (this.state.subMenuOpened && this.props.parentSubMenuOpened === false) {
            //this means that the parent was closed. close the children too
            this.setState({subMenuOpened: !this.state.subMenuOpened})
        }

    }

    /**
     * Next method generates a unique key when we have sub menus
     */
    generateUniqueKey() {
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        const string_length = 8;
        let randomstring = '';
        for (let i = 0; i < string_length; i++) {
            let rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }
        return randomstring;
    }

    render() {

        let subListPadding = this.props.subItemsLevel ? (this.props.subItemsLevel * 18) : 0;
        let parentListPadding = subListPadding === 0 ? 0 : ((this.props.subItemsLevel - 1) * 18)
        if (!this.props.sideMenuExpanded) {
            subListPadding = 0;
            parentListPadding = 0;
        }

        const parentStyle = {height: this._listItemHeight, paddingLeft: parentListPadding, transition: 'all 0.3s ease-out'};
        const subListStyle = {height: this._listItemHeight, paddingLeft: subListPadding, transition: 'all 0.3s ease-out'};

        return (
            <div className="sideMenuItem">
                <div className="mainItem">
                    {
                        this.props.subItems ?
                            <div className={styles.mainItemWithSubMenu} ref={(parentElement) => {
                                this.parentDivElement = parentElement;
                            }}>
                                <ListItem primaryText={this.props.sideMenuExpanded ? this.props.label : ''}
                                          style={parentStyle}
                                          leftAvatar={this.props.leftAvatar ? this.props.leftAvatar : null}
                                          onClick={this.handleSubItemsDisplay.bind(this)}/>
                                {this.props.sideMenuExpanded ?
                                    <IconButton style={{position: 'absolute', right: 0, top: 5}} onClick={this.handleSubItemsDisplay.bind(this)}>
                                        {this.state.subMenuOpened ? <KeyboardArrowUp /> : <KeyboardArrowDown /> }
                                    </IconButton>
                                    :
                                    ''
                                }
                            </div>
                            :
                            <ListItem primaryText={this.props.sideMenuExpanded ? this.props.label : ''}
                                      style={parentStyle}
                                      leftAvatar={this.props.leftAvatar ? this.props.leftAvatar : null}
                                      onClick={this.props.onClick}/>
                    }
                </div>
                {
                    this.props.subItems ?
                        <div className={styles.subMenu + " " + (this.state.subMenuOpened ? styles.subMenuOpened : styles.subMenuClosed)}>
                            {this.props.subItems.map((subItem, index) => {
                                return (
                                    subItem.props.subItems ?
                                        <SideMenuItem label={subItem.props.label}
                                                      leftAvatar={subItem.props.leftAvatar}
                                                      subItemsLevel={subItem.props.subItemsLevel}
                                                      subItems={subItem.props.subItems}
                                                      key={this.uniquePrefix}
                                                      sideMenuExpanded={this.props.sideMenuExpanded}
                                                      parentSubMenuOpened={this.state.subMenuOpened}
                                        />
                                        :
                                        <ListItem primaryText={this.props.sideMenuExpanded ? subItem.props.label : ''} key={this.uniquePrefix + "_" + index}
                                                  style={subListStyle}
                                                  leftAvatar={subItem.props.leftAvatar ? subItem.props.leftAvatar : null}
                                                  onClick={subItem.props.onClick}
                                        />
                                );
                            })}
                        </div>
                        : ''
                }
            </div>

        )
    }

}


export default SideMenuItem;