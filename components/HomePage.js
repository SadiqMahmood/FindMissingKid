import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableHighlight, Pressable} from "react-native";
import { Svg, Path } from "react-native-svg";
import SignUp from './SignUp';

import {
useFonts,
Roboto_400Regular

} from "@expo-google-fonts/inter";

export default function HomePage (){

	let [fontsLoaded] = useFonts({
	'roboto': Roboto_400Regular

	});

	return (
		<View style = {stylesheet._HomePage}>
			<View style = {stylesheet._Rectangle_1}>
			</View>
			<View style = {stylesheet._Ellipse_1}>
			</View>
			<View style = {stylesheet._Ellipse_3}>
			</View>
			<View style = {stylesheet._Ellipse_4}>
			</View>
			<View style = {stylesheet._Ellipse_5}>
			</View>
			<Svg style = {stylesheet._Vector} fill = {"rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)"}>
			<Path fillRule = {"nonzero"} d = {"M 23.12498118080385 13.921875 C 23.12498118080385 6.232939453125 29.33694330020341 0 37 0 C 44.66305669979659 0 50.875020701115766 6.232939453125 50.875020701115766 13.921875 C 50.875020701115766 21.610616998672484 44.66305669979659 27.84375 37 27.84375 C 29.33694330020341 27.84375 23.12498118080385 21.610616998672484 23.12498118080385 13.921875 Z M 72.19379377497613 14.187357988357544 C 69.7857073138924 11.770945973396302 65.88104215723733 11.770945973396302 63.4729556961536 14.187357988357544 L 46.77899631225136 30.9375 L 27.220811731947915 30.9375 L 10.527043362886593 14.187357988357544 C 8.118956901802859 11.770945973396302 4.214295744226982 11.770945973396302 1.8062092831432492 14.187357988357544 C -0.6020698394610671 16.603770003318786 -0.6020698394610671 20.521423544883728 1.8062092831432492 22.93783555984497 L 20.041644083631287 41.234660911560056 L 20.041644083631287 92.8125 C 20.041644083631287 96.22974032878875 22.802581298164426 99 26.20832015989603 99 L 29.291657257068593 99 C 32.69739611880019 99 35.45833145141372 96.22974032878875 35.45833145141372 92.8125 L 35.45833145141372 71.15625 L 38.54166854858628 71.15625 L 38.54166854858628 92.8125 C 38.54166854858628 96.22974032878875 41.30260388119981 99 44.70834274293141 99 L 47.791679840103974 99 C 51.19741870183557 99 53.958357798288326 96.22974032878875 53.958357798288326 92.8125 L 53.958357798288326 41.234660911560056 L 72.19379377497613 22.937642955780028 C 74.60207289758044 20.521230940818786 74.60207289758044 16.603770003318786 72.19379377497613 14.187357988357544 Z"}   strokeLinejoin = {"miter"}/>
			</Svg>
			<View style = {[stylesheet._Find_Missing_Kids, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Find_Missing_Kids, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Find Missing Kids
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_7}>
			</View>
			<Svg style = {stylesheet._Rectangle_8} fill = {"rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)"}>
			<Path fillRule = {"nonzero"} d = {"M 0 0 L 295 0 L 295 49 L 0 49 L 0 0 Z"}   strokeLinejoin = {"miter"}/>
			</Svg>
			<View style = {[stylesheet._SIGN_UP, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._SIGN_UP, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				SIGN UP
			</Text>
			{/* <Pressable onPress={()=> SignUp}>
 				 <Text>Sign up</Text>
			</Pressable> */}
			</View>
			<View style = {[stylesheet._LOG_IN, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._LOG_IN, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				LOG IN
			</Text>
			</View>
			<Image style = {stylesheet._rowen_smith_wrDa5i1X3FY_unsplash_1 } source={require('../assets/kids/smileGirl.jpg')} ></Image>
		</View>
	)
}

const stylesheet = StyleSheet.create({
	_HomePage: {
		position: "absolute",
		width: 375,
		height: 812,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Rectangle_1: {
		position: "absolute",
		width: 375,
		height: 812,
		borderRadius: 0,
		opacity: 1,
		borderWidth: 1,
		borderColor: "rgba(98.81249696016312, 17.7039036154747, 17.7039036154747, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		backgroundColor: "rgba(0, 17.00000088661909, 63.000000044703484, 1)",
	},
	_Ellipse_1: {
		position: "absolute",
		width: 109,
		height: 144,
		borderRadius: 1000,
		backgroundColor: "rgba(10.000000353902578, 163.00000548362732, 167.00000524520874, 1)",
		left: -49,
		right: "auto",
		top: -55,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Ellipse_3: {
		position: "absolute",
		width: 95,
		height: 112,
		borderRadius: 1000,
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
		left: 20,
		right: "auto",
		top: -75,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Ellipse_4: {
		position: "absolute",
		width: 103,
		height: 118,
		borderRadius: 1000,
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
		left: 294,
		right: "auto",
		top: 776,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Ellipse_5: {
		position: "absolute",
		width: 106,
		height: 120,
		borderRadius: 1000,
		backgroundColor: "rgba(10.000000353902578, 163.00000548362732, 167.00000524520874, 1)",
		left: 334,
		right: "auto",
		top: 742,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Vector: {
		position: "absolute",
		color: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
		width: 74,
		height: 99,
		borderRadius: 0,
		transform: [
			{translateX: 150},
			{translateY: 153},
			{rotate: "0deg"},
		],
	},
	_Find_Missing_Kids: {
		position: "absolute",
		width: 194,
		height: 30,
		left: 90,
		right: "auto",
		top: 265,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "bold",
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Rectangle_7: {
		position: "absolute",
		width: 295,
		height: 49,
		borderRadius: 100,
		opacity: 1,
		left: 37,
		right: "auto",
		top: 659,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_Rectangle_8: {
		position: "absolute",
		color: "rgba(10.000000353902578, 163.00000548362732, 167.00000524520874, 1)",
		width: 295,
		height: 49,
		borderRadius: 100,
		left: 37,
		right: "auto",
		top: 590,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_SIGN_UP: {
		position: "absolute",
		width: 247,
		height: "auto",
		left: 64,
		right: "auto",
		top: 602,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: 'bold',
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
        backgroundColor: "rgba(10.000000353902578, 163.00000548362732, 167.00000524520874, 1)",
        
	},
	_LOG_IN: {
		position: "absolute",
		width: 247,
		height: "auto",
		left: 64,
		right: "auto",
		top: 671,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: 'bold',
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
	},
	_rowen_smith_wrDa5i1X3FY_unsplash_1: {
		position: "absolute",
		width: 133,
		height: 122,
		borderRadius: 158,
		opacity: 1,
		left: 121,
		right: "auto",
		top: 436,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
});