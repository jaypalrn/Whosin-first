import { View, Text } from 'react-native'
import React from 'react'
import { regularFont } from '../../utilities/styles/Themes';
import Colors from '../../utilities/styles/Colors';

const RegularText = (props) => {
    const { mainStyle, style, txt, txtColor, fontSize } = props;

    return (
        <View style={[mainStyle, { justifyContent: 'center', }]}>
            <Text style={style || [regularFont({ size: fontSize ? fontSize : 13, color: txtColor ? txtColor : Colors.white.color }), {}]}>{txt}</Text>
        </View>
    )
}

export default RegularText