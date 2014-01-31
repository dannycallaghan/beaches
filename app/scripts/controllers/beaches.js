'use strict';

angular.module('beachesApp')
	.controller('BeachesController', function ($scope) {
		$scope.seasides = {
			"beaches" : [
				{ "id" : 1000, "ref" : 9, "name" : "Aber Mawr Bay", "mainImg" : "4199.abermawr-beach-pembrokeshire.jpg", "address" : "Fishguard, Pembrokeshire", "type" : "sand, pebbles", "lon" : -5.085174, "lat" : 51.968983, "loc" : [ -5.085174, 51.968983 ] },
				{ "id" : 1001, "ref" : 10, "name" : "Aberaeron - Harbour (Fourth Groyne North)", "mainImg" : "", "address" : "Aberaeron, Ceredigion", "type" : "harbour, shingle", "lon" : -4.263352, "lat" : 52.24667, "loc" : [ -4.263352, 52.24667 ] },
				{ "id" : 1002, "ref" : 11, "name" : "Aberaeron - North (North of groynes)", "mainImg" : "", "address" : "Aberaeron, Ceredigion", "type" : "harbour, rock", "lon" : -4.253146, "lat" : 52.247757, "loc" : [ -4.253146, 52.247757 ] },
				{ "id" : 1003, "ref" : 13, "name" : "Aberaeron - South (Northern Groyne)", "mainImg" : "", "address" : "Aberaeron, Ceredigion", "type" : "shingle, rock", "lon" : -4.266002, "lat" : 52.241219, "loc" : [ -4.266002, 52.241219 ] },
				{ "id" : 1004, "ref" : 14, "name" : "Aberafan", "mainImg" : "", "address" : "Aberafan, Neath & Port Talbot", "type" : "sand", "lon" : -3.820532, "lat" : 51.590649, "loc" : [ -3.820532, 51.590649 ] },
				{ "id" : 1005, "ref" : 16, "name" : "Aberafan - Margam Sands (Opp. Steel Wks.)", "mainImg" : "", "address" : "Port Talbot, Neath & Port Talbot", "type" : "sand", "lon" : -3.774, "lat" : 51.547, "loc" : [ -3.774, 51.547 ] },
				{ "id" : 1006, "ref" : 17, "name" : "Aberarth", "mainImg" : "", "address" : "Aberaeron, Ceredigion", "type" : "shingle, pebbles", "lon" : -4.2321, "lat" : 52.251488, "loc" : [ -4.2321, 52.251488 ] },
				{ "id" : 1007, "ref" : 18, "name" : "Abercastle", "mainImg" : "", "address" : "Fishguard, Pembrokeshire", "type" : "sand", "lon" : -5.126633, "lat" : 51.957996, "loc" : [ -5.126633, 51.957996 ] },
				{ "id" : 1008, "ref" : 19, "name" : "Aberdaron Beach", "mainImg" : "", "address" : "Pwllheli, Gwynedd", "type" : "sand", "lon" : -4.710123, "lat" : 52.802586, "loc" : [ -4.710123, 52.802586 ] },
				{ "id" : 1009, "ref" : 20, "name" : "Aberdeen - Ballroom", "mainImg" : "geograph-551140-by-andy73.jpg", "address" : "Aberdeen, Aberdeenshire", "type" : "sand, shingle, rock", "lon" : -2.076046, "lat" : 57.155655, "loc" : [ -2.076046, 57.155655 ] },
				{ "id" : 1010, "ref" : 21, "name" : "Aberdeen - Footdee", "mainImg" : "geograph-1574929-by-bill-harrison.jpg", "address" : "Aberdeen, Aberdeenshire", "type" : "sand", "lon" : -2.069422, "lat" : 57.145061, "loc" : [ -2.069422, 57.145061 ] },
				{ "id" : 1011, "ref" : 22, "name" : "Aberdour-Harbour", "mainImg" : "geograph-935720-by-alisdair-macdonald.jpg", "address" : "Aberdour, Fife", "type" : "sand, shingle, mud", "lon" : -3.294208, "lat" : 56.051121, "loc" : [ -3.294208, 56.051121 ] },
				{ "id" : 1012, "ref" : 23, "name" : "Aberdour-Silver Sands", "mainImg" : "geograph-1154024-by-sandy-gemmill.jpg", "address" : "Aberdour, Fife", "type" : "sand, rock", "lon" : -3.283042, "lat" : 56.053215, "loc" : [ -3.283042, 56.053215 ] },
				{ "id" : 1013, "ref" : 24, "name" : "Aberdyfi", "mainImg" : "", "address" : "Aberdyfi, Gwynedd", "type" : "sand", "lon" : -4.054031, "lat" : 52.541855, "loc" : [ -4.054031, 52.541855 ] },
				{ "id" : 1014, "ref" : 25, "name" : "Abereiddy Bay - Slipway", "mainImg" : "", "address" : "Abereiddy, Pembrokeshire", "type" : "sand, pebbles", "lon" : -5.205152, "lat" : 51.936096, "loc" : [ -5.205152, 51.936096 ] },
				{ "id" : 1015, "ref" : 26, "name" : "Abererch", "mainImg" : "", "address" : "Pwllheli, Gwynedd", "type" : "sand", "lon" : -4.374204, "lat" : 52.895485, "loc" : [ -4.374204, 52.895485 ] },
				{ "id" : 1016, "ref" : 27, "name" : "Aberffraw Bay (Traeth Mawr)", "mainImg" : "", "address" : "Aberffraw, Isle of Anglesey", "type" : "sand", "lon" : -4.465785, "lat" : 53.180027, "loc" : [ -4.465785, 53.180027 ] },
				{ "id" : 1017, "ref" : 28, "name" : "Abergele - Pensarn", "mainImg" : "", "address" : "Abergele, Conwy", "type" : "shingle, pebbles", "lon" : -3.583888, "lat" : 53.297153, "loc" : [ -3.583888, 53.297153 ] },
				{ "id" : 1018, "ref" : 29, "name" : "Abergele - Towyn", "mainImg" : "", "address" : "Abergele, Conwy", "type" : "shingle", "lon" : -3.553334, "lat" : 53.302952, "loc" : [ -3.553334, 53.302952 ] },
				{ "id" : 1019, "ref" : 30, "name" : "Aberporth", "mainImg" : "", "address" : "Aberporth, Ceredigion", "type" : "sand", "lon" : -4.54564, "lat" : 52.135693, "loc" : [ -4.54564, 52.135693 ] },
				{ "id" : 1020, "ref" : 32, "name" : "Abersoch", "mainImg" : "", "address" : "Abersoch, Gwynedd", "type" : "sand", "lon" : -4.4982, "lat" : 52.82037, "loc" : [ -4.4982, 52.82037 ] },
				{ "id" : 1021, "ref" : 34, "name" : "Aberystwyth - North", "mainImg" : "", "address" : "Aberystwyth, Ceredigion", "type" : "sand, shingle", "lon" : -4.083908, "lat" : 52.419041, "loc" : [ -4.083908, 52.419041 ] },
				{ "id" : 1022, "ref" : 35, "name" : "Aberystwyth - South", "mainImg" : "", "address" : "Aberystwyth, Ceredigion", "type" : "sand, shingle", "lon" : -4.089448, "lat" : 52.411743, "loc" : [ -4.089448, 52.411743 ] },
				{ "id" : 1023, "ref" : 36, "name" : "Aberystwyth - Tanybwlch Beach", "mainImg" : "", "address" : "Aberystwyth, Ceredigion", "type" : "sand, shingle", "lon" : -4.089108, "lat" : 52.404552, "loc" : [ -4.089108, 52.404552 ] },
				{ "id" : 1024, "ref" : 37, "name" : "Abrahams Hole", "mainImg" : "geograph-1475081-by-tony-atkin.jpg", "address" : "Salcombe, Devon", "type" : "sand", "lon" : -3.746706, "lat" : 50.217442, "loc" : [ -3.746706, 50.217442 ] },
				{ "id" : 1025, "ref" : 38, "name" : "Achmelvich Bay", "mainImg" : "geograph-1375399-by-russel-wills.jpg", "address" : "Lochinver, Highland", "type" : "sand, rock", "lon" : -5.305666, "lat" : 58.17038, "loc" : [ -5.305666, 58.17038 ] },
				{ "id" : 1026, "ref" : 40, "name" : "Afon Wen", "mainImg" : "", "address" : "Pwllheli, Gwynedd", "type" : "sand, shingle", "lon" : -4.315407, "lat" : 52.905731, "loc" : [ -4.315407, 52.905731 ] },
				{ "id" : 1027, "ref" : 41, "name" : "Ainsdale", "mainImg" : "", "address" : "Southport, Sefton", "type" : "sand", "lon" : -3.062627, "lat" : 53.6077, "loc" : [ -3.062627, 53.6077 ] },
				{ "id" : 1028, "ref" : 42, "name" : "Aldeburgh", "mainImg" : "geograph-632449-by-elliott-simpson.jpg", "address" : "Aldeburgh, Suffolk", "type" : "sand, shingle", "lon" : 1.611399, "lat" : 52.155521, "loc" : [ 1.611399, 52.155521 ] },
				{ "id" : 1029, "ref" : 43, "name" : "Aldingham", "mainImg" : "", "address" : "Barrow in Furness, Cumbria", "type" : "sand, pebbles", "lon" : -3.097342, "lat" : 54.128777, "loc" : [ -3.097342, 54.128777 ] },
				{ "id" : 1030, "ref" : 44, "name" : "Allhallows", "mainImg" : "geograph-1015249-by-david-anstiss.jpg", "address" : "Rochester, The Medway Towns", "type" : "sand, mud", "lon" : 0.645716, "lat" : 51.478703, "loc" : [ 0.645716, 51.478703 ] },
				{ "id" : 1031, "ref" : 45, "name" : "Allonby", "mainImg" : "", "address" : "Allonby, Cumbria", "type" : "sand, shingle", "lon" : -3.433268, "lat" : 54.767948, "loc" : [ -3.433268, 54.767948 ] }
			]
		}
	});