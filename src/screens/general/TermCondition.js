import React from 'react';
import {Text, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import MainStyling from '../../assets/styles/MainStyling';
import Headers from '../../components/Headers';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';

const TermCondition = () => {
  return (
    <SafeAreaView style={[MainStyling.mainContainer]}>
      <Headers iconLeft={true} title={'Term and Conditions'} />
      <ScrollView style={[MainStyling.screenPadding]}>
        <View style={[MainStyling.dividerTwo]} />

        <Text style={[MainStyling.buttonText, styles.price]}>Ecom</Text>
        <Text
          style={[
            MainStyling.subHeading,
            {color: colors.gray, marginVertical: wp('2%')},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Text
          style={[
            MainStyling.subHeading,
            {color: colors.gray, marginVertical: wp('2%')},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Text
          style={[
            MainStyling.subHeading,
            {color: colors.gray, marginVertical: wp('2%')},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Text
          style={[
            MainStyling.subHeading,
            {color: colors.gray, marginVertical: wp('2%')},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Text
          style={[
            MainStyling.subHeading,
            {color: colors.gray, marginVertical: wp('2%')},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Text
          style={[
            MainStyling.subHeading,
            {color: colors.gray, marginVertical: wp('2%')},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Text
          style={[
            MainStyling.subHeading,
            {color: colors.gray, marginVertical: wp('2%')},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Text
          style={[
            MainStyling.subHeading,
            {color: colors.gray, marginVertical: wp('2%')},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Text
          style={[
            MainStyling.subHeading,
            {color: colors.gray, marginVertical: wp('2%')},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Text
          style={[
            MainStyling.subHeading,
            {color: colors.gray, marginVertical: wp('2%')},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Text
          style={[
            MainStyling.subHeading,
            {color: colors.gray, marginVertical: wp('2%')},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {},
  editButtonView: {
    paddingHorizontal: wp('25%'),
  },
  image: {
    height: wp('25%'),
    width: wp('25%'),
    borderRadius: 300,
  },
  flx: {
    flexDirection: 'row',
    padding: wp('2%'),
    alignItems: 'center',
  },
  icon: {
    backgroundColor: colors.priaryOpacity,
    padding: wp('2.2%'),
    borderRadius: 7,
  },
  miniText: {
    paddingHorizontal: wp('1.8'),
    paddingVertical: wp('0.5%'),
    borderRadius: 300,
    backgroundColor: colors.green,
    color: colors.white,
  },
  box: {
    backgroundColor: colors.grey_white,
    padding: wp('2%'),
    borderRadius: 10,
  },
  line: {
    height: wp('0.3%'),
    backgroundColor: colors.light_grey,
    borderRadius: 5,
  },
});
export default TermCondition;
