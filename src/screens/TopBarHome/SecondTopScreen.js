import { View, Text, ImageBackground, FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '../../utilities/styles/Colors'
import { Images } from '../../utilities/styles/Images'
import { windowHeight, windowWidth } from '../../utilities/styles/Index'
import { boldFont, regularFont } from '../../utilities/styles/Themes'
import { CalenderIcon, TimeIcon } from '../../utilities/styles/Icons'

const SecondTopScreen = () => {

  const Data = [
    {
      id: 1,
      image: 'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
      name: 'Belgian Beer Cafe',
      subName: 'Enjoy a delightful 3-course Valentines set menu dinner complimented with your favourite hops or grape. Embrace our beautiful open Enjoy a delightful 3-course Valentines set menu dinner complimented',
      openTime: '07:00 PM',
      closeTime: '11:00 PM',
      day: 'mon',
      fromDate: 'Wed, 14 Feb 2024',
      TillDate: 'Wed, 14 Feb 2024',
      uploadTime: '14h ago',
    },
    {
      id: 2,
      image: 'https://thumbs.dreamstime.com/b/resort-night-12154190.jpg',
      name: 'Belgian Beer Cafe',
      subName: 'Enjoy a delightful 3-course Valentines set menu dinner complimented with your favourite hops or grape. Embrace our beautiful open Enjoy a delightful 3-course Valentines set menu dinner complimented',
      openTime: '07:00 PM',
      closeTime: '11:00 PM',
      day: 'mon',
      fromDate: 'Wed, 14 Feb 2024',
      TillDate: 'Wed, 14 Feb 2024',
      uploadTime: '14h ago',
    },
    {
      id: 3,
      image: 'https://images5.bovpg.net/fw/back/fr/media/1/1/3/1/7/131720.jpg',
      name: 'Belgian Beer Cafe',
      subName: 'Enjoy a delightful 3-course Valentines set menu dinner complimented with your favourite hops or grape. Embrace our beautiful open Enjoy a delightful 3-course Valentines set menu dinner complimented',
      openTime: '07:00 PM',
      closeTime: '11:00 PM',
      day: 'mon',
      fromDate: 'Wed, 14 Feb 2024',
      TillDate: 'Wed, 14 Feb 2024',
      uploadTime: '14h ago',
    }
  ]

  return (
    <View style={{ flex: 1, backgroundColor: Colors.black.color, }}>
      <ImageBackground style={{ flex: 1, }} source={Images.appBackgroundImage}>
        <View style={{ flex: 1, borderColor: 'red', paddingHorizontal: 8 }}>
          <FlatList
            data={Data}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={{ widht: windowWidth, borderColor: 'red', marginTop: 15, borderRadius: 10, padding: 8, backgroundColor: Colors.backgroundBlack.color }}>
                  <View style={{ borderRadius: 10, flexDirection: 'row', }}>
                    <Image
                      style={{ height: windowHeight / 3.5, width: '100%', borderRadius: 10, }}
                      source={{ uri: item?.image }}
                      resizeMode='cover'
                      defaultSource={Images.placeholderImage}
                    />
                  </View>
                  <View style={{ width: '100%', marginVertical: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>

                    <View style={{}} >
                      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7 }}>
                        <CalenderIcon />
                        <Text style={[regularFont({ size: 12, color: Colors.white.color }), { marginLeft: 5 }]} numberOfLines={1} >{item?.day}</Text>
                      </View>

                      <View style={{ flexDirection: 'row', marginBottom: 5, alignItems: 'center', }}>
                        <TimeIcon />
                        <Text style={[regularFont({ size: 12, color: Colors.white.color }), { marginLeft: 5 }]} numberOfLines={1} >{item?.openTime} {'-'} {item?.closeTime}</Text>
                      </View>
                    </View>

                    <View style={{}}>
                      <Text style={[regularFont({ size: 12, color: Colors.white.color }), { marginBottom: 7 }]} numberOfLines={1} >{'From : '}{item?.fromDate}</Text>
                      <Text style={[regularFont({ size: 12, color: Colors.white.color }), { marginBottom: 5 }]} numberOfLines={1} >{'Till : '}{item?.TillDate}</Text>
                    </View>

                  </View>
                  <View>
                    <Text style={[boldFont({ size: 20, color: Colors.white.color }), {}]} numberOfLines={2} >{item?.name}</Text>

                    <Text style={[regularFont({ size: 12, color: Colors.white.color }), { marginTop: 7 }]} numberOfLines={3} >{item?.subName}</Text>

                  </View>
                  <Text style={[regularFont({ size: 12, color: Colors.grey.color }), { marginTop: 10 }]} numberOfLines={3} >{item?.uploadTime}</Text>
                </View>
              )
            }}
            ListFooterComponent={<View style={{ marginBottom: 100 }} />}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

export default SecondTopScreen