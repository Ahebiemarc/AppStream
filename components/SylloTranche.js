import React from 'react'
import { View, Text } from 'react-native'
import ProgressSyllo from './ProgressSyllo'

const SylloTranche = ({marginT, num1, num2, num3, percent1, percent2, percent3}) => {
  return (
    <View className={`${marginT}`}>
        <View className="flex flex-row justify-between">
                <Text className="ml-9">{percent1*100}%</Text>
                <Text className="ml-7">{percent2*100}%</Text>
                <Text className="mr-16">{percent3*100}%</Text>
            </View>
        <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />
            <View className="absolute h-10 w-1 bg-red-700 self-start mt-4 ml-[60px] "></View>
            <View className="absolute h-10 w-1 bg-red-700 self-start  mt-4 ml-[178px] "></View>
            <View className="absolute h-10 w-1 bg-red-700 self-start mt-4 ml-[288px] "></View>
            <View className="flex flex-row">
              <ProgressSyllo number1={num1} number2={num2} number3={num3} percent1={percent1} percent2={percent2} percent3={percent3}/>
            </View>
            
    </View>
  )
}

export default SylloTranche