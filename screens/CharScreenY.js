import React from 'react'
import { Image, View, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LineChart, BarChart } from 'react-native-chart-kit';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Surface, TextInput, Title } from 'react-native-paper';

const chartData = {
  labels: ['2020', '2021', '2022'],
  datasets: [
    {
      data: [5410132, 18311568, 8065981],
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      strokeWidth: 2,
      legendLabel: 'TOTY1',
    },
    {
      data: [5406897, 18186228, 6997538],
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      strokeWidth: 2,
      legendLabel: 'TOTY2',
    },
    {
      data: [2216315, 6367961, 4552140],
      color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
      strokeWidth: 2,
      legendLabel: 'TOTY3',
    },
    {
      data: [19735174, 66380744, 25547325],
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
      strokeWidth: 2,
      legendLabel: 'TOTY4',
    },
    {
      data: [5408962, 18194439, 7056589],
      color: (opacity = 1) => `rgba(255, 0, 255, ${opacity})`,
      strokeWidth: 2,
      legendLabel: 'TOTY5',
    },
    {
      data: [5402745, 18157399, 6800160],
      color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`,
      strokeWidth: 2,
      legendLabel: 'TOTY6',
    },
    {
      data: [19720020, 66274521, 24820594],
      color: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`,
      strokeWidth: 2,
      legendLabel: 'TOTY7',
    },
    {
      data: [8948584, 31558994, 31562741],
      color: (opacity = 1) => `rgba(128, 0, 0, ${opacity})`,
      strokeWidth: 2,
      legendLabel: 'TOTY8',
    },
    {
      data: [14091, 49324, 19478],
      color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
      strokeWidth: 2,
      legendLabel: 'TOTY9',
    },
    {
      data: [3538452, 13247426, 23496760],
      color: (opacity = 1) => `rgba(0, 0, 128, ${opacity})`,
      strokeWidth: 2,
      legendLabel: 'TOTY10',
    },
  ],
};

const CharScreenY = () => {
  return (
    <SafeAreaView className="flex-1">
          
          <LineChart
          className="m-2"
        data={chartData}
        width={400}
        height={500}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
          legend: {
            enabled: true,
            fontSize: 12,
            fontWeight: 'bold',
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          },
        }}
        bezier
        withVerticalLabels
        
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        
      >
        
      </LineChart>
      <View className="flex flex-row flex-wrap ml-[-13px]">
        <Surface className="w-[65px] bg-[#000000]" style={styles.bio}>
            <Title className="text-[8px] text-white">TOTY1</Title>
        </Surface>
        <Surface style={styles.bio} className="w-[65px] bg-[#ff0000]">
            <Title className="text-[8px] text-white">TOTY5</Title>
        </Surface>
        <Surface style={styles.bio} className="w-[65px] bg-[#00ff00]">
            <Title className="text-[8px]">TOTY9</Title>
        </Surface>
        <Surface style={styles.bio} className="w-[65px] bg-[#0000ff]">
            <Title className="text-[8px] text-white">TOTY13</Title>
        </Surface>
        <Surface style={styles.bio} className="w-[65px] bg-[#ff00ff]">
            <Title className="text-[8px] text-white">TOTY14</Title>
        </Surface>
        <Surface style={styles.bio} className="w-[65px] bg-[#ffff00]">
            <Title className="text-[8px] ">TOTY18</Title>
        </Surface>
        <Surface style={styles.bio} className="w-[65px] bg-[#808080]">
            <Title className="text-[8px] ">TOTY30</Title>
        </Surface>
        <Surface style={styles.bio} className="w-[65px] bg-[#800000]">
            <Title className="text-[8px] text-white">TOTY42</Title>
        </Surface>
        <Surface style={styles.bio} className="w-[65px] bg-[#008000]">
            <Title className="text-[8px] text-white">TOTY43</Title>
        </Surface>
        <Surface style={styles.bio} className="w-[65px] bg-[#000080]">
            <Title className="text-[8px] text-white">TOTY44</Title>
        </Surface>
        
                     
      </View>
    </SafeAreaView>
  )
}

export default CharScreenY

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  profileContainer: {
      flex: 0.8,
      justifyContent: 'center',
      alignItems: 'center'
  },
  imgContainer: {},
  textContainer: {
      alignItems: 'center',
  },
  userInfo: {
      flex: 1,
  },
  bio: {
      borderRadius: 10,
      padding: 16,
      margin: 16,
  }
})