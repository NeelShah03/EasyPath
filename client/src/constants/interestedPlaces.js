import {
    FontAwesome,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import colors from "./colors";
import buildings from "./buildings";
const styles = StyleSheet.create({
    icon: {
        fontSize: 40,
        color: colors.blue,
    },
});
export default [
    {
        icon: <MaterialIcons name="house" style={styles.icon} />,
        title: "Student Central",
        latitude: -34.40177296,
        longitude: 150.878431,
    },
    {
        icon: <Ionicons name="library" style={styles.icon} />,
        title: "Library",
        latitude: -34.41177296,
        longitude: 150.878431,
    },
    {
        icon: <FontAwesome name="bank" style={styles.icon} />,
        title: "Bank",
        latitude: -34.42177296,
        longitude: 150.878431,
    },
    {
        icon: <MaterialIcons name="food-bank" style={styles.icon} />,
        title: "Food Court",
        latitude: -34.43177296,
        longitude: 150.878431,
    },
    {
        icon: <FontAwesome5 name="coffee" style={styles.icon} />,
        title: "Coffee Shop",
        latitude: -34.44177296,
        longitude: 150.878431,
    },
    {
        icon: <MaterialCommunityIcons name="bus-stop" style={styles.icon} />,
        title: "Bus Stop",
        latitude: -34.42177296,
        longitude: 150.878431,
    },
    {
        icon: <FontAwesome5 name="parking" style={styles.icon} />,
        title: "Parking",
        latitude: -34.45177296,
        longitude: 150.878431,
    },
    {
        icon: <MaterialIcons name="security" style={styles.icon} />,
        title: "Security",
        latitude: -34.46177296,
        longitude: 150.878431,
    },
    {
        icon: <FontAwesome5 name="table-tennis" style={styles.icon} />,
        title: "Sport",
        latitude: -34.47177296,
        longitude: 150.878431,
    },
    {
        icon: <MaterialIcons name="local-movies" style={styles.icon} />,
        title: "Uni Movies",
        latitude: -34.49177296,
        longitude: 150.878431,
    },
];
