import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../redux/store/actions/transactionAction';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ExpenseItem(props) {
    const dispatch = useDispatch();

    return (
        <View style={[styles.contentWrapper, styles.shadowProp]}>
            <View style={styles.leftWrapper}>
                <AntDesign name="close" size={18}
                fillColor='lightgrey'
                onPress={() => {
                    dispatch(deleteTransaction(props.id));
                }}
                style={{marginRight: 5, opacity: 0.4}}
                />
                <Text style={{
                    fontSize: 15,
                    fontWeight: '600'
                }}>{props.title}</Text>
            </View>
            <View style={styles.rightWrapper}>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: props.price < 0 ? 'red' : 'green',
                }}>{props.price > 0 ? `+$${props.price}` : `-$${Math.abs(props.price)}`}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentWrapper:{
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        padding: 15,
        borderBottomWidth: .5,
        borderBottomColor: '#cccccc',
        borderLeftWidth: .5,
        borderLeftColor: "#cccccc",
        borderRadius: 15,
    },
    leftWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightWrapper:{
        
    },
    
})