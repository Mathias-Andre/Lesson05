import React from 'react';
import {View, Text} from 'react-native';
import Movies from './Movies.js';
import {ScrollView} from 'react-native';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>"Lesson 05 Exercises</Text>
      <Movies />
    </ScrollView>
  );
};

export default App;
