import { G, Path, Polygon, Rect, Svg } from "react-native-svg";

export const BackArrowIcon = ({ height, width }) => (
    <Svg width={width ? width : 10} height={height ? height : 19} viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M0.25 18.5002L4.85271 9.73444L0.25 6.17164e-07L9.50012 9.25012L0.25 18.5002Z" fill="#E6007E" />
    </Svg>
)
export const LogoutIcon = ({ height, width }) => (
    <Svg fill="#ffffff" height={height ? height : 25} width={width ? width : 20} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 471.2 471.2" >
        <Path d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5
			s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5
			S235.019,444.2,227.619,444.2z"/>
        <Path d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5
			s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8
			C455.319,239.9,455.319,231.3,450.019,226.1z"/>
    </Svg>
)
export const CloseIcon = ({ height, width }) => (
    <Svg width={width ? width : 30} height={height ? height : 30} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <Path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" />
    </Svg>
)
export const FlashOnIcon = ({ height, width }) => (
    <Svg width={width ? width : 30} height={height ? height : 30} viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48" fill="#000000" stroke="#000000" stroke-width="0.672">
        <G id="SVGRepo_bgCarrier" stroke-width="0" />
        <G id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
        <G id="SVGRepo_iconCarrier">
            <Polygon fill="#000000" points="33,22 23.6,22 30,5 19,5 13,26 21.6,26 17,45" />
        </G>
    </Svg>
)
export const FlashOffIcon = ({ height, width }) => (
    <Svg width={width ? width : 30} height={height ? height : 30} viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48" fill="#000000">
        <G id="SVGRepo_bgCarrier" stroke-width="0" />
        <G id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
        <G id="SVGRepo_iconCarrier">
            <Polygon fill="#000000" points="33,22 23.6,22 30,5 19,5 13,26 21.6,26 17,45" />
            <Rect x="22" y="-2.9" transform="matrix(.707 -.707 .707 .707 -9.941 24)" fill="#37474F" width="4" height="53.7" />
        </G>
    </Svg>
)