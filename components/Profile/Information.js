import React, { memo } from 'react';
import { ImageRequireSource } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  StyleService,
  useStyleSheet,
  Avatar,
  Icon,
  Button,
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
      <VStack gap={16} margin={16}>
        <HStack justify="flex-start">
          <HStack gap={4} itemsCenter mr={16}>
            <Text category="h6">{user.following}</Text>
            <Text category="subhead">Following</Text>
          </HStack>
          <HStack gap={4} itemsCenter>
            <Text category="h6">{user.follower}</Text>
            <Text category="subhead">Follower</Text>
          </HStack>
        </HStack>
        <Text category="subhead" status="platinum">
          {user.desc}
        </Text>
        <HStack itemsCenter justify="flex-start">
          <Text category="subhead">{user.address}</Text>
        </HStack>
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
