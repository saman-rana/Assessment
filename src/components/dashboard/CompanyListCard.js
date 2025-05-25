import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MainStyling from '../../assets/styles/MainStyling';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/colors/colors';

const CompanyListCard = ({item}) => {
  const Navigation = useNavigation();
  return (
    <View style={[MainStyling.mainContainer, styles.container]}>
      <TouchableOpacity
        onPress={() => {
          Navigation.navigate('CompanyDetails');
        }}
        style={[styles.card]}>
        <Image source={item?.companyImage} style={styles?.image} />
        <View style={[styles.textView]}>
          <Text style={[MainStyling.subHeading, {color: colors.white}]}>
            {item?.title}
          </Text>
          <Text style={[MainStyling.paragraph, {color: colors.white}]}>
            Total cars: {item?.description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: wp('2%'),
    padding: wp('3%'),
    borderRadius: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: wp('11%'),
    width: wp('11%'),
    borderRadius: 300,
  },
  textView: {
    marginLeft: wp('2%'),
  },
});
export default CompanyListCard;
