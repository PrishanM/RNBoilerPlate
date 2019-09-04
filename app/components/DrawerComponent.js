/*
 * Developed by Prishan Maduka on 9/4/19 11:20 AM.
 * Last modified 9/4/19 11:02 AM
 * Copyright (c) 2019. All rights reserved Prishan Maduka
 */

import React from "react";
import {View,Text,StatusBar} from "react-native";
import {textStyles,viewStyles} from '../configurations/Styles';
import {colors} from '../configurations/Colors';
import Dimensions from '../configurations/Dimensions';
import Locale from '../configurations/Locale';
import {Avatar} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class DrawerComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={viewStyles.mainViewStyle}>

                <StatusBar backgroundColor={colors.colorBlueDark} barStyle="light-content" />

                <View style={{flex:0.45,justifyContent:'center',alignItems:'center'}}>

                    <Avatar size={90} rounded={true} source={require('../assets/images/user.webp')} containerStyle={{borderWidth:3,borderColor:colors.colorWhite}}/>

                    <Text style={[textStyles.txtLarge_Medium,{color:colors.colorBlack,marginTop:Dimensions.sizeStandard}]}>
                        Jon Snow
                    </Text>

                    <Text style={[textStyles.txtSmall_Regular,{color:colors.colorBlack,marginTop:Dimensions.sizeSmall}]}>
                        prishanmaduka@gmail.com
                    </Text>

                    <Text style={[textStyles.txtSmall_Regular,{color:colors.colorBlack,marginTop:Dimensions.sizeSmall}]}>
                        +94717966770
                    </Text>

                </View>

                <View style={{flex:0.55,justifyContent:'center',alignItems:'center'}}>
                    {/*<Text onPress={Actions.home()}>
                        Hello
                    </Text>*/}
                </View>

                <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                    <Text style={[textStyles.txtSmall_Regular,{flex:1,color:colors.colorBlack,textAlign: 'left'}]}>
                        {Locale.TXT_VERSION}
                    </Text>
                    <Text style={[textStyles.txtSmall_Regular,{color:colors.colorGray,marginLeft:Dimensions.sizeSmall,textAlign:'right'}]}>
                        v1.0
                    </Text>
                </View>
            </View>
        );
    }

}
