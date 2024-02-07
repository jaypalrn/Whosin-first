import { View, Text } from 'react-native'
import React from 'react'
import { mediumFont } from '../../utilities/styles/Themes';
import Colors from '../../utilities/styles/Colors';
import LinearGradient from 'react-native-linear-gradient';

const LinearBtn = (props) => {
    const { style, title, bgColor, txtColor, fontSize } = props;

    return (
        <LinearGradient
            colors={['#F21B75', '#A209FF']}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.2, y: 0.8 }}
            style={[{ borderRadius: 25, backgroundColor: bgColor ? bgColor : Colors.appColor.color, justifyContent: 'center', }, style]}
        >
            <Text style={[mediumFont({ size: fontSize ? fontSize : 15, color: txtColor ? txtColor : Colors.white.color }), { paddingVertical: 5, textAlign: 'center', marginHorizontal: 40, }]}>{title}</Text>
        </LinearGradient>
    )
}

export default LinearBtn