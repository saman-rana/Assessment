import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';

const categories = [
  {
    id: '1',
    name: 'Electronics',
    icon: 'https://img.icons8.com/fluency/48/000000/electronics.png',
  },
  {
    id: '2',
    name: 'Clothing',
    icon: 'https://img.icons8.com/color/48/000000/t-shirt.png',
  },
  {
    id: '3',
    name: 'Groceries',
    icon: 'https://img.icons8.com/color/48/000000/shopping-basket.png',
  },
  {
    id: '4',
    name: 'Beauty',
    icon: 'https://img.icons8.com/color/48/000000/lipstick.png',
  },
  {
    id: '5',
    name: 'Books',
    icon: 'https://img.icons8.com/color/48/000000/books.png',
  },
];

export default function Categories() {
  return (
    <View style={{marginVertical: hp('2%')}}>
      <Text style={styles.heading}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: wp(3)}}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{uri: item.icon}} style={styles.icon} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: hp(1),
    paddingHorizontal: wp(3),
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: wp(3),
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    alignItems: 'center',
    marginRight: wp(3),
    marginVertical: wp(2),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: wp(10),
    height: wp(10),
    marginBottom: hp(0.5),
    resizeMode: 'contain',
  },
  name: {
    fontSize: wp(3.5),
    fontWeight: '500',
    textAlign: 'center',
  },
});
