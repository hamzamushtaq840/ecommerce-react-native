import { TopNavigation, Icon, Button } from '@ui-kitten/components';
import React, { useRef, useState } from 'react';
import { Animated, Image, ScrollView, View } from 'react-native';
import Container from '../../components/Generic/Container';
import Content from '../../components/Generic/Content';
import VStack from '../../components/Generic/VStack';
import HStack from '../../components/Generic/HStack';
import NavigationAction from '../../components/Generic/NavigationAction';
import Text from '../../components/Generic/Text';
import useLayout from '../../hooks/useLayout';
import Svg, { Path } from "react-native-svg";
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';

const SVGComponent = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.94922 14.7081C10.2674 14.7081 10.5388 14.5864 10.7821 14.3337L17.9229 7.03392C18.1287 6.83738 18.2317 6.57534 18.2317 6.27586C18.2317 5.66754 17.7638 5.19025 17.1461 5.19025C16.8466 5.19025 16.5752 5.31191 16.3693 5.5178L9.94922 12.097L3.52913 5.5178C3.31388 5.31191 3.04248 5.19025 2.743 5.19025C2.13468 5.19025 1.66675 5.66754 1.66675 6.27586C1.66675 6.57534 1.76969 6.83738 1.97559 7.03392L9.11629 14.3337C9.35962 14.5864 9.63102 14.6987 9.94922 14.7081Z"
      fill="#ABABAB"
    />
  </Svg>
);

const SingleProductDetail = () => {
  const { width } = useLayout()
  const [maximize, setMaximize] = useState(false);
  const heightAnim = useRef(new Animated.Value(360)).current;
  const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste quaerat atque libero et dolores sed, ipsa incidunt veniam deserunt voluptatum! Neque quam culpa ad! Vitae tempore, natus praesentium quasi dignissimos aut nam quibusdam aperiam placeat voluptatibus qui sapiente quo inventore nemo quos id incidunt quaerat sed itaque repellat, est, consectetur rem. Exercitationem rerum minima aliquid rem aspernatur quasi id, temporibus quod, enim qui expedita debitis provident dolore vero beatae dolorum cum est voluptatibus dignissimos? Minima voluptates sint, vero minus qui doloremque sequi expedita error non dolorum tempore hic itaque facilis maxime natus, dignissimos, labore quia cumque? Saepe, similique explicabo';

  const handlePress = () => {
    if (maximize === false) {
      setMaximize(true);
      Animated.timing(heightAnim, {
        toValue: 480,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
    else {
      setMaximize(false);
      Animated.timing(heightAnim, {
        toValue: 360,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Container style={{ flex: 1, paddingBottom: 0, }}>
      <Content style={{ flex: 1 }}>
        <TopNavigation
          alignment="start"
          title={<Text fontWeight="bold">Promo Details</Text>}
          accessoryLeft={<NavigationAction marginHorizontal={6} height={16} width={20} icon="menu" onPress={() => { console.log("menu"); }} />}
          accessoryRight={<NavigationAction marginHorizontal={6} height={20} width={16} icon="notifications" onPress={() => { console.log("notification"); }} />}
        />
        <Image
          source={{ uri: 'https://justcreative.com/wp-content/uploads/2016/06/Simple-Design-Tips-for-Non-Designers.jpg' }}
          style={{ width: width, height: 412, alignSelf: 'center' }}
        />
      </Content>

      <Animated.View style={[{ position: 'absolute', bottom: 0, width: width, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, backgroundColor: 'white' }, { height: heightAnim }]} >
        <Text style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 8 }}>Grow Your Bussiness</Text>

        <HStack justify='space-between' style={{ width: '100%' }}>
          <VStack>
            <HStack justify='flex-start' gap={8}>
              <Icon name="heart" style={{ width: 24, height: 24 }} color="red" />
              <Text>01.06.2023 - 30.06.2023</Text>
            </HStack>
            <HStack justify='flex-start' gap={8}>
              <Icon name="heart" style={{ width: 24, height: 24 }} color="red" />
              <Text>www.yourwebsitelink.com</Text>
            </HStack>
            <HStack justify='flex-start' gap={8}>
              <Icon name="heart" style={{ width: 24, height: 24 }} color="red" />
              <Text>070 000 0000</Text>
            </HStack>
            <HStack justify='flex-start' gap={8}>
              <Icon name="heart" style={{ width: 24, height: 24 }} color="red" />
              <Text>South Valley, New Mexico</Text>
            </HStack>
          </VStack>

          <VStack style={{ justifyContent: 'space-between' }} >
            <View style={{ flex: 1 }}>
              <Icon name="heart" style={{ width: 24, height: 24 }} color="red" />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Icon name="cart" style={{ width: 24, height: 24 }} color="black" />
            </View>
          </VStack>
        </HStack>

        <View style={{ flex: 1, marginBottom: 10, marginTop: 10 }}>
          <ScrollView showsVerticalScrollIndicator={false}  >
            <Text numberOfLines={maximize ? undefined : 3} ellipsizeMode="tail" style={{ color: '#959597' }}>
              {text}
            </Text>
            {!maximize && <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 30, backgroundColor: 'rgba(255, 255, 255, 0.5)', }} />}
          </ScrollView>
        </View>
        <TouchableOpacity onPress={handlePress} style={{ justifyContent: 'center', alignItems: 'center', transform: !maximize ? [{ rotate: '0deg' }] : [{ rotate: '180deg' }], }}>
          <SVGComponent onPress={handlePress} />
        </TouchableOpacity>

        <HStack style={{ alignItems: 'center' }}>
          <Text lineHeight={32} style={{ fontSize: 32, fontWeight: 'bold' }}>$175.00</Text>
          <Button
            status={'primary'}
            size={'small'}
            style={{ width: '182', textColor: 'white', alignSelf: 'center', }}
            children={'Book'}
          />
        </HStack>
      </Animated.View>

    </Container >
  )
}

export default SingleProductDetail;