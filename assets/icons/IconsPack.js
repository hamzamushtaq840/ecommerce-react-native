import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Icons } from './index.js';

const createIcon = (source) => {
  return {
    toReactElement: (props) => (
      <Image style={styles.icon}  {...props} source={source} resizeMode="cover" />
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    width: 10,
    height: 10,
  },
});

const IconsPack = {
  name: 'assets',
  icons: {
    'menu': createIcon(Icons['menu']),
    'notifications': createIcon(Icons['notifications']),
    'search': createIcon(Icons['search']),
    'home': createIcon(Icons['home']),
    'cart': createIcon(Icons['cart']),
    'comment': createIcon(Icons['comment']),
    'back': createIcon(Icons['back']),
    'heart': createIcon(Icons['heart']),
    'profile': createIcon(Icons['profile']),
    'delete': createIcon(Icons['delete']),
    'location': createIcon(Icons['location']),
    'link': createIcon(Icons['link']),
    'phone': createIcon(Icons['phone']),
    'calendar': createIcon(Icons['calendar']),
    'dots': createIcon(Icons['dots']),
  },
};
export default IconsPack;
