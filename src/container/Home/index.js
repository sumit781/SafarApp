/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EnquiryContainer, HistoryContainer } from '..';
import SafeAreaWrapper from '../../components/SafeAreaWrapper';
import {COLOR_PALATE} from '../../constants'
import LinearGradiantWrapper from '../../components/linearGradiantWrapper';

const TabNavigator=createBottomTabNavigator()

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row',alignItems:'flex-end',backgroundColor:"#4686A2" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={{ flex: 1,borderTopRightRadius:isFocused?16:0,borderTopLeftRadius:isFocused?16:0,justifyContent:'center',alignItems:'center',height:isFocused?60:45,backgroundColor:isFocused?COLOR_PALATE.mainColor:"#FFFF" }}
          >
            <Text style={{ color: isFocused ? "#FFFF" : COLOR_PALATE.mainColor,letterSpacing:2,fontWeight:'bold' }}>
              {label.toUpperCase()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
    )
  }

 function Home() {
  return (
    <TabNavigator.Navigator screenOptions={{
      headerShown:false
    }}
    tabBar={CustomTabBar} >
      <TabNavigator.Screen name='Enquiry' component={LinearGradiantWrapper(EnquiryContainer)} />
      <TabNavigator.Screen name='Requests' component={LinearGradiantWrapper(HistoryContainer)} />
    </TabNavigator.Navigator>

  );
}

export default Home;