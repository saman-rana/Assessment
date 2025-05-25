import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const data = [
  {
    image:
      'https://i.pinimg.com/736x/1a/3a/b0/1a3ab03ad96dda7c7ec93970ba716a2b.jpg',
    title: 'Summer Sale!',
    description: 'Up to 50% off on all clothing',
  },
  {
    image:
      'https://i.pinimg.com/736x/d2/5d/f2/d25df245b230952f0ff082a210af07a5.jpg',
    title: 'New Arrivals',
    description: 'Check out the latest fashion trends',
  },
  {
    image:
      'https://via.placeholder.com/400x200/7fff7f/333333?text=Free+Shipping',
    title: 'Free Shipping',
    description: 'On orders above $100',
  },
];

export default function CarouselSlider() {
  return (
    <View style={{marginTop: hp(1)}}>
      <Carousel
        loop
        autoPlay
        autoPlayInterval={2500}
        width={wp(100)}
        height={hp(25)}
        data={data}
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={{snapDirection: 'left'}}
        renderItem={({item}) => (
          <ImageBackground
            source={{uri: item.image}}
            style={styles.background}
            imageStyle={styles.imageStyle}>
            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: wp(95),
    height: '100%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageStyle: {
    borderRadius: wp(3),
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: wp(3),
  },
  title: {
    color: '#fff',
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  description: {
    color: '#f0f0f0',
    fontSize: wp(3.5),
    marginTop: hp(0.5),
  },
});
