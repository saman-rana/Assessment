import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, View, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/colors/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {createStackNavigator} from '@react-navigation/stack';
import Dasboard from '../screens/dashboard/Dasboard';
import Profile from '../screens/profile/Profile';
import CartScreen from '../screens/Cart/CartScreen';
import TermCondition from '../screens/general/TermCondition';
import AboutUs from '../screens/general/AboutUs';
import ProductDetail from '../screens/products/ProductDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dasboard"
        component={Dasboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function CreateStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermCondition"
        component={TermCondition}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator({route}) {
  const getIcons = (route, focused) => {
    if (route.name === 'Home') {
      return (
        <Ionicons
          name="home-outline"
          size={wp('7%')}
          color={focused ? colors.primary : colors.grey}
        />
      );
    } else if (route.name === 'Tools') {
      return (
        <Ionicons
          name="cart-outline"
          size={wp('8%')}
          color={focused ? colors.primary : colors.grey}
        />
      );
    } else if (route.name === 'Logs') {
      return (
        <FontAwesome
          name="user-circle-o"
          size={wp('7%')}
          color={focused ? colors.primary : colors.grey}
        />
      );
    }
  };

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
      safeAreaInsets={{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      tabBar={({state, navigation}) => {
        return (
          <View
            style={{
              backgroundColor: colors.white,
              flexDirection: 'row',
              paddingHorizontal: Platform.OS === 'android' ? 17 : 17,
              paddingVertical: Platform.OS === 'android' ? 10 : 11,
              justifyContent: 'space-between',
            }}>
            {state?.routes?.map((route, index) => {
              const isFocused = state.index === index;
              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate({
                    name: route.name,
                    merge: true,
                    ...route.params,
                  });
                }
              };

              return (
                <Pressable
                  key={index}
                  onPress={onPress}
                  style={{
                    width: wp('16%'),
                    height: wp('15%'),
                    borderRadius: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {getIcons(route, isFocused)}
                </Pressable>
              );
            })}
          </View>
        );
      }}>
      <Tab.Screen name={'Home'} component={HomeStackNavigator} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Tools',
          title: '',
          headerShown: false,
        }}
        name="Tools"
        component={CreateStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Logs',
          title: '',
          headerShown: false,
        }}
        name="Logs"
        component={ProfileStackNavigator}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
