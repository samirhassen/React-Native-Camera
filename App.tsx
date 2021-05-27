import { StatusBar } from 'expo-status-bar';
import React, { StrictMode, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
const [hasPermission, setPermission] = useState(false);
const [selectedCamera, setSelectedCamera] = useState(Camera.Constants.Type.back);
const [camera, setCamera] = useState(null);

useEffect(() => {
  (async () => { 
    const { granted } = await Camera.requestPermissionsAsync()
    setPermission(granted);
  })();
}, [])

const SnapPic = async () => {
  if (camera) {
    let photo = await camera.takePictureAsync();
    console.log(photo);
  }
}

if(!hasPermission) {
  return <View><Text>If we cant use your camera u cant use us</Text></View>;
}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Camera style={styles.camera} type={selectedCamera} ref={ref => setCamera(ref)}>
        <View style={styles.textContainer}>
          <TouchableOpacity>
            <Text style={styles.snapText} onPress={SnapPic}>Snap Pic</Text>
          </TouchableOpacity>
          </View> 
      </Camera>
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
