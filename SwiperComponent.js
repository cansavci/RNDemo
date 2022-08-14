import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
 
import Swiper from 'react-native-swiper';
import SimpleCard from './SimpleCard';
 
const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  slide: {
    paddingBottom: 150
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold'
  }
})
 
export default function SwiperComponent({datalist}) {
    return (
      <Swiper style={styles.wrapper} horizontal={true}>
        {datalist.map(item => {
         return (
          <View style={styles.slide} key={item.id}>
            <SimpleCard key={item.id} data={item}></SimpleCard>
          </View>
         );
      })}
      </Swiper>
    )
}
 
AppRegistry.registerComponent('RNCourse', () => SwiperComponent)