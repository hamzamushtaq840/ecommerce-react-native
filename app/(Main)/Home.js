import { TopNavigation, Input, Icon, useStyleSheet, StyleService } from '@ui-kitten/components'
import Container from '../../components/generic/Container'
import VStack from '../../components/generic/VStack'
import NavigationAction from './../../components/generic/NavigationAction'
import Content from './../../components/generic/Content'
import TabBarScrollable from './../../elements/TabBarScrollable'
import { Image } from 'react-native';
import React from 'react'
import { Images } from './../../assets/images'
import useLayout from '../../hooks/useLayout'
import Navbar from '../../components/Navbar'
import Text from '../../components/generic/Text'

const Home = () => {
  const { width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [selected, setSelected] = React.useState(0);

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
});


export default Home