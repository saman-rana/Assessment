import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';

const StarRating = ({rating, maxStars = 5}) => {
  return (
    <View style={styles.ratingContainer}>
      {[...Array(maxStars)].map((_, i) => {
        const starNumber = i + 1;
        if (rating >= starNumber) {
          // full star
          return (
            <Ionicons key={i} name="star" size={wp('4%')} color="#FFD700" />
          );
        } else if (rating + 0.5 >= starNumber) {
          // half star
          return (
            <Ionicons
              key={i}
              name="star-half"
              size={wp('4%')}
              color="#FFD700"
            />
          );
        } else {
          // empty star
          return (
            <Ionicons
              key={i}
              name="star-outline"
              size={wp('4%')}
              color="#FFD700"
            />
          );
        }
      })}
      <Text style={styles.ratingText}>({rating}/5)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 6,
    fontSize: wp('3%'),
    color: colors.black,
  },
});

export default StarRating;
