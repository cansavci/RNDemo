import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SwiperComponent from './SwiperComponent';
import data from './json/productResults.json';
import SimpleCard from './SimpleCard';
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text>Welcome to my humle app, stranger!</Text>
      </View>
      <View style={styles.component}>
        <SwiperComponent datalist={data}></SwiperComponent>
      </View>
      
      <StatusBar style="auto" />
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 30
  },
  texts: {
    // marginTop:50,
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  component: {
    height:400,
    // width:300,
    alignItems: 'center',
    justifyContent: 'center'
  }
});