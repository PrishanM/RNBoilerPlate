/*
 * Developed by Prishan Maduka on 8/29/19 5:12 PM.
 * Last modified 8/29/19 4:44 PM
 * Copyright (c) 2019. All rights reserved Prishan Maduka
 */

import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import Root from './containers'
import cfgStore,{persistor} from './store/ConfigureStore';
import {theme} from './configurations/Colors';
import SplashScreen from 'react-native-splash-screen';

const store = cfgStore();

export default class App extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(): void {
        SplashScreen.hide();
    }

    render() {
        return (
            <StoreProvider store={store}>

                <PaperProvider theme={theme}>

                    <PersistGate loading={null} persistor={persistor}>
                        <Root/>
                    </PersistGate>

                </PaperProvider>

            </StoreProvider>
        );
    }
}
