/*
 * Developed by Prishan Maduka on 8/30/19 4:06 PM.
 * Last modified 8/30/19 4:06 PM
 * Copyright (c) 2019. All rights reserved Prishan Maduka
 */

import {Dimensions} from "react-native";
import {RFValue} from 'react-native-responsive-fontsize';

const {width, height }= Dimensions.get('window');

const dimensions = {

    //Device Height and Width
    deviceWidth : width,
    deviceHeight : height,

    //Font Sizes
    fontXSmall : RFValue(10),
    fontSmall : RFValue(12),
    fontMidMedium : RFValue(14),
    fontMedium : RFValue(16),
    fontLarge : RFValue(18),
    fontXLarge : RFValue(20),
    fontHeader : RFValue(24),

    //Standard Margin and Padding Sizes
    sizeSmall : 4,
    sizeStandard : 6,
    sizeMedium : 10,
    sizeLarge : 15,

    //Views Sizes
    stdIconSize : 15,
    smallIconSize : 10,
    mediumIconSize : 20,
    largeIconSize : 25,
    rowItemHeight : 64,
    buttonSmallWidth : 80,
    buttonMedium : 170,
    buttonLargeWidth : (parseInt(width) - 100)
};

export default dimensions;

