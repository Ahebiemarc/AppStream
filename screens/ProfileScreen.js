import { StatusBar } from 'expo-status-bar'
import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../constant/Colors'
import imgPlaceHolder from '../assets/images/user_boy.png'
import Entypo from 'react-native-vector-icons/Entypo'
import { Caption, Paragraph, Surface, Title } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveImage } from '../resources/ImagePicker'
import { getAuthUser } from '../api/apiLaravel';
import { TailwindProvider } from 'tailwindcss-react-native';




const dummy_text = "un utilisateur de la plateforme de gestion de tube par commande de [nom de l'entreprise]. Avec plus de [nombre] années d'expérience dans le secteur de la fabrication [ou un secteur connexe], j'ai acquis une solide expertise dans la gestion des stocks et des processus de production."
const ProfileScreen = () => {

  const [image, setImage] = useState(null)
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  /*useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getAuthUser();
        setUserInfo(userData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        // Afficher un message d'erreur
      }
    };
    fetchUser();
  }, []);*/

  
  useEffect(()=>{

    const getImage = async () => {
      try {
        const uri = await AsyncStorage.getItem('image');
        setImage(uri);
      } catch (error) {
        console.log('Erreur lors de la récupération de l\'image : ', error);
      }
    };

    getImage();
  }, [])

  /*if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }*/

    const selectImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        console.log('Image sélectionnée : ', result.assets[0].uri);
        setImage(result.assets[0].uri);
        saveImage(result.assets[0].uri);
      }
    };



  return (
    <View style={styles.container}>
      <Image blurRadius={40} source={require('../assets/images/background.png')} className="absolute w-full h-full bg-cover" />
      <SafeAreaView className="flex-1">
            <View style={styles.profileContainer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.image} source={image ? { uri: image } : imgPlaceHolder} />
                    <TouchableOpacity onPress={selectImage}
                        style={{ alignItems: 'flex-end', top: -10 }}>
                        <Entypo name="pencil" size={20} color={Colors.green} />
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Title>Aheddd</Title>
                    <Caption>ahebiemarcfffffd@gmail.com</Caption>
                </View>
            </View>
            <View style={styles.userInfo}>
                <Surface style={styles.bio}>
                    <Title>Bio</Title>
                    <Paragraph numberOfLines={4}>{dummy_text}</Paragraph>
                </Surface>
                <Surface style={styles.bio}>
                    <Title>Notes</Title>
                    <TextInput
                        placeholder="Adminatrator"
                        underlineColorAndroid={Colors.green}
                        editable={false}                        
                    />
                </Surface>
            </View>
        <StatusBar style='auto' />
    </SafeAreaView>
    </View>
  )
}

export default ProfileScreen;

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