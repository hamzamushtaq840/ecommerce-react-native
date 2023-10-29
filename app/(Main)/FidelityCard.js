import React from 'react'
import { View } from 'react-native'
import Container from '../../components/Generic/Container';
import VStack from '../../components/Generic/VStack';
import Navbar from '../../components/Navbar';
import Content from './../../components/Generic/Content';
import NavigationAction from './../../components/Generic/NavigationAction';
import useLayout from '../../hooks/useLayout';
import { Images } from './../../assets/images'
import { Input, TopNavigation, useStyleSheet, StyleService, Button } from '@ui-kitten/components';
import Text from '../../components/Generic/Text';
import { Image } from 'react-native';
import { useRouter } from 'expo-router';

const FidelityCard = () => {
  const styles = useStyleSheet(themedStyles);
  const router = useRouter()

  return (
    <Container style={{
      paddingBottom: 0,
    }}>
      <TopNavigation
        alignment="start"
        title={<Text >Fidelity Cards</Text>}
        accessoryLeft={<NavigationAction marginRight={20} height={16} width={20} icon="back" onPress={() => { console.log("menu"); }} />}
      />
      <Content contentContainerStyle={styles.content}>
        <Image
          source={Images.fidelity.card}
          style={{ width: 200, height: 116, marginBottom: 64 }}
        />
        <Text style={{ fontSize: 22, fontWeight: 'medium', marginBottom: 16 }}>Don’t have any card</Text>
        <Text style={{ fontSize: 16, fontWeight: 'medium', marginBottom: 16, textAlign: 'center', color: '#959597', width: 300 }}>It’s seems like you don't add any cards.
          Add card easily in few steps!</Text>
        <Button
          status={'primary'}
          // size={'small'}
          style={{ width: '50%', textColor: 'white', alignSelf: 'center', marginTop: 80 }}
          children={'Add New Card'}
          onPress={() => {
            router.push('/NewCard')
          }}
        />
      </Content>
    </Container>
  )
}

export default FidelityCard

const themedStyles = StyleService.create({
  content: {
    flex: 1,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
});