import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Pie from './charts/Pie/Pie';

const App = () => {
  const widthAndHeight = 300;
  const series = [20, 20, 20, 30, 10];
  const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00'];
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Basic</Text>
        <Pie
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          onPress={index => {
            console.log(index);
          }}
        />
        <Text style={styles.title}>Doughnut</Text>
        <Pie
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.45}
          coverFill={'#FFF'}
          onPress={index => {
            console.log(index);
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});

export default App;
