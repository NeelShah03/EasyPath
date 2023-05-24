import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React from "react";
import { SearchIcon } from "./Icons";
import colors from "../../constants/colors";

export const RoundedSearchBar = ({
    icon,
    placeholderText,
    onPress,
    autoFocus,
    onChangeText,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            {icon}
            <TextInput
                placeholder={placeholderText}
                onFocus={onPress}
                style={styles.text}
                autoFocus={autoFocus}
                autoCorrect={false}
                onChangeText={(value) => onChangeText(value)}
            />
            <SearchIcon />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 9,
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 5,
        alignItems: "center",
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
        fontSize: 18,
        flex: 1,
        marginLeft: 10,
        color: colors.blue,
    },
});
