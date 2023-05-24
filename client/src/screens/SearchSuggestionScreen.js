import {
    Text,
    View,
    SafeAreaView,
    FlatList,
    StyleSheet,
    Keyboard,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import buildings from "../constants/buildings";
import { SuggestionRow } from "../components/SuggestionRow";

import { LocationContext } from "../contexts/LocationContext";
import Screens from "../constants/Screens";
import { StatusBarForm } from "../components/layout/StatusBarForm";
import { RoundedSearchBar } from "../components/layout/RoundedSearchBar";
import { GoBackIcon } from "../components/layout/Icons";

export const SearchSuggestionScreen = ({ navigation, route }) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredList, setFilteredList] = useState(buildings);

    // using callback function to pass information from a child to a parent
    const handleInputText = (newValue) => {
        setInputValue(newValue);
    };

    useEffect(() => {
        setFilteredList(
            buildings.filter((item) => item.titleName.includes(inputValue))
        );
    }, [inputValue]);

    const { chooseStartPoint, chooseDestination } = useContext(LocationContext);
    const placeholderText = route.params.placeholderText;
    const goBackToScreen = route.params.goBackTo;

    const handle = (location) => {
        if (route.params.title === "destination") {
            chooseDestination(location.titleName);
        } else {
            chooseStartPoint(location.titleName);
        }
        navigation.navigate(Screens.MAP, {
            goBackTo: goBackToScreen,
            coords: {
                latitude: location.latitude,
                longitude: location.longitude,
            },
        });
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBarForm />
            <RoundedSearchBar
                icon={<GoBackIcon onPress={() => navigation.pop()} />}
                placeholderText={placeholderText}
                autoFocus={true}
                onChangeText={handleInputText}
            />
            <View style={styles.suggestionBox}>
                <Text style={styles.historyText}>SUGGESTIONS</Text>

                <FlatList
                    data={filteredList}
                    renderItem={({ item }) => {
                        return (
                            <SuggestionRow
                                name={item.titleName}
                                onPress={() => handle(item)}
                            />
                        );
                    }}
                    keyExtractor={(item) => item.id}
                    keyboardShouldPersistTaps="always"
                    onScroll={() => Keyboard.dismiss()}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginTop: 10,
    },
    suggestionBox: {
        height: 750,
        marginVertical: 10,
    },

    historyText: { fontSize: 16, fontWeight: "bold", padding: 10 },
});
