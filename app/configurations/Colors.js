/*
 * Developed by Prishan Maduka on 8/30/19 10:34 AM.
 * Last modified 8/30/19 10:34 AM
 * Copyright (c) 2019. All rights reserved Prishan Maduka
 */

import {DefaultTheme} from 'react-native-paper';
import {fontRegular} from './Styles';

export const colors = {
    primaryColor : '#1b81c6',
    colorSecondary : '#da59d2',
    colorSecondaryLight : '#c876ca',
    colorBlueLight : '#dbe2f0',
    colorBlueDark : '#0275bd',
    colorGreenLight : '#0cd84a',
    colorGreenDark : '#00a945',
    colorWhite : '#FFFFFF',
    colorBlack : '#000000',
    colorGray : '#afafaf',
    backgroundColor : '#f0f0f0',
    lineColor : '#e8f1ff',
    fontDark : '#2d2d2d'

};

export const theme = {
    ...DefaultTheme,
    roundness : 2,
    dark : false,
    colors : {
        ...DefaultTheme.colors,
        primary : colors.primaryColor,
        accent : colors.colorSecondary,
        surface : colors.colorWhite

    }
};

