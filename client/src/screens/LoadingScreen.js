import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { StatusBarForm } from "../components/layout/StatusBarForm";
import { Logo } from "../components/Logo";
import Screens from "../constants/Screens";
import { useIsFocused } from "@react-navigation/native";
import colors from "../constants/colors";

export const LoadingScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const isFocused = useIsFocused();

    const handleLoading = () => {
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate(Screens.DRAWER_NAVIGATOR);
        }, 1000);
    };

    useEffect(() => {
        handleLoading();
    }, []);
    return (
        <SafeAreaView>
            <StatusBarForm />
            <View style={styles.logo}>
                <Logo size={1 / 1.5} />
            </View>
            {isLoading ? (
                <ActivityIndicator size="large" color={colors.blue} />
            ) : null}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    logo: {
        marginLeft: 50,
        marginTop: 100,
        marginBottom: 30,
    },
});
