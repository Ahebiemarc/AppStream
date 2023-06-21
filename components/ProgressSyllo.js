import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
//import Animated from 'react-native-reanimated';


const Progress = ({step, steps, height, width}) =>{
  const [widths, setWidths] = useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() =>{
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() =>{

  }, [step, widths])
  return (
    <View style={{
      height,
      width,
      backgroundColor: '#49B5F2',
      borderRadius: height,
      overflow: 'hidden'
    }}>
      <View
      onLayout={ e => {
        const newWidths = e.nativeEvent.layout.width;
        setWidths(newWidths);
      }}
      style={{
        height,
        width,
        borderRadius: height,
        backgroundColor: '#49B5F2',
        position: 'absolute',
        left: 0,
        top: 0,
      }}
      />
    </View>
  )
}
const ProgressSyllo = ({number1, number2, number3, percent1, percent2, percent3}) => {

  
  return (
    <View className="flex flex-row -mt-[275px] ">
          <View>
            <ProgressBar 
            className="h-[80px] w-[80px] ml-[25px] mt-[20px]"
            style={{transform: [{ rotate: '-90deg'}], marginTop: 300}} 
            progress={percent1}
            color="#49B5F2" 
            />
            <Text className="absolute top-[330px] left-[60px]">{number1} </Text>
          </View>
          <View>
            <ProgressBar 
            className="h-[80px] w-[80px] ml-[30px] mt-[20px]"
            style={{transform: [{ rotate: '-90deg'}], marginTop: 300}} 
            progress={percent2}
            color="#49B5F2" 
            />
            <Text className="absolute top-[330px] left-[60px] ">{number2}</Text>
          </View>
          <View>
            <ProgressBar 
            className="h-[80px] w-[80px] ml-[35px] mt-[20px]"
            style={{transform: [{ rotate: '-90deg'}], marginTop: 300}} 
            progress={percent3}
            color="#49B5F2" 
            />
            <Text className="absolute top-[330px] left-[64px] ">{number3}</Text>
          </View>
          
  
  {/*<Progress step={1} steps={10}  height={20} width={200}/>*/}
    </View>
  )
}

export default ProgressSyllo;