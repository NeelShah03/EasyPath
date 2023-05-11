import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import React, { useState, useRef, useContext, useEffect } from "react";
import { HeadBar } from "../components/HeadBar";
import colors from "../constants/colors";
import { SearchContext } from "../contexts/SearchContext";
import { SearchBar } from "../components/SearchBar";
import { LocationContext } from "../contexts/LocationContext";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import moment from "moment";
import Screens from "../constants/Screens";
import { Entypo } from "@expo/vector-icons";
import * as Location from "expo-location";
import MapboxGL from "@rnmapbox/maps";
MapboxGL.setWellKnownTileServer('Mapbox')
const tokenmapbox = "pk.eyJ1IjoiamFzZXkiLCJhIjoiY2xmOTU3YWF0MjM5NzNzbzRzZmg1bXN3NyJ9.v11b3j2Is0NqG1Mp_xb7CQ";
MapboxGL.setAccessToken(tokenmapbox);

const DUMMY_TIME = 6;

export const MapScreen = ({ navigation, route }) => {
    const { startPoint, destination, chooseDestination, chooseStartPoint } =
        useContext(LocationContext);
    const { addRecentSearch } = useContext(SearchContext);
    const currentDate = moment().format("DD/MM/YYYY");
    const params = route.params;
    const [errorMsg, setErrorMsg] = useState(null);
    const [location, setLocation] = useState(null);
    const [map, setMap] = useState(null);
    const startingCoords = [150.8778 , -34.412];
    

    const searchStartPoint = () => {
        navigation.push(Screens.SUGGESTION, {
            placeholderText: "Choose Start Point",
            title: "startPoint",
        });
    };
    const searchDestination = () => {
        navigation.push(Screens.SUGGESTION, {
            placeholderText: "Choose Destination",
            title: "destination",
        });
    };

    const search = (startPoint, destination) => {
        addRecentSearch(startPoint, destination, currentDate, DUMMY_TIME);
        navigation.navigate(Screens.WELCOME);
    };

    const toggleDrawer = () => {
        navigation.openDrawer();
    };

    

    return (
        <SafeAreaView>
            <StatusBar />
            <HeadBar
                header="Map View"
                onPress={() => {
                    chooseStartPoint("Your Location");
                    chooseDestination("");
                    toggleDrawer;
                }}
                icon={
                    <Entypo
                        name="menu"
                        size={35}
                        color={colors.white}
                        style={styles.icon}
                    />
                }
            />
            <SearchBar
                placeholderText={"Choose Start Point"}
                onPress={searchStartPoint}
                value={startPoint}
            />
            <SearchBar
                placeholderText={"Choose Destination"}
                onPress={searchDestination}
                value={destination}
            />
            <TouchableOpacity onPress={() => search(startPoint, destination)}>
                <View style={styles.startButton}>
                    <FontAwesome
                        name="location-arrow"
                        size={20}
                        color={colors.white}
                    />
                    <Text style={styles.buttonText}>Start</Text>
                </View>
            </TouchableOpacity>
            <MapboxGL.MapView 
                style={styles.map}
                centerCoordinate={startingCoords}
                showUserLocation={true}
            >
                <MapboxGL.Camera
                    zoomLevel={14.75}
                    animationMode={'flyTo'}
                    animationDuration={0}
                    centerCoordinate={startingCoords}
                >
                </MapboxGL.Camera>
                <MapboxGL.UserLocation>

                </MapboxGL.UserLocation>
                <MapboxGL.Geocoder
                bbox: [-34.408581, 150.871758, -34.403101, 150.883313],
                />
                

            </MapboxGL.MapView>
                      
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: colors.white,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: "row",
        borderRadius: 10,
    },
    labelBox: {
        borderRightColor: colors.blue,
        borderRightWidth: 0.7,
        width: 100,
        marginRight: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.blue,
        borderRightWidth: 1,
    },
    inputText: {
        fontSize: 16,
        color: colors.blue,
    },
    mapView: {
        height: 600,
        justifyContent: "center",
        alignItems: "center",
    },
    mapText: {
        fontWeight: "bold",
        fontSize: 40,
    },
    startButton: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        marginHorizontal: 150,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: colors.blue,
        justifyContent: "center",
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: colors.white,
    },
    text: {
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 100,
        fontSize: 30,
    },
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    }
});
