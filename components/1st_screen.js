import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, SafeAreaView, Alert } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

class Screen1 extends Component {
  render() {
    const space = `
    `;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>{space}</Text>
          <View style={styles.head}>
            <AntDesign name="left" size={24} color="black" style={{ flex: 1 }} />
            <AntDesign name="appstore1" size={24} color="black" />
          </View>
          <View style={styles.avatarProp}>
            <Image
              source={require('../assets/ROG_LOGO_VN.jpg')}
              style={styles.imgProp}
              resizeMode="cover" />
            <View style={styles.infoProp}>
              <Text style={styles.nameProp}>Vu Hung</Text>
              <Text style={styles.workProp}>Programer</Text>
              <View style={styles.btnFS}>
                <View style={styles.followBtn}>
                  <Text style={styles.fTxt} onPress={() => Alert.alert('Notice', 'Followed')}>Follow</Text>
                </View>
                <View style={styles.sendBtn}>
                  <MaterialIcons name="send" size={24} color="white" onPress={() => Alert.alert('Notice', 'Sended')} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.adInfoContainer}>
            <View style={styles.adContent}>
              <Text style={styles.numContent}>600</Text>
              <Text style={styles.descibeInfo}>Photos</Text>
            </View>
            <View style={styles.adContent}>
              <Text style={styles.numContent}>600K</Text>
              <Text style={styles.descibeInfo}>Follower</Text>
            </View>
            <View style={styles.adContent}>
              <Text style={styles.numContent}>600</Text>
              <Text style={styles.descibeInfo}>Following</Text>
            </View>
          </View>
          <View>
            <ScrollView
              contentContainerStyle={
                {
                  flexDirection: "row",
                  marginVertical: 30,
                  justifyContent: "center",
                }
              } >
              <View style={{ flexDirection: "column" }}>
                {imgData.slice(0, centerImgData).map((item, index) => {
                  return <Image source={item.imgSrc} style={styles.imgSlice} key={index} />
                })}
              </View>
              <View style={{ flexDirection: "column" }}>
                {imgData.slice(centerImgData).map((item, index) => {
                  return <Image source={item.imgSrc} style={styles.imgSlice} key={index} />
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const imgData = [
  { id: 1, imgSrc: require('../assets/Cyberscape_1920x1080.jpg') },
  { id: 2, imgSrc: require('../assets/Cybertext_2560x1440.png') },
  { id: 3, imgSrc: require('../assets/GX_1920x1080.jpg') },
  { id: 4, imgSrc: require('../assets/Stealth_3840x2160.jpg') },
  { id: 5, imgSrc: require('../assets/Eiffel.jpg') },
  { id: 6, imgSrc: require('../assets/Full-flower.jpg') }
];

const centerImgData = Math.floor(imgData.length / 2);
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  head: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  avatarProp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },
  infoProp: {
    marginLeft: 15
  },
  imgProp: {
    width: 110,
    height: 110,
    borderRadius: 55
  },
  nameProp: {
    marginLeft: 12,
    fontSize: 30,
    fontWeight: "bold"
  },
  workProp: {
    marginLeft: 15,
    fontSize: 15,
    color: "grey"
  },
  btnFS: {
    flexDirection: "row",
    marginLeft: 12,
    marginTop: 20
  },
  followBtn: {
    backgroundColor: "rgb(71,113,246)",
    borderRadius: 20,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  sendBtn: {
    marginLeft: 15,
    backgroundColor: "rgb(120,213,250)",
    width: 60,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  fTxt: {
    color: "white"
  },
  adInfoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  adContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  descibeInfo: {
    color: "grey",
    marginTop: 5
  },
  numContent: {
    fontSize: 24,
    fontWeight: "bold",
  },
  imgSlice: {
    height: 160,
    width: 160,
    borderRadius: 10,
    margin: 10
  }
});

export default Screen1