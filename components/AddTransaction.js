import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Picker, Touchable } from 'react-native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {addTransaction} from '../redux/store/actions/transactionAction';

export default function AddTransaction({navigation}) {
    const [selectedValue, setSelectedValue] = useState("expense");
    // console.log(selectedValue);


    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const onSubmit = () => {
        if (!title || !price) {
            return alert('Please fill out all the fields')
        }

        const id = Math.floor(Math.random() * 600000);

        const newTransaction = {
            id,
            title,
            price: +price,
        }

        dispatch(addTransaction({...newTransaction}));

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Formik
            initialValues={{title: '', price: ''}}
            >
                <View style={styles.formsContainer}>
                    <View style={styles.type}>
                        
                    </View>
                    <Picker
                        mode='dropdown'
                        selectedValue={selectedValue}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label='Expense' value='expense' />
                            <Picker.Item label='Income' value='income' />
                        </Picker>
                    <View style={styles.formWrapper}>
                        <TextInput
                        style={styles.text}
                        placeholder='Title'
                        onChangeText={(title) => setTitle(title)}
                        />
                    </View>
                    
                    <View style={styles.formWrapper}>
                        <TextInput 
                        style={styles.text}
                        placeholder='Amount'
                        onChangeText={(price) => selectedValue == 'expense' ? setPrice(price * -1) : setPrice(price)}
                        keyboardType='numeric'
                        
                        />
                    </View>
                    <TouchableOpacity style={{
                        backgroundColor: 'crimson',
                        padding: 10,
                        paddingVertical: 15,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10,
                    }}
                    onPress={onSubmit}
                    >
                        <Text style={{
                            color: '#fff',
                            fontWeight: '700',
                            fontSize: 15,
                        }}>ADD TRANSACTION</Text>
                    </TouchableOpacity>
                </View>
                
            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    formsContainer: {

    },
    formWrapper: {
        padding: 15,
        backgroundColor: '#fff',
        marginTop: 9,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
    },
    
})
