import { Icon, Layout, useTheme } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import useLayout from '../hooks/useLayout';
import { usePathname, useRouter } from 'expo-router';

const Navbar = ({ style }) => {
  const theme = useTheme();
  const router = useRouter()
  const { bottom, width } = useLayout();
  const pathname = usePathname()

  return (
    <Layout
      level="3"
      style={[styles.tabView, { borderColor: theme['background-basic-color-10'], width: width, }, style]}>
      <TouchableOpacity onPress={() => router.push('(Main)/Home')} activeOpacity={0.7} style={styles.tab}>
        <Icon
          pack="assets"
          name="home"
          style={[styles.icon, { tintColor: pathname === '/Home' && theme['color-primary-500'] }]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('(Main)/Cart')} activeOpacity={0.7} style={styles.tab}>
        <Icon
          pack="assets"
          name="cart"
          style={[styles.icon, { tintColor: pathname === '/Cart' && theme['color-primary-500'] }]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('(Main)/Favourite')} activeOpacity={0.7} style={styles.tab}>
        <Icon
          pack="assets"
          name="heart"
          style={[styles.icon, { tintColor: pathname === '/Favourite' && theme['color-primary-500'] }]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('(Main)/FidelityCard')} activeOpacity={0.7} style={styles.tab}>
        <Icon
          pack="assets"
          name="comment"
          style={[{ height: 20, width: 20 }, { tintColor: pathname === '/NewCard' && theme['color-primary-500'] }]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('(Main)/Profile')} activeOpacity={0.7} style={styles.tab}>
        <Icon
          pack="assets"
          name="profile"
          style={[styles.icon, { tintColor: pathname === '/Profile' && theme['color-primary-500'] }]}
        />
      </TouchableOpacity>
    </Layout>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  tabView: {
    flexDirection: 'row',
    padding: 20,
    height: 64,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
  icon: {
    width: 24,
    height: 24,
  },
  add: {
    width: 56,
    height: 56,
    borderRadius: 56,
    borderWidth: 4,
    marginBottom: 16,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: '#F6D938',
    borderRadius: 99,
    position: 'absolute',
    bottom: 2,
  },
});
