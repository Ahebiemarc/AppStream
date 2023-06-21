import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Triangle from '../components/Triangle'

const SingleDataScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
        <View>
          <Triangle />
        </View>
        <StatusBar style='auto' />
    </SafeAreaView>
  )
}

export default SingleDataScreen