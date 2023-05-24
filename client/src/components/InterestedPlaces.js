import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useContext } from "react";

import colors from "../constants/colors";
import interestedPlaces from "../constants/interestedPlaces";
import { useNavigation } from "@react-navigation/native";
import { LocationContext } from "../contexts/LocationContext";
import { ForwardIcon } from "./layout/Icons";
import Screens from "../constants/Screens";

export const InterestedPlaces = () => {
    const navigation = useNavigation();
    const { chooseDestination } = useContext(LocationContext);

    const onChooseDestination = (item) => {
        chooseDestination(item.title);
        navigation.navigate(Screens.MAP, {
            goBackTo: Screens.INTERESTED_PLACE,
            coords: {
                latitude: item.latitude,
                longitude: item.longitude,
            },
        });
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {interestedPlaces &&
                interestedPlaces.map((item, index) => {
                    return (
                        <LocationItem
                            item={item}
                            key={index}
                            onChooseDestination={onChooseDestination}
                        />
                    );
                })}
        </ScrollView>
    );
};

const LocationItem = ({ item, onChooseDestination }) => {
    return (
        <TouchableOpacity onPress={() => onChooseDestination(item)}>
            <View style={styles.locationItem}>
                <View style={styles.icon}>
                    <Text style={styles.icon}>{item.icon}</Text>
                </View>
                <View style={styles.location}>
                    <Text style={styles.locationText}>{item.title}</Text>
                    <Text style={styles.text}> Open: 9am - 5pm</Text>
                </View>
                <ForwardIcon style={styles.forward} />
            </View>
            <View style={styles.separator}></View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
        flexGrow: 1,
        paddingBottom: "50%",
    },
    locationItem: {
        flexDirection: "row",
        paddingVertical: 11,
        alignItems: "center",
        marginLeft: 5,
        marginRight: 10,
    },
    locationText: {
        fontSize: 20,
        color: colors.blue,
        marginBottom: 3,
        marginLeft: 4,
    },
    location: {
        width: 225,
    },
    text: {
        fontSize: 14,
        color: colors.blue,
    },
    separator: {
        borderBottomColor: colors.blue,
        borderBottomWidth: 0.5,
        marginLeft: 5,
        marginRight: 10,
    },
    icon: {
        width: 70,
        marginRight: 20,
        paddingLeft: 2,
    },
    forward: {
        alignSelf: "flex-end",
    },
});
