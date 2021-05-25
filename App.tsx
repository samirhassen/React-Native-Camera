import { StatusBar } from 'expo-status-bar';
import React, { StrictMode, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';


camera: Camera;

function snapPic(){
  (async () => {
    })();
}

export default function App() {
const [hasPermission, setPermission] = useState(false);
const [selectedCamera, setSelectedCamera] = useState(Camera.Constants.Type.back);

useEffect(() => {
  (async () => { 
    const { granted } = await Camera.requestPermissionsAsync()
    setPermission(granted);
  })();
}, [])

if(!hasPermission) {
  return <View><Text>If we cant use your camera u cant use us</Text></View>;
}

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={selectedCamera}>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={snapPic}>
            <Text style={styles.snapText}>Snap Pic</Text>
          </TouchableOpacity>
          </View> 
      </Camera>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  camera: {
    flex: 1,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 60,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  snapText: {
    color: '#fff',
    fontSize: 14,
    alignSelf: 'center',
  }
});
