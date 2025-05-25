import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';

type GreetingProps = {
  userName: string;
};

export default function Greeting({userName}: GreetingProps) {
  return (
    <View style={styles.greetingContainer}>
      <Text style={styles.greetingText}>Good morning</Text>
      <Text style={styles.userText}>{userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  greetingContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  greetingText: {
    fontSize: wp('5.8'),
    fontWeight: '600',
    color: colors.black,
  },
  userText: {
    fontSize: wp('5'),
    fontWeight: '600',
    color: colors.greyBlack,
  },
});
