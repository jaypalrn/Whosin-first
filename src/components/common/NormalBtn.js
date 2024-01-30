import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../utilities/styles/Colors';
import { mediumFont } from '../../utilities/styles/Themes';

const NormalBtn = (props) => {
    const { style, title, bgColor, txtColor, fontSize } = props;

    return (
        <View style={[{ borderRadius: 25, backgroundColor: bgColor ? bgColor : Colors.appColor.color, justifyContent: 'center',}, style]}>
            <Text style={[mediumFont({ size: fontSize ? fontSize : 15, color: txtColor ? txtColor : Colors.white.color }), { paddingVertical: 10, textAlign: 'center', marginHorizontal: 40, }]}>{title}</Text>
        </View>
    )
}

export default NormalBtn