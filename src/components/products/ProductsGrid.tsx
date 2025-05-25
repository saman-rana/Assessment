import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import StarRating from '../ratings/Starratings';

const products = [
  {
    id: '1',
    name: 'Red shirt',
    description: 'Comfortable cotton shirt',
    price: '$25',
    image:
      'https://i.pinimg.com/736x/82/e1/9b/82e19b533c65b871af5db863b23389a3.jpg',
  },
  {
    id: '2',
    name: 'Sneakers',
    description: 'Running shoes for all weather',
    price: '$60',
    image:
      'https://i.pinimg.com/736x/d2/5d/f2/d25df245b230952f0ff082a210af07a5.jpg',
  },
  {
    id: '3',
    name: 'Headphones',
    description: 'Noise cancelling headphones',
    price: '$90',
    image:
      'https://i.pinimg.com/736x/74/41/a1/7441a1926da737a205e711d6e54e5eab.jpg',
  },
  {
    id: '4',
    name: 'Coffee Maker',
    description: 'Brew fresh coffee every morning',
    price: '$40',
    image:
      'https://i.pinimg.com/736x/1a/3a/b0/1a3ab03ad96dda7c7ec93970ba716a2b.jpg',
  },
];

export default function ProductGrid() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.title}>Products</Text>
      <View style={styles.grid}>
        {products.map(product => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', {product})}>
            <View key={product.id} style={styles.card}>
              <Image source={{uri: product.image}} style={styles.image} />
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.price}>{product.price}</Text>

              <StarRating rating={3.5} />
              <Text style={styles.description}>{product.description}</Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginTop: hp(2),
    marginBottom: hp(1),
    paddingHorizontal: wp(3),
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: wp(2),
  },
  card: {
    width: wp('40%'),
    backgroundColor: '#f9f9f9',
    borderRadius: wp(3),
    padding: wp('1%'),
    marginBottom: hp('2%'),
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    width: wp('27%'),
    height: wp('27%'),
    borderRadius: wp(2),
  },
  name: {
    fontSize: wp(4),
    fontWeight: 'bold',
    marginTop: hp(1),
  },
  description: {
    fontSize: wp(3),
    color: '#666',
    textAlign: 'center',
  },
  price: {
    fontSize: wp(3.8),
    fontWeight: 'bold',
    marginVertical: hp(0.5),
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(2),
    marginTop: hp(1),
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp(3.5),
  },
});
