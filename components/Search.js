import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
useFonts,
	Roboto_400Regular
} from "@expo-google-fonts/inter";

export default function Search (){

	let [fontsLoaded] = useFonts({
		'Roboto': Roboto_400Regular,
	});

	return (
		<View style = {stylesheet._Search}>
			<View style = {stylesheet._Rectangle_1}>
			</View>
			<View style = {stylesheet._Rectangle_2}>
			</View>
			<Svg style = {stylesheet._Vector} fill = {"rgba(0, 0, 0, 1)"}>
			<Path fillRule = {"nonzero"} d = {"M 28.605607693233466 25.072357504272937 L 22.95812366114451 19.425837783677 C 22.703222206452327 19.17097985357045 22.357689128827218 19.029392114622368 21.995162610085163 19.029392114622368 L 21.071853587886828 19.029392114622368 C 22.635249198273794 17.030173283884583 23.56422336709925 14.515574953748331 23.56422336709925 11.780099880480513 C 23.56422336709925 5.272727312008316 18.29059557978966 0 11.782111683549624 0 C 5.273627787309588 0 0 5.272727312008316 0 11.780099880480513 C 0 18.287472448952713 5.273627787309588 23.560199760961027 11.782111683549624 23.560199760961027 C 14.518053920695822 23.560199760961027 17.033081693425046 22.63138421506618 19.032641950349394 21.068255555474767 L 19.032641950349394 21.991406922069885 C 19.032641950349394 22.353871539178122 19.174253869622827 22.6993456168103 19.42915532431501 22.95420354691685 L 25.076639356403962 28.600723267512787 C 25.609100151263807 29.133093144353005 26.470100285518186 29.133093144353005 26.99689663601949 28.600723267512787 L 28.599942870730303 26.99795075396687 C 29.132403665590147 26.46558087712665 29.13240404373477 25.604727381113154 28.605607693233466 25.072357504272937 Z M 11.782111683549624 19.029392114622368 C 7.777326779363052 19.029392114622368 4.531581416749856 15.789864820326823 4.531581416749856 11.780099880480513 C 4.531581416749856 7.775998795865319 7.77166195685989 4.530807646338659 11.782111683549624 4.530807646338659 C 15.786896587736198 4.530807646338659 19.032641950349394 7.770334940634204 19.032641950349394 11.780099880480513 C 19.032641950349394 15.784200965095707 15.792561410239358 19.029392114622368 11.782111683549624 19.029392114622368 Z"}   strokeLinejoin = {"miter"}/>
			</Svg>
			<View style = {stylesheet._Line_6}>
			</View>
			<View style = {stylesheet._Rectangle_8}>
			</View>
			<View style = {[stylesheet._Back, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Back, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Back
			</Text>
			</View>
			<View style = {[stylesheet._Search_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Search_2, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Search
			</Text>
			</View>
		</View>
	)
}

const stylesheet = StyleSheet.create({
	_Search: {
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
	_Rectangle_2: {
		position: "absolute",
		width: 295,
		height: 67,
		borderRadius: 100,
		opacity: 1,
		left: 40,
		right: "auto",
		top: 83,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(196.00000351667404, 196.00000351667404, 196.00000351667404, 1)",
	},
	_Vector: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 29,
		height: 29,
		borderRadius: 0,
		transform: [
			{translateX: 45},
			{translateY: 102},
			{rotate: "0deg"},
		],
	},
	_Line_6: {
		position: "absolute",
		width: 241,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(0, 0, 0, 1)",
		left: 74,
		right: "auto",
		top: 136,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-9.93923337957349e-17deg"},
		],
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
	_Search_2: {
		position: "absolute",
		width: 202,
		height: 19,
		left: 82,
		right: "auto",
		top: 112,
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
		color: "rgba(175.3125, 162.89453834295273, 162.89453834295273, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
});

//Image urls