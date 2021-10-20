import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
useFonts,
	Roboto_400Regular
} from "@expo-google-fonts/inter";

export default function Share (){

	let [fontsLoaded] = useFonts({
		'Roboto': Roboto_400Regular,
	});

	return (
		<View style = {stylesheet._social_media}>
			<View style = {stylesheet._Rectangle_1}>
			</View>
			<View style = {[stylesheet._SHARE_TO_SOCIAL_MEDIA, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._SHARE_TO_SOCIAL_MEDIA, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				SHARE TO SOCIAL MEDIA
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_17}>
			</View>
			<View style = {stylesheet._Rectangle_18}>
			</View>
			<View style = {stylesheet._Rectangle_19}>
			</View>
			<View style = {stylesheet._Rectangle_20}>
			</View>
			<View style = {stylesheet._Rectangle_9}>
			</View>
			<View style = {[stylesheet._Back, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Back, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Back
			</Text>
			</View>
			<Svg style = {stylesheet._Vector} fill = {"rgba(0, 0, 0, 1)"}>
			<Path fillRule = {"nonzero"} d = {"M 24.999969005623143 0 C 11.249986052530414 0 0 11.27008197961358 0 25.15060587049791 C 0 37.70080782733054 9.1499870824974 48.117469706475106 21.099972791705486 50 L 21.099972791705486 32.42972204795642 L 14.749981951735938 32.42972204795642 L 14.749981951735938 25.15060587049791 L 21.099972791705486 25.15060587049791 L 21.099972791705486 19.60341650982744 C 21.099972791705486 13.303215151435067 24.824969985522287 9.839358525657671 30.549962792442674 9.839358525657671 C 33.274959497501996 9.839358525657671 36.12495712047171 10.316266343642974 36.12495712047171 10.316266343642974 L 36.12495712047171 16.516065583690864 L 32.97495806937648 16.516065583690864 C 29.87496188883738 16.516065583690864 28.899965219540803 18.44879768443833 28.899965219540803 20.43172964747751 L 28.899965219540803 25.15060587049791 L 35.84995593553284 25.15060587049791 L 34.72495780711637 32.42972204795642 L 28.899965219540803 32.42972204795642 L 28.899965219540803 50 C 34.7910646406326 49.065875218047694 40.1554661849918 46.04798487928167 44.0247657468839 41.49111780598203 C 47.894065308776 36.934250732682386 50.013312825260655 31.13866677180065 49.999938011246286 25.15060587049791 C 49.99993801124628 11.27008197961358 38.74995195871587 0 24.999969005623143 0 L 24.999969005623143 0 Z"}   strokeLinejoin = {"miter"}/>
			</Svg>
			<View style = {[stylesheet._FACEBOOK, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._FACEBOOK, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				FACEBOOK
			</Text>
			</View>
			<View style = {[stylesheet._WHATSAPP, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._WHATSAPP, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				WHATSAPP
			</Text>
			</View>
			<View style = {[stylesheet._INSTAGRAM, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._INSTAGRAM, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				INSTAGRAM
			</Text>
			</View>
			<View style = {[stylesheet._TWITTER, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._TWITTER, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				TWITTER
			</Text>
			</View>
			<Image style = {stylesheet._Instagram_Circle} source = {require('../assets/Share/instagram.png')}>
			</Image>
			<Image style = {stylesheet._Twitter} source = {require('../assets/Share/twitter.png')}>
			</Image>
		</View>
	)
}

const stylesheet = StyleSheet.create({
	_social_media: {
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
	_SHARE_TO_SOCIAL_MEDIA: {
		position: "absolute",
		width: 318,
		height: 88,
		left: 11,
		right: "auto",
		top: 93,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "600",
		textDecorationLine: "none",
		fontSize: 36,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Rectangle_17: {
		position: "absolute",
		width: 353,
		height: 79,
		borderRadius: 20,
		opacity: 1,
		left: 11,
		right: "auto",
		top: 235,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_Rectangle_18: {
		position: "absolute",
		width: 353,
		height: 79,
		borderRadius: 20,
		opacity: 1,
		left: 11,
		right: "auto",
		top: 336,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_Rectangle_19: {
		position: "absolute",
		width: 353,
		height: 79,
		borderRadius: 20,
		opacity: 1,
		left: 11,
		right: "auto",
		top: 437,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_Rectangle_20: {
		position: "absolute",
		width: 353,
		height: 79,
		borderRadius: 20,
		opacity: 1,
		left: 11,
		right: "auto",
		top: 538,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_Rectangle_9: {
		position: "absolute",
		width: 295,
		height: 49,
		borderRadius: 100,
		opacity: 1,
		left: 40,
		right: "auto",
		top: 693,
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
		top: 704,
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
	_Vector: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 50,
		height: 50,
		borderRadius: 0,
		transform: [
			{translateX: 25},
			{translateY: 249},
			{rotate: "0deg"},
		],
	},
	_FACEBOOK: {
		position: "absolute",
		width: 172,
		height: "auto",
		left: 86,
		right: "auto",
		top: 271,
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
		color: "rgba(16.734378039836884, 29.404706954956055, 143.4375, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_WHATSAPP: {
		position: "absolute",
		width: 172,
		height: "auto",
		left: 86,
		right: "auto",
		top: 361,
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
		color: "rgba(11.662533693015575, 92.43750303983688, 10.014066249132156, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_INSTAGRAM: {
		position: "absolute",
		width: 172,
		height: "auto",
		left: 86,
		right: "auto",
		top: 463,
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
		color: "rgba(177.43749797344208, 41.40209197998047, 74.05062407255173, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_TWITTER: {
		position: "absolute",
		width: 172,
		height: "auto",
		left: 86,
		right: "auto",
		top: 564,
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
		color: "rgba(12.134458869695663, 9.17292058467865, 157.25000202655792, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Instagram_Circle: {
		position: "absolute",
		width: 50,
		height: 50,
		borderRadius: 0,
		opacity: 1,
		left: 25,
		right: "auto",
		top: 452,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Twitter: {
		position: "absolute",
		width: 43,
		height: 43,
		borderRadius: 0,
		opacity: 1,
		left: 29,
		right: "auto",
		top: 556,
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