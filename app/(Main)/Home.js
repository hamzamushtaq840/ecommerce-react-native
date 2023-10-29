import { Input, StyleService, TopNavigation, useStyleSheet } from '@ui-kitten/components'
import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, Image, View } from 'react-native'
import Container from '../../components/Generic/Container'
import Text from '../../components/Generic/Text'
import VStack from '../../components/Generic/VStack'
import ProductItem from '../../components/Home/ProductItem'
import Navbar from '../../components/Navbar'
import { FONTS } from '../../constants/theme'
import useLayout from '../../hooks/useLayout'
import { Images } from './../../assets/images'
import Content from './../../components/Generic/Content'
import NavigationAction from './../../components/Generic/NavigationAction'
import TabBarScrollable from './../../elements/TabBarScrollable'

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
  const router = useRouter()

  const renderProduct = React.useCallback(({ item }) => {
    return <ProductItem onPress={() => router.push('(Main)/SingleProductDetail')} item={item} style={styles.itemProduct} />;
  }, []);

  return (
    <Container style={{
      flex: 1,
      paddingBottom: 0,
    }}>
      <TopNavigation
        titleFontFamily='Roboto-Bold700'
        subtitleFontFamily='Roboto-Bold700'
        alignment="center"
        title={<Text>Home</Text>}
        accessoryLeft={<NavigationAction marginHorizontal={6} height={16} width={20} icon="menu" onPress={() => { console.log("menu"); }} />}
        accessoryRight={<NavigationAction marginHorizontal={6} height={20} width={16} icon="notifications" onPress={() => { console.log("notification"); }} />}
      />
      <Content contentContainerStyle={styles.content}>
        <VStack padder border={10}>
          <Input
            placeholder={'Search'}
            accessoryLeft={<Image source={require('./../../assets/icons/search.png')} marginHorizontal={10} style={{ width: 10, height: 10 }} />}
            style={styles.userInput}
          />
        </VStack>
        <TabBarScrollable tabs={DATA} activeIndex={selected} onChange={setSelected} style={styles.tabBar} />
        <Image
          source={Images.home.banner}
          style={{ width: width, height: 240, alignSelf: 'center', marginTop: 32 }}
        />
        <VStack gap={12} mt={40}>
          <View style={{ paddingHorizontal: 14, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular400' }}>List of deals of the week</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Roboto-Regular400', color: '#959597' }}>See all</Text>
          </View>
          <FlatList
            data={data_products || []}
            renderItem={renderProduct}
            horizontal
            scrollEventThrottle={16}
            keyExtractor={(i, _index) => `${_index}`}
            style={{ flexGrow: 0 }}
            snapToInterval={(width - 104) + 8}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            pagingEnabled={false}
            contentContainerStyle={styles.contentProduct}
          />
        </VStack>
        <VStack gap={12} mt={20}>
          <View style={{ paddingHorizontal: 14, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, fontWeight: 400 }}>Promo by category</Text>
            <Text style={{ fontSize: 14, fontWeight: 400, color: '#959597' }}>See all</Text>
          </View>
          <FlatList
            data={data_products || []}
            renderItem={renderProduct}
            horizontal
            scrollEventThrottle={16}
            keyExtractor={(i, _index) => `${_index}`}
            style={{ flexGrow: 0 }}
            snapToInterval={(width - 104) + 8}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            pagingEnabled={false}
            contentContainerStyle={styles.contentProduct}
          />
        </VStack>
      </Content>
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
    marginTop: 10,
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