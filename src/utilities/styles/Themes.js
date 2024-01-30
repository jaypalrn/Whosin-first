import { RFValue } from "react-native-responsive-fontsize"
import Colors from "./Colors"
import Fonts from "./Fonts"

export const regularFont = ({ size, color }) => {
    return {
        fontFamily: Fonts.regular.fontFamily,
        fontSize: RFValue(size),
        color: color ? color : Colors.black.color
    }
}

export const mediumFont = ({ size, color }) => {
    return {
        fontFamily: Fonts.medium.fontFamily,
        fontSize: RFValue(size),
        fontWeight: '500',
        color: color ? color : Colors.black.color,
        textTransform: 'none',
    }
}

export const lightFont = ({ size, color }) => {
    return {
        fontFamily: Fonts.light.fontFamily,
        fontSize: RFValue(size),
        color: color ? color : Colors.black.color
    }
}

export const extraLightFont = ({ size, color }) => {
    return {
        fontFamily: Fonts.extraLight.fontFamily,
        fontSize: RFValue(size),
        color: color ? color : Colors.black.color
    }
}

export const boldFont = ({ size, color }) => {
    return {
        fontFamily: Fonts.bold.fontFamily,
        fontSize: RFValue(size),
        color: color ? color : Colors.black.color
    }
}

export const semiBoldFont = ({ size, color }) => {
    return {
        fontFamily: Fonts.semiBold.fontFamily,
        fontSize: RFValue(size),
        color: color ? color : Colors.black.color,
        textTransform: 'none',
    }
}

export const extraBoldFont = ({ size, color }) => {
    return {
        fontFamily: Fonts.extraBold.fontFamily,
        fontSize: RFValue(size),
        color: color ? color : Colors.black.color
    }
}