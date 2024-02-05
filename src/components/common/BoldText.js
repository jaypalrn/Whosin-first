import { View, Text } from 'react-native'
import React from 'react'
import { boldFont } from '../../utilities/styles/Themes';
import Colors from '../../utilities/styles/Colors';

const BoldText = (props) => {
    const { mainStyle, style, txt, txtColor, fontSize } = props;

    return (
        <View style={[mainStyle, { justifyContent: 'center', }]}>
            <Text style={style || [boldFont({ size: fontSize ? fontSize : 16, color: txtColor ? txtColor : Colors.white.color }), {}]}>{txt}</Text>
        </View>
    )
}

export default BoldText