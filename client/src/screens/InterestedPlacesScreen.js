import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useContext } from "react";
import { HeadBar } from "../components/HeadBar";
import { SearchBar } from "../components/SearchBar";
import { InterestedPlaces } from "../components/InterestedPlaces";
import { Logo } from "../components/Logo";
import { LocationContext } from "../contexts/LocationContext";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import Screens from "../constants/Screens";

const YOUR_LOCATION = "Your Location";

export const InterestedPlacesScreen = ({ navigation }) => {
    const { chooseDestination, chooseStartPoint } = useContext(LocationContext);

    const toggleDrawer = () => {
        navigation.openDrawer();
    };
    const searchDestination = () =>
        navigation.push(Screens.SUGGESTION, {
            placeholderText: "Choose Destination",
            title: "destination",
            goBackTo: Screens.INTERESTED_PLACE,
        });

    return (
        <SafeAreaView>
            <HeadBar
                header="Places of Interest"
                onPress={toggleDrawer}
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
                onPress={searchDestination}
                placeholderText="Search here"
            />
            <View style={styles.contentBox}>
                <InterestedPlaces />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contentBox: {
        flexDirection: "row",
        marginLeft: 5,
    },
    logo: {
        paddingTop: 25,
        paddingLeft: 20,
    },
});
