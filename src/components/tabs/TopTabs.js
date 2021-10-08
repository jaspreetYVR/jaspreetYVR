import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Movies from '../containers/Movies';
import TvShows from '../containers/TvShows';
import MoviesShowsContainer from '../containers/MoviesShowsContainer';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Movies" component={Movies} />
        <Tab.Screen name="Search" component={MoviesShowsContainer} />
        <Tab.Screen name="TV Shows" component={TvShows} />
      </Tab.Navigator>
  );
}

export default TopTabs;
