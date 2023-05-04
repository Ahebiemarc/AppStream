import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native-svg'
import icons from '../constant/icons'
const Icon = ({onPress, icon, style, size=32}) => {
    const image = (
        <Image
          source={icons[icon]}
          style={[{width: size, height: size, resizeMode: 'cover'}, style]}
        />
      );
    
      if (onPress) {
        return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>;
      }
      return image;
};

export default Icon