import { View, Text, ImageBackground, FlatList, Image, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../utilities/styles/Colors'
import { Images } from '../../utilities/styles/Images'
import { windowHeight, windowWidth } from '../../utilities/styles/Index'
import { boldFont, regularFont } from '../../utilities/styles/Themes'
import { CalenderIcon, TimeIcon } from '../../utilities/styles/Icons'
import { RequestActivityList } from '../../utilities/api/apiController'
import Loader from '../../components/common/Loader'
import BoldText from '../../components/common/BoldText'
import { store } from '../../utilities/redux/store'
import moment from 'moment'
import RegularText from '../../components/common/RegularText'

const SecondTopScreen = ({ navigation }) => {
  const token = store.getState().userSession.tokenData
  // console.log("whosin token is", token);

  const [loading, setLoading] = useState(false);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    requestActivityListData();
  }, []);

  const requestActivityListData = async () => {
    setLoading(true)
    let response = await RequestActivityList({})
    if (typeof response === 'string') {
      console.log(response);
    } else {
      if (response.data.status === 1) {
        setActivityData(response?.data?.data);
      } else {
        Alert.alert(response?.data?.message)
      }
    }
    setLoading(false)
  }

  const getAvailabilityText = (avilableDays) => {
    const fullweek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const weekends = ['Sat', 'Sun'];

    if (avilableDays.every(day => fullweek.includes(day))) {
      return 'full week';
    } else if (avilableDays.every(day => weekdays.includes(day))) {
      return 'Weekdays';
    } else if (avilableDays.every(day => weekends.includes(day))) {
      return 'Weekends';
    } else {
      return avilableDays.join(', ');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.black.color, }}>
      <ImageBackground style={{ flex: 1, }} source={Images.appBackgroundImage}>
        <Loader animating={loading} />

        {activityData.length === 0 ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <BoldText txt={'No Activity Found'} />
          </View>
        ) : (
          <View style={{ flex: 1, borderColor: 'red', paddingHorizontal: 8 }}>
            <FlatList
              data={activityData}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ActivityDetailScreen', { activityInfo: item })} style={styles.mainContainer}>
                    <Text style={[boldFont({ size: 20, color: Colors.white.color }), {}]} numberOfLines={2} >{item?.name}</Text>

                    <View style={{ borderRadius: 10, flexDirection: 'row', }}>
                      <Image
                        style={{ height: windowHeight / 3.5, width: '100%', borderRadius: 10, marginTop: 7 }}
                        source={{ uri: item?.galleries[0] }}
                        resizeMode='cover'
                        defaultSource={Images.placeholderImage}
                      />
                    </View>
                    <View style={{ width: '100%', marginVertical: 8, }}>

                      <View style={{ flexDirection: 'row', width: '100%', }} >
                        <View style={styles.btnContainer}>
                          <CalenderIcon />
                          <View style={styles.btnView}>
                            <RegularText txt={'Activity Start Date'} fontSize={10} txtColor={Colors.offWhite.color} />
                            <Text style={[regularFont({ size: 12, color: Colors.white.color })]} numberOfLines={1} >{moment(item?.startDate).format('ddd, DD MMM YYYY')}</Text>
                          </View>
                        </View>

                        <View style={styles.btnContainer}>
                          <CalenderIcon />
                          <View style={styles.btnView}>
                            <RegularText txt={'Activity End Date'} fontSize={10} txtColor={Colors.offWhite.color} />
                            <Text style={[regularFont({ size: 12, color: Colors.white.color })]} numberOfLines={1} >{moment(item?.endDate).format('ddd, DD MMM YYYY')}</Text>
                          </View>
                        </View>
                      </View>

                      <View style={{ flexDirection: 'row', width: '100%', marginTop: 10, }} >
                        <View style={styles.btnContainer}>
                          <CalenderIcon />
                          <View style={styles.btnView}>
                            <RegularText txt={'Reservation Start Date'} fontSize={10} txtColor={Colors.offWhite.color} />
                            <Text style={[regularFont({ size: 12, color: Colors.white.color })]} numberOfLines={1} >{moment(item?.reservationStart).format('ddd, DD MMM YYYY')}</Text>
                          </View>
                        </View>

                        <View style={styles.btnContainer}>
                          <CalenderIcon />
                          <View style={styles.btnView}>
                            <RegularText txt={'Reservation End Date'} fontSize={10} txtColor={Colors.offWhite.color} />
                            <Text style={[regularFont({ size: 12, color: Colors.white.color })]} numberOfLines={1} >{moment(item?.reservationEnd).format('ddd, DD MMM YYYY')}</Text>
                          </View>
                        </View>
                      </View>

                      <View style={{ marginTop: 7, widht: '100%', flexDirection: 'row', alignItems: "center", }}>
                        <CalenderIcon />
                        <View style={styles.btnView}>
                          <RegularText txt={'Available Days'} fontSize={10} txtColor={Colors.offWhite.color} />
                          <Text style={[regularFont({ size: 12, color: Colors.white.color })]} numberOfLines={1} >{getAvailabilityText(item?.avilableDays)}</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text style={[regularFont({ size: 12, color: Colors.white.color }), { marginBottom: 5 }]} numberOfLines={3} >{item?.description}</Text>
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

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: 'red',
    marginTop: 15,
    borderRadius: 10,
    padding: 8,
    backgroundColor: Colors.backgroundBlack.color
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  btnView: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 5
  }

})

export default SecondTopScreen