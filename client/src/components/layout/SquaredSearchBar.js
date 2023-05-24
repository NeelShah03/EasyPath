import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import colors from "../../constants/colors";
import { SearchIcon } from "./Icons";

export const SquaredSearchBar = ({ handleOnPress, searchValue }) => {
    return (
        <TouchableOpacity onPress={handleOnPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{searchValue}</Text>
                <SearchIcon size="small" />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: colors.white,
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Set elevation to make it work on Android
    },
    text: {
        fontSize: 16,
        width: "90%",
    },
});
