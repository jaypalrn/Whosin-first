import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import Colors from '../../utilities/styles/Colors'

const Loader = ({ animating }) => {
    return (
        <Modal visible={animating} transparent={true}>
            <ActivityIndicator style={{ flex: 1 }} size="large" color={Colors.appColor.color} animating={animating} />
        </Modal>
    )
}

export default Loader