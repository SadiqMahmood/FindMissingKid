import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
useFonts,
	Roboto_400Regular
} from "@expo-google-fonts/inter";

export default function MyData (){

	let [fontsLoaded] = useFonts({
		'Roboto': Roboto_400Regular,
	});

	return (
		<View style = {stylesheet._My_Data}>
			<View style = {stylesheet._Rectangle_1}>
			</View>
			<View style = {stylesheet._Rectangle_8}>
			</View>
			<View style = {[stylesheet._Back, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Back, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Back
			</Text>
			</View>
			<Image style = {stylesheet._rowen_smith_wrDa5i1X3FY_unsplash_2} source = {require('../assets/kids/smileGirl.jpg')}>
			</Image>
			<View style = {stylesheet._Line_12}>
			</View>
			<View style = {[stylesheet._Name__Mohammad_Shahid, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Name__Mohammad_Shahid, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Name:   Mohammad Shahid
			</Text>
			</View>
			<View style = {[stylesheet._Age__9, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Age__9, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Age:     9
			</Text>
			</View>
			<Svg style = {stylesheet._Line_13} fill = {"rgba(0,0,0,0)"}>
			<Path fillRule = {"none"} d = {"M 0 0 L 253.03330993652347 1.1368683772161603e-13"}   strokeLinejoin = {"miter"}  strokeWidth = {1}  stroke = {"rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)"}/>
			</Svg>
			<Svg style = {stylesheet._Line_14} fill = {"rgba(0,0,0,0)"}>
			<Path fillRule = {"none"} d = {"M 0 0 L 124.98387145996094 2.0077731609344482 L 248.4679412841797 3.991452932357788"}   strokeLinejoin = {"miter"}  strokeWidth = {1}  stroke = {"rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)"}/>
			</Svg>
			<View style = {[stylesheet._Gender__Male, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Gender__Male, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Gender:     Male
			</Text>
			</View>
			<Svg style = {stylesheet._Line_15} fill = {"rgba(0,0,0,0)"}>
			<Path fillRule = {"none"} d = {"M 0.000005678625711880159 0 L 252.00242614746094 0"}   strokeLinejoin = {"miter"}  strokeWidth = {1}  stroke = {"rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)"}/>
			</Svg>
			<View style = {[stylesheet._Address__Thokar_Lahore, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Address__Thokar_Lahore, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Address:   Thokar Lahore
			</Text>
			</View>
			<View style = {stylesheet._Line_16}>
			</View>
			<View style = {[stylesheet._Contact_No___923119548729, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Contact_No___923119548729, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Contact No:    +923119548729
			</Text>
			</View>
			<View style = {stylesheet._Line_17}>
			</View>
			<View style = {[stylesheet._Name__Hina_Khan, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Name__Hina_Khan, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Name:   Hina Khan
			</Text>
			</View>
			<View style = {[stylesheet._Age__7, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Age__7, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Age:     7
			</Text>
			</View>
			<Svg style = {stylesheet._Line_19} fill = {"rgba(0,0,0,0)"}>
			<Path fillRule = {"none"} d = {"M 0 0 L 250.03370666503906 1.1368683772161603e-13"}   strokeLinejoin = {"miter"}  strokeWidth = {1}  stroke = {"rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)"}/>
			</Svg>
			<Svg style = {stylesheet._Line_20} fill = {"rgba(0,0,0,0)"}>
			<Path fillRule = {"none"} d = {"M 0 0 L 124.98387145996094 2.0077731609344482 L 248.4679412841797 3.991452932357788"}   strokeLinejoin = {"miter"}  strokeWidth = {1}  stroke = {"rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)"}/>
			</Svg>
			<View style = {[stylesheet._Gender__Female, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Gender__Female, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Gender:     Female
			</Text>
			</View>
			<Svg style = {stylesheet._Line_21} fill = {"rgba(0,0,0,0)"}>
			<Path fillRule = {"none"} d = {"M 0.000005678625711880159 0 L 252.00242614746094 0"}   strokeLinejoin = {"miter"}  strokeWidth = {1}  stroke = {"rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)"}/>
			</Svg>
			<View style = {[stylesheet._Address__Jubilee_Town_Lahore, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Address__Jubilee_Town_Lahore, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Address:   Jubilee Town Lahore
			</Text>
			</View>
			<View style = {stylesheet._Line_22}>
			</View>
			<View style = {[stylesheet._Contact_No___923119548729_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Contact_No___923119548729_2, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Contact No:    +923119548729
			</Text>
			</View>
			<View style = {stylesheet._Line_23}>
			</View>
			<View style = {stylesheet._Line_18}>
			</View>
			<Image style = {stylesheet._zahra_amiri_KsuX_F_e2II_unsplash_1} source = {require('../assets/kids/smileBoy.png')}>
			</Image>
		</View>
	)
}

const stylesheet = StyleSheet.create({
	_My_Data: {
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
	_Rectangle_8: {
		position: "absolute",
		width: 295,
		height: 49,
		borderRadius: 100,
		opacity: 1,
		left: 40,
		right: "auto",
		top: 697,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(10.000000353902578, 163.00000548362732, 167.00000524520874, 1)",
	},
	_Back: {
		position: "absolute",
		width: 247,
		height: "auto",
		left: 67,
		right: "auto",
		top: 708,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "600",
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
	},
	_rowen_smith_wrDa5i1X3FY_unsplash_2: {
		position: "absolute",
		width: 66,
		height: 66,
		borderRadius: 158,
		opacity: 1,
		left: 7,
		right: "auto",
		top: 50,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Line_12: {
		position: "absolute",
		width: 353.00140380859375,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(0, 0, 0, 1)",
		left: 10,
		right: "auto",
		top: 247,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0.1600436666296027deg"},
		],
	},
	_Name__Mohammad_Shahid: {
		position: "absolute",
		width: 253,
		height: 26,
		left: 73,
		right: "auto",
		top: 306,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Age__9: {
		position: "absolute",
		width: 151,
		height: 22,
		left: 76,
		right: "auto",
		top: 331,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Line_13: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: 253.03330993652344,
		height: 1.1368683772161603e-13,
		borderRadius: 0,
		left: 73,
		right: "auto",
		top: 328.10589599609375,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.9297623128595007deg"},
		],
	},
	_Line_14: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: 248.4679412841797,
		height: 3.991452932357788,
		borderRadius: 0,
		left: 77,
		right: "auto",
		top: 352,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.920334996245077deg"},
		],
	},
	_Gender__Male: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 76,
		right: "auto",
		top: 358,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Line_15: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: 252.00242614746094,
		height: 0,
		borderRadius: 0,
		left: 72.99755859375,
		right: "auto",
		top: 376.8336181640625,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.2791307117594847deg"},
		],
	},
	_Address__Thokar_Lahore: {
		position: "absolute",
		width: 289,
		height: 26,
		left: 76,
		right: "auto",
		top: 384,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Line_16: {
		position: "absolute",
		width: 254.00872802734375,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
		left: 71,
		right: "auto",
		top: 403.16558837890625,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.4884859460885548deg"},
		],
	},
	_Contact_No___923119548729: {
		position: "absolute",
		width: 264,
		height: 26,
		left: 76,
		right: "auto",
		top: 410,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Line_17: {
		position: "absolute",
		width: 254.00241088867188,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
		left: 71,
		right: "auto",
		top: 430.23199462890625,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.27790646592760043deg"},
		],
	},
	_Name__Hina_Khan: {
		position: "absolute",
		width: 253,
		height: 26,
		left: 75,
		right: "auto",
		top: 98,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Age__7: {
		position: "absolute",
		width: 151,
		height: 22,
		left: 78,
		right: "auto",
		top: 123,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Line_19: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: 250.03370666503906,
		height: 1.1368683772161603e-13,
		borderRadius: 0,
		left: 75,
		right: "auto",
		top: 120.10589599609375,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.9409174981750269deg"},
		],
	},
	_Line_20: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: 248.4679412841797,
		height: 3.991452932357788,
		borderRadius: 0,
		left: 79,
		right: "auto",
		top: 144,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.920334996245077deg"},
		],
	},
	_Gender__Female: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 78,
		right: "auto",
		top: 150,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Line_21: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: 252.00242614746094,
		height: 0,
		borderRadius: 0,
		left: 74.99755859375,
		right: "auto",
		top: 168.8336181640625,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.2791307117594847deg"},
		],
	},
	_Address__Jubilee_Town_Lahore: {
		position: "absolute",
		width: 289,
		height: 26,
		left: 78,
		right: "auto",
		top: 176,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Line_22: {
		position: "absolute",
		width: 254.00872802734375,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
		left: 73,
		right: "auto",
		top: 195.16558837890625,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.4884859460885548deg"},
		],
	},
	_Contact_No___923119548729_2: {
		position: "absolute",
		width: 264,
		height: 26,
		left: 78,
		right: "auto",
		top: 202,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Line_23: {
		position: "absolute",
		width: 254.00241088867188,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
		left: 73,
		right: "auto",
		top: 222.23199462890625,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.27790646592760043deg"},
		],
	},
	_Line_18: {
		position: "absolute",
		width: 353.00140380859375,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(0, 0, 0, 1)",
		left: 10,
		right: "auto",
		top: 453,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0.1600436666296027deg"},
		],
	},
	_zahra_amiri_KsuX_F_e2II_unsplash_1: {
		position: "absolute",
		width: 64,
		height: 64,
		borderRadius: 98,
		opacity: 1,
		left: 7,
		right: "auto",
		top: 260,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
});

//Image urls