import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, InputText } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
useFonts,
Roboto_400Regular
} from "@expo-google-fonts/inter";

export default function SignUp (){

	let [fontsLoaded] = useFonts({
		'Roboto': Roboto_400Regular,
	});

	return (
		<View style = {stylesheet._Sign_up}>
			<View style = {stylesheet._Rectangle_1}>
			</View>
			<View style = {stylesheet._Ellipse_1}>
			</View>
			<View style = {stylesheet._Ellipse_3}>
			</View>
			<View style = {[stylesheet._SIGN_UP, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._SIGN_UP, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				SIGN UP
			</Text>
			</View>
			 <View style = {stylesheet._Rectangle_2}> 
			
			</View>
			<View style = {stylesheet._Ellipse_4}>
			</View>
			<View style = {stylesheet._Ellipse_5}>
			</View>
			<View style = {[stylesheet._Full_Name, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Full_Name, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Full Name
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_3}>
			</View>
			<View style = {stylesheet._Line_2}>
			</View>
			<View style = {[stylesheet._Mobile_Number, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Mobile_Number, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Mobile Number
			</Text>
			</View>
			<View style = {[stylesheet._Email, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Email, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Email
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_4}>
			</View>
			<View style = {stylesheet._Rectangle_5}>
			</View>
			<View style = {[stylesheet._Password, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Password, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Password
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_6}>
			</View>
			<View style = {stylesheet._Rectangle_7}>
			</View>
			<View style = {[stylesheet._Confirm_Password, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Confirm_Password, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Confirm Password
			</Text>
			</View>
			<View style = {stylesheet._Line_1}>
			</View>
			<View style = {stylesheet._Line_3}>
			</View>
			<View style = {stylesheet._Line_4}>
			</View>
			<View style = {stylesheet._Line_5}>
			</View>
			<View style = {[stylesheet._SIGN_UP_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._SIGN_UP_2, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				SIGN UP
			</Text>
			</View>
			<View style = {[stylesheet._Have_Account_, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Have_Account_, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Have Account?
			</Text>
			</View>
			<View style = {[stylesheet._SIGN_IN, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._SIGN_IN, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				SIGN IN
			</Text>
			</View>
		</View>
	)
}

const stylesheet = StyleSheet.create({
	_Sign_up: {
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
	_SIGN_UP: {
		position: "absolute",
		width: 186,
		height: 43,
		left: 37,
		right: "auto",
		top: 125,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 36,
		color: "rgba(229.00000154972076, 229.00000154972076, 229.00000154972076, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Rectangle_2: {
		position: "absolute",
		width: 295,
		height: 49,
		borderRadius: 100,
		opacity: 1,
		left: 40,
		right: "auto",
		top: 229,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(10.000000353902578, 163.00000548362732, 167.00000524520874, 1)",
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
	_Full_Name: {
		position: "absolute",
		width: 134,
		height: 21,
		left: 40,
		right: "auto",
		top: 200,
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
	_Rectangle_3: {
		position: "absolute",
		width: 295,
		height: 49,
		borderRadius: 100,
		opacity: 1,
		left: 37,
		right: "auto",
		top: 315,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(10.000000353902578, 163.00000548362732, 167.00000524520874, 1)",
	},
	_Line_2: {
		position: "absolute",
		width: 254.00196838378906,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(0, 0, 0, 1)",
		left: 58,
		right: "auto",
		top: 357,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.22557278274727682deg"},
		],
	},
	_Mobile_Number: {
		position: "absolute",
		width: 134,
		height: 21,
		left: 37,
		right: "auto",
		top: 286,
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
	_Email: {
		position: "absolute",
		width: 134,
		height: 21,
		left: 37,
		right: "auto",
		top: 372,
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
	_Rectangle_4: {
		position: "absolute",
		width: 295,
		height: 49,
		borderRadius: 100,
		opacity: 1,
		left: 40,
		right: "auto",
		top: 401,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(10.000000353902578, 163.00000548362732, 167.00000524520874, 1)",
	},
	_Rectangle_5: {
		position: "absolute",
		width: 295,
		height: 49,
		borderRadius: 100,
		opacity: 1,
		left: 37,
		right: "auto",
		top: 487,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(10.000000353902578, 163.00000548362732, 167.00000524520874, 1)",
	},
	_Password: {
		position: "absolute",
		width: 134,
		height: 21,
		left: 37,
		right: "auto",
		top: 458,
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
	_Rectangle_6: {
		position: "absolute",
		width: 295,
		height: 49,
		borderRadius: 100,
		opacity: 1,
		left: 37,
		right: "auto",
		top: 573,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(10.000000353902578, 163.00000548362732, 167.00000524520874, 1)",
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
	_Confirm_Password: {
		position: "absolute",
		width: 163,
		height: 21,
		left: 37,
		right: "auto",
		top: 544,
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
	_Line_1: {
		position: "absolute",
		width: 254.00196838378906,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(0, 0, 0, 1)",
		left: 58,
		right: "auto",
		top: 271,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.22557278274727682deg"},
		],
	},
	_Line_3: {
		position: "absolute",
		width: 254.00196838378906,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(0, 0, 0, 1)",
		left: 58,
		right: "auto",
		top: 443,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.22557278274727682deg"},
		],
	},
	_Line_4: {
		position: "absolute",
		width: 254.00196838378906,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(0, 0, 0, 1)",
		left: 58,
		right: "auto",
		top: 529,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.22557278274727682deg"},
		],
	},
	_Line_5: {
		position: "absolute",
		width: 254.00196838378906,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(0, 0, 0, 1)",
		left: 61,
		right: "auto",
		top: 615,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.22557278274727682deg"},
		],
	},
	_SIGN_UP_2: {
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
		fontWeight: "600",
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
	},
	_Have_Account_: {
		position: "absolute",
		width: 91,
		height: 21,
		left: 118,
		right: "auto",
		top: 729,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 13,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_SIGN_IN: {
		position: "absolute",
		width: 90,
		height: 18,
		left: 209,
		right: "auto",
		top: 728,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "600",
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
});

//Image urls