/*
 * Developed by Prishan Maduka on 8/30/19 1:28 PM.
 * Last modified 8/30/19 1:28 PM
 * Copyright (c) 2019. All rights reserved Prishan Maduka
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
};

const cfgStore = () => {
    const middleWares = [thunk];
    const enhancer = applyMiddleware(...middleWares);
    const persistedReducer = persistReducer(persistConfig, reducers);

    // create store
    return createStore(persistedReducer, enhancer);
};

export const persistor = persistStore(cfgStore());

export default cfgStore;

