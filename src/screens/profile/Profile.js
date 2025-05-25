import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import MainStyling from '../../assets/styles/MainStyling';
import Headers from '../../components/Headers';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[MainStyling.mainContainer]}>
      <Headers title={'My Profile'} />
      <View style={[MainStyling.screenPadding]}>
        <View style={[MainStyling.alignmentCenter, {marginVertical: wp('5%')}]}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/96/2f/a8/962fa88701dd23546d156bbc5a06de87.jpg',
            }}
            style={styles.image}
          />
          <Text style={[MainStyling.buttonText, {color: colors.black}]}>
            Autumn Philllips
          </Text>
          <Text style={[MainStyling.subHeading, {color: colors.gray}]}>
            eddie_lake@gmail.com
          </Text>
        </View>

        <View style={[MainStyling.dividerTwo]} />

        <View style={[MainStyling.dividerTwo]} />
        <View style={[styles.box]}>
          <View style={[styles.flx]}>
            <Ionicons
              name={'trending-up-sharp'}
              size={wp('4.5%')}
              color={colors.primary}
              style={[styles.icon]}
            />
            <Text
              style={[
                MainStyling.subHeading,
                {marginHorizontal: wp('2.2%'), color: colors.black},
              ]}>
              My account
            </Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Ionicons
                name={'arrow-forward-sharp'}
                size={wp('6%')}
                color={colors.black}
              />
            </View>
          </View>
          <View style={[MainStyling.dividerTwo]} />
          <View style={[styles.line]}></View>
          <View style={[MainStyling.dividerTwo]} />
          <View style={[styles.flx]}>
            <Ionicons
              name={'receipt-outline'}
              size={wp('4.5%')}
              color={colors.primary}
              style={[styles.icon]}
            />
            <Text
              style={[
                MainStyling.subHeading,
                {marginHorizontal: wp('2.2%'), color: colors.black},
              ]}>
              Orders
            </Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Ionicons
                name={'arrow-forward-sharp'}
                size={wp('6%')}
                color={colors.black}
              />
            </View>
          </View>
        </View>
        <View style={[MainStyling.dividerTwo]} />

        <View style={[MainStyling.dividerTwo]} />
        <View style={[styles.box]}>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('TermCondition');
            }}
            style={[styles.flx]}>
            <Ionicons
              name={'storefront-outline'}
              size={wp('4.5%')}
              color={colors.primary}
              style={[styles.icon]}
            />
            <Text
              style={[
                MainStyling.subHeading,
                {marginHorizontal: wp('2.2%'), color: colors.black},
              ]}>
              Subscription
            </Text>
          </TouchableOpacity>
          <View style={[MainStyling.dividerTwo]} />
          <View style={[styles.line]}></View>
          <View style={[MainStyling.dividerTwo]} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AboutUs');
            }}
            style={[styles.flx]}>
            <Ionicons
              name={'storefront-outline'}
              size={wp('4.5%')}
              color={colors.primary}
              style={[styles.icon]}
            />
            <Text
              style={[
                MainStyling.subHeading,
                {marginHorizontal: wp('2.2%'), color: colors.black},
              ]}>
              About Us
            </Text>
          </TouchableOpacity>
          <View style={[MainStyling.dividerTwo]} />
          <View style={[styles.line]}></View>
          <View style={[MainStyling.dividerTwo]} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={[styles.flx]}>
            <Ionicons
              name={'storefront-outline'}
              size={wp('4.5%')}
              color={colors.primary}
              style={[styles.icon]}
            />
            <Text
              style={[
                MainStyling.subHeading,
                {marginHorizontal: wp('2.2%'), color: colors.black},
              ]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginVertical: wp('3%'),
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
    color: colors.black,
  },
  box: {
    padding: wp('2%'),
    borderRadius: 10,
    backgroundColor: colors.grey_white,
  },
  line: {
    height: wp('0.3%'),
    backgroundColor: colors.light_grey,
    borderRadius: 5,
  },
});
export default Profile;
