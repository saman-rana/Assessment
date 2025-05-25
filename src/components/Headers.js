import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import colors from '../assets/colors/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function Header({title}) {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Text style={styles.headerText}>{title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: wp('5%'),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: colors.black,
    fontSize: wp('6%'),
    fontWeight: 'bold',
  },
});
