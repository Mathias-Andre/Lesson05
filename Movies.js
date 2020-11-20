import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native';
import {ScrollView} from 'react-native';

const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

const movie = {title: 'Doctor Sleep', year: '2019'};

class Movie extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>{this.props.title}</Text>
        <Text>{this.props.year}</Text>
        <Image source={this.props.poster} />
      </ScrollView>
    );
  }
}

const MovieList = () => {
  return MOVIES_DATA.map((movie) => {
    return (
      <Movie title={movie.title} year={movie.year} poster={movie.poster} />
    );
  });
};

export default MovieList;
