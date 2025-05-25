import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {productsList} from '../../apis/products-apis';
import StarRating from '../ratings/Starratings';

export default function ProductGrid() {
  const navigation = useNavigation();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const onProductListFetch = () => {
    productsList()
      .then(response => {
        setProducts(response);
        setLoading(false);
      })
      .catch(error => {
        console.error('Product fetch failed:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    onProductListFetch();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <ScrollView>
      <Text style={styles.title}>Products</Text>
      <View style={styles.grid}>
        {products?.map(product => (
          <TouchableOpacity
            key={product.id}
            onPress={() => navigation.navigate('ProductDetail', {product})}
            style={styles.card}>
            <Image source={{uri: product.image}} style={styles.image} />
            <Text style={styles.name} numberOfLines={1}>
              {product.title}
            </Text>
            <Text style={styles.price}>{product.price}</Text>

            <StarRating rating={3.5} />
            <Text style={styles.description} numberOfLines={1}>
              {product.description}
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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
    fontSize: wp(3.5),
    fontWeight: 'bold',
    marginTop: hp(1),
    textAlign: 'center',
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
