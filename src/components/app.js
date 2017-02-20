/**
 * This is the main app file where I link together the header and the main pages
 */

import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Header from './header/header';
import LeftBar from './leftBar/leftBar';
import MainPortalContainer from './mainPortalContainer/mainPortalContainer';

import SideMenu from './sideMenu/sideMenu';
import SideMenuItem from './sideMenu/sideMenuItem';

import Avatar from 'material-ui/Avatar';
import {
    blue500,
    yellow700,
    red500,
    cyan500,
    teal500,
    lime500,
    green500,
    amber500,
    orange500,
    deepOrange500,
    indigo500,
    pink500
} from 'material-ui/styles/colors';
import Settings from 'material-ui/svg-icons/action/settings';
import Home from 'material-ui/svg-icons/action/home';
import Build from 'material-ui/svg-icons/action/build';
import Gavel from 'material-ui/svg-icons/action/gavel';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import ViewList from 'material-ui/svg-icons/action/view-list';
import Work from 'material-ui/svg-icons/action/work';
import Group from 'material-ui/svg-icons/social/group';
import Person from 'material-ui/svg-icons/social/person';
import GroupWork from 'material-ui/svg-icons/action/group-work';
import Folder from 'material-ui/svg-icons/file/folder';
import Add from 'material-ui/svg-icons/content/add';
import Create from 'material-ui/svg-icons/content/create';
import Web from 'material-ui/svg-icons/av/web';
import Business from 'material-ui/svg-icons/communication/business';
import BugReport from 'material-ui/svg-icons/action/bug-report';
import Description from 'material-ui/svg-icons/action/description';
import SettingsOverscan from 'material-ui/svg-icons/action/settings-overscan';
import ImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import SettingsApplication from 'material-ui/svg-icons/action/settings-applications';
import Extension from 'material-ui/svg-icons/action/extension';
import Input from 'material-ui/svg-icons/action/input';
import ViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import GTranslate from 'material-ui/svg-icons/action/g-translate';
import FilterCenterFocus from 'material-ui/svg-icons/image/filter-center-focus';
import ContactMail from 'material-ui/svg-icons/communication/contact-mail';
import Help from 'material-ui/svg-icons/action/help';
import MergeType from 'material-ui/svg-icons/editor/merge-type';
import ViewDay from 'material-ui/svg-icons/action/view-day';
import Dvr from 'material-ui/svg-icons/device/dvr';
import Devices from 'material-ui/svg-icons/device/devices';
import Widgets from 'material-ui/svg-icons/device/widgets';
import Cloud from 'material-ui/svg-icons/file/cloud';
import Language from 'material-ui/svg-icons/action/language';
import PieChart from 'material-ui/svg-icons/editor/pie-chart';
import BlurLinear from 'material-ui/svg-icons/image/blur-linear';

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
                    <LeftBar onAnimate={this.onDrawerAnimation.bind(this)} expanded={this.state.expanded}>
                        <SideMenu>
                            <SideMenuItem label="First item"
                                          leftAvatar={<Avatar icon={<Home style={{fill: '#fff'}}/>} backgroundColor={blue500}/>}
                                          subItemsLevel={1}
                                          sideMenuExpanded={this.state.expanded}
                                          subItems={[
                                              <SideMenuItem label="Sub item 1" leftAvatar={<Avatar icon={<Build style={{fill: '#fff'}}/>} backgroundColor={red500}/>} />,
                                              <SideMenuItem label="Sub item 2" leftAvatar={<Avatar icon={<Business style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>,
                                              <SideMenuItem label="Sub item 3" leftAvatar={<Avatar icon={<SettingsOverscan style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>,
                                              <SideMenuItem label="Sub item 4" leftAvatar={<Avatar icon={<BugReport style={{fill: '#fff'}}/>} backgroundColor={red500}/>} subItemsLevel={2}
                                                            subItems={[
                                                                <SideMenuItem label="A.1" leftAvatar={<Avatar icon={<Build style={{fill: '#fff'}}/>} backgroundColor={red500}/>} onClick={()=>{console.log("clicked on A.1")}}/>,
                                                                <SideMenuItem label="A.2" leftAvatar={<Avatar icon={<Business style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>,
                                                                <SideMenuItem label="A.3" leftAvatar={<Avatar icon={<SettingsOverscan style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>,
                                                                <SideMenuItem label="A.4" leftAvatar={<Avatar icon={<BugReport style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>,
                                                                <SideMenuItem label="A.5" leftAvatar={<Avatar icon={<Description style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>
                                                            ]}
                                              />,
                                              <SideMenuItem label="Sub item 5" leftAvatar={<Avatar icon={<Description style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>
                                          ]}
                            />
                            <SideMenuItem label="Second item" leftAvatar={<Avatar icon={<ImportContacts style={{fill: '#fff'}}/>} backgroundColor={red500}/>} sideMenuExpanded={this.state.expanded} onClick={()=>{console.log("clicked on Second item")}}/>
                            <SideMenuItem label="Third item" leftAvatar={<Avatar icon={<TrendingUp style={{fill: '#fff'}}/>} backgroundColor={pink500}/>} sideMenuExpanded={this.state.expanded}/>
                            <SideMenuItem label="Forth item" leftAvatar={<Avatar icon={<Web style={{fill: '#fff'}}/>} backgroundColor={green500}/>} sideMenuExpanded={this.state.expanded}/>
                            <SideMenuItem label="Fifth item" leftAvatar={<Avatar icon={<Web style={{fill: '#fff'}}/>} backgroundColor={green500}/>} sideMenuExpanded={this.state.expanded}/>
                            <SideMenuItem label="Sixth item" leftAvatar={<Avatar icon={<Web style={{fill: '#fff'}}/>} backgroundColor={green500}/>} sideMenuExpanded={this.state.expanded}/>
                            <SideMenuItem label="Seventh item" leftAvatar={<Avatar icon={<Web style={{fill: '#fff'}}/>} backgroundColor={green500}/>} sideMenuExpanded={this.state.expanded}/>
                            <SideMenuItem label="Eight item" leftAvatar={<Avatar icon={<Web style={{fill: '#fff'}}/>} backgroundColor={green500}/>} sideMenuExpanded={this.state.expanded} subItemsLevel={1}
                                          subItems={[
                                              <SideMenuItem label="B.1" leftAvatar={<Avatar icon={<Build style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>,
                                              <SideMenuItem label="B.2" leftAvatar={<Avatar icon={<Business style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>,
                                              <SideMenuItem label="B.3" leftAvatar={<Avatar icon={<SettingsOverscan style={{fill: '#fff'}}/>} backgroundColor={red500}/>} subItemsLevel={2}
                                                            subItems={[
                                                                <SideMenuItem label="Sub item 1" leftAvatar={<Avatar icon={<Build style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>,
                                                                <SideMenuItem label="Sub item 2" leftAvatar={<Avatar icon={<Business style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>,
                                                                <SideMenuItem label="Sub item 3" leftAvatar={<Avatar icon={<SettingsOverscan style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>,
                                                                <SideMenuItem label="Sub item 4" leftAvatar={<Avatar icon={<BugReport style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>,
                                                                <SideMenuItem label="Sub item 5" leftAvatar={<Avatar icon={<Description style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>
                                                            ]}/>,
                                              <SideMenuItem label="b.4" leftAvatar={<Avatar icon={<BugReport style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>,
                                              <SideMenuItem label="b.5" leftAvatar={<Avatar icon={<Description style={{fill: '#fff'}}/>} backgroundColor={red500}/>}/>
                                          ]}
                            />
                            <SideMenuItem label="Ninth item" leftAvatar={<Avatar icon={<Web style={{fill: '#fff'}}/>} backgroundColor={green500}/>} sideMenuExpanded={this.state.expanded}/>
                        </SideMenu>
                    </LeftBar>
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