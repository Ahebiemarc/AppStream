import React from 'react';
import { View } from 'react-native';

const Triangle = () => {
  return (
    <View style={styles.triangle} />
  );
};

const styles = {
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 50,
        borderRightWidth: 40,
        borderBottomWidth: 0,
        borderLeftWidth: 40,
        borderTopColor: 'red',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
      },
};

export default Triangle;
