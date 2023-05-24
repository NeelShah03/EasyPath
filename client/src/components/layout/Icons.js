import React from "react";
import { StyleSheet, View } from "react-native";
import {
    Entypo,
    Ionicons,
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
    MaterialIcons,
    Octicons,
} from "@expo/vector-icons";
import colors from "../../constants/colors";
export const MenuIcon = () => {
    return <Entypo name="menu" size={35} color={colors.white} />;
};

export const GoBackIcon = ({ onPress }) => {
    return (
        <Ionicons
            name="md-chevron-back"
            color={colors.blue}
            size={35}
            onPress={onPress}
        />
    );
};
export const LocationIcon = () => {
    return <Ionicons name="location" size={"35%"} color={colors.blue} />;
};
export const SearchIcon = ({ size }) => {
    return (
        <AntDesign
            name="search1"
            color={colors.blue}
            size={size === "small" ? 20 : 25}
        />
    );
};
export const ForwardIcon = () => {
    return <MaterialCommunityIcons name="arrow-top-left" size={25} />;
};
export const SettingIcon = (size, color) => {
    return <AntDesign name="setting" size={size} color={color} />;
};
export const HomeIcon = (size, color) => {
    return <FontAwesome name="home" size={size} color={color} />;
};
export const RecommendIcon = (size, color) => {
    return <MaterialIcons name="recommend" size={size} color={color} />;
};
export const ClockIcon = () => {
    return (
        <View style={styles.clock}>
            <MaterialCommunityIcons
                name="clock-time-five-outline"
                size={25}
                color={colors.blue}
            />
        </View>
    );
};
export const MapScreenIcon = () => {
    return (
        <View style={styles.startPointIcon}>
            <View
                style={{
                    backgroundColor: "#ADD8E6",
                    borderRadius: 50,
                    padding: 2,
                    marginTop: 5,
                }}
            >
                <Octicons
                    name="dot-fill"
                    size={25}
                    color={colors.seaBLue}
                    style={{ marginLeft: 7 }}
                />
            </View>

            <Entypo
                name="dots-three-vertical"
                size={20}
                color={colors.blue}
                style={{ marginBottom: 3, marginLeft: 5, marginTop: 3 }}
            />
            <Ionicons name="location" size={30} color={colors.red} />
        </View>
    );
};
export const SwapIconVertical = ({ onPress }) => {
    return (
        <MaterialIcons
            name="swap-vert"
            size={45}
            color={colors.blue}
            onPress={onPress}
        />
    );
};

export const OriginMarker = () => {
    return (
        <View style={styles.shadow}>
            <View style={styles.biggerBox}>
                <View style={styles.smallerBox}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    clock: {
        backgroundColor: colors.lightgray,
        padding: 5,
        borderRadius: 20,
    },
    biggerBox: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: colors.white,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    smallerBox: {
        backgroundColor: colors.seaBLue,
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    shadow: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: "rgba(179, 219, 230,0.5)",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "rgba(179, 219, 230,1)",
    },
});
