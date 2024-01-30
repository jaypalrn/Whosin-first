import { View, Text, Platform, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { windowWidth } from '../../utilities/styles/Index'
import { boldFont } from '../../utilities/styles/Themes'
import Colors from '../../utilities/styles/Colors'

const Header = (props) => {
    const { style, title, textSize, titlePosition, isBackButton, rightIcon, rightIconOnPress, leftImageUrl, withBackSize, leftIconOnPress, showSaperator, rightButton, leftBackBtnColor, styles, leftImage, backgroundColor, profileIconOnPress, profileIcon, titleColor, withBackColor, withBackButton, leftBtnOnPress, titleMarginStart, rightIconEnd, rightIconBorder } = props

    return (
        <View style={[style, { backgroundColor: backgroundColor ? backgroundColor : 'transparent', width: windowWidth }]}>
            <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between' }} />
            <View style={{ height: Platform.OS == 'ios' ? 44 : 55, justifyContent: 'center', marginBottom: 3, }}>

                {isBackButton &&
                    <TouchableOpacity style={{ position: 'absolute', start: 20, }} onPress={leftIconOnPress}>
                        <IconBackArrow
                            color={leftBackBtnColor ? leftBackBtnColor : 'black'}
                        />
                    </TouchableOpacity>
                }

                {withBackButton &&
                    <TouchableOpacity style={{ position: 'absolute', justifyContent: 'center' }} onPress={leftBtnOnPress}>
                        <Text style={[semiBoldFont({ color: withBackColor ? withBackColor : Colors.black.color, size: withBackSize ? withBackSize : 14 }), { alignSelf: titlePosition ? titlePosition : 'flex-start', start: 65, position: 'absolute', }]}>{withBackButton}</Text>
                    </TouchableOpacity>
                }

                {title &&
                    <Text style={[boldFont({ size: textSize ? textSize : 18, color: titleColor ? titleColor : Colors.white.color, }), { alignSelf: titlePosition ? titlePosition : 'center', marginStart: titlePosition == 'flex-start' ? 10 : 0, marginStart: titleMarginStart ? titleMarginStart : 10, }]} numberOfLines={1}>{title}</Text>
                }

                {profileIcon &&
                    <TouchableOpacity style={{ position: 'absolute', start: 50 }} onPress={profileIconOnPress}>
                        <ImageView style={{ width: 28, height: 28, borderRadius: 60, alignSelf: 'center' }} source={{ uri: profileIcon }} resizeMode={'cover'} />
                    </TouchableOpacity>
                }

                {rightIcon &&
                    <TouchableOpacity style={{ position: 'absolute', end: rightIconEnd ? rightIconEnd : 15, }} onPress={rightIconOnPress}>
                        {rightIcon}
                    </TouchableOpacity>
                }
            </View>
            {showSaperator &&
                <View style={{ position: 'absolute', bottom: 0, start: 0, end: 0, height: 0.3, backgroundColor: Colors.grey.color }} />
            }
        </View>
    )
}

export default Header