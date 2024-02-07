import { View, Text, ImageBackground, FlatList, Image, Alert, StatusBar, Platform, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/common/Header'
import { Images } from '../../utilities/styles/Images'
import { RequestActivityOrders } from '../../utilities/api/apiController'
import Loader from '../../components/common/Loader'
import { windowHeight, windowWidth } from '../../utilities/styles/Index'
import Colors from '../../utilities/styles/Colors'
import { CalenderIcon, TimeIcon } from '../../utilities/styles/Icons'
import { boldFont, regularFont } from '../../utilities/styles/Themes'
import NormalBtn from '../../components/common/NormalBtn'
import LinearBtn from '../../components/btn/LinearBtn'
import moment from 'moment'
import BoldText from '../../components/common/BoldText'

const ActivityDetailScreen = (props) => {
    const { navigation } = props;
    const { activityInfo } = props.route.params;

    const [loading, setLoading] = useState(false);
    const [activityOrder, setActivityOrder] = useState([]);

    useEffect(() => {
        requestActivityOrderData();
    }, []);

    const requestActivityOrderData = async () => {
        let body = {
            activityId: '6593b5d41d7ade9193ad06e6',
        }
        setLoading(true)
        console.log("body of activity order", body);
        let response = await RequestActivityOrders({ body, navigation })
        if (typeof response === 'string') {
            console.log(response);
        } else {
            if (response.data.status === 1) {
                setActivityOrder(response?.data?.data);
            } else {
                Alert.alert(response?.data?.message)
            }
        }
        setLoading(false)
    }

    const isExpired = (date, time) => {
        const activityDateTime = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm');
        const currentDateTime = moment();

        return currentDateTime.isAfter(activityDateTime);
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'grey' }}>
            <ImageBackground style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} source={Images.appBackgroundImage} >
                <Loader animating={loading} />
                <Header
                    isBackButton={true}
                    leftIconOnPress={() => navigation.goBack()}
                    withBackButton={'Orders'}
                />

                {activityOrder.length === 0 ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <BoldText txt={'No orders Found'} />
                    </View>
                ) : (
                    <View style={{ flex: 1, borderColor: 'red', paddingHorizontal: 8 }}>
                        <FlatList
                            data={activityOrder}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ width: windowWidth, borderColor: 'red', marginTop: 15, borderRadius: 10, padding: 8, backgroundColor: Colors.backgroundBlack.color }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                            <Image
                                                style={{ height: 45, width: 45, borderRadius: 25, }}
                                                source={{ uri: item?.user?.image }}
                                                resizeMode='cover'
                                                defaultSource={Images.placeholderImage}
                                            />
                                            <View style={{ marginLeft: 8 }}>
                                                <Text style={[boldFont({ size: 16, color: Colors.white.color }), {}]} numberOfLines={2} >{item?.user?.first_name + ' ' + item?.user?.last_name}</Text>
                                                <Text style={[regularFont({ size: 13, color: Colors.white.color }), {}]} numberOfLines={3} >{item?.user?.email}</Text>
                                            </View>
                                        </View>
                                        <View style={{ borderRadius: 10, flexDirection: 'row', }}>
                                            <Image
                                                style={{ height: windowHeight / 7, width: '50%', borderRadius: 10, }}
                                                source={{ uri: activityInfo?.galleries[0] }}
                                                resizeMode='cover'
                                                defaultSource={Images.placeholderImage}
                                            />
                                            <View style={{ width: '50%', marginHorizontal: 8, height: windowHeight / 7, justifyContent: 'space-around' }}>

                                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                    <TimeIcon />
                                                    <Text style={[regularFont({ size: 11, color: Colors.white.color }), { marginLeft: 5 }]} numberOfLines={1} >{item?.time}</Text>
                                                </View>

                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <CalenderIcon />
                                                    <Text style={[regularFont({ size: 11, color: Colors.white.color }), { marginLeft: 5 }]} numberOfLines={1} >{item?.date}</Text>
                                                </View>

                                                <Text style={[regularFont({ size: 11, color: Colors.white.color }), {}]} numberOfLines={1} >{'Price : '}{item?.price}</Text>
                                                <Text style={[regularFont({ size: 11, color: Colors.white.color }), {}]} numberOfLines={1} >{'qty : '}{item?.qty}</Text>
                                            </View>
                                        </View>
                                        {isExpired(item.date, item.time) && (
                                            <Text style={[boldFont({ size: 14, color: Colors.appColor.color }), { marginTop: 10, textAlign: 'center' }]}>Expired !!!</Text>
                                        )}
                                    </View>
                                )
                            }}
                            ListFooterComponent={<View style={{ marginBottom: 20 }} />}
                        />
                    </View>
                )}
            </ImageBackground>
        </View>
    )
}

export default ActivityDetailScreen