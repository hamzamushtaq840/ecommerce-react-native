import { Input, StyleService, TopNavigation, useStyleSheet } from '@ui-kitten/components'
import React from 'react'
import { FlatList, Image } from 'react-native'
import Navbar from '../../components/Navbar'
import Container from '../../components/generic/Container'
import Text from '../../components/generic/Text'
import VStack from '../../components/generic/VStack'
import useLayout from '../../hooks/useLayout'
import { Images } from './../../assets/images'
import Content from './../../components/generic/Content'
import NavigationAction from './../../components/generic/NavigationAction'
import TabBarScrollable from './../../elements/TabBarScrollable'
import ProductItem from '../../components/Home/ProductItem'
import { View } from 'react-native'


export const data_products = [
  {
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    name: 'Taquito Cheese',
    amount: 8.99,
    rate: 3,
  },
  {
    image:
      'https://images.unsplash.com/photo-1595348020949-87cdfbb44174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    name: 'Chalupa Supreme',
    amount: 5.22,
    rate: 4,
  },
  {
    image:
      'https://images.unsplash.com/photo-1596357395217-80de13130e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    name: 'Chalupa Supreme',
    amount: 5.22,
    rate: 4,
  },
  {
    image:
      'https://user-images.githubusercontent.com/42206067/227762650-e4073f34-08f7-4ebd-9d15-a20c9edfb88f.png',
    name: 'Taquito Cheese',
    amount: 8.99,
    rate: 3,
  },
  {
    image:
      'https://user-images.githubusercontent.com/42206067/227762652-82737b9b-afc3-4820-8a9c-2997c668170f.png',
    name: 'Chalupa Supreme',
    amount: 5.22,
    rate: 4,
  },
  {
    image:
      'https://user-images.githubusercontent.com/42206067/227762650-e4073f34-08f7-4ebd-9d15-a20c9edfb88f.png',
    name: 'Taquito Cheese',
    amount: 8.99,
    rate: 3,
  },
];

const Home = () => {
  const { width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [selected, setSelected] = React.useState(0);

  const renderProduct = React.useCallback(({ item }) => {
    return <ProductItem item={item} style={styles.itemProduct} />;
  }, []);

  return (
    <Container style={{
      flex: 1,
      paddingBottom: 0,
    }}>
      <TopNavigation
        alignment="center"
        title={<Text fontWeight="bold">Home</Text>}
        accessoryLeft={<NavigationAction marginHorizontal={6} height={16} width={20} icon="menu" onPress={() => { console.log("menu"); }} />}
        accessoryRight={<NavigationAction marginHorizontal={6} height={20} width={16} icon="notifications" onPress={() => { console.log("notification"); }} />}
      />
      <Content contentContainerStyle={styles.content}>
        <Text>Cart</Text>
      </Content >
      <Navbar />
    </Container>
  )
}

const DATA = ['Popular', 'Hot Today', 'Near by', 'Favorite', 'Best rate', 'Local'];

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  tabBar: {
    paddingTop: 24,
    paddingRight: 16,
  },
  background: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 0,
  },
  userInput: {
    flex: 1,
    borderRadius: 16,
    marginTop: 10
  },
  passwordInput: {
    flex: 1,
    marginBottom: 24,
  },
  buttonLogin: {
    flex: 1,
    marginRight: 8,
  },
  contentProduct: {
    paddingLeft: 14,
  },
  itemProduct: {
    marginRight: 8,
  },
});


export default Home