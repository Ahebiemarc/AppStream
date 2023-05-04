import React, { useState } from "react"
import { Image, ScrollView, View, RefreshControl, Text, Switch } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { TailwindProvider } from 'tailwindcss-react-native';

const DataScreen = () => {

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isRunning, setIsRunning] = useState([false, true, true, false, false, false, true, true, true, false, true, false]);
    //const [switchColor, setSwitchColor] = useState('');
    const bg = isRunning ?  'bg-[#98FB98B3]' : 'bg-[#FFC0CB80]'

    const onRefresh = () =>{
        setIsRefreshing(isRefreshing => true);
        // Ajoutez ici la logique de rafraîchissement des données
    setTimeout(() => setIsRefreshing(false), 2000); // Simule une tâche de rafraîchissement de 2 secondes
    };

    const toggleSwitch = (index) =>{
      //setIsRunning(isRunning => !isRunning);
      const updatedSwitchesState = [...isRunning];
      updatedSwitchesState[index] = !updatedSwitchesState[index];
      setIsRunning(updatedSwitchesState);
    }
  return (
    <View>
      <Image blurRadius={40} source={require('../assets/images/background.png')} className="absolute w-full h-full bg-cover" />
      <ScrollView refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />} >
      {/*<Image blurRadius={40} source={require('../assets/images/background.png')} className="absolute w-full h-full" /> */}
        <SafeAreaView>
        <View className="flex-1 flex-row flex-wrap gap-3 items-center justify-center">
                    <View className={`bg-${isRunning[0] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
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
                        onValueChange={() => toggleSwitch(0)}
                        value={isRunning[0]}
                        />
                      </View>
                    </View>
                    <View className={`bg-${isRunning[1] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
                      <View>
                          <Text className="text-3xl text-center text-white font-bold">2</Text>
                        </View>
                        <View className="flex flex-row">
                          <Text className="text-xl text-white font-semibold">SQ1A : <Text className="text-red-300">0</Text></Text>
                          <Text className="text-xl text-white font-semibold ml-[8px]">SQ1B : <Text className="text-red-300">0</Text></Text>
                        </View>
                        <Text className="text-white font-semibold text-l text-center mt-4">YV1</Text>
                        <Text className="text-white font-semibold text-xl mt-2">temps : <Text className="text-red-300">5 min</Text></Text>
                        <View className="m-auto">
                        <Switch className="mt-[40px] "
                          onValueChange={() => toggleSwitch(1)}
                          value={isRunning[1]}
                          />
                        </View>
                    </View>
                    <View className={`bg-${isRunning[2] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
                      <View>
                          <Text className="text-3xl text-center text-white font-bold">3</Text>
                        </View>
                        <View className="flex flex-row">
                          <Text className="text-xl text-white font-semibold">SQ1A : <Text className="text-red-300">0</Text></Text>
                          <Text className="text-xl text-white font-semibold ml-[8px]">SQ1B : <Text className="text-red-300">0</Text></Text>
                        </View>
                        <Text className="text-white font-semibold text-l text-center mt-4">YV1</Text>
                        <Text className="text-white font-semibold text-xl mt-2">temps : <Text className="text-red-300">5 min</Text></Text>
                        <View className="m-auto">
                        <Switch className="mt-[40px] "
                          onValueChange={() => toggleSwitch(2)}
                          value={isRunning[2]}
                          />
                        </View>
                    </View>
                    <View className={`bg-${isRunning[3] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
                      <View>
                          <Text className="text-3xl text-center text-white font-bold">4</Text>
                        </View>
                        <View className="flex flex-row">
                          <Text className="text-xl text-white font-semibold">SQ1A : <Text className="text-red-300">0</Text></Text>
                          <Text className="text-xl text-white font-semibold ml-[8px]">SQ1B : <Text className="text-red-300">0</Text></Text>
                        </View>
                        <Text className="text-white font-semibold text-l text-center mt-4">YV1</Text>
                        <Text className="text-white font-semibold text-xl mt-2">temps : <Text className="text-red-300">5 min</Text></Text>
                        <View className="m-auto">
                        <Switch className="mt-[40px] "
                          onValueChange={() => toggleSwitch(3)}
                          value={isRunning[3]}
                          />
                        </View>
                    </View>
                    <View className={`bg-${isRunning[4] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
                      <View>
                          <Text className="text-3xl text-center text-white font-bold">5</Text>
                        </View>
                        <View className="flex flex-row">
                          <Text className="text-xl text-white font-semibold">SQ1A : <Text className="text-red-300">0</Text></Text>
                          <Text className="text-xl text-white font-semibold ml-[8px]">SQ1B : <Text className="text-red-300">0</Text></Text>
                        </View>
                        <Text className="text-white font-semibold text-l text-center mt-4">YV1</Text>
                        <Text className="text-white font-semibold text-xl mt-2">temps : <Text className="text-red-300">5 min</Text></Text>
                        <View className="m-auto">
                        <Switch className="mt-[40px] "
                          onValueChange={() => toggleSwitch(4)}
                          value={isRunning[4]}
                          />
                        </View>
                    </View>
                    <View className={`bg-${isRunning[5] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
                      <View>
                          <Text className="text-3xl text-center text-white font-bold">6</Text>
                        </View>
                        <View className="flex flex-row">
                          <Text className="text-xl text-white font-semibold">SQ1A : <Text className="text-red-300">0</Text></Text>
                          <Text className="text-xl text-white font-semibold ml-[8px]">SQ1B : <Text className="text-red-300">0</Text></Text>
                        </View>
                        <Text className="text-white font-semibold text-l text-center mt-4">YV1</Text>
                        <Text className="text-white font-semibold text-xl mt-2">temps : <Text className="text-red-300">5 min</Text></Text>
                        <View className="m-auto">
                        <Switch className="mt-[40px] "
                          onValueChange={() => toggleSwitch(5)}
                          value={isRunning[5]}
                          />
                        </View>
                    </View>
                    <View className={`bg-${isRunning[6] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
                      <View>
                          <Text className="text-3xl text-center text-white font-bold">7</Text>
                        </View>
                        <View className="flex flex-row">
                          <Text className="text-xl text-white font-semibold">SQ1A : <Text className="text-red-300">0</Text></Text>
                          <Text className="text-xl text-white font-semibold ml-[8px]">SQ1B : <Text className="text-red-300">0</Text></Text>
                        </View>
                        <Text className="text-white font-semibold text-l text-center mt-4">YV1</Text>
                        <Text className="text-white font-semibold text-xl mt-2">temps : <Text className="text-red-300">5 min</Text></Text>
                        <View className="m-auto">
                        <Switch className="mt-[40px] "
                          onValueChange={() => toggleSwitch(6)}
                          value={isRunning[6]}
                          />
                        </View>
                    </View>
                    <View className={`bg-${isRunning[7] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
                      <View>
                          <Text className="text-3xl text-center text-white font-bold">8</Text>
                        </View>
                        <View className="flex flex-row">
                          <Text className="text-xl text-white font-semibold">SQ1A : <Text className="text-red-300">0</Text></Text>
                          <Text className="text-xl text-white font-semibold ml-[8px]">SQ1B : <Text className="text-red-300">0</Text></Text>
                        </View>
                        <Text className="text-white font-semibold text-l text-center mt-4">YV1</Text>
                        <Text className="text-white font-semibold text-xl mt-2">temps : <Text className="text-red-300">5 min</Text></Text>
                        <View className="m-auto">
                        <Switch className="mt-[40px] "
                          onValueChange={() => toggleSwitch(7)}
                          value={isRunning[7]}
                          />
                        </View>
                    </View>
                    <View className={`bg-${isRunning[8] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
                      <View>
                          <Text className="text-3xl text-center text-white font-bold">9</Text>
                        </View>
                        <View className="flex flex-row">
                          <Text className="text-xl text-white font-semibold">SQ1A : <Text className="text-red-300">0</Text></Text>
                          <Text className="text-xl text-white font-semibold ml-[8px]">SQ1B : <Text className="text-red-300">0</Text></Text>
                        </View>
                        <Text className="text-white font-semibold text-l text-center mt-4">YV1</Text>
                        <Text className="text-white font-semibold text-xl mt-2">temps : <Text className="text-red-300">5 min</Text></Text>
                        <View className="m-auto">
                        <Switch className="mt-[40px] "
                          onValueChange={() => toggleSwitch(8)}
                          value={isRunning[8]}
                          />
                        </View>
                    </View>
                    <View className={`bg-${isRunning[9] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
                      <View>
                          <Text className="text-3xl text-center text-white font-bold">10</Text>
                        </View>
                        <View className="flex flex-row">
                          <Text className="text-xl text-white font-semibold">SQ1A : <Text className="text-red-300">0</Text></Text>
                          <Text className="text-xl text-white font-semibold ml-[8px]">SQ1B : <Text className="text-red-300">0</Text></Text>
                        </View>
                        <Text className="text-white font-semibold text-l text-center mt-4">YV1</Text>
                        <Text className="text-white font-semibold text-xl mt-2">temps : <Text className="text-red-300">5 min</Text></Text>
                        <View className="m-auto">
                        <Switch className="mt-[40px] "
                          onValueChange={() => toggleSwitch(9)}
                          value={isRunning[9]}
                          />
                        </View>
                    </View>
                    <View className={`bg-${isRunning[10] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
                      <View>
                          <Text className="text-3xl text-center text-white font-bold">11</Text>
                        </View>
                        <View className="flex flex-row">
                          <Text className="text-xl text-white font-semibold">SQ1A : <Text className="text-red-300">0</Text></Text>
                          <Text className="text-xl text-white font-semibold ml-[8px]">SQ1B : <Text className="text-red-300">0</Text></Text>
                        </View>
                        <Text className="text-white font-semibold text-l text-center mt-4">YV1</Text>
                        <Text className="text-white font-semibold text-xl mt-2">temps : <Text className="text-red-300">5 min</Text></Text>
                        <View className="m-auto">
                        <Switch className="mt-[40px] "
                          onValueChange={() => toggleSwitch(10)}
                          value={isRunning[10]}
                          />
                        </View>
                    </View>
                    <View className={`bg-${isRunning[11] ?  '[#98FB98B3]' : '[#FFC0CB80]'} px-[5px] py-3 rounded-2xl drop-shadow-2xl`}>
                      <View>
                          <Text className="text-3xl text-center text-white font-bold">12</Text>
                        </View>
                        <View className="flex flex-row">
                          <Text className="text-xl text-white font-semibold">SQ1A : <Text className="text-red-300">0</Text></Text>
                          <Text className="text-xl text-white font-semibold ml-[8px]">SQ1B : <Text className="text-red-300">0</Text></Text>
                        </View>
                        <Text className="text-white font-semibold text-l text-center mt-4">YV1</Text>
                        <Text className="text-white font-semibold text-xl mt-2">temps : <Text className="text-red-300">5 min</Text></Text>
                        <View className="m-auto">
                        <Switch className="mt-[40px] "
                          onValueChange={() => toggleSwitch(11)}
                          value={isRunning[11]}
                          />
                        </View>
                    </View>
                    
            </View>
    
    </SafeAreaView>
    </ScrollView>
    </View>
  )
}


export default DataScreen