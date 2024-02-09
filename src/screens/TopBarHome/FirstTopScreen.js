import { View, Text, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../utilities/styles/Colors'
import { Images } from '../../utilities/styles/Images'
import { windowHeight, windowWidth } from '../../utilities/styles/Index'
import { boldFont, regularFont } from '../../utilities/styles/Themes'
import { CalenderIcon, TimeIcon } from '../../utilities/styles/Icons'
import moment from 'moment'
import { RequestDealList } from '../../utilities/api/apiController'
import Loader from '../../components/common/Loader'
import BoldText from '../../components/common/BoldText'

const FirstTopScreen = ({ navigation }) => {

  const [loading, setLoading] = useState(false);
  const [dealData, setDealData] = useState([]);

  useEffect(() => {
    requestDealList();
  }, []);

  const requestDealList = async () => {
    setLoading(true)
    let response = await RequestDealList({})
    if (typeof response === 'string') {
      console.log(response);
    } else {
      if (response.data.status === 1) {
        setDealData(response?.data?.data);
      } else {
        Alert.alert(response?.data?.message)
      }
    }
    setLoading(false)
  }

  const formatDaysAvailability = (days) => {
    const allDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const availableDays = days.split(",");
    if (availableDays.length === 7) {
      return "All Days";
    } else if (availableDays.includes("sat") && availableDays.includes("sun")) {
      return "Weekend";
    } else if (availableDays.length === 5 && !availableDays.includes("sat") && !availableDays.includes("sun")) {
      return "Weekdays";
    } else {
      return "Default";
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.black.color, }}>
      <ImageBackground style={{ flex: 1, }} source={Images.appBackgroundImage}>
        <Loader animating={loading} />

        {dealData.length === 0 ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <BoldText txt={'No Deal Found'} />
          </View>
        ) : (
          <View style={{ flex: 1, borderColor: 'red', paddingHorizontal: 8 }}>
            <FlatList
              data={dealData}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('DealDetailScreen', { dealInfo: item })} style={{ borderColor: 'red', marginTop: 15, borderRadius: 10, padding: 8, backgroundColor: Colors.backgroundBlack.color }}>
                    <View style={{ borderRadius: 10, flexDirection: 'row', }}>
                      <Image
                        style={{ height: windowHeight / 7, width: '50%', borderRadius: 10, }}
                        source={{ uri: item?.image }}
                        resizeMode='cover'
                        defaultSource={Images.placeholderImage}
                      />
                      <View style={{ width: '50%', marginHorizontal: 8, height: windowHeight / 7, justifyContent: 'space-around' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <TimeIcon />
                          <Text style={[regularFont({ size: 11, color: Colors.white.color }), { marginLeft: 5 }]} numberOfLines={1} >{item?.startTime} {'-'} {item?.endTime}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <CalenderIcon height={20} width={18} />
                          <Text style={[regularFont({ size: 11, color: Colors.white.color }), { marginLeft: 5 }]} numberOfLines={1} >{formatDaysAvailability(item?.days)}</Text>
                        </View>

                        <Text style={[regularFont({ size: 11, color: Colors.white.color }), {}]} numberOfLines={1} >{'From : '}{item?.startDate}</Text>
                        <Text style={[regularFont({ size: 11, color: Colors.white.color }), {}]} numberOfLines={1} >{'Till : '}{item?.endDate}</Text>

                        {item.discountedPrice ? (
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[regularFont({ size: 11, color: Colors.white.color, }), {}]} numberOfLines={1} >{'Price: '} {item?.discountedPrice} {'/'}</Text>
                            <Text style={[regularFont({ size: 11, color: Colors.white.color }), { marginLeft: 5, textDecorationLine: 'line-through' }]} numberOfLines={1} >{item?.actualPrice}</Text>
                          </View>
                        ) : (
                          <Text style={[regularFont({ size: 11, color: Colors.white.color }), {}]} numberOfLines={1} >{'Price : '}{item?.actualPrice}</Text>
                        )}
                      </View>
                    </View>
                    <View>
                      <Text style={[boldFont({ size: 18, color: Colors.white.color }), { marginTop: 10 }]} numberOfLines={2} >{item?.title}</Text>

                      <Text style={[regularFont({ size: 12, color: Colors.white.color }), { marginTop: 5 }]} numberOfLines={3} >{item?.description}</Text>

                    </View>
                  </TouchableOpacity>
                )
              }}
              ListFooterComponent={<View style={{ marginBottom: 100 }} />}
            />
          </View>
        )}
      </ImageBackground>
    </View>
  )
}

export default FirstTopScreen