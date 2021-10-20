import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
useFonts,
Roboto_400Regular
} from "@expo-google-fonts/inter";

export default function Menu (){

	let [fontsLoaded] = useFonts({
		'Roboto': Roboto_400Regular,
	});

	return (
		<View style = {stylesheet._Menu_page}>
			<View style = {stylesheet._mdi_account_circle}>
				<Svg style = {stylesheet._Vector} fill = {"rgba(0, 0, 0, 1)"}>
				<Path fillRule = {"nonzero"} d = {"M 10 17.200000762939453 C 7.5 17.200000762939453 5.289999961853027 15.919999957084656 4 14 C 4.029999999329448 12 8 10.899999618530273 10 10.899999618530273 C 12 10.899999618530273 15.970000000670552 12 16 14 C 15.33888852596283 14.984409153461456 14.445858001708984 15.791153192520142 13.399560928344727 16.349178314208984 C 12.353263854980469 16.907203435897827 11.185803294181824 17.199388706765603 10 17.200000762939453 L 10 17.200000762939453 Z M 10 3 C 10.795649468898773 3 11.558711588382721 3.3160706162452698 12.121320724487305 3.8786797523498535 C 12.683929860591888 4.441288888454437 13 5.204350531101227 13 6 C 13 6.795649468898773 12.683929860591888 7.558711588382721 12.121320724487305 8.121320724487305 C 11.558711588382721 8.683929860591888 10.795649468898773 9 10 9 C 9.204350531101227 9 8.441288411617279 8.683929860591888 7.878679275512695 8.121320724487305 C 7.316070139408112 7.558711588382721 7 6.795649468898773 7 6 C 7 5.204350531101227 7.316070139408112 4.441288888454437 7.878679275512695 3.8786797523498535 C 8.441288411617279 3.3160706162452698 9.204350531101227 3.000000000000001 10 3 L 10 3 Z M 10 0 C 8.686781287193298 -6.661338147750939e-16 7.386421203613281 0.25865769386291504 6.173165321350098 0.761204719543457 C 4.959909439086914 1.263751745223999 3.8575180172920227 2.00034636259079 2.9289321899414062 2.9289321899414062 C 1.0535683631896973 4.804296016693115 1.7763568394002505e-15 7.347835063934326 0 10 C 2.220446049250313e-15 12.652164936065674 1.0535683631896973 15.195703983306885 2.9289321899414062 17.071067810058594 C 3.8575180172920227 17.99965363740921 4.959909439086914 18.736249208450317 6.173165321350098 19.23879623413086 C 7.386421203613281 19.7413432598114 8.686781287193298 19.999999999999996 10 20 C 12.652164936065674 19.999999999999996 15.195703983306885 18.946431636810303 17.071067810058594 17.071067810058594 C 18.946431636810303 15.195703983306885 20 12.652164936065674 20 10 C 20 4.46999979019165 15.5 0 10 0 Z"}   strokeLinejoin = {"miter"}/>
				</Svg>
			</View>
			<View style = {stylesheet._mdi_account_edit}>
				<Svg style = {stylesheet._Vector_2} fill = {"rgba(0, 0, 0, 1)"}>
				<Path fillRule = {"nonzero"} d = {"M 17.700000762939453 9.350000381469727 L 16.700000762939453 10.350000381469727 L 14.649999618530273 8.300000190734863 L 15.649999618530273 7.300000190734863 C 15.75281048566103 7.199225381016731 15.891035839915276 7.142778396606445 16.03499984741211 7.142778396606445 C 16.178963854908943 7.142778396606447 16.31718920916319 7.199225381016731 16.420000076293945 7.300000190734863 L 17.700000762939453 8.579999923706055 C 17.910000756382942 8.789999917149544 17.910000756382942 9.140000388026237 17.700000762939453 9.350000381469727 Z M 8 14.940000534057617 L 14.059999465942383 8.880000114440918 L 16.110000610351562 10.930000305175781 L 10.0600004196167 17 L 8 17 L 8 14.940000534057617 Z M 8 10 C 3.5799999237060547 10 0 11.789999961853027 0 14 L 0 16 L 6 16 L 6 14.110000610351562 L 10 10.109999656677246 C 9.339999973773956 10.029999658465385 8.6700000166893 10 8 10 Z M 8 0 C 6.939134001731873 8.881784197001252e-16 5.921718180179596 0.4214271903038025 5.171572685241699 1.1715726852416992 C 4.4214271903038025 1.921718180179596 4.0000000000000036 2.9391340017318726 4 4 C 4.0000000000000036 5.060865998268127 4.4214271903038025 6.078281819820404 5.171572685241699 6.828427314758301 C 5.921718180179596 7.5785728096961975 6.939134001731873 7.999999999999998 8 8 C 9.060865998268127 7.999999999999998 10.078281819820404 7.5785728096961975 10.8284273147583 6.828427314758301 C 11.578572809696198 6.078281819820404 11.999999999999998 5.060865998268127 12 4 C 11.999999999999998 2.9391340017318726 11.578572809696198 1.921718180179596 10.8284273147583 1.1715726852416992 C 10.078281819820404 0.4214271903038025 9.060865998268127 8.881784197001252e-16 8 0 Z"}   strokeLinejoin = {"miter"}/>
				</Svg>
			</View>
			<View style = {stylesheet._mdi_account_alert}>
				<Svg style = {stylesheet._Vector_3} fill = {"rgba(0, 0, 0, 1)"}>
				<Path fillRule = {"nonzero"} d = {"M 8 0 C 9.060865998268127 8.881784197001252e-16 10.078281819820404 0.4214271903038025 10.8284273147583 1.1715726852416992 C 11.578572809696198 1.921718180179596 11.999999999999998 2.9391340017318726 12 4 C 11.999999999999998 5.060865998268127 11.578572809696198 6.078281819820404 10.8284273147583 6.828427314758301 C 10.078281819820404 7.5785728096961975 9.060865998268127 7.999999999999998 8 8 C 6.939134001731873 7.999999999999998 5.921718180179596 7.5785728096961975 5.171572685241699 6.828427314758301 C 4.4214271903038025 6.078281819820404 4.000000000000001 5.060865998268127 4 4 C 4 2.9391340017318726 4.4214271903038025 1.921718180179596 5.171572685241699 1.1715726852416992 C 5.921718180179596 0.4214271903038025 6.939134001731873 8.881784197001252e-16 8 0 L 8 0 Z M 8 10 C 12.420000076293945 10 16 11.789999961853027 16 14 L 16 16 L 0 16 L 0 14 C 0 11.789999961853027 3.5799999237060547 10 8 10 Z M 18 8 L 18 3 L 20 3 L 20 9 L 18 9 L 18 8 Z M 18 13 L 18 11 L 20 11 L 20 13 L 18 13 Z"}   strokeLinejoin = {"miter"}/>
				</Svg>
			</View>
			<View style = {stylesheet._Rectangle_1}>
			</View>
			<View style = {[stylesheet._Sadiq_Mahmood, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Sadiq_Mahmood, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Sadiq Mahmood
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_9}>
			</View>
			<View style = {stylesheet._Rectangle_10}>
			</View>
			<Svg style = {stylesheet._Rectangle_11} fill = {"rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)"}>
			<Path fillRule = {"nonzero"} d = {"M 0 0 L 353 0 L 353 79 L 0 79 L 0 0 Z"}   strokeLinejoin = {"miter"}/>
			</Svg>
			<View style = {stylesheet._Rectangle_12}>
			</View>
			<View style = {stylesheet._Rectangle_13}>
			</View>
			<View style = {stylesheet._Rectangle_15}>
			</View>
			<View style = {[stylesheet._ADD_MISSING_CHILD, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._ADD_MISSING_CHILD, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				ADD MISSING CHILD
			</Text>
			</View>
			<View style = {[stylesheet._MY_DATA, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._MY_DATA, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				MY DATA
			</Text>
			</View>
			<View style = {[stylesheet._SOCIAL_MEDIA, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._SOCIAL_MEDIA, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				SOCIAL MEDIA
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_16}>
			</View>
			<View style = {[stylesheet._SEARCH, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._SEARCH, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				SEARCH
			</Text>
			</View>
			<View style = {[stylesheet._LOGOUT, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._LOGOUT, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				LOGOUT
			</Text>
			</View>
			<View style = {[stylesheet._REPORT_A_FOUND_CHILD, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._REPORT_A_FOUND_CHILD, {position: "relative", left: 0, top: 0, width: "100%", height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				REPORT A FOUND CHILD
			</Text>
			</View>
			<Svg style = {stylesheet._Vector_4} fill = {"rgba(0, 0, 0, 1)"}>
			<Path fillRule = {"nonzero"} d = {"M 24 0 C 27.182597994804382 2.6645352591003757e-15 30.234845459461212 1.2642815709114075 32.4852819442749 3.5147180557250977 C 34.73571842908859 5.765154540538788 35.99999999999999 8.817402005195618 36 12 C 35.99999999999999 15.182597994804382 34.73571842908859 18.234845459461212 32.4852819442749 20.485281944274902 C 30.234845459461212 22.735718429088593 27.182597994804382 23.999999999999993 24 24 C 20.817402005195618 23.999999999999993 17.765154540538788 22.735718429088593 15.514718055725098 20.485281944274902 C 13.264281570911407 18.234845459461212 12.000000000000004 15.182597994804382 12 12 C 12 8.817402005195618 13.264281570911407 5.765154540538788 15.514718055725098 3.5147180557250977 C 17.765154540538788 1.2642815709114075 20.817402005195618 2.6645352591003757e-15 24 0 L 24 0 Z M 24 30 C 37.260000228881836 30 48 35.36999988555908 48 42 L 48 48 L 0 48 L 0 42 C 0 35.36999988555908 10.739999771118164 30 24 30 Z M 54 24 L 54 9 L 60 9 L 60 27 L 54 27 L 54 24 Z M 54 39 L 54 33 L 60 33 L 60 39 L 54 39 Z"}   strokeLinejoin = {"miter"}/>
			</Svg>
			<Image style = {stylesheet._icons8_cartoon_boy_50_1} source = {require('../assets/Menu/boy.png')}>
			</Image>
			<Svg style = {stylesheet._Vector_5} fill = {"rgba(0, 0, 0, 1)"}>
			<Path fillRule = {"nonzero"} d = {"M 47 7.7143005430698395 L 47 12.53569945693016 C 47 16.78461344540119 36.473993284361704 20.25 23.5 20.25 C 10.526006715638296 20.25 0 16.78461344540119 0 12.53569945693016 L 0 7.7143005430698395 C 0 3.4653865545988083 10.526006715638296 0 23.5 0 C 36.473993284361704 0 47 3.4653865545988083 47 7.7143005430698395 Z M 47 18.5625 L 47 29.410698652267456 C 47 33.65961264073849 36.473993284361704 37.125 23.5 37.125 C 10.526006715638296 37.125 0 33.65961264073849 0 29.410698652267456 L 0 18.5625 C 5.048828125 22.05805094540119 14.289678590638296 23.685328781604767 23.5 23.685328781604767 C 32.710321409361704 23.685328781604767 41.95106702191489 22.05805094540119 47 18.5625 Z M 47 35.4375 L 47 46.285698652267456 C 47 50.53461264073849 36.473993284361704 54 23.5 54 C 10.526006715638296 54 0 50.53461264073849 0 46.285698652267456 L 0 35.4375 C 5.048828125 38.93305094540119 14.289678590638296 40.56032717227936 23.5 40.56032717227936 C 32.710321409361704 40.56032717227936 41.95106702191489 38.93305094540119 47 35.4375 Z"}   strokeLinejoin = {"miter"}/>
			</Svg>
			<Image style = {stylesheet._Team} source = {require('../assets/Menu/socialMedia.png')}>
			</Image>
			<Image style = {stylesheet._Exit} source = {require('../assets/Menu/logout.png')}>
			</Image>
			<Svg style = {stylesheet._Vector_6} fill = {"rgba(0, 0, 0, 1)"}>
			<Path fillRule = {"nonzero"} d = {"M 38.46961034607259 33.71799802298774 L 30.87471802705641 26.12440253666907 C 30.5319195190221 25.781662561698194 30.06723710428488 25.59125146449215 29.579701441149016 25.59125146449215 L 28.33800999750298 25.59125146449215 C 30.44050754250614 22.90264683005168 31.689817631616236 19.52094562745465 31.689817631616236 15.842203287542759 C 31.689817631616236 7.090909143735322 24.597697503855066 0 15.844908815808118 0 C 7.092120127761172 0 0 7.090909143735322 0 15.842203287542759 C 0 24.593497431350194 7.092120127761172 31.684406575085518 15.844908815808118 31.684406575085518 C 19.524279410590935 31.684406575085518 22.906558139433688 30.435309806468307 25.595621933228497 28.333171264259168 L 25.595621933228497 29.574650688300878 C 25.595621933228497 30.062103104411953 25.786065548803116 30.526706174331096 26.128864056837426 30.86944614930197 L 33.72375637585361 38.46304163562064 C 34.43982434135478 39.178987332060935 35.597721073627916 39.178987332060935 36.30617133809518 38.46304163562064 L 38.461992136499376 36.307588944989924 C 39.17806010200054 35.59164324854963 39.17806061053986 34.433943719428036 38.46961034607259 33.71799802298774 Z M 15.844908815808118 25.59125146449215 C 10.459163599833072 25.59125146449215 6.094195698387738 21.234645792853314 6.094195698387738 15.842203287542759 C 6.094195698387738 10.45737769099129 10.451545390259854 6.093155110593369 15.844908815808118 6.093155110593369 C 21.230654031783164 6.093155110593369 25.595621933228497 10.449760782232206 25.595621933228497 15.842203287542759 C 25.595621933228497 21.227028884094228 21.238272241356384 25.59125146449215 15.844908815808118 25.59125146449215 Z"}   strokeLinejoin = {"miter"}/>
			</Svg>
			<Image style = {stylesheet._Test_Account} source = {require('../assets/Menu/Sadiq.jpg')}>
			</Image>
		</View>
	)
}

const stylesheet = StyleSheet.create({
	_Menu_page: {
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
	_mdi_account_circle: {
		position: "absolute",
		width: 24,
		height: 24,
		borderRadius: 0,
		overflow: "hidden",
		left: 175,
		right: "auto",
		top: 394,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Vector: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 20,
		height: 20,
		borderRadius: 0,
		transform: [
			{translateX: 2},
			{translateY: 2},
			{rotate: "0deg"},
		],
	},
	_mdi_account_edit: {
		position: "absolute",
		width: 24,
		height: 24,
		borderRadius: 0,
		overflow: "hidden",
		left: 175,
		right: "auto",
		top: 394,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Vector_2: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 17.857500076293945,
		height: 17,
		borderRadius: 0,
		transform: [
			{translateX: 4},
			{translateY: 4},
			{rotate: "0deg"},
		],
	},
	_mdi_account_alert: {
		position: "absolute",
		width: 24,
		height: 24,
		borderRadius: 0,
		overflow: "hidden",
		left: 175,
		right: "auto",
		top: 394,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Vector_3: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 20,
		height: 16,
		borderRadius: 0,
		transform: [
			{translateX: 2},
			{translateY: 4},
			{rotate: "0deg"},
		],
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
	_Sadiq_Mahmood: {
		position: "absolute",
		width: 207,
		height: 23,
		left: 9,
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
		fontSize: 24,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Rectangle_9: {
		position: "absolute",
		width: 375,
		height: 715,
		borderRadius: 35,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 180,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_Rectangle_10: {
		position: "absolute",
		width: 353,
		height: 79,
		borderRadius: 20,
		opacity: 1,
		left: 11,
		right: "auto",
		top: 203,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_Rectangle_11: {
		position: "absolute",
		color: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
		width: 353,
		height: 79,
		borderRadius: 20,
		left: 12,
		right: "auto",
		top: 305,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Rectangle_12: {
		position: "absolute",
		width: 353,
		height: 79,
		borderRadius: 20,
		opacity: 1,
		left: 12,
		right: "auto",
		top: 611,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_Rectangle_13: {
		position: "absolute",
		width: 353,
		height: 79,
		borderRadius: 20,
		opacity: 1,
		left: 11,
		right: "auto",
		top: 509,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_Rectangle_15: {
		position: "absolute",
		width: 353,
		height: 79,
		borderRadius: 20,
		opacity: 1,
		left: 11,
		right: "auto",
		top: 713,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_ADD_MISSING_CHILD: {
		position: "absolute",
		width: 258,
		height: "auto",
		left: 106,
		right: "auto",
		top: 228,
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
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_MY_DATA: {
		position: "absolute",
		width: 258,
		height: "auto",
		left: 96,
		right: "auto",
		top: 637,
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
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_SOCIAL_MEDIA: {
		position: "absolute",
		width: 172,
		height: "auto",
		left: 96,
		right: "auto",
		top: 538,
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
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Rectangle_16: {
		position: "absolute",
		width: 353,
		height: 79,
		borderRadius: 20,
		opacity: 1,
		left: 11,
		right: "auto",
		top: 407,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(167.00000524520874, 205.00000298023224, 109.00000110268593, 1)",
	},
	_SEARCH: {
		position: "absolute",
		width: 172,
		height: "auto",
		left: 96,
		right: "auto",
		top: 433,
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
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_LOGOUT: {
		position: "absolute",
		width: 103,
		height: "auto",
		left: 96,
		right: "auto",
		top: 740,
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
		textAlign: "left",
		textAlignVertical: "top",
	},
	_REPORT_A_FOUND_CHILD: {
		position: "absolute",
		width: 279,
		height: "auto",
		left: 86,
		right: "auto",
		top: 330,
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
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
	},
	_Vector_4: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 60,
		height: 48,
		borderRadius: 0,
		transform: [
			{translateX: 31},
			{translateY: 218},
			{rotate: "0deg"},
		],
	},
	_icons8_cartoon_boy_50_1: {
		position: "absolute",
		width: 74,
		height: 74,
		borderRadius: 0,
		opacity: 1,
		borderWidth: 1,
		borderColor: "rgba(10.000000353902578, 163.00000548362732, 167.00000524520874, 1)",
		left: 12,
		right: "auto",
		top: 307,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_5: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 47,
		height: 54,
		borderRadius: 0,
		transform: [
			{translateX: 31},
			{translateY: 624},
			{rotate: "0deg"},
		],
	},
	_Team: {
		position: "absolute",
		width: 55,
		height: 55,
		borderRadius: 0,
		opacity: 1,
		left: 31,
		right: "auto",
		top: 518,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Exit: {
		position: "absolute",
		width: 55,
		height: 55,
		borderRadius: 0,
		opacity: 1,
		left: 31,
		right: "auto",
		top: 725,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_6: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 39,
		height: 39,
		borderRadius: 0,
		transform: [
			{translateX: 31},
			{translateY: 427},
			{rotate: "0deg"},
		],
	},
	_Test_Account: {
		position: "absolute",
		width: 102,
		height: 102,
		borderRadius: 50,
		opacity: 1,
		borderWidth: 1,
		borderColor: "rgba(0, 17.00000088661909, 63.000000044703484, 1)",
		left: 10,
		right: "auto",
		top: 19,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
});
