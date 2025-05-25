import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../colors/colors';

const MainStyling = StyleSheet.create({
  Navbar: {
    fontSize: wp('5.3%'),
    fontFamily: 'Roboto-Bold',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleHeading: {
    fontSize: wp('6.6%'),
    color: colors.black,
    fontFamily: 'Roboto-Bold',
  },
  heading: {
    fontSize: wp('5.7%'),
    color: colors.black,
    fontFamily: 'Roboto-Bold',
  },
  buttonText: {
    fontSize: wp('4.3%'),
    fontFamily: 'Roboto-Medium',
  },
  header: {
    fontSize: wp('4%'),
    color: colors.black,
    fontFamily: 'Roboto-Medium',
  },
  subHeading: {
    fontSize: wp('3.8%'),
    color: colors.black,
    fontWeight: '600',
  },
  mediumText: {
    fontSize: wp('3.6%'),
    color: colors.black,
    fontFamily: 'Roboto-Regular',
  },
  paragraph: {
    fontSize: wp('3.3%'),
    color: colors.black,
    fontFamily: 'Roboto-Regular',
  },
  label: {
    fontSize: wp('3.2%'),
    color: colors.gray,
    fontFamily: 'Roboto-Medium',
  },
  miniText: {
    fontSize: wp('2.5%'),
    color: colors.black,
    fontFamily: 'Roboto-Medium',
  },
  divider: {
    minHeight: wp('6.8%'),
  },
  dividerTwo: {
    minHeight: wp('3.5%'),
  },

  screenPadding: {
    paddingHorizontal: wp('5%'),
  },
  screenPaddingTwo: {
    paddingHorizontal: wp('5%'),
  },
  alignmentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flxDirection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  shadows: {
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 4,
  },
});

export default MainStyling;
