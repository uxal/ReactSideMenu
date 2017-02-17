/**
 * This is the main app file where I link together the header and the main pages
 */

import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Header from './header/header';
import SideMenu from './sidemenu/sidemenu';
import MainPortalContainer from './mainPortalContainer/mainPortalContainer'


//temporary needed by material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        }
    }

    onDrawerAnimation(expanded) {
        this.setState({
            expanded
        });
    }


    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <Header/>
                    <SideMenu onAnimate={this.onDrawerAnimation.bind(this)} expanded={this.state.expanded}>
                        <div>Side menu items</div>
                    </SideMenu>
                    <MainPortalContainer expanded={this.state.expanded}>
                        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                            <div className="container-fluid no-gutters">
                                {this.props.children}
                            </div>
                        </MuiThemeProvider>
                    </MainPortalContainer>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;