import React from "react";
import { createAppContainer } from 'react-navigation';
import { 
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
      } from 'react-navigation-stack';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SingupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

