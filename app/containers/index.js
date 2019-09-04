/*
 * Developed by Prishan Maduka on 8/29/19 5:11 PM.
 * Last modified 8/29/19 5:07 PM
 * Copyright (c) 2019. All rights reserved Prishan Maduka
 */

import React, { Component } from 'react';
import {Actions, Router, Scene, Drawer} from "react-native-router-flux";
import SampleScreen from '../screens/SampleScreen';
import HomeScreen from '../screens/HomeScreen';
import VisitsScreen from '../screens/VisitsScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import AppInfoScreen from '../screens/AppInfoScreen';
import DrawerComponent from '../components/DrawerComponent';
import Locale from '../configurations/Locale';

const scenes = Actions.create(
    <Scene key='root'>

        {/* Splash */}
        <Scene key='splash'
               initial = {true}
               hideNavBar = {true}
               component={SampleScreen} />

        <Drawer key='mainDrawer'
                hideNavBar = {true}
                drawerWidth={250}
                drawerPosition='left'
                contentComponent = {DrawerComponent}>

            <Scene key='home'
                   initial = {false}
                   title={Locale.TXT_HOME}
                   component={HomeScreen} />

            <Scene key='visit'
                   initial = {false}
                   title={Locale.TXT_VISITS}
                   component={VisitsScreen} />

            <Scene key='myAccount'
                   initial = {false}
                   title={Locale.TXT_MY_ACCOUNT}
                   component={MyAccountScreen} />

            <Scene key='AppInfoScreen'
                   initial = {false}
                   title={Locale.TXT_APP_INFO}
                   component={AppInfoScreen} />


        </Drawer>

    </Scene>
);

class Root extends Component{

    render () {
        return (
            <Router scenes={scenes} getSceneStyle={() => ({ backgroundColor: 'transparent' })}/>
        )
    }
}

export default Root;
