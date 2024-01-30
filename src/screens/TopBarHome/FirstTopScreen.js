import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../../utilities/styles/Colors'
import { Images } from '../../utilities/styles/Images'

const FirstTopScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.black.color, }}>
      <ImageBackground style={{ hieght: '100%', widht: '100%', flex: 1, }} source={Images.appBackgroundImage}>

      </ImageBackground>
    </View>
  )
}

export default FirstTopScreen