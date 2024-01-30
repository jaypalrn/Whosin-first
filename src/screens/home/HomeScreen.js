import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/common/Header'
import Colors from '../../utilities/styles/Colors'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.black.color }}>
            <Header
                title={'title'}
                titlePosition={"flex-start"}
            />

            <View style={{ height: 70, width: 70, borderRadius: 35, borderWidth: 1, borderColor: Colors.white.color }}>

            </View>

        </View>
    )
}

export default HomeScreen