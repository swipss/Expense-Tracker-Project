import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import ExpenseItem from '../components/HomeComponents/ExpenseItem';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/HomeComponents/Card';
import NoTransactions from '../components/HomeComponents/NoTransactions';
import BottomTabs from '../components/HomeComponents/BottomTabs';
import AddTransactionButton from '../components/HomeComponents/AddTransactionButton';


export default function Home({ navigation }) {
    const {transactions} = useSelector((state) => state.transactions)

    return (
        <View style={{
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 40,
            
        }}>
            <Card navigation={navigation} />
            
            <View style={{flex: 1, justifyContent: 'center'}}>
                {
                    transactions.length > 0 ? (
                        <FlatList data={transactions}
                        renderItem={({item}) => (
                            <ExpenseItem title={item.title} price={item.price} id={item.id} category={item.category}/>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        />

                    ) : <NoTransactions />
                }
                {/* <AddTransactionButton navigation={navigation}/> */}
            </View>
            {/* <BottomTabs navigation={navigation}/> */}
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
