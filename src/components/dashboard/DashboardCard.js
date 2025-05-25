import React, {useEffect, useState} from 'react';
import {Platform, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import colors from '../../assets/colors/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MainStyling from '../../assets/styles/MainStyling';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TotalAmountApi} from '../../apis/amount-apis';

const DashboardCard = ({item}) => {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  const getTotalAmountApi = async () => {
    const details = {};
    TotalAmountApi(details)
      .then(response => {
        console.log('Response show here for AmountApi: ', response);
        setText(response);
        setIsLoading(false);
      })
      .catch(({response}) => {
        console.log(response);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getTotalAmountApi();
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        if (item?.title === 'Company List') {
          navigation.navigate('CompanyList');
        } else if (item?.title === 'Car List') {
          navigation.navigate('CarList', {title: 'Car List'});
        } else if (item?.title === 'Car Purchase') {
          navigation.navigate('CarList', {title: 'Car Purchase'});
        } else if (item?.title === 'Total Selling car') {
          navigation.navigate('CarList', {title: 'Total Selling car'});
        } else if (item?.title === 'Stock Management') {
          navigation.navigate('StockManagement');
        } else {
          navigation.navigate('Invoices');
        }
      }}
      style={[MainStyling.mainContainer, styles.box]}>
      <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
        <Ionicons
          name={item?.icon}
          size={wp('4.5%')}
          color={colors.primary}
          style={[styles.icon]}
        />
      </View>
      <View style={[{minHeight: wp('2%')}]} />
      <Text style={[MainStyling.label, {color: colors.white}]}>
        {item?.title}
      </Text>
      <View style={[{minHeight: wp('1.5%')}]} />

      <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
        <Text style={[MainStyling.subHeading, styles.price]}>
          {item?.title === 'Company List'
            ? text?.total_amount
            : item?.title === 'Car List'
            ? text?.total_cars
            : item?.title === 'Car Purchase'
            ? text?.total_purchased_cars
            : item?.title === 'Total Selling car'
            ? text?.total_sell_cars
            : item?.title === 'Stock Management'
            ? text?.total_amount
            : item?.title === 'Invoice'
            ? text?.total_amount
            : null}
        </Text>
        <Ionicons
          name={'arrow-up-outline'}
          size={wp('3%')}
          color={colors.primary}
        />
        <Text style={[MainStyling.miniText, styles.miniText]}>
          {item?.minitext}
        </Text>
      </View>
      <View style={[{minHeight: wp('0.5%')}]} />
      <Text style={[MainStyling.label]}>{item?.timing}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  box: {
    height: wp('35%'),
    width: wp('25%'),
    borderRadius: 10,
    marginVertical: wp('2.5%'),
    marginHorizontal: wp('1.7%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('4%'),
    ...Platform.select({
      ios: {
        shadowColor: colors.greyBlack,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.7,
      },
      android: {
        elevation: 3,
        backgroundColor: 'transparent',
      },
    }),
  },
  price: {
    flex: 1,
  },
  icon: {
    backgroundColor: colors.priaryOpacity,
    padding: wp('1.8%'),
    borderRadius: 7,
  },
  miniText: {
    color: colors.primary,
  },
});
export default DashboardCard;
