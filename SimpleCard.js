import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import { Text, Center, Image } from "native-base";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      marginTop:150,
      height: 400,
    },
    texts: {
      height:150,
      padding: 10,
      color: 'white'
    },
    component: {
      height:350,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height:80,
      margin: 30,
    },
  });

export default function SimpleCard({data}) {
    return (
        <View style={styles.comtainer}>
          <View style={styles.image}>
          <Center>
            <Image source={{ uri: data.image }} alt="Alternate Text" size="xl" />
            </Center>
          </View>
          <View style={styles.texts}>
            <Text>Title:</Text>
            <Text numberOfLines={1}>{data.title}</Text>
            <Text>Price:</Text>
            <Text numberOfLines={1}>{data.price}</Text>
            <Text>Category:</Text>
            <Text numberOfLines={1}>{data.category}</Text>
            <Text>Description: </Text>
            <Text numberOfLines={3}>{data.description}</Text>
            </View>
        </View>
    )
}

AppRegistry.registerComponent('RNCourse', () => SimpleCard)