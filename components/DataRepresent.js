import React from 'react'
import { Switch, Text, View } from 'react-native'

const DataRepresent = ({index}) => {
  return (
    <View className={`bg-${isRunning[index] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
        <View>
            <Text className="text-3xl text-center text-white font-bold">1</Text>
        </View>
        <View className="flex flex-row">
            <Text className="text-xl text-white font-semibold">SQ1A : <Text className="text-red-300">0</Text></Text>
            <Text className="text-xl text-white font-semibold ml-[8px]">SQ1B : <Text className="text-red-300">0</Text></Text>
        </View>
        <Text className="text-white font-semibold text-l text-center mt-4">YV1</Text>
        <Text className="text-white font-semibold text-xl mt-2">temps : <Text className="text-red-300">5 min</Text></Text>
        <View className="m-auto">
            <Switch className="mt-[40px] "
                onValueChange={() => toggleSwitch(index)}
                value={isRunning[index]}
            />
        </View>
    </View>
  )
}

export default DataRepresent