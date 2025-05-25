import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const initialCart = [
  {
    id: '1',
    name: 'Red Shirt',
    description: 'Comfortable cotton shirt',
    price: 25,
    quantity: 1,
    image:
      'https://i.pinimg.com/736x/82/e1/9b/82e19b533c65b871af5db863b23389a3.jpg',
  },
  {
    id: '2',
    name: 'Sneakers',
    description: 'Running shoes for all weather',
    price: 60,
    quantity: 1,
    image:
      'https://i.pinimg.com/736x/d2/5d/f2/d25df245b230952f0ff082a210af07a5.jpg',
  },
  {
    id: '3',
    name: 'Headphones',
    description: 'Noise cancelling headphones',
    price: 75,
    quantity: 1,
    image:
      'https://i.pinimg.com/736x/74/41/a1/7441a1926da737a205e711d6e54e5eab.jpg',
  },
];

export default function CartScreen() {
  const [cartItems, setCartItems] = useState(initialCart);

  const increaseQty = id => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const decreaseQty = id => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? {...item, quantity: item.quantity - 1} : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>
          ${item.price} × {item.quantity}
        </Text>
        <View style={styles.qtyContainer}>
          <TouchableOpacity
            onPress={() => decreaseQty(item.id)}
            style={styles.qtyButton}>
            <Icon name="remove-circle-outline" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => increaseQty(item.id)}
            style={styles.qtyButton}>
            <Icon name="add-circle-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.scrollContent}
      />

      <View style={styles.bottomBar}>
        <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: hp(12),
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    margin: wp(3),
    borderRadius: wp(3),
    padding: wp(3),
    elevation: 2,
  },
  image: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(2),
  },
  details: {
    flex: 1,
    marginLeft: wp(4),
    justifyContent: 'space-between',
  },
  name: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  description: {
    fontSize: wp(3.5),
    color: '#555',
  },
  price: {
    fontSize: wp(4),
    color: '#000',
    marginVertical: hp(1),
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyButton: {
    paddingHorizontal: wp(2),
  },
  qtyText: {
    fontSize: wp(4),
    marginHorizontal: wp(2),
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: wp(4),
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 10,
  },
  totalText: {
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: wp(6),
    paddingVertical: hp(1.2),
    borderRadius: wp(2),
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp(4),
  },
});
