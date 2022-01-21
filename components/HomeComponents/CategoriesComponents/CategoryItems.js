import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

export default function CategoryItems() {
    const {transactions} = useSelector((state) => state.transactions);

    const categories = transactions.filter(transaction => transaction.category == 'Grocery')
    // console.log(categories)

    const total = categories.map(category => category.price).reduce((prev, curr) => (prev += curr), 0).toFixed(2) * -1;
    // console.log(total)
    
  return (
    <View>
      <CategoryItem category='Entertainment' />
      <CategoryItem category='Grocery' />
      <CategoryItem category='Investment' />
      <CategoryItem category='Clothes & Shoes' />
      <CategoryItem category='Health' />
    </View>

  );
}

const CategoryItem = (props) => {
  const {transactions} = useSelector((state) => state.transactions);

  const categories = transactions.filter(transaction => transaction.category == props.category)
  // console.log(categories)

  const total = categories.map(category => category.price).reduce((prev, curr) => (prev += curr), 0).toFixed(2) * -1;
  // console.log(total)
    
  return (
    <View>
      <Text>{props.category}: {total}</Text>
    </View>
  )
}

