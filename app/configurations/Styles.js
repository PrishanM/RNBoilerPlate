/*
 * Developed by Prishan Maduka on 8/30/19 11:09 AM.
 * Last modified 8/30/19 11:09 AM
 * Copyright (c) 2019. All rights reserved Prishan Maduka
 */

import {StyleSheet} from "react-native";
import {colors as Colors} from './Colors';
import Dimensions from './Dimensions';

export const fontBold = 'Montserrat-Bold';
export const fontSemiBold = 'Montserrat-SemiBold';
export const fontRegular = 'Montserrat-Regular';
export const fontMedium = 'Montserrat-Medium';

export const textStyles = StyleSheet.create({
    //Header Styles
    txtHeader_Bold : {
        fontFamily : fontBold,
        fontSize : Dimensions.fontHeader
    },
    txtHeader_SemiBold : {
        fontFamily : fontSemiBold,
        fontSize : Dimensions.fontHeader
    },

    //XL Styles
    txtXL_SemiBold : {
        fontFamily : fontSemiBold,
        fontSize : Dimensions.fontXLarge
    },
    txtXL_Medium : {
        fontFamily : fontMedium,
        fontSize : Dimensions.fontXLarge
    },
    txtXL_Regular : {
        fontFamily : fontRegular,
        fontSize : Dimensions.fontXLarge
    },

    //Large Styles
    txtLarge_SemiBold : {
        fontFamily : fontSemiBold,
        fontSize : Dimensions.fontLarge
    },
    txtLarge_Medium : {
        fontFamily : fontMedium,
        fontSize : Dimensions.fontLarge
    },
    txtLarge_Regular : {
        fontFamily : fontRegular,
        fontSize : Dimensions.fontLarge
    },

    //Medium Styles
    txtMedium_SemiBold : {
        fontFamily : fontSemiBold,
        fontSize : Dimensions.fontMedium
    },
    txtMedium_Medium : {
        fontFamily : fontMedium,
        fontSize : Dimensions.fontMedium
    },
    txtMedium_Regular : {
        fontFamily : fontRegular,
        fontSize : Dimensions.fontMedium
    },

    //Small Styles
    txtSmall_SemiBold : {
        fontFamily : fontSemiBold,
        fontSize : Dimensions.fontSmall
    },
    txtSmall_Medium : {
        fontFamily : fontMedium,
        fontSize : Dimensions.fontSmall
    },
    txtSmall_Regular : {
        fontFamily : fontRegular,
        fontSize : Dimensions.fontSmall
    }
});

export const viewStyles = StyleSheet.create({
    mainViewStyle : {
        flex : 1,
        backgroundColor : Colors.backgroundColor,
        justifyContent : 'center',
        alignItems : 'center',
        padding : Dimensions.sizeStandard
    }
});

