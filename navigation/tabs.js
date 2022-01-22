import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Entypo from 'react-native-vector-icons/Entypo'

import Home from "../screens/Home";
import Categories from "../screens/Categories";
import AddTransaction from "../components/HomeComponents/AddTransaction";


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,

    }}
    onPress={onPress}>
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#FAAD3D',
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Entypo name="plus" size={35} color={'white'}/>
        </View>
    </TouchableOpacity>
)

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute',
            // bottom: 25,
            // left: 20,
            // right: 20,
            elevation: 0,
            backgrounColor: '#fff',
            borderRadius: 15,
            height: 90,
            ...styles.shadow
        }
    }}>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({focused}) => (
                <View style={{ alignItems: 'center', justifyContent: "center", top: Platform.OS === 'ios' ? 10 : 0}}>
                    <Image source={require('../assets/icons/home.png')} resizeMode="contain" style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#FAAD3D' : '#748c94'
                    }}/>
                        
                </View>
            ),
            
        }}/>
        <Tab.Screen name='Add Transaction' component={AddTransaction} options={{
            tabBarIcon: ({focused}) => (
                <Image source={require('../assets/icons/home.png')} resizeMode="contain" style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#FAAD3D' : '#748c94'
                }}/>
            ),
            tabBarButton: (props) => (<CustomTabBarButton {...props} />)
        }} />
        <Tab.Screen name="Categories" component={Categories} options={{
            tabBarIcon: ({focused}) => (
                <View style={{ alignItems: 'center', justifyContent: "center", top: Platform.OS === 'ios' ? 10 : 0}}>
                    <Image source={require('../assets/icons/categories.png')} resizeMode="contain" style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#FAAD3D' : '#748c94'
                    }}/>
                    
                </View>
            ),
        }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})