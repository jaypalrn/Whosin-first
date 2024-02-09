import { View, Text, ImageBackground, Image, TouchableOpacity, StatusBar, Alert, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../utilities/styles/Images'
import { windowHeight, windowWidth } from '../../utilities/styles/Index'
import BoldText from '../../components/common/ExtraBoldText'
import RegularText from '../../components/common/RegularText'
import TextInputComponent from '../../components/common/TextInputComponent'
import { BackArrowIcon } from '../../utilities/styles/Icons'
import NormalBtn from '../../components/common/NormalBtn'
import Colors from '../../utilities/styles/Colors'
import { RFValue } from 'react-native-responsive-fontsize'
import { RequestLogin } from '../../utilities/api/apiController'
import Loader from '../../components/common/Loader'
import { useDispatch } from 'react-redux'
import { setIsLogin, setTokenData, setUserData } from '../../utilities/redux/reducers'
import { mediumFont } from '../../utilities/styles/Themes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { store } from '../../utilities/redux/store'

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginType, setLoginType] = useState(0);

    const CustomSegmentedControl = ({ values, selectedIndex, onTabPress }) => {
        return (
            <View style={styles.segmentedControl}>
                {values.map((value, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.segment,
                            {
                                borderTopLeftRadius: index === 0 ? 25 : 0,
                                borderBottomLeftRadius: index === 0 ? 25 : 0,
                                borderTopRightRadius: index === values.length - 1 ? 25 : 0,
                                borderBottomRightRadius: index === values.length - 1 ? 25 : 0,
                                backgroundColor: index === selectedIndex ? Colors.grey.color : 'transparent',
                            },
                        ]}
                        onPress={() => onTabPress(index)}>
                        <Text style={[mediumFont({ size: 13, color: index === selectedIndex ? Colors.white.color : Colors.white.color, }),]}>
                            {value}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    async function goToNext() {
        if (email == null || email.length == 0) {
            Alert.alert("Please enter email");
            return
        }
        if (password == null || password.length == 0) {
            Alert.alert("Please enter Password");
            return
        }

        requestLogin();
    }

    async function requestLogin() {
        var body = {
            username: email,
            password: password,
            type: loginType === 0 ? 'provider' : 'org',
        }
        setLoading(true)
        let response = await RequestLogin({ body, navigation });
        console.log('body: ', body)
        setLoading(false)
        if (response?.data?.status === 1) {
            dispatch(setIsLogin(true));
            dispatch(setTokenData('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWI5MDdmMzJlM2U1MWJhYjAxNTcyMjYiLCJpYXQiOjE3MDcyOTA5ODR9.Bc2vSW7TH0AETp16w91N-g25py39fpDTyI2wyLnxB0E'));
            dispatch(setUserData(response?.data?.data));
            navigation.replace("HomeScreen");
        } else {
            Alert.alert(response?.data?.message)
        }
    }

    return (
        <View style={{ flex: 1, }}>
            <Loader animating={loading} />
            <StatusBar backgroundColor={Colors.black.color} barStyle="light-content" />
            <ImageBackground style={{ height: '100%', width: '100%' }} source={Images.appBackgroundImage}>
                <KeyboardAwareScrollView
                    style={{ flex: 1, paddingHorizontal: 25, }}
                    contentContainerStyle={{ flex: 1, justifyContent: 'center'}}
                >
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <Image
                                source={Images.appLogo}s
                                style={{ height: windowHeight / 10, width: windowWidth }}
                                resizeMode='contain'
                            />

                            <BoldText mainStyle={{ marginTop: 30 }} txt={'Welcome to WhoisIN'} />
                            <RegularText mainStyle={{ marginTop: 10 }} txt={'Sign up or Login to enjoy our best features'} />
                        </View>

                        <View style={{ marginTop: 40 }}>
                            <CustomSegmentedControl
                                values={['Provider', 'Organizer']}
                                selectedIndex={loginType}
                                onTabPress={(index) => setLoginType(index)}
                            />
                        </View>


                        <TextInputComponent
                            style={{ marginTop: 20 }}
                            hintText={'Enter email or Mobile Number'}
                            onTextChange={(text) => setEmail(text)}
                            value={email}
                        />

                        <TextInputComponent
                            style={{ marginTop: 20 }}
                            hintText={'Enter Password'}
                            onTextChange={(text) => setPassword(text)}
                            value={password}
                            isPassword={true}
                        />

                        <TouchableOpacity style={{ marginTop: 35 }} onPress={goToNext} >
                            <NormalBtn title={'Login'} />
                        </TouchableOpacity>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    segmentedControl: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.grey.color,
        height: windowHeight / 20,
        borderRadius: 25,
        overflow: 'hidden',
    },
    segment: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoginScreen