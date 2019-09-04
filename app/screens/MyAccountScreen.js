/*
 * Developed by Prishan Maduka on 9/4/19 11:03 AM.
 * Last modified 9/3/19 6:04 PM
 * Copyright (c) 2019. All rights reserved Prishan Maduka
 */

import React from "react";
import {View,Text,StatusBar} from "react-native";
import {textStyles} from '../configurations/Styles';
import {colors} from '../configurations/Colors';
import {Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class MyAccountScreen extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

                <StatusBar backgroundColor={colors.colorBlueDark} barStyle="light-content" />

                <Text style={textStyles.txtHeader_SemiBold}>
                    Hello
                </Text>

                {/*<Button title={'next'} onPress={()=>{

                }}/>*/}
            </View>
        );
    }

}
