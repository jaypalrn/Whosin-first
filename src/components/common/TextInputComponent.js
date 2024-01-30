import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { windowHeight } from '../../utilities/styles/Index';
import Colors from '../../utilities/styles/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

const TextInputComponent = (props) => {
    const { style, mainStyle, hintText, value, onTextChange, isPassword, keyboardType, maxInput, bgColor, rightImg, rightImgPress, textInputHeight, multiline, numberOfLines } = props;

    return (
        <View style={[style]}>
            <View style={{ flexDirection: 'row', height: textInputHeight ? textInputHeight : windowHeight / 20, borderWidth: 1, borderColor: Colors.appColor.color, borderRadius: 25, backgroundColor: 'transparent', alignItems: 'center', paddingHorizontal: 10, justifyContent: 'space-between' }}>
                <TextInput
                    style={mainStyle || { color: Colors.white.color, fontSize: RFValue(14), alignItems: 'center', paddingStart: rightImg ? 20 : 0, width: rightImg ? '85%' : '100%', height: '100%', borderColor: 'white', }}
                    placeholder={hintText}
                    placeholderTextColor={'#FFFFFF80'}
                    value={value}
                    onChangeText={onTextChange}
                    secureTextEntry={isPassword ? isPassword : false}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    maxLength={maxInput ? maxInput : 256}
                    multiline={multiline ? true : false}
                    numberOfLines={numberOfLines}
                />
                {rightImg && (
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: Colors.appColor.color, width: '10%', height: '75%', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginHorizontal: 5 }} onPress={rightImgPress}>
                        {rightImg}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default TextInputComponent