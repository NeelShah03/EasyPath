import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Dimensions,
} from "react-native";
import React, { useContext, useRef } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { MaterialIcons } from "@expo/vector-icons";
import { OriginMarker } from "../components/layout/Icons";
import { useCurrentLocation } from "../hooks/useCurrentLocation";

import colors from "../constants/colors";
import { useRoute } from "@react-navigation/native";
import { RouteContext } from "../contexts/RouteContext";

const MAP_API_KEY = "AIzaSyAaeSswQMnnAINGNIA73Q2AVO1vZ1_jX18";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ratio = (height / width).toFixed(4);

export const Map = () => {
    const location = useCurrentLocation();
    const { setDistance, setDuration, duration } = useContext(RouteContext);
    console.log(setDistance);
    const route = useRoute();
    const mapRef = useRef(null);

    if (!location) {
        return <ActivityIndicator size={20} style={{ marginTop: 200 }} />;
    }
    const initialLocation = location.coords; // here
    console.log(initialLocation);
    const destination = route.params
        ? route.params.coords
        : {
              latitude: -34.40177296,
              longitude: 150.878431,
          };
    console.log(destination);

    return (
        <View style={styles.mapView}>
            <View style={styles.mapHeader}>
                <View style={styles.grayLine}></View>
                <View style={styles.durationBox}>
                    <MaterialIcons
                        name="directions-walk"
                        size={30}
                        color={"blue"}
                    />
                    <Text style={{ color: "blue" }}>{duration} min</Text>
                </View>

                <View style={styles.grayLine}></View>
            </View>

            <MapView
                style={styles.map}
                initialRegion={{
                    initialLocation,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001 * ratio,
                }}
                ref={mapRef}
                mapType="standard"
                showsCompass={false}
            >
                <Marker coordinate={initialLocation} identifier="origin">
                    <OriginMarker />
                </Marker>
                <Marker coordinate={destination} identifier="destination">
                    <MaterialIcons name="location-pin" color="red" size={50} />
                </Marker>
                <MapViewDirections
                    origin={initialLocation}
                    destination={destination}
                    apikey={MAP_API_KEY}
                    provider={PROVIDER_GOOGLE}
                    strokeWidth={7}
                    strokeColor="blue"
                    mode="WALKING"
                    onReady={(result) => {
                        console.log(result);
                        setDistance(result.distance.toFixed(2)); // kms
                        setDuration(result.duration.toFixed(0)); // mins
                        mapRef?.current?.fitToElements([
                            initialLocation,
                            destination,
                        ]);
                    }}
                    optimizeWaypoints={true}
                    precision="low"
                ></MapViewDirections>
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mapHeader: {
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    grayLine: {
        borderBottomColor: colors.lightgray,
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: "40%",
    },
    durationBox: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(179, 219, 230,0.5)",
        borderRadius: 20,
    },

    map: {
        height: 450,
        width: "100%",
    },
});
