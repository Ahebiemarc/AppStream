import { StatusBar } from 'expo-status-bar'
import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../constant/Colors'
import { Surface, Title } from 'react-native-paper'
import { TailwindProvider } from 'tailwindcss-react-native';




const dummy_text = "un utilisateur de la plateforme de gestion de tube par commande de [nom de l'entreprise]. Avec plus de [nombre] années d'expérience dans le secteur de la fabrication [ou un secteur connexe], j'ai acquis une solide expertise dans la gestion des stocks et des processus de production."
const SetttingsScreen = () => {




  return (
    <View style={styles.container}>
      <Image blurRadius={40} source={require('../assets/images/background.png')} className="absolute w-full h-full bg-cover" />
      <ScrollView>
      <SafeAreaView className="flex-1">
            <View style={styles.userInfo} className="">
                <Surface style={styles.bio} className="bg-transparent w-[300px] ml-[40px]" >
                    {/*<Title>Bio</Title>
                    <Paragraph numberOfLines={4}>{dummy_text}</Paragraph>*/}
                    <Surface style={styles.bio} className="w-[200px] h-[150px] ml-[40px] bg-[#e6f4ff]">
                      <Title style={styles.bio} className="text-center">Engine</Title>
                      <TextInput
                      
                          placeholder='1'
                          underlineColorAndroid={Colors.green}
                          editable={false}
                          className="text-center text-[100px] font-bold" 
                                              
                      />
                      
                   </Surface>
                </Surface>
                  <View className="flex flex-row flex-wrap jutify-center ml-[60px]">
                    <Surface style={styles.bio} className="w-[100px] block">
                        <Title>BT</Title>
                        <TextInput
                        className="text-[20px] font-bold"
                            placeholder="1"
                            underlineColorAndroid={Colors.green}
                            editable={false}  
                                                
                        />

                        
                    </Surface>
                    <Surface style={styles.bio} className="w-[100px] block bg-[#98FB98B3] ">
                        <Title>Acitve</Title>
                        <TextInput
                        className="text-[20px] font-bold"
                            placeholder="True"
                            underlineColorAndroid={Colors.green}
                            editable={false}  
                                                
                        />

                        
                    </Surface>
                   </View>
            </View>
            <View style={styles.userInfo} className="">
                <Surface style={styles.bio} className="flex flex-row flex-wrap justify-center items-center bg-[#1f2937] ml-[20px]" >
                    {/*<Title>Bio</Title>
                    <Paragraph numberOfLines={4}>{dummy_text}</Paragraph>*/}
                    <Surface style={styles.bio} className="w-[100px]">
                      <Title>temps</Title>
                      <TextInput
                      className="text-[20px] font-bold"
                          placeholder="5 min"
                          underlineColorAndroid={Colors.green}
                          editable={false}  
                                              
                      />
                      
                   </Surface>
                   <Surface style={styles.bio} className="w-[100px]">
                      <Title>SQ1A</Title>
                      <TextInput
                      className="text-[20px] font-bold"
                          placeholder="0"
                          underlineColorAndroid={Colors.green}
                          editable={false}  
                                              
                      />
                      
                   </Surface>
                   <Surface style={styles.bio} className="w-[100px]">
                      <Title>SQ1B</Title>
                      <TextInput
                      className="text-[20px] font-bold"
                          placeholder="0"
                          underlineColorAndroid={Colors.green}
                          editable={false}  
                                              
                      />
                      
                   </Surface>
                   <Surface style={styles.bio} className="w-[100px]">
                      <Title>YV1</Title>
                      <TextInput
                      className="text-[20px] font-bold"
                          placeholder="YV1"
                          underlineColorAndroid={Colors.green}
                          editable={false}  
                                              
                      />
                      
                   </Surface>
                </Surface>
            </View>
        
    </SafeAreaView>
      </ScrollView>
    <StatusBar style='auto' />
    </View>
  )
}

export default SetttingsScreen;

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
  image: {
      width: 110,
      height: 110,
      borderRadius: 55,
      borderColor: Colors.black,
      borderWidth: 3,
  },
  userInfo: {
      flex: 1,
  },
  bio: {
      borderRadius: 10,
      padding: 16,
      margin: 16
  }
})