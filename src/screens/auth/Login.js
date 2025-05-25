import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MainStyling from '../../assets/styles/MainStyling';
import colors from '../../assets/colors/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Headers from '../../components/Headers';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('saaa44maannnn@gmail.com');
  const [password, setPassword] = useState('passwordA123@');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onLoginPress = () => {
    navigation.navigate('dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.foreground}>
        <SafeAreaView />
        <StatusBar barStyle="light-content" />
        <Headers opacity={'low'} />
        <View style={[MainStyling.divider]} />
        <View style={[MainStyling.divider]} />
        <View style={[MainStyling.divider]} />

        <Text style={[MainStyling.titleHeading, styles.welcomeText]}>
          Welcome to Ecom
        </Text>

        <Text style={[MainStyling.label, {textAlign: 'center'}]}>
          Please log in your account
        </Text>

        <View style={[MainStyling.screenPadding, {flex: 0.7}]}>
          <Input
            value={email}
            placeholder={'Email'}
            iconName={'mail'}
            onChangeText={value => setEmail(value)}
            onIconPress={() => console.log('OK')}
          />
          <Input
            value={password}
            secureTextEntry={secureTextEntry}
            placeholder="Enter Password"
            iconName={secureTextEntry ? 'eye-off' : 'eye'}
            onChangeText={value => setPassword(value)}
            onIconPress={() => setSecureTextEntry(!secureTextEntry)}
          />
          <View style={[MainStyling.dividerTwo]} />

          {errorMessage ? (
            <Text style={[MainStyling.label, styles.errorMessage]}>
              {errorMessage}
            </Text>
          ) : null}
        </View>

        <View style={[MainStyling.screenPadding, {flex: 1}]}>
          {isLoading ? (
            <></>
          ) : (
            <Button
              label={'Log In'}
              labelStyle={[MainStyling.buttonText]}
              onPress={onLoginPress}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  foreground: {
    flex: 1,
    width: '100%',
    zIndex: 1,
    backgroundColor: colors.white,
  },
  welcomeText: {
    textAlign: 'center',
    color: colors.black,
  },
  errorMessage: {
    color: colors.primary,
    marginVertical: wp('1.5%'),
  },
});

export default Login;
