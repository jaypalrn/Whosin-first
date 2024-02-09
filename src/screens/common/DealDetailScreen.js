import { View, Text, Alert, ImageBackground, Platform, FlatList, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RequestActivityOrders, RequestDealsOrders } from '../../utilities/api/apiController';
import { Images } from '../../utilities/styles/Images';
import Loader from '../../components/common/Loader';
import Header from '../../components/common/Header';
import { boldFont, regularFont } from '../../utilities/styles/Themes';
import { windowHeight, windowWidth } from '../../utilities/styles/Index';
import BoldText from '../../components/common/BoldText';
import Colors from '../../utilities/styles/Colors';
import { CalenderIcon, TimeIcon } from '../../utilities/styles/Icons';
import moment from 'moment';

const DealDetailScreen = (props) => {
    const { navigation } = props;
    const { dealInfo } = props.route.params;

    // console.log("dealInfo is", dealInfo);

    const [loading, setLoading] = useState(false);
    const [dealsOrder, setDealsOrder] = useState([]);

    useEffect(() => {
        requestDealOrderData();
    }, []);

    const requestDealOrderData = async () => {
        let body = {
            dealId: '6597d27efeabb64f58b72d87',
        }
        setLoading(true)
        console.log("body of activity order", body);
        let response = await RequestDealsOrders({ body, navigation })
        if (typeof response === 'string') {
            console.log(response);
        } else {
            if (response.data.status === 1) {
                console.log("dealsOrders responce", response?.data?.data)
                setDealsOrder(response?.data?.data);
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

                {dealsOrder.length === 0 ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <BoldText txt={'No orders Found'} />
                    </View>
                ) : (
                    <View style={{ flex: 1, borderColor: 'red', paddingHorizontal: 8 }}>
                        <FlatList
                            data={dealsOrder}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginTop: 15, borderRadius: 10, padding: 8, backgroundColor: Colors.backgroundBlack.color, }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                            <Image
                                                style={{ height: 45, width: 45, borderRadius: 25, }}
                                                source={{ uri: item?.user?.image }}
                                                resizeMode='cover'
                                                defaultSource={Images.placeholderImage}
                                            />
                                            <View style={{ marginLeft: 8, justifyContent: 'center' }}>
                                                <Text style={[boldFont({ size: 16, color: Colors.white.color }), {}]} numberOfLines={1} >{item?.user?.first_name + ' ' + item?.user?.last_name}</Text>
                                                {item?.user?.email &&
                                                    <Text style={[regularFont({ size: 13, color: Colors.white.color }), {}]} numberOfLines={1} >{item?.user?.email}</Text>
                                                }
                                            </View>
                                        </View>
                                        <View style={{ borderRadius: 10, flexDirection: 'row', }}>
                                            <Image
                                                style={{ height: windowHeight / 9, width: '50%', borderRadius: 10, }}
                                                source={{ uri: dealInfo?.image }}
                                                resizeMode='cover'
                                                defaultSource={Images.placeholderImage}
                                            />
                                            <View style={{ width: '50%', marginHorizontal: 8, height: windowHeight / 9, justifyContent: 'space-evenly' }}>
                                                <Text style={[regularFont({ size: 11, color: Colors.white.color }), { marginBottom: 5 }]} numberOfLines={1} >{'Price : '}{item?.price}</Text>
                                                <Text style={[regularFont({ size: 11, color: Colors.white.color }), { marginBottom: 5 }]} numberOfLines={1} >{'qty : '}{item?.qty}</Text>
                                            </View>
                                        </View>
                                        {isExpired(item.date, item.time) && (
                                            <Text style={[boldFont({ size: 14, color: Colors.appColor.color }), { marginTop: 10, textAlign: 'center', }]}>Expired !!!</Text>
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

export default DealDetailScreen