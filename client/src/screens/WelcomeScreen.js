import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Dimensions,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { HeadBar } from "../components/HeadBar";
import { SearchBar } from "../components/SearchBar";
import colors from "../constants/colors.js";
import { RecentSearchItem } from "../components/RecentSearchItem";

import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Logo } from "../components/Logo";
import { SearchContext } from "../contexts/SearchContext";
import { useIsFocused } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";
import Screens from "../constants/Screens";

export const WelcomeScreen = () => {
    const navigation = useNavigation();
    const { recentSearch, fetch } = useContext(SearchContext);
    const isFocused = useIsFocused();
    const currentDate = moment().format("DD/MM/YYYY");


    useEffect(() => {
        if (isFocused) {
            // fetch();
        }

    }, [isFocused]);

    const toggleDrawer = () => {
        navigation.openDrawer();
    };

    const showSuggestionList = () =>
        navigation.push(Screens.SUGGESTION, {
            placeholderText: "Choose Destination",
            title: "destination",
            goBackTo: Screens.WELCOME,
        });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <HeadBar
                header="Welcome John Doe"
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
                onPress={showSuggestionList}
                placeholderText="Search here"
            />
             
            <View>
                <View style={styles.logoView}>
                    <Text style={styles.lastLogin}>
                        Last Login: {currentDate}
                    </Text>
                    <Logo size={1 / 4} />
                </View>
                <View style={styles.container}>
                
                </View> 
                <View style={styles.recentSearch}>
                    <Text style={styles.headerText}>Recent Searches</Text>
                    <View style={styles.seperator}></View>

                    <ScrollView>
                        {recentSearch &&
                            recentSearch.map(
                                ({ from, to, date, time }, index) => {
                                    return (
                                        <RecentSearchItem
                                            startLocation={from}
                                            destination={to}
                                            date={date}
                                            time={time}
                                            key={index}
                                        />
                                    );
                                }
                            )}
                    </ScrollView>
                </View>
                
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        marginHorizontal: 30,
        alignItems: "center",
    },
    lastLogin: {
        fontSize: 16,
        color: colors.blue,
    },

    recentSearch: {
        height: 600,
    },

    headerText: {
        fontSize: 30,
        marginLeft: 30,
        color: colors.blue,
    },
    seperator: {
        borderColor: colors.blue,
        borderWidth: 1,
        marginHorizontal: 25,
        borderRadius: 5,
    },
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,

    },
});
