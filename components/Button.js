import { View, Text, TouchableOpacity, Image, Animated, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, FONTS } from "../constants";
import Loading from "../svg/Loading";

export default function Button({ title, containerStyle, onPress, disabled = false, isLoading }) {

    const width=Dimensions.get("window").width

    return (
        <View style={{ width, paddingHorizontal:20 }}>
            <TouchableOpacity
                style={disabled ? {
                    width: "100%",
                    height: 60,
                    backgroundColor: '#00000080',
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    ...containerStyle,
                } :
                    {
                        width: "100%",
                        height: 60,
                        backgroundColor: "#000",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        ...containerStyle,
                    }
                }
                disabled={disabled}
                onPress={onPress}
            >
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 18,
                        textTransform: "capitalize",
                    }}
                >
                    {isLoading ? <Loading /> : title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
