import React, { memo } from 'react';
import { Image, ImageRequireSource } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  StyleService,
  useStyleSheet,
  Avatar,
  Icon,
  Button,
  Input,
} from '@ui-kitten/components';
import { Images } from './../../assets/images';
import Text from '../Generic/Text';
import HStack from '../Generic/HStack';
import VStack from '../Generic/VStack';
import IDivider from '../Generic/IDivider';

const Information = memo(({ user }) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <VStack level="2" style={{ backgroundColor: 'white' }} border={16} mh={4}>
      <IDivider />
       <VStack >
         <VStack padder border={10} style={{ marginTop: 20 }} gap={4}>
            <Text style={{ fontSize: 14, color: '#959597', lineHeight: 24 }}>Name</Text>
            <Input
              placeholder={'Add a store name'}
              value='John Doe'
              accessoryLeft={<Image source={require('./../../assets/icons/store.png')} marginHorizontal={10} style={{ width: 10, height: 10 }} />}
              style={styles.userInput}
            />
          </VStack>
         <VStack padder border={10} style={{ marginTop: 10 }} gap={4}>
            <Text style={{ fontSize: 14, color: '#959597', lineHeight: 24 }}>Email</Text>
            <Input
              placeholder={'Add a store name'}
              disabled
              value='dummy@gmail.com'
              accessoryLeft={<Image source={require('./../../assets/icons/store.png')} marginHorizontal={10} style={{ width: 10, height: 10 }} />}
              style={styles.userInput}
            />
          </VStack>
       </VStack>
    </VStack>
  );
});

export default Information;

const themedStyles = StyleService.create({
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: 'text-white-color',
    borderRadius: 99,
  },
  mappin: {
    width: 16,
    height: 16,
    tintColor: 'text-warning-color',
    marginRight: 4,
  },
  contentAvatar: {
    alignSelf: 'center',
    marginTop: -48,
    marginLeft: 16,
    marginBottom: 16,
  },
});
