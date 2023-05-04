import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'

const SingleDataScreen = () => {
  return (
    <SafeAreaView>
        <View>
            <Text>SingleDataScreen</Text>
        </View>
        <StatusBar style='auto' />
    </SafeAreaView>
  )
}

export default SingleDataScreen