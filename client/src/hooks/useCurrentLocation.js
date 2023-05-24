import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Accuracy } from "expo-location";

export const useCurrentLocation = () => {
    const [location, setLocation] = useState(null);
    useEffect(() => {
        const startWaitching = async () => {
            try {
                const { status } =
                    await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    return;
                }

                let location = await Location.getCurrentPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                });

                setLocation(location);
            } catch (err) {
                throw new Error(err.message);
            }
        };
        startWaitching();

        return startWaitching;
    }, []);

    return location;
};
