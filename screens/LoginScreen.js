import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm, Controller } from 'react-hook-form';
import { login } from '../api/apiLaravel';
import { TailwindProvider } from 'tailwindcss-react-native';





const LoginScreen = () => {

  const navigation = useNavigation();

  const {control, handleSubmit, formState:{errors, isSubmitting, isSubmitSuccessful, isSubmitted }, reset} = useForm();

    const onSignInPressed = async (data) =>{

      /*try {
        const res = await login(data.email, data.password);
        console.log(response) // afficher la réponse de l'API
        // faire quelque chose avec la réponse de l'API, par exemple rediriger l'utilisateur vers une autre page
        //reset()
        navigation.navigate('Visualisation')
        
      } catch (error) {
        console.error(error); // afficher l'erreur dans la console
      // afficher un message d'erreur à l'utilisateur, par exemple en utilisant une notification ou un composant d'alerte
        Alert("An error has occurred, please try again")
      }*/
    
      console.log(data) // afficher la réponse de l'API
        // faire quelque chose avec la réponse de l'API, par exemple rediriger l'utilisateur vers une autre page
        reset()
        navigation.navigate('Visualisation')
      
      
    }
  
  

  return (
    <View className="flex-1">
      <Image blurRadius={40} source={require('../assets/images/background.png')} className="absolute w-full h-full bg-cover" />
      <SafeAreaView>
      
      <KeyboardAwareScrollView>
        <View>
          
          <View  className="p-20">
            <View className="items-center">
              <Text
              className="text-[#1F41BB] text-[28px] my-[30px] font-bold"
              >
              Se connecter ici</Text>
              <Text
              className="text-[#626262] text-[20px] max-w-[80%] text-center"
              >Bienvenue ravie de vous recevoir!</Text>
            </View>
        </View>
        <View className="mx-2">
            {errors.email?.type === 'required' && <Text className="text-red-300 ">{errors.email.message}</Text>}
            {errors.email?.type === 'pattern' && <Text className="text-red-600">{errors.email.message}</Text>}
            <Controller
             control={control}
             name='email'
             render={({field:{value, onChange, onBlur}}) => (
              <TextInput placeholder='Email'
                placeholderTextColor="#626262"
                className="bg-[#ebf8fe] p-5 w-[100%] text-[18px] mb-10 rounded-xl drop-shadow-2xl"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
             )}
             rules={{ required:{value: true, message: 'Email is required'}, pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message:"Email is invalid" }}}
            />
            {errors.password && <Text className="text-red-300">{errors.password.message}</Text>}
            <Controller
             control={control}
             name='password'
             render={({field:{value, onChange, onBlur}}) => (
              <TextInput 
                placeholder='Password'
                secureTextEntry 
                placeholderTextColor="#626262" 
                className="bg-[#ebf8fe] p-5 w-[100%] text-[18px] mb-8 rounded-xl drop-shadow-2xl"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                />
             )}
             rules={{ required: 'Password is required' }}
            />
            
            
          </View>
          <View>
            <Text className="text-[14px] font-semibold text-[#ff0000] self-end mr-2">Mot de passe oublié?</Text>
          </View>

          <TouchableOpacity className="p-5 mt-6 mx-10 items-center bg-[#1F41BB] rounded-[10px]"
          onPress={handleSubmit(onSignInPressed)}
          >
            <Text className="text-[20px] text-white">Connexion</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
    </View>
  );
}




export default LoginScreen;




