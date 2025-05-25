import React from 'react';
import {Text, Pressable, StyleSheet, SafeAreaView} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../assets/colors/colors';

const Button = ({
  buttonStyle,
  label,
  labelStyle,
  onPress,
  variant,
  icon,
  outerStyle,
}) => {
  return (
    <>
      {variant === 'outline' ? (
        <SafeAreaView style={[{...outerStyle}]}>
          <Pressable
            onPress={() => {
              onPress();
            }}
            style={[
              Styles.button,
              variant === 'outline' && Styles.outlineButton,
              {backgroundColor: colors.white, ...buttonStyle},
            ]}>
            <Text
              style={[
                {
                  textAlign: 'center',
                  color: colors.primary,
                  fontWeight: '600',
                  fontSize: wp('3.8%'),
                  ...labelStyle,
                },
              ]}>
              {label}
            </Text>
          </Pressable>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={[{...outerStyle}]}>
          <Pressable
            onPress={() => {
              onPress();
            }}
            style={[
              Styles.button,
              {...buttonStyle, backgroundColor: colors.primary},
            ]}>
            <Text
              style={[
                ...labelStyle,

                {
                  textAlign: 'center',
                  color: colors.white,
                  fontWeight: '600',
                  fontSize: wp('3.8%'),
                },
              ]}>
              {label}
            </Text>
          </Pressable>
        </SafeAreaView>
      )}
    </>
  );
};

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 0.5,
    borderRadius: '50',
  },
  shadowOpacity: 0.15,
  shadowRadius: 3.84,
};

const Styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    height: wp('11.5%'),
    borderRadius: 8,
    marginVertical: wp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
      },
      android: {
        elevation: 3,
        backgroundColor: colors.grey_white,
      },
    }),
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
