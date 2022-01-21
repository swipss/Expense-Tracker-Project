import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function BottomTabs({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
            <MaterialIcons name="category" size={30} />
        </TouchableOpacity>
    )
}
