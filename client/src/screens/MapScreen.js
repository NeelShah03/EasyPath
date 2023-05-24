import { StyleSheet, SafeAreaView, Text } from "react-native";
import React, { useContext, useRef, useEffect } from "react";

import { StatusBarForm } from "../components/layout/StatusBarForm";
import { Map } from "../components/Map";
import { BottomModalView } from "../components/layout/BottomModalView";
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { MapSearchBox } from "../components/MapSearchBox";

export const MapScreen = () => {
    // ref to the bottom modal sheet
    const bottomSheetModal = useRef(null);

    useEffect(() => {
        bottomSheetModal?.current?.present();
    }, []);

    return (
        // put modalProvider here because only mapScreen can open a bottomSheetModal
        <BottomSheetModalProvider>
            <SafeAreaView>
                <MapSearchBox />

                <Map />
                <BottomSheetModal
                    ref={bottomSheetModal}
                    snapPoints={["21%"]} // the points for the bottom sheet to snap to, which should be soted from bottom to the the top
                    index={0} // initial snap index, usually [-1,0]
                >
                    <BottomModalView />
                </BottomSheetModal>
            </SafeAreaView>
        </BottomSheetModalProvider>
    );
};
