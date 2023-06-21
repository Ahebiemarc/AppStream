import React from 'react';
import { View, StyleSheet, Text, ScrollView, Button, TouchableOpacity  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SylloTranche from '../components/SylloTranche';

const SyllosScreen = () => {


    const handleButtonPress = (buttonNumber) => {
        console.log('Button', buttonNumber, 'pressed');
    };
  return (
    <SafeAreaView className="flex-1 ">
        <ScrollView>
            <View >
                <View ><Text className="text-center text-[20px] ">Vue Process</Text></View>
                <View><Text className="text-center text-[18px]">Silos</Text></View>

            </View>

        <SylloTranche marginT="mt-3" num1="1" num2="2" num3="3" percent1={0.5} percent2={0.9} percent3={0.4}/>
        <SylloTranche marginT="mt-20" num1="4" num2="5" num3="6" percent1={0} percent2={0.6} percent3={0.4}/>
        <SylloTranche marginT="mt-20" num1="7" num2="8" num3="9" percent1={0.9} percent2={0.2} percent3={0.8}/>
        <SylloTranche marginT="mt-20" num1="10" num2="11" num3="12" percent1={0.5} percent2={0} percent3={0.4}/>
        <SylloTranche marginT="mt-20" num1="13" num2="14" num3="15" percent1={0.8} percent2={0.8} percent3={0}/>
        
        </ScrollView>
        <View className="flex flex-row m-0 justify-around pt-4">
            
            <TouchableOpacity 
            className="px-8 py-5 bg-[#1F41BB] rounded-[15px] "
            onPress={() => handleButtonPress(1)}
            >
                <Text className="text-white">DCY</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-8 py-5 bg-[#c53a41] rounded-[15px]"
            onPress={() => handleButtonPress(2)}
            >
                <Text className="text-white">STOP</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-8 py-5 bg-[#2c723d] rounded-[15px]"
            onPress={() => handleButtonPress(2)}
            >
                <Text className="text-white">A.U</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    square: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 2,
        alignSelf: 'center',
        marginTop: -5,
    },
    button: {
        marginVertical: 10,
    },
})

export default SyllosScreen;
