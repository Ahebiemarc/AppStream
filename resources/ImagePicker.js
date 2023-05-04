import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveImage = async (uri) => {
    try {
      await AsyncStorage.setItem('image', uri);
      console.log('Image sauvegardée avec succès');
    } catch (error) {
      console.log('Erreur lors de la sauvegarde de l\'image : ', error);
    }
};