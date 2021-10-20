import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
useFonts,
Roboto_400Regular
} from "@expo-google-fonts/inter";

export default function FoundChild (){

	let [fontsLoaded] = useFonts({
		"Roboto": Roboto_400Regular,
	});

	return (
		<View style = {stylesheet._Missing_child}>
			<View style = {stylesheet._Rectangle_1}>
			</View>
			<View style = {[stylesheet._Missing_Child_Detail, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Missing_Child_Detail, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Found Child Detail
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_2}>
			</View>
			<View style = {[stylesheet._Child_Name, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Child_Name, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Child Name
			</Text>
			</View>
			<View style = {[stylesheet._Add_photo, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Add_photo, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Add photo
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_3}>
			</View>
			<View style = {stylesheet._Line_2}>
			</View>
			<View style = {[stylesheet._Age, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Age, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Age
			</Text>
			</View>
			<View style = {[stylesheet._Gender, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Gender, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Gender
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_4}>
			</View>
			<View style = {stylesheet._Rectangle_5}>
			</View>
			<View style = {[stylesheet._Contact_Number, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Contact_Number, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Contact Number
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_6}>
			</View>
			<View style = {stylesheet._Rectangle_7}>
			</View>
			<View style = {[stylesheet._Address, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Address, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Address
			</Text>
			</View>
			<View style = {stylesheet._Line_1}>
			</View>
			<View style = {stylesheet._Line_6}>
			</View>
			<View style = {stylesheet._Line_3}>
			</View>
			<View style = {stylesheet._Line_4}>
			</View>
			<View style = {stylesheet._Line_5}>
			</View>
			<View style = {[stylesheet._SUBMIT, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._SUBMIT, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				SUBMIT
			</Text>
			</View>
			<Image style = {stylesheet._Add_Image} source = {require('../assets/MissingChild/addPhoto.png')}>
			</Image>
		</View>
	)
}

const stylesheet = StyleSheet.create({
	_Missing_child: {
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
	_Missing_Child_Detail: {
		position: "absolute",
		width: 275,
		height: 79,
		left: 37,
		right: "auto",
		top: 34,
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
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_Child_Name: {
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
	_Add_photo: {
		position: "absolute",
		width: 134,
		height: 21,
		left: 133,
		right: "auto",
		top: 152,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: "400",
		textDecorationLine: "none",
		fontSize: 24,
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
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
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
	_Age: {
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
	_Gender: {
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
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
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
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_Contact_Number: {
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
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
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
		backgroundColor: "rgba(10.000000353902578, 163.00000548362732, 167.00000524520874, 1)",
	},
	_Address: {
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
	_Line_6: {
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
	_SUBMIT: {
		position: "absolute",
		width: 111,
		height: "auto",
		left: 129,
		right: "auto",
		top: 670,
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
	_Add_Image: {
		position: "absolute",
		width: 74,
		height: 74,
		borderRadius: 0,
		opacity: 1,
		left: 258,
		right: "auto",
		top: 126,
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