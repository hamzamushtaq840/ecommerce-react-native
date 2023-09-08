import { View, Text, TextInput } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";

import { COLORS, FONTS } from "../constants";

export default function InputField({
    contaynerStyle,
    inputStyle,
    placeholder,
    icon,
    secureTextEntry,
    title,
    onChangeText,
    value,
    inputStyles
}) {
    return (
            <View
                style={{
                    width: "100%",
                    height: 56,
                    backgroundColor: '#fff',
                    borderRadius: 16,
                    paddingLeft: 20,
                    justifyContent: "center",
                    paddingVertical: 8,
                    flexDirection: "row",
                    alignItems: "center",
                      ...inputStyles
                }}
            >
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <TextInput
                        style={{ paddingRight: 20, width: "100%" }}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        onChangeText={onChangeText}
                        defaultValue={value}
                    />
                </View>
                {icon && icon}
            </View>
    );
}
