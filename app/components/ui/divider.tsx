import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
  return (
    <View style={styles.divider} />
  );
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#1b1b1b', 
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '100%',
  },
});

export default Divider;
