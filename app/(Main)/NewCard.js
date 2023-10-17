import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import Container from '../../components/Generic/Container'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button } from '@ui-kitten/components'
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Navbar from '../../components/Navbar';

const NewCard = () => {
  const [hasPermission, setHasPermission] = useState('');
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data)
    setTimeout(() => {
      setScanned(false);
    }, 3000);
  };

  const renderCamera = () => {
    return (
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.camera}
      />
    );
  }

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }


  return (
    <Container style={{ flex: 1 }}>
      {/* <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        // style={StyleSheet.absoluteFillObject}
      /> */}
      {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
      {renderCamera()}

      <Text style={{ alignSelf: 'center' }}>{data}</Text>
      <Navbar style={{ position: 'absolute', bottom: 0 }} />
    </Container>
  )
}

export default NewCard


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
  },
  cameraContainer: {
    height: 580,
    backgroundColor: 'red',
    padding: 10
  },
  camera: {
    height: 580,
    borderRadius: 16,
    aspectRatio: 1 / 2,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});