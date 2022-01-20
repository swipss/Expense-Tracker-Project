import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import ExpenseItem from '../components/ExpenseItem';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import NoTransactions from '../components/NoTransactions';


export default function Home({ navigation }) {
    const {transactions} = useSelector((state) => state.transactions)

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 50,
        }}>
            <Card navigation={navigation} />
            
            <View style={{flex: 1, justifyContent: 'center',}}>
                {
                    transactions.length > 0 ? (
                        <FlatList data={transactions}
                        renderItem={({item}) => (
                            <ExpenseItem title={item.title} price={item.price} id={item.id}/>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        />

                    ) : <NoTransactions />
                }

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: 190,
        borderRadius: 15,
        flexDirection: 'row',
        padding: 22,
    },
})
